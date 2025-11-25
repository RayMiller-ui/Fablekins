# Sprite.js

## Purpose
Renders a GameObject visually, including shadow and animation frame selection.

## Exports
- `class Sprite`

## Used By
- `GameObject` (composition)

## Depends On
- `GameObject` position for rendering
- Image assets

## Responsibilities
- Load the image for the character
- Draw sprite at the adjusted position
- Optionally draw shadow underneath
- Store animation state (not fully implemented yet)

## Render Positioning
Sprite draws slightly offset to simulate character height:

x = gameObject.x - 8

y = gameObject.y - 18


## Key Properties

| Property | Meaning |
|----------|---------|
| `image` | character sprite sheet |
| `shadow` | shadow sprite |
| `animations` | named frames (future use) |
| `currentAnimationFrame` | active frame index |
| `gameObject` | reference to world position |

## Notes
- Currently uses a single frame at (0,0) on the spritesheet
- Supports `useShadow: false`
- Coordinates assume 32x32 sprites
- No animation timing or switching yet

## Future Enhancements
- Animation frame cycling
- Auto-select animation based on movement direction
- Offset per frame instead of fixed values
- Support for multiple frames per direction
