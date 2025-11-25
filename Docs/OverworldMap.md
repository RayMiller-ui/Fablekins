# OverworldMap.js

## Purpose
Defines a tile-based map, its layers, and the objects placed on it.

## Exports
- `class OverworldMap`
- `window.OverworldMaps` (global map definitions)

## Used By
- `Overworld` (holds `this.map` and renders it)
- Game objects indirectly via placement

## Depends On
- `Person` / `GameObject` for object instances
- `Utilities.withGrid()` for coordinate alignment
- Image assets for lower/upper layers

## Key Responsibilities
- Load lower map image (background)
- Load upper map image (foreground)
- Store and expose `gameObjects`

## Data Contained
- `gameObjects`: `{ hero, npc1, ... }`
- `lowerImage`, `upperImage`

## Notes
- Rendering assumes grid-based positioning (16px units)
- `gameObjects` are passed pre-instantiated, not created inside the class

## Future Enhancements
- Collision grid
- Trigger zones
- Map change portals
