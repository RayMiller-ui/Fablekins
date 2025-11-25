# GameObject.js

## Purpose
Base class for anything that exists in the world and can be drawn.

## Exports
- `class GameObject`

## Used By
- `Person` (extends)
- `OverworldMap` (holds created instances)

## Depends On
- `Sprite` for rendering

## Key Properties
| Property | Meaning |
|----------|---------|
| `x, y`   | world position in pixels |
| `direction` | facing direction (used by movement systems) |
| `sprite` | visual representation |

## Responsibilities
- Provide a base update method (meant to be overridden)
- Store position and configuration data
- Own a sprite instance

## Notes
- Doesn't enforce grid alignment; caller must use Utilities.withGrid
- Does not handle movement itself — subclass required

## Future Enhancements
- Common event hooks (`onInteract`, `onSpawn`, `onDestroy`)
- Unique IDs for tracking across maps
