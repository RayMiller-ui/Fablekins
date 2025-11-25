# Utilities.js

## Purpose
Small helper functions used across the project.

## Exports
- `Utilities` namespace object

## Functions

### **`withGrid(n)`**
Converts tile units to pixels.

- withGrid(1) → 16px

- withGrid(5) → 80px


Used for positioning characters in `OverworldMap`.

## Notes
- Magic number `16` should probably move to a constants file later

## Future Enhancements
- lerp()
- clamp()
- pixel-to-grid conversion
- collision helpers
