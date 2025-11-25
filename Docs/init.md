# init.js

## Purpose
Entry point of the game. Creates an Overworld instance and starts execution.

## Used By
- Browser (loaded at bottom of index.html)

## Responsibilities
- Select `.game-container`
- Create Overworld instance
- Call `.init()`

## Notes
- Wrapped in an IIFE to avoid polluting global scope
- Could be replaced by ES module import once bundling is used

## Future Enhancements
- Load save data before starting
- Load assets before Overworld initialization
- Scene selection screen
