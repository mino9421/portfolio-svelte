# C#

## Overview
C# is a versatile, object-oriented programming language developed by Microsoft, commonly used in a variety of applications, including web development, game development, and more. Its strong integration with the .NET framework and compatibility with game engines like Unity and Godot makes it a powerful tool for various development tasks.

## My Experience with C#

### 1. Unity Game Development
I have extensive experience using C# in Unity for game development. Unity’s powerful engine combined with C# scripting has allowed me to create interactive and engaging games.

#### Key Projects and Skills
- **Game Mechanics**: Developed gameplay mechanics and interactions using C# scripts, including player controls, AI behavior, and game logic.
- **UI Development**: Created and managed user interfaces, including menus, HUDs, and interactive elements using Unity’s UI system.
- **Physics and Animation**: Implemented physics-based interactions and animations to enhance the gaming experience.

#### Example Code Block
```csharp

// Example code block - Godot C# Script for Character Movement
using Godot;

public class Player : KinematicBody
{
    public float Speed = 10f;
    private Vector3 _velocity;

    public override void _PhysicsProcess(float delta)
    {
        _velocity = new Vector3();
        if (Input.IsActionPressed("ui_right"))
            _velocity.x += 1;
        if (Input.IsActionPressed("ui_left"))
            _velocity.x -= 1;
        if (Input.IsActionPressed("ui_down"))
            _velocity.z += 1;
        if (Input.IsActionPressed("ui_up"))
            _velocity.z -= 1;
        _velocity = _velocity.Normalized() * Speed;
        MoveAndSlide(_velocity);
    }
}
