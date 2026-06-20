const LS_KEY = document.documentElement.dataset.lsKey;

let state = {
  version: 1,
  theme: 'dark',
  completedLessons: new Set(),
  completedChallenges: new Set(),
  notes: {},
  activeFilters: new Set(),
};

function serializeState() {
  return {
    version: state.version,
    theme: state.theme,
    completedLessons: [...state.completedLessons],
    completedChallenges: [...state.completedChallenges],
    notes: state.notes,
  };
}

function hydrateState(data) {
  if (!data) return;
  state.theme = data.theme || 'dark';
  state.completedLessons = new Set(Array.isArray(data.completedLessons) ? data.completedLessons : []);
  state.completedChallenges = new Set(Array.isArray(data.completedChallenges) ? data.completedChallenges : []);
  state.notes = data.notes || {};
}

function saveState() {
  try { localStorage.setItem(LS_KEY, JSON.stringify(serializeState())); } catch(e) {}
}

function loadState() {
  try { hydrateState(JSON.parse(localStorage.getItem(LS_KEY))); } catch(e) {}
}

function updateProgress() {
  const allLessons = DATA.flatMap(l => l.lessons);
  const allChallenges = DATA.flatMap(l => l.challenges);
  const lPct = allLessons.length ? (state.completedLessons.size / allLessons.length * 100).toFixed(1) : 0;
  const cPct = allChallenges.length ? (state.completedChallenges.size / allChallenges.length * 100).toFixed(1) : 0;
  document.getElementById('lessons-bar').style.width = lPct + '%';
  document.getElementById('challenges-bar').style.width = cPct + '%';
  document.getElementById('lessons-text').textContent = `${state.completedLessons.size}/${allLessons.length}`;
  document.getElementById('challenges-text').textContent = `${state.completedChallenges.size}/${allChallenges.length}`;
}

function safeUrl(url) {
  return /^https?:\/\//i.test(url) ? url : '#';
}

function renderCurriculum() {
  const container = document.getElementById('curriculum');
  container.innerHTML = DATA.map(level => `
    <section class="level" data-level="${level.id}">
      <div class="level-header" style="--level-color: ${level.color}">
        <div class="level-title-group">
          <span class="level-dot"></span>
          <h2>${level.title}</h2>
        </div>
        <span class="level-progress">${level.lessons.filter(l => state.completedLessons.has(l.id)).length}/${level.lessons.length} lessons</span>
      </div>
      <div class="lessons-grid">
        ${level.lessons.map(lesson => renderLesson(lesson)).join('')}
      </div>
    </section>
  `).join('');
  container.querySelectorAll('.notes').forEach(ta => {
    ta.value = state.notes[ta.dataset.id] || '';
  });
}

function renderLesson(lesson) {
  const done = state.completedLessons.has(lesson.id);
  const hasNote = lesson.id in state.notes;
  return `
    <div class="lesson-card ${done ? 'completed' : ''}">
      <label class="card-check">
        <input type="checkbox" class="lesson-check" data-id="${lesson.id}" ${done ? 'checked' : ''}>
        <span class="checkmark"></span>
      </label>
      <div class="card-body">
        <h3>${lesson.title}</h3>
        <p>${lesson.description}</p>
        ${lesson.duration ? `<span class="duration">⏱ ${lesson.duration}</span>` : ''}
        ${lesson.concepts?.length ? `<div class="concepts">${lesson.concepts.map(c => `<span class="concept-tag">${c}</span>`).join('')}</div>` : ''}
        ${lesson.resources?.length ? `<div class="resources">${lesson.resources.map(r => `<a href="${safeUrl(r.url)}" target="_blank" rel="noopener noreferrer">${r.label}</a>`).join('')}</div>` : ''}
        ${hasNote
          ? `<textarea class="notes" data-id="${lesson.id}" placeholder="Your notes..."></textarea>`
          : `<button class="add-notes-btn" data-id="${lesson.id}">+ Add notes</button>`
        }
      </div>
    </div>
  `;
}

function renderChallenges() {
  const allChallenges = DATA.flatMap(l => l.challenges);
  const filtered = state.activeFilters.size
    ? allChallenges.filter(c => state.activeFilters.has(c.difficulty))
    : allChallenges;

  document.getElementById('challenges-container').innerHTML = filtered.length
    ? filtered.map(c => renderChallenge(c)).join('')
    : '<p class="empty-state">No challenges match the selected filters.</p>';
}

