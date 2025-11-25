# DirectionInput.js

## Purpose
Handles keyboard input and exposes the most recent movement direction.

## Exports
- `class DirectionInput`

## Used By
- `Overworld` → passed into Person.update(state)

## Responsibilities
- Map key presses to direction strings
- Track order of pressed keys
- Remove keys on release (supports multiple simultaneous inputs)

## Key Behavior

keyPresses[0] → highest priority direction


## Key Mapping

| Key | Direction |
|-----|----------|
| ArrowUp / W | up |
| ArrowDown / S | down |
| ArrowLeft / A | left |
| ArrowRight / D | right |

## Notes
- Must call `.init()` or no listeners are attached
- Logs key events to console (debugging)
- No diagonal input support yet

## Future Enhancements
- Touch controls
- Controller support
- Input buffering
- Key debouncing
