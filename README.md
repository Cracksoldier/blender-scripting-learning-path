# Blender Python Scripting — Learning Path

A structured, self-paced guide from your first `bpy.ops` call to shipping installable add-ons and NumPy-powered tools. No account, no install, no build step — open it in a browser and start checking things off.

**[Open the app →](https://cracksoldier.github.io/blender-scripting-learning-path/)**

---

## What's inside

- **34 lessons** and **16 challenges** across 4 levels: Beginner → Intermediate → Advanced → Expert
- Progress saved automatically to `localStorage` — survives refreshes and browser restarts
- Per-lesson notes
- Export progress to JSON / import it on another device
- Difficulty filter for challenges
- Dark and light theme

## Usage

Open `index.html` in any modern browser — works on `file://` with no server needed.

Or visit the GitHub Pages URL above.

## Contributing

All content is in `data.js`. Each lesson follows this shape:

```javascript
{
  id: 'unique-kebab-id',
  title: 'Lesson Title',
  description: 'What the learner will do.',
  duration: '~20 min',
  concepts: ['Tag A', 'Tag B'],          // optional
  resources: [
    { label: 'Blender Docs', url: 'https://...', type: 'docs', desc: 'One-line description' }
  ]
}
```

Challenges:

```javascript
{
  id: 'unique-kebab-id-c1',
  title: 'Challenge Title',
  difficulty: 'Easy',   // Easy | Medium | Hard | Expert
  description: 'What to build.',
  goal: 'Specific deliverable.',
  hints: ['Hint 1']     // optional
}
```

IDs must be globally unique across all levels.

## Tech

Vanilla HTML/CSS/JS. No framework, no bundler, no dependencies.