function renderChallenge(c) {
  const done = state.completedChallenges.has(c.id);
  return `
    <div class="challenge-card ${done ? 'completed' : ''}" data-difficulty="${c.difficulty.toLowerCase()}">
      <label class="card-check">
        <input type="checkbox" class="challenge-check" data-id="${c.id}" ${done ? 'checked' : ''}>
        <span class="checkmark"></span>
      </label>
      <div class="card-body">
        <span class="difficulty-badge" data-difficulty="${c.difficulty.toLowerCase()}">${c.difficulty}</span>
        <h3>${c.title}</h3>
        <p>${c.description}</p>
        ${c.goal ? `<p class="goal"><strong>Goal:</strong> ${c.goal}</p>` : ''}
        ${c.hints?.length ? `<details><summary>Hints (${c.hints.length})</summary><ul>${c.hints.map(h => `<li>${h}</li>`).join('')}</ul></details>` : ''}
      </div>
    </div>
  `;
}

function renderFilters() {
  const difficulties = ['Easy', 'Medium', 'Hard', 'Expert'];
  document.getElementById('difficulty-filters').innerHTML = difficulties.map(d => `
    <button class="filter-btn ${state.activeFilters.has(d) ? 'active' : ''}" data-filter="${d}">${d}</button>
  `).join('');
}

function renderAll() {
  renderCurriculum();
  renderChallenges();
  renderFilters();
  updateProgress();
}

document.addEventListener('change', e => {
  if (e.target.classList.contains('lesson-check')) {
    const id = e.target.dataset.id;
    e.target.checked ? state.completedLessons.add(id) : state.completedLessons.delete(id);
    saveState();
    renderAll();
  }
  if (e.target.classList.contains('challenge-check')) {
    const id = e.target.dataset.id;
    e.target.checked ? state.completedChallenges.add(id) : state.completedChallenges.delete(id);
    saveState();
    renderAll();
  }
});

document.addEventListener('click', e => {
  if (e.target.classList.contains('filter-btn')) {
    const f = e.target.dataset.filter;
    state.activeFilters.has(f) ? state.activeFilters.delete(f) : state.activeFilters.add(f);
    renderAll();
  }
  if (e.target.classList.contains('add-notes-btn')) {
    const id = e.target.dataset.id;
    state.notes[id] = '';
    saveState();
    renderAll();
    const ta = document.querySelector(`.notes[data-id="${id}"]`);
    if (ta) ta.focus();
  }
});

document.addEventListener('input', e => {
  if (e.target.classList.contains('notes')) {
    state.notes[e.target.dataset.id] = e.target.value;
    saveState();
  }
});

document.getElementById('theme-btn').addEventListener('click', () => {
  state.theme = state.theme === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', state.theme);
  document.getElementById('theme-btn').textContent = state.theme === 'dark' ? '☀️' : '🌙';
  saveState();
});

document.getElementById('export-btn').addEventListener('click', () => {
  const blob = new Blob([JSON.stringify(serializeState(), null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'blender-scripting-progress.json';
  a.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
});

document.getElementById('import-input').addEventListener('change', e => {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = ev => {
    try {
      const data = JSON.parse(ev.target.result);
      if (!Array.isArray(data.completedLessons)) throw new Error('Invalid format');
      const knownLessons = new Set(DATA.flatMap(l => l.lessons).map(l => l.id));
      const knownChallenges = new Set(DATA.flatMap(l => l.challenges).map(c => c.id));
      data.completedLessons = data.completedLessons.filter(id => knownLessons.has(id));
      data.completedChallenges = Array.isArray(data.completedChallenges)
        ? data.completedChallenges.filter(id => knownChallenges.has(id))
        : [];
      hydrateState(data);
      state.activeFilters = new Set();
      saveState();
      document.documentElement.setAttribute('data-theme', state.theme);
      document.getElementById('theme-btn').textContent = state.theme === 'dark' ? '☀️' : '🌙';
      renderAll();
    } catch(err) { alert('Invalid progress file: ' + err.message); }
    finally { e.target.value = ''; }
  };
  reader.readAsText(file);
});

document.getElementById('reset-btn').addEventListener('click', () => {
  if (!confirm('Reset all progress? This cannot be undone.')) return;
  state.completedLessons = new Set();
  state.completedChallenges = new Set();
  state.notes = {};
  state.activeFilters = new Set();
  saveState();
  renderAll();
});

loadState();
document.documentElement.setAttribute('data-theme', state.theme);
document.getElementById('theme-btn').textContent = state.theme === 'dark' ? '☀️' : '🌙';
renderAll();
