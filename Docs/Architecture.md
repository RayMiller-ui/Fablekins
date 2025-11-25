# PikaProject Architecture

## Overview
A tile-based overworld engine with player movement, sprites, and map layers.  
Rendering happens in real time inside the main Overworld loop.

## High-Level Flow

init.js

 ↓

Overworld

 ↓

OverworldMap ← DirectionInput

 ↓

gameObjects (Person, NPCs)

 ↓

Sprite.draw()


## Rendering Order
1. Lower map image (background)
2. Game objects
3. Upper map image (foreground overlay)

## Core Concepts

### **GameObject**
- Base entity with x/y + sprite

### **Person**
- GameObject + tile-based movement
- Player control optional

### **Sprite**
- Draws visual representation

### **OverworldMap**
- Holds map assets + object placement

### **DirectionInput**
- Keyboard controls → direction string

## Coordinate System
- Grid size: **16px per tile**
- Sprites rendered offset to simulate height

## Future System Plans
- Maps with collisions & triggers
- Event scripting
- Camera following
- Multi-map scene transitions
- Depth sorting via y-axis

## File Responsibility Summary

| File | Role |
|------|------|
| Overworld.js | Main loop & rendering |
| OverworldMap.js | Map data & layering |
| Person.js | Movement logic |
| GameObject.js | Base entity |
| Sprite.js | Rendering |
| DirectionInput.js | Input layer |
| Utilities.js | Helpers |
| init.js | Bootstrapping |
