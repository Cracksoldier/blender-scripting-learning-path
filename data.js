const DATA = [
  {
    id: 'beginner',
    title: 'Beginner',
    color: '#3fb950',
    lessons: [
      {
        id: 'b-1',
        title: 'The Scripting Workspace',
        description: 'Set up Blender\'s Scripting workspace, enable the System Console, and run your first Python command in the interactive console.',
        duration: '~20 min',
        concepts: ['Scripting Workspace', 'Python Console', 'System Console'],
        resources: [
          { label: 'Blender Docs: Scripting & Security', url: 'https://docs.blender.org/manual/en/latest/advanced/scripting/security.html', type: 'docs', desc: 'Blender\'s scripting environment overview' },
          { label: 'Blender Docs: Python Console', url: 'https://docs.blender.org/manual/en/latest/editors/python_console.html', type: 'docs', desc: 'Interactive console editor reference' }
        ]
      },
      {
        id: 'b-2',
        title: 'The bpy Module',
        description: 'Explore bpy — the Blender Python module. Understand the bpy.data, bpy.context, bpy.ops, and bpy.types namespaces.',
        duration: '~30 min',
        concepts: ['bpy.data', 'bpy.context', 'bpy.ops', 'bpy.types'],
        resources: [
          { label: 'Blender API: bpy overview', url: 'https://docs.blender.org/api/current/info_overview.html', type: 'docs', desc: 'Official bpy module architecture overview' },
          { label: 'Blender API Reference', url: 'https://docs.blender.org/api/current/', type: 'docs', desc: 'Full bpy API reference' }
        ]
      },
      {
        id: 'b-3',
        title: 'Running Scripts from the Text Editor',
        description: 'Write a script in Blender\'s built-in Text Editor, run it with Alt+P, and understand the execution model.',
        duration: '~20 min',
        concepts: ['Text Editor', 'Script Execution', 'Alt+P'],
        resources: [
          { label: 'Blender Docs: Text Editor', url: 'https://docs.blender.org/manual/en/latest/editors/text_editor.html', type: 'docs', desc: 'Using Blender\'s built-in text editor' }
        ]
      },
      {
        id: 'b-4',
        title: 'Selecting and Accessing Objects',
        description: 'Access objects via bpy.context.active_object and bpy.data.objects. Read and write object name, location, rotation, and scale.',
        duration: '~25 min',
        concepts: ['active_object', 'bpy.data.objects', 'Object properties'],
        resources: [
          { label: 'Blender API: Object', url: 'https://docs.blender.org/api/current/bpy.types.Object.html', type: 'docs', desc: 'Object type reference' }
        ]
      },
      {
        id: 'b-5',
        title: 'Using bpy.ops',
        description: 'Call operators via bpy.ops to add objects, transform them, and understand operator poll conditions and context overrides.',
        duration: '~30 min',
        concepts: ['bpy.ops', 'Operators', 'Poll', 'Context Override'],
        resources: [
          { label: 'Blender API: bpy.ops', url: 'https://docs.blender.org/api/current/bpy.ops.html', type: 'docs', desc: 'Operator module reference' },
          { label: 'Blender Docs: Gotchas', url: 'https://docs.blender.org/api/current/info_gotcha.html', type: 'docs', desc: 'Common scripting pitfalls' }
        ]
      },
      {
        id: 'b-6',
        title: 'Working with Collections',
        description: 'Create collections, link objects into them, and traverse the scene hierarchy using bpy.data.collections.',
        duration: '~20 min',
        concepts: ['Collections', 'bpy.data.collections', 'Scene hierarchy'],
        resources: [
          { label: 'Blender API: Collection', url: 'https://docs.blender.org/api/current/bpy.types.Collection.html', type: 'docs', desc: 'Collection type reference' }
        ]
      },
      {
        id: 'b-7',
        title: 'Looping and Batch Operations',
        description: 'Write loops to batch-rename objects, apply transforms to all selected objects, and filter by object type.',
        duration: '~25 min',
        concepts: ['Batch operations', 'selected_objects', 'Object types'],
        resources: [
          { label: 'Blender API: Context', url: 'https://docs.blender.org/api/current/bpy.context.html', type: 'docs', desc: 'Context attributes reference' }
        ]
      },
      {
        id: 'b-8',
        title: 'Reading and Writing Properties',
        description: 'Access mesh, material, and modifier properties on objects. Understand ID property paths and how to copy properties between objects.',
        duration: '~30 min',
        concepts: ['Properties', 'ID properties', 'Modifiers', 'Materials'],
        resources: [
          { label: 'Blender API: ID Properties', url: 'https://docs.blender.org/api/current/bpy.types.bpy_prop_collection.html', type: 'docs', desc: 'ID property collections' }
        ]
      },
      {
        id: 'b-9',
        title: 'Mathutils: Vectors, Matrices, and Quaternions',
        description: 'Use the mathutils module for 3D math: vector arithmetic, matrix multiplication, quaternion rotation, and coordinate transformation.',
        duration: '~35 min',
        concepts: ['mathutils', 'Vector', 'Matrix', 'Quaternion', 'Euler'],
        resources: [
          { label: 'Blender API: mathutils', url: 'https://docs.blender.org/api/current/mathutils.html', type: 'docs', desc: 'mathutils module reference' }
        ]
      }
    ],
    challenges: [
      {
        id: 'b-c1',
        title: 'Scene Reporter',
        difficulty: 'Easy',
        description: 'Write a script that prints a formatted report of every object in the scene: its name, type, location, and whether it\'s visible.',
        goal: 'A script that produces a readable console report for any Blender scene.',
        hints: ['Iterate bpy.data.objects', 'Check obj.hide_viewport for visibility', 'Use f-strings for formatting']
      },
      {
        id: 'b-c2',
        title: 'Batch Renamer',
        difficulty: 'Easy',
        description: 'Write a script that renames all mesh objects in the scene by prepending "MESH_" and replacing spaces with underscores.',
        goal: 'All mesh objects follow a consistent naming convention after running the script.',
        hints: ['Filter by obj.type == "MESH"', 'Use str.replace() and string concatenation']
      },
      {
        id: 'b-c3',
        title: 'Grid Spawner',
        difficulty: 'Medium',
        description: 'Spawn a 5×5 grid of UV spheres with increasing scale along one axis using nested loops and mathutils.Vector.',
        goal: 'A 5×5 array of spheres where each column is taller than the last.',
        hints: ['Use bpy.ops.mesh.primitive_uv_sphere_add()', 'Set location via object.location = Vector((x, y, 0))', 'Scale by modifying object.scale']
      },
      {
        id: 'b-c4',
        title: 'Material Painter',
        difficulty: 'Medium',
        description: 'Assign a unique diffuse material with a random colour to every mesh object in the scene without duplicating materials.',
        goal: 'Every mesh has exactly one material, all with distinct random colours.',
        hints: ['Use bpy.data.materials.new()', 'Set mat.use_nodes = True then find the Principled BSDF node', 'import random for colour generation']
      }
    ]
  },
  {
    id: 'intermediate',
    title: 'Intermediate',
    color: '#58a6ff',
    lessons: [
      {
        id: 'i-1',
        title: 'Writing Custom Operators',
        description: 'Create a bl_operator class inheriting bpy.types.Operator with execute(), poll(), and bl_idname/bl_label conventions.',
        duration: '~40 min',
        concepts: ['bpy.types.Operator', 'execute()', 'poll()', 'bl_idname', 'register()'],
        resources: [
          { label: 'Blender API: Operator', url: 'https://docs.blender.org/api/current/bpy.types.Operator.html', type: 'docs', desc: 'Operator type reference' },
          { label: 'Blender API: Operator Examples', url: 'https://docs.blender.org/api/current/bpy.types.Operator.html#example', type: 'docs', desc: 'Official operator code examples' }
        ]
      },
      {
        id: 'i-2',
        title: 'Operator Properties',
        description: 'Add BoolProperty, IntProperty, FloatProperty, EnumProperty, and StringProperty to operators. Expose them in invoke dialogs.',
        duration: '~35 min',
        concepts: ['bpy.props', 'BoolProperty', 'EnumProperty', 'invoke()', 'dialog'],
        resources: [
          { label: 'Blender API: bpy.props', url: 'https://docs.blender.org/api/current/bpy.props.html', type: 'docs', desc: 'Property definitions reference' }
        ]
      },
      {
        id: 'i-3',
        title: 'Building Custom Panels',
        description: 'Create a Panel class with bl_space_type, bl_region_type, bl_category and draw() method to add UI elements in the N-panel.',
        duration: '~40 min',
        concepts: ['bpy.types.Panel', 'draw()', 'layout.operator()', 'bl_category'],
        resources: [
          { label: 'Blender API: Panel', url: 'https://docs.blender.org/api/current/bpy.types.Panel.html', type: 'docs', desc: 'Panel type reference' },
          { label: 'Blender API: UILayout', url: 'https://docs.blender.org/api/current/bpy.types.UILayout.html', type: 'docs', desc: 'Layout methods for drawing UI' }
        ]
      },
      {
        id: 'i-4',
        title: 'Mesh Data: Vertices, Edges, and Faces',
        description: 'Access and modify mesh geometry via bpy.data.meshes and obj.data. Read vertex positions, loop UVs, and polygon normals.',
        duration: '~45 min',
        concepts: ['Mesh', 'vertices', 'edges', 'polygons', 'loops', 'normals'],
        resources: [
          { label: 'Blender API: Mesh', url: 'https://docs.blender.org/api/current/bpy.types.Mesh.html', type: 'docs', desc: 'Mesh data-block reference' }
        ]
      },
      {
        id: 'i-5',
        title: 'Creating Meshes from Scratch with bmesh',
        description: 'Use the bmesh module to create geometry programmatically: add verts, edges, and faces; run bmesh operators; write back to a mesh.',
        duration: '~50 min',
        concepts: ['bmesh', 'BMVert', 'BMFace', 'bmesh.ops', 'from_mesh / to_mesh'],
        resources: [
          { label: 'Blender API: bmesh', url: 'https://docs.blender.org/api/current/bmesh.html', type: 'docs', desc: 'bmesh module reference' },
          { label: 'Blender API: bmesh.ops', url: 'https://docs.blender.org/api/current/bmesh.ops.html', type: 'docs', desc: 'bmesh operator catalogue' }
        ]
      },
      {
        id: 'i-6',
        title: 'Working with Modifiers Programmatically',
        description: 'Add, configure, and apply modifiers (Subdivision, Array, Mirror, Boolean) on objects entirely through Python.',
        duration: '~35 min',
        concepts: ['modifiers', 'obj.modifiers.new()', 'apply modifier', 'SubsurfModifier'],
        resources: [
          { label: 'Blender API: ObjectModifiers', url: 'https://docs.blender.org/api/current/bpy.types.ObjectModifiers.html', type: 'docs', desc: 'Modifier stack reference' }
        ]
      },
      {
        id: 'i-7',
        title: 'Scene Management: Cameras and Lights',
        description: 'Add and configure cameras, lamps, and world settings. Set active camera, adjust focal length, energy, and colour.',
        duration: '~30 min',
        concepts: ['Camera', 'Light', 'World', 'scene.camera', 'energy'],
        resources: [
          { label: 'Blender API: Camera', url: 'https://docs.blender.org/api/current/bpy.types.Camera.html', type: 'docs', desc: 'Camera data-block reference' },
          { label: 'Blender API: Light', url: 'https://docs.blender.org/api/current/bpy.types.Light.html', type: 'docs', desc: 'Light data-block reference' }
        ]
      },
      {
        id: 'i-8',
        title: 'Writing and Loading Add-ons',
        description: 'Structure a minimal add-on with bl_info, register(), and unregister(). Install it via Preferences and understand the add-on lifecycle.',
        duration: '~40 min',
        concepts: ['bl_info', 'register()', 'unregister()', 'add-on installation'],
        resources: [
          { label: 'Blender Docs: Add-ons', url: 'https://docs.blender.org/manual/en/latest/advanced/scripting/addon_tutorial.html', type: 'docs', desc: 'Official add-on tutorial' },
          { label: 'Blender API: Add-on Guidelines', url: 'https://wiki.blender.org/wiki/Process/Addons/Guidelines', type: 'docs', desc: 'Add-on code guidelines' }
        ]
      },
      {
        id: 'i-9',
        title: 'File I/O: Importing and Exporting',
        description: 'Read and write external files (CSV, JSON, OBJ) from Python. Use bpy.ops.import/export operators and process data between Blender and disk.',
        duration: '~35 min',
        concepts: ['File I/O', 'JSON', 'CSV', 'bpy.ops.import_scene', 'bpy.ops.export_scene'],
        resources: [
          { label: 'Python: json module', url: 'https://docs.python.org/3/library/json.html', type: 'docs', desc: 'Standard library JSON reference' },
          { label: 'Python: pathlib', url: 'https://docs.python.org/3/library/pathlib.html', type: 'docs', desc: 'Modern path handling' }
        ]
      }
    ],
    challenges: [
      {
        id: 'i-c1',
        title: 'Procedural Staircase',
        difficulty: 'Medium',
        description: 'Build a parametric staircase generator operator with properties for step count, step height, and step depth. Each run should regenerate cleanly.',
        goal: 'An operator with a dialog that produces a staircase mesh matching the input parameters.',
        hints: ['Use bmesh to build geometry', 'Delete the previous mesh before regenerating', 'Store parameters as operator properties']
      },
      {
        id: 'i-c2',
        title: 'N-Panel Tool',
        difficulty: 'Medium',
        description: 'Build a custom N-panel tab with three operators: Randomise Location, Randomise Rotation, and Reset Transforms — all acting on selected objects.',
        goal: 'A functional N-panel tab that appears in the 3D Viewport for the selected objects.',
        hints: ['Use bl_category to set the tab name', 'layout.operator() to link buttons to operators', 'Use context.selected_objects']
      },
      {
        id: 'i-c3',
        title: 'CSV Importer',
        difficulty: 'Hard',
        description: 'Write a script that reads a CSV of (name, x, y, z) rows and spawns an empty at each location, named from the CSV. Handle missing or malformed rows gracefully.',
        goal: 'An operator with a file-browser invoke that places empties from any valid CSV.',
        hints: ['Use bpy.types.Operator with invoke() and a FileSelectParams', 'import csv from the standard library', 'Wrap row parsing in try/except']
      },
      {
        id: 'i-c4',
        title: 'LOD Generator',
        difficulty: 'Hard',
        description: 'Write an add-on that generates three LOD copies of the selected mesh object, each with a Decimate modifier at 75%, 50%, and 25% ratio, placed in a dedicated collection.',
        goal: 'A working add-on installable from Preferences that creates LOD meshes on demand.',
        hints: ['Use obj.copy() and obj.data.copy() to duplicate', 'Create a new collection and link copies into it', 'Name copies with _LOD0 _LOD1 _LOD2 suffixes']
      }
    ]
  },
  {
    id: 'advanced',
    title: 'Advanced',
    color: '#d29922',
    lessons: [
      {
        id: 'a-1',
        title: 'Node Trees: Materials via Python',
        description: 'Create Shader node trees from scratch. Add nodes, set values, and connect sockets to build PBR materials programmatically.',
        duration: '~50 min',
        concepts: ['NodeTree', 'nodes.new()', 'node_tree.links.new()', 'Principled BSDF', 'Image Texture'],
        resources: [
          { label: 'Blender API: NodeTree', url: 'https://docs.blender.org/api/current/bpy.types.NodeTree.html', type: 'docs', desc: 'Node tree reference' },
          { label: 'Blender API: ShaderNodeTree', url: 'https://docs.blender.org/api/current/bpy.types.ShaderNodeTree.html', type: 'docs', desc: 'Shader node tree reference' }
        ]
      },
      {
        id: 'a-2',
        title: 'Animation: Keyframes and F-Curves',
        description: 'Insert keyframes via keyframe_insert(), read and manipulate F-Curve data, and bake animations entirely from Python.',
        duration: '~45 min',
        concepts: ['keyframe_insert', 'FCurve', 'Keyframe', 'action', 'data_path'],
        resources: [
          { label: 'Blender API: FCurve', url: 'https://docs.blender.org/api/current/bpy.types.FCurve.html', type: 'docs', desc: 'F-Curve type reference' },
          { label: 'Blender API: Action', url: 'https://docs.blender.org/api/current/bpy.types.Action.html', type: 'docs', desc: 'Action data-block reference' }
        ]
      },
      {
        id: 'a-3',
        title: 'Drivers: Linking Properties with Python Expressions',
        description: 'Add drivers to properties, write Python expression drivers, and create scripted expression callbacks for procedural rigs.',
        duration: '~40 min',
        concepts: ['Drivers', 'driver_add()', 'expression driver', 'DriverVariable', 'driver.expression'],
        resources: [
          { label: 'Blender Docs: Drivers', url: 'https://docs.blender.org/manual/en/latest/animation/drivers/index.html', type: 'docs', desc: 'Driver system reference' },
          { label: 'Blender API: Driver', url: 'https://docs.blender.org/api/current/bpy.types.Driver.html', type: 'docs', desc: 'Driver type reference' }
        ]
      },
      {
        id: 'a-4',
        title: 'Geometry Nodes: Creating and Wiring via Python',
        description: 'Create Geometry Nodes modifier node trees from Python, add Group Input/Output nodes, wire arithmetic and geometry nodes, and expose parameters.',
        duration: '~60 min',
        concepts: ['GeometryNodeTree', 'GeometryNodes modifier', 'Group Input', 'node sockets', 'inputs/outputs'],
        resources: [
          { label: 'Blender API: GeometryNodeTree', url: 'https://docs.blender.org/api/current/bpy.types.GeometryNodeTree.html', type: 'docs', desc: 'Geometry node tree reference' }
        ]
      },
      {
        id: 'a-5',
        title: 'Modal Operators and Real-time Interaction',
        description: 'Write modal operators that intercept mouse and keyboard events. Implement interactive tools like click-to-place or drag-to-resize.',
        duration: '~55 min',
        concepts: ['modal()', 'invoke()', 'MODAL', 'event.type', 'event.value', 'context.window_manager'],
        resources: [
          { label: 'Blender API: Modal Operator Example', url: 'https://docs.blender.org/api/current/bpy.types.Operator.html#modal-execution', type: 'docs', desc: 'Modal operator pattern' }
        ]
      },
      {
        id: 'a-6',
        title: 'Advanced UI: Menus, Popovers, and Pie Menus',
        description: 'Register custom Menu, Popover, and PIE_MT_ classes. Inject buttons into existing Blender menus with append/prepend.',
        duration: '~40 min',
        concepts: ['bpy.types.Menu', 'bpy.types.PIE_MT_', 'menu_extend', 'draw_func', 'append/prepend'],
        resources: [
          { label: 'Blender API: Menu', url: 'https://docs.blender.org/api/current/bpy.types.Menu.html', type: 'docs', desc: 'Menu type reference' }
        ]
      },
      {
        id: 'a-7',
        title: 'App Handlers: Persistent Callbacks',
        description: 'Register frame_change_pre, depsgraph_update_post, load_post and other handlers to react to Blender events automatically.',
        duration: '~35 min',
        concepts: ['bpy.app.handlers', 'persistent', 'depsgraph_update_post', 'frame_change_pre'],
        resources: [
          { label: 'Blender API: app.handlers', url: 'https://docs.blender.org/api/current/bpy.app.handlers.html', type: 'docs', desc: 'App handler reference' }
        ]
      },
      {
        id: 'a-8',
        title: 'The Depsgraph: Evaluated Meshes and Instances',
        description: 'Use the dependency graph to get evaluated object data, iterate over dupli-instances, and apply modifiers at render time.',
        duration: '~45 min',
        concepts: ['depsgraph', 'evaluated_get()', 'object_instances', 'to_mesh()', 'Evaluated state'],
        resources: [
          { label: 'Blender API: Depsgraph', url: 'https://docs.blender.org/api/current/bpy.types.Depsgraph.html', type: 'docs', desc: 'Dependency graph reference' }
        ]
      }
    ],
    challenges: [
      {
        id: 'a-c1',
        title: 'Procedural Material Library',
        difficulty: 'Hard',
        description: 'Write a script that generates 10 distinct procedural materials (different node setups: metal, plastic, glass, emissive, etc.) and assigns them round-robin to all mesh objects.',
        goal: 'A library of 10 reusable procedural materials built entirely from node graph code.',
        hints: ['Encapsulate each material in a factory function', 'Use nodes.clear() before rebuilding', 'Add Noise, ColorRamp, and Bump nodes for variety']
      },
      {
        id: 'a-c2',
        title: 'Animated Wave',
        difficulty: 'Hard',
        description: 'Generate a 10×10 grid of planes and animate each one\'s Z position with a sine wave offset by its grid position — 50 frames total.',
        goal: 'A playable 50-frame animation where the grid ripples like a wave, all keyframed via Python.',
        hints: ['Use math.sin() with frame + x + y offset', 'Loop over frames in range() and call keyframe_insert() per frame', 'Use bpy.context.scene.frame_set() inside the loop']
      },
      {
        id: 'a-c3',
        title: 'Interactive Placement Tool',
        difficulty: 'Hard',
        description: 'Build a modal operator that lets the user click in the 3D viewport to place instances of a selected object at the clicked surface position using ray casting.',
        goal: 'An operator that stays active until Escape/Right-click, placing instances on each left-click.',
        hints: ['Use context.scene.ray_cast() with the view origin and direction', 'Compute view origin and direction from event.mouse_region_x/y', 'Use obj.copy() / link to collection for each placement']
      },
      {
        id: 'a-c4',
        title: 'Geometry Nodes Terrain',
        difficulty: 'Expert',
        description: 'Build a parametric terrain generator add-on using a Geometry Nodes tree created entirely in Python. Expose noise scale, strength, and seed as group inputs.',
        goal: 'An add-on that creates a Geometry Nodes terrain with live-editable parameters from Python.',
        hints: ['Use a GeometryNodeTree via bpy.data.node_groups.new()', 'Add Set Position, Noise Texture, and Grid nodes', 'Connect Group Input integer socket to the noise seed']
      }
    ]
  },
  {
    id: 'expert',
    title: 'Expert',
    color: '#f78166',
    lessons: [
      {
        id: 'e-1',
        title: 'Performance Optimisation: Avoiding Operator Overhead',
        description: 'Understand why bpy.ops is slow in loops. Use direct data access, bmesh, and foreach_get/foreach_set for high-performance mesh editing.',
        duration: '~50 min',
        concepts: ['foreach_get', 'foreach_set', 'numpy integration', 'bmesh vs bpy.ops'],
        resources: [
          { label: 'Blender API: Tips & Tricks', url: 'https://docs.blender.org/api/current/info_tips_and_tricks.html', type: 'docs', desc: 'Scripting performance guidance' }
        ]
      },
      {
        id: 'e-2',
        title: 'NumPy Integration for Mesh Data',
        description: 'Extract vertex positions, normals, and UV data as NumPy arrays using foreach_get. Apply array operations and write back with foreach_set.',
        duration: '~55 min',
        concepts: ['numpy', 'foreach_get', 'foreach_set', 'array operations', 'vertex data'],
        resources: [
          { label: 'Blender API: Mesh NumPy', url: 'https://docs.blender.org/api/current/bpy.types.Mesh.html#bpy.types.Mesh.vertices', type: 'docs', desc: 'Mesh vertex access patterns' },
          { label: 'NumPy Docs', url: 'https://numpy.org/doc/stable/', type: 'docs', desc: 'NumPy official documentation' }
        ]
      },
      {
        id: 'e-3',
        title: 'Custom Properties and the RNA System',
        description: 'Define custom properties on any data-block, use PropertyGroup, and expose them in panels. Understand the RNA layer and property callbacks.',
        duration: '~45 min',
        concepts: ['PropertyGroup', 'PointerProperty', 'CollectionProperty', 'update callback', 'RNA'],
        resources: [
          { label: 'Blender API: PropertyGroup', url: 'https://docs.blender.org/api/current/bpy.types.PropertyGroup.html', type: 'docs', desc: 'PropertyGroup type reference' }
        ]
      },
      {
        id: 'e-4',
        title: 'Preferences and Persistent Add-on Settings',
        description: 'Add an AddonPreferences class to store settings that persist between sessions. Read preferences from operators and panels.',
        duration: '~35 min',
        concepts: ['AddonPreferences', 'bl_idname', 'context.preferences.addons', 'persistent settings'],
        resources: [
          { label: 'Blender API: AddonPreferences', url: 'https://docs.blender.org/api/current/bpy.types.AddonPreferences.html', type: 'docs', desc: 'Addon preferences reference' }
        ]
      },
      {
        id: 'e-5',
        title: 'Custom Gizmos and 3D Viewport Overlays',
        description: 'Build a GizmoGroup that draws interactive handles in the 3D viewport. Use the gpu and gpu_extras modules to draw custom overlays.',
        duration: '~65 min',
        concepts: ['GizmoGroup', 'Gizmo', 'gpu module', 'shader', 'draw_handler_add'],
        resources: [
          { label: 'Blender API: Gizmo', url: 'https://docs.blender.org/api/current/bpy.types.Gizmo.html', type: 'docs', desc: 'Gizmo type reference' },
          { label: 'Blender API: gpu module', url: 'https://docs.blender.org/api/current/gpu.html', type: 'docs', desc: 'GPU drawing module reference' }
        ]
      },
      {
        id: 'e-6',
        title: 'Headless Blender: Command-line Rendering and Scripting',
        description: 'Run Blender scripts headlessly from the command line with blender --background --python. Build a render pipeline that processes multiple .blend files.',
        duration: '~40 min',
        concepts: ['--background', '--python', 'sys.argv', 'headless rendering', 'render pipeline'],
        resources: [
          { label: 'Blender Docs: Command Line', url: 'https://docs.blender.org/manual/en/latest/advanced/command_line/index.html', type: 'docs', desc: 'Blender command-line interface' }
        ]
      },
      {
        id: 'e-7',
        title: 'Packaging and Distributing Add-ons',
        description: 'Package a multi-file add-on as a zip, write proper bl_info metadata, handle versioning, and follow the Blender Extensions platform conventions.',
        duration: '~40 min',
        concepts: ['multi-file add-on', '__init__.py', 'bl_info', 'Extensions platform', 'versioning'],
        resources: [
          { label: 'Blender Docs: Extensions Platform', url: 'https://docs.blender.org/manual/en/latest/advanced/extensions/index.html', type: 'docs', desc: 'Blender Extensions platform guide' }
        ]
      },
      {
        id: 'e-8',
        title: 'Testing Add-ons with pytest and Blender',
        description: 'Write unit and integration tests for add-on code using pytest with the fake-bpy-module for CI, and run real Blender tests headlessly.',
        duration: '~50 min',
        concepts: ['pytest', 'fake-bpy-module', 'headless testing', 'CI integration', 'unit tests'],
        resources: [
          { label: 'fake-bpy-module on PyPI', url: 'https://pypi.org/project/fake-bpy-module/', type: 'docs', desc: 'Type stubs and mocks for bpy' },
          { label: 'pytest Docs', url: 'https://docs.pytest.org/', type: 'docs', desc: 'pytest documentation' }
        ]
      }
    ],
    challenges: [
      {
        id: 'e-c1',
        title: 'Full-Featured Add-on',
        difficulty: 'Expert',
        description: 'Build and package a multi-file add-on that procedurally generates a building façade: controllable floors, windows, and materials, exposed in a custom N-panel with AddonPreferences for default values.',
        goal: 'A zip-installable add-on with a panel, preferences, and clean register/unregister lifecycle.',
        hints: ['Split into __init__.py, operators.py, panels.py, props.py', 'Use PropertyGroup registered on the Scene', 'Test install/uninstall cycle']
      },
      {
        id: 'e-c2',
        title: 'Render Farm Script',
        difficulty: 'Expert',
        description: 'Write a Python script (not a Blender add-on) that takes a folder of .blend files, launches each one headlessly, renders frame 1 to a PNG, and logs duration per file.',
        goal: 'A CLI Python script that batch-renders a folder of .blend files with timing output.',
        hints: ['Use subprocess.run() to launch blender --background --render-frame 1', 'Pass --render-output as an argument', 'Use time.perf_counter() for timing']
      },
      {
        id: 'e-c3',
        title: 'GPU Overlay Visualiser',
        difficulty: 'Expert',
        description: 'Create an add-on that draws a real-time bounding-box overlay for every selected object using gpu.shader and SpaceView3D.draw_handler_add.',
        goal: 'An add-on with a toggle button that shows/hides custom bounding-box lines for the selection.',
        hints: ['Draw with gpu.shader.from_builtin("POLYLINE_UNIFORM_COLOR")', 'Compute 8 corners from obj.bound_box transformed by obj.matrix_world', 'Store the draw handler handle to remove it on toggle']
      },
      {
        id: 'e-c4',
        title: 'NumPy Mesh Deformer',
        difficulty: 'Expert',
        description: 'Write a modal operator that deforms a high-poly mesh in real time (each mouse drag updates vertex positions) using NumPy for speed. Measure and display FPS in the header.',
        goal: 'A responsive deformer on a 100k+ vertex mesh with FPS displayed, demonstrating NumPy performance.',
        hints: ['Use foreach_get / foreach_set for vertex co', 'Apply a sin-wave deformation parameterised by mouse X position', 'Use context.area.header_text_set() to show FPS']
      }
    ]
  }
];
