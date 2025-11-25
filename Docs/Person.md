# Person.js

## Purpose
A movable entity that exists on the map—can be the player or an NPC.

Extends `GameObject`.

## Exports
- `class Person`

## Used By
- `OverworldMap` (instantiates hero & NPCs)
- `Overworld` (calls update + sprite.draw)

## Depends On
- `GameObject` (base class)
- `DirectionInput` indirectly (via state.pressedKey passed from Overworld)

## Core Responsibilities
- Handle movement over time rather than instant jumps
- Consume movement input if `isPlayerControlled === true`
- Move using tile-based 16-step increments

## Key Properties

| Property | Purpose |
|----------|---------|
| `remainingMovement` | How many movement steps remain this move |
| `isPlayerControlled` | Whether this instance should respond to keyboard input |
| `directionUpdate` | Maps direction to (`axis`, `delta`) |

## Movement Details
Movement occurs over **16 frames per tile**, based on direction:

update() → updatePosition() → remainingMovement-- until 0

Example:

- direction = "left"

- remainingMovement = 16

- loop: x -= 1

- remainingMovement -= 1


## Input Flow (Player Only)

DirectionInput → Overworld → Person.update(state) → movement logic

## Notes
- No animation switching yet (uses static sprite frame)
- Movement speed is fixed; no delta-time scaling yet

## Future Enhancements
- Animation states (walk, idle, interact)
- Collision checking before movement
- AI movement for NPCs
- Movement queue (smooth chained movement)
