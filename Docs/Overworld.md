# Overworld.js

## Purpose
Central orchestrator of the game world.  
Manages the canvas, holds the active map, and runs the main game loop that updates and renders objects.

## Exports
- `class Overworld`

## Used By
- `init.js` (creates and initializes an Overworld instance)

## Depends On
- `OverworldMap` (active game world)
- `DirectionInput` (keyboard movement handling)
- `window.OverworldMaps` (map configuration definitions)

## Key Responsibilities
- Clear and re-render the canvas every frame
- Draw map lower → update objects → draw map upper
- Pass directional input to map objects
- Store reference to active map and input handler

## Data Flow
DirectionInput → Overworld → map.gameObjects → Person.update() → Sprite.draw()


## Notes
- Rendering is single-layer per sprite for now (no animation frames yet)
- Map ordering matters: lower tiles must be drawn before sprites

## Future Enhancements
- Multiple maps + transitions
- Camera system
- Entity sorting by y-position (depth sorting)
