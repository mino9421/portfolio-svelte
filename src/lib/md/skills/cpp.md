# C++

## Overview
C++ is an extension of the C programming language that incorporates object-oriented programming (OOP) principles, offering features like classes, inheritance, and polymorphism. It provides powerful tools for both system-level programming and high-performance applications.

## My Experience with C++
I first learned C++ academically, which provided me with a strong foundation in object-oriented programming and advanced features beyond C. My interest in C++ extended to using it for hobby projects, particularly in game development with OpenGL and SFML, as well as studying complex simulations.

### Key Competencies
- **Object-Oriented Programming (OOP)**: Gained a solid understanding of OOP principles, including classes, inheritance, and polymorphism, which are central to modern C++ programming.
- **Graphics Programming**: Utilized OpenGL and SFML for creating graphical applications and games, learning about graphics pipelines, rendering techniques, and interactive graphics.
- **Advanced C++ Features**: Worked with features such as templates, standard libraries (STL), and smart pointers to write efficient and maintainable code.
- **Simulation and Evolution**: Studied a repository simulating organisms that evolve new neurons across thousands of generations, showcasing advanced algorithmic and evolutionary concepts.

## Project-Specific Example

### 1. Hobby Projects
Engaged in several personal projects involving C++ for game development, where I explored graphical programming and game mechanics.

#### Example Project: Game Development with OpenGL and SFML
- **Tools Used**: OpenGL for graphics rendering, SFML for window management and handling input/output.
- **Focus**: Implemented game features such as rendering 2D/3D graphics, handling user input, and managing game states.

#### Example Code Block
```cpp
// Example code block - Simple SFML Program to Create a Window

#include <SFML/Graphics.hpp>

int main() {
    sf::RenderWindow window(sf::VideoMode(800, 600), "SFML Window");

    while (window.isOpen()) {
        sf::Event event;
        while (window.pollEvent(event)) {
            if (event.type == sf::Event::Closed)
                window.close();
        }

        window.clear();
        // Draw your graphics here
        window.display();
    }

    return 0;
}
