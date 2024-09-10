import{A as n}from"./UIcon.e734038b.js";const p=`# JavaScript

## Overview
JavaScript is a versatile, high-level programming language commonly used for creating interactive and dynamic content on the web. It is an essential technology for web development, running both on the client side (in browsers) and on the server side (with environments like Node.js).

## My Experience with JavaScript
In the Deez social media platform, JavaScript was the foundational language for both frontend and backend development. It enabled dynamic and interactive features on the client side and supported server-side logic in the Node.js environment. Its flexibility and wide adoption made it a key component in building a modern web application.

## Project-Specific Example
JavaScript played a central role in the Deez project, handling user interactions, managing application state, and integrating various services. For example, it was used extensively in the React.js components to create a responsive and engaging user interface.

### Key Usage
- **Frontend Development**: Utilized JavaScript in conjunction with React.js to build interactive UI components and manage application state.
- **Server-Side Logic**: Employed JavaScript on the server side with Node.js to handle API requests, manage authentication, and interact with databases.
- **Asynchronous Operations**: Leveraged JavaScript’s async/await syntax and Promises to handle asynchronous operations, such as fetching data from APIs and updating the UI in real time.

\`\`\`javascript
// Example code block - React component using JavaScript

import React, { useState } from 'react';

function EmojiPost({ onSubmit }) {
  const [content, setContent] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (onSubmit) {
      onSubmit(content);
      setContent('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Post an emoji"
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default EmojiPost;
`,m=`# TypeScript

## Overview
TypeScript is a strongly typed programming language that builds on JavaScript by adding static type definitions. It allows developers to catch errors early in the development process, leading to more robust and maintainable code.

## My Experience with TypeScript
In the Deez social media platform, TypeScript played a crucial role in ensuring type safety across the entire stack. By using TypeScript, I was able to reduce runtime errors, improve code quality, and ensure a seamless development experience, particularly when working with complex data structures and APIs.

## Project-Specific Example
One of the key areas where TypeScript was invaluable was in defining the schema validation for emoji-only posts. By using TypeScript in conjunction with Zod, I was able to enforce strict type rules that ensured only valid emoji content could be posted.

\`\`\`typescript
import { z } from 'zod';

const emojiPostSchema = z.string().regex(/^(\\p{Emoji_Presentation}|\\p{Emoji}\\uFE0F)$/u, {
  message: "Posts can only contain emojis",
});

function createPost(content: string) {
  const validation = emojiPostSchema.safeParse(content);
  if (!validation.success) {
    throw new Error(validation.error.errors[0].message);
  }
  // Save the post to the database...
}
`,g=`# Go (Golang)

## Overview
Go, commonly known as Golang, is a statically typed, compiled programming language designed for simplicity and efficiency. Developed by Google, Go is known for its fast performance, ease of use, and strong support for concurrent programming.

## My Experience with Go
While my experience with Go is minimal, I have familiarized myself with its syntax, core features, and ecosystem to be prepared for potential challenges and projects. I have explored Go's simplicity and efficiency, which make it an appealing choice for various types of applications.

## Learning and Practice

### 1. Basic Syntax and Concepts
Gained an understanding of Go's syntax and basic programming constructs, including variables, functions, and control structures.

#### Key Concepts Covered
- **Syntax**: Basic syntax and structure of Go programs.
- **Data Types**: Understanding of Go's primitive data types and composite types like slices and maps.
- **Functions**: Writing and using functions, including variadic functions.

\`\`\`go
// Example code block - Basic Go Program

package main

import "fmt"

func main() {
    fmt.Println("Hello, Go!")
}
`,u=`# Java

## Overview
Java is a high-level, object-oriented programming language widely used in enterprise environments. It is known for its portability across platforms, robustness, and extensive ecosystem. Java is particularly popular for building large-scale, high-performance applications.

## My Experience with Java
In various projects, including a CRUD application, I have extensively used Java, particularly with the Spring Boot framework. Spring Boot simplifies the development of production-ready applications by providing a set of conventions and pre-configured components, which streamline development and improve productivity.

## Project-Specific Example: CRUD Application
One of my notable projects was a CRUD (Create, Read, Update, Delete) application built with Spring Boot. This project demonstrated Java’s strengths in building robust backend services and managing data persistence efficiently.

### Key Technologies Used
- **Spring Boot**: Framework used for building the backend application, providing out-of-the-box configurations for rapid development.
- **Spring Data JPA**: Used for data persistence, simplifying database interactions with a repository pattern.
- **Hibernate**: ORM framework used in conjunction with Spring Data JPA for managing database operations.
- **Thymeleaf**: Template engine used for rendering views in a web application.
- **MySQL**: Database used to store application data.

### Key Features
- **CRUD Operations**: Implemented full CRUD functionality allowing users to create, read, update, and delete records.
- **REST API**: Developed a RESTful API for interacting with the application, enabling integration with front-end clients or other services.
- **Data Validation**: Incorporated validation mechanisms to ensure data integrity and provide user feedback.

\`\`\`java
// Example code block - Spring Boot Controller for CRUD operations

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/items")
public class ItemController {

    @Autowired
    private ItemService itemService;

    @GetMapping
    public ResponseEntity<List<Item>> getAllItems() {
        List<Item> items = itemService.findAll();
        return new ResponseEntity<>(items, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Item> createItem(@RequestBody Item item) {
        Item createdItem = itemService.save(item);
        return new ResponseEntity<>(createdItem, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Item> updateItem(@PathVariable Long id, @RequestBody Item item) {
        Item updatedItem = itemService.update(id, item);
        return new ResponseEntity<>(updatedItem, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteItem(@PathVariable Long id) {
        itemService.delete(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
`,f=`# C#

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
\`\`\`csharp

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
`,h=`# Python - Machine Learning, AI, and GIS

## Overview
Python is a premier language for machine learning, AI, and GIS due to its rich ecosystem of libraries and tools. My experience spans a range of projects involving data manipulation, model training, predictive analytics, and geographic information systems.

## My Experience with Machine Learning, AI, and GIS
I have applied Python extensively in machine learning and AI projects, leveraging libraries such as Pandas, NumPy, Scikit-Learn, TensorFlow, and more. Additionally, I have worked with GIS tools and libraries to handle spatial data and perform geographic analyses.

## Project-Specific Examples

### 1. Disease Prediction (e.g., COVID-19 Detection)
In this project, I developed a machine learning model to predict disease outbreaks, such as COVID-19, using historical data and various features.

#### Key Technologies Used
- **Pandas**: For data manipulation and preprocessing.
- **NumPy**: For numerical operations and array management.
- **Scikit-Learn**: For implementing machine learning algorithms and evaluating model performance.
- **TensorFlow/Keras**: For developing deep learning models, if applicable.

#### Key Features
- **Data Preprocessing**: Cleaned and prepared datasets using Pandas and NumPy.
- **Model Training**: Trained models using Scikit-Learn and TensorFlow for accurate predictions.
- **Evaluation**: Assessed model performance using metrics such as accuracy, precision, recall, and F1 score.

\`\`\`python
# Example code block - Disease Prediction with Scikit-Learn

import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import classification_report

# Load dataset
data = pd.read_csv('disease_data.csv')

# Prepare features and labels
X = data.drop('disease', axis=1)
y = data['disease']

# Split data
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3, random_state=42)

# Train model
model = RandomForestClassifier(n_estimators=100, random_state=42)
model.fit(X_train, y_train)

# Make predictions
y_pred = model.predict(X_test)

# Evaluate model
report = classification_report(y_test, y_pred)
print(report)
`,y=`# React.js

## Overview
React.js is a powerful JavaScript library for building user interfaces, particularly single-page applications where efficiency and responsiveness are key. Its component-based architecture allows developers to create reusable UI elements, making it easier to manage and scale complex applications.

## My Experience with React.js
In the Deez social media platform, React.js was the backbone of the user interface. Leveraging React's efficient rendering and state management capabilities, I built a dynamic and responsive application that allowed users to interact with the platform in real-time. The component-based approach of React also made it easier to maintain and scale the application as new features were added.

## Project-Specific Example
One of the key components in Deez was the \`EmojiFeed\`, which displayed a real-time feed of emoji-only posts. React's state management and lifecycle methods were crucial in ensuring that the feed updated seamlessly as new posts were added.

\`\`\`javascript
import React from 'react';
import { trpc } from '../utils/trpc';

function EmojiFeed() {
  const { data: posts } = trpc.useQuery(['getPosts']);

  return (
    <div>
      {posts?.map((post, index) => (
        <div key={index} className="emoji-post">
          {post.content}
        </div>
      ))}
    </div>
  );
}

export default EmojiFeed;
`,v=`# Remix

Remix is a modern React framework designed for building fast, scalable web applications with a focus on optimizing performance and developer experience. It leverages server-side rendering (SSR) and static site generation (SSG) to deliver optimal performance and SEO benefits. Remix provides a robust data loading and caching system that integrates seamlessly with React.

## My Experience

I have used Remix to develop high-performance web applications, leveraging its powerful data-fetching capabilities and built-in routing to streamline the development process. Remix's approach to data loading and its emphasis on optimized rendering have allowed me to create applications that are both fast and efficient, with a smooth user experience.

## Challenges and Learnings

One challenge I faced with Remix was mastering its data-fetching mechanisms and optimizing server-side rendering for dynamic content. I learned to effectively use Remix's loader functions and caching strategies to enhance performance and reduce latency. Additionally, integrating Remix with various data sources and ensuring consistent state management required a deep understanding of both Remix and its ecosystem.

## Future Aspirations

I plan to further explore advanced Remix features, such as leveraging its full capabilities for edge functions and integrating with modern APIs for enhanced functionality. I'm also interested in contributing to the Remix community by sharing my experiences and improving my skills in building high-performance applications with Remix.

## Conclusion

Remix has proven to be a powerful tool for building fast, scalable web applications with React. Its focus on performance and developer experience aligns with my goals for creating efficient and user-friendly applications. I look forward to continuing my work with Remix and exploring its full potential in future projects.
`,w=`# Svelte

## Overview
Svelte is a modern JavaScript framework that compiles components into highly efficient imperative code, resulting in faster runtime performance and smaller bundle sizes. SvelteKit is a powerful framework built on top of Svelte that provides a full-stack development environment, supporting features like routing, server-side rendering, and more.

## My Experience with Svelte
I have utilized Svelte and SvelteKit to build my entire portfolio, taking advantage of its simplicity and performance benefits. The experience provided me with hands-on knowledge of Svelte's reactive approach to building user interfaces and SvelteKit’s full-stack capabilities.

## Project-Specific Example

### 1. Portfolio Development
Developed my portfolio website using SvelteKit, leveraging its features for creating a dynamic and interactive site. The project allowed me to explore various aspects of Svelte, including component-based architecture, state management, and routing.

#### Key Features Implemented
- **Component-Based Architecture**: Built reusable components for different sections of the portfolio, such as project showcases, skill descriptions, and contact forms.
- **Routing**: Implemented navigation and routing using SvelteKit's built-in capabilities to manage different pages and dynamic routes.
- **Reactive Programming**: Utilized Svelte's reactivity to create a smooth and responsive user experience.

#### Example Code Block
\`\`\`svelte
<!-- Example code block - Svelte Component for a Portfolio Project -->

<script>
  export let projectTitle;
  export let projectDescription;
<\/script>

<div class="project">
  <h2>{projectTitle}</h2>
  <p>{projectDescription}</p>
</div>

<style>
  .project {
    padding: 1rem;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin: 1rem 0;
  }

  h2 {
    font-size: 1.5rem;
  }

  p {
    font-size: 1rem;
    color: #555;
  }
</style>
`,b=`# Vue.js

Vue.js is a progressive JavaScript framework used for building user interfaces and single-page applications. It is designed to be incrementally adoptable, allowing developers to use as much or as little of the framework as needed. Vue.js excels in creating interactive and dynamic web applications with a focus on simplicity and flexibility.

## My Experience

I have extensively worked with Vue.js to develop responsive and high-performance web applications. Vue's component-based architecture and reactive data binding have enabled me to build modular and maintainable applications. Vue's ecosystem, including Vue Router for routing and Vuex for state management, has been instrumental in creating scalable and efficient solutions.

## Challenges and Learnings

One challenge I encountered with Vue.js was managing complex state across large applications. I learned to effectively utilize Vuex for centralized state management, ensuring consistent data flow and reducing complexity. Additionally, optimizing component performance and managing asynchronous operations required a deep understanding of Vue’s reactivity system and lifecycle hooks.

## Future Aspirations

I plan to explore advanced features of Vue.js, such as Vue 3's Composition API and its integration with TypeScript. I'm also interested in contributing to the Vue.js ecosystem through open-source projects and developing custom Vue plugins to enhance my applications. I aim to deepen my expertise in building large-scale applications with Vue.js and optimizing their performance.

## Conclusion

Vue.js has been a valuable tool in my development toolkit, offering a flexible and powerful framework for building modern web applications. Its ease of use and extensive ecosystem have significantly enhanced my development workflow. I look forward to continuing my work with Vue.js and exploring its full potential in future projects.
`,x=`# Nuxt.js

Nuxt.js is a powerful framework built on top of Vue.js, designed for building server-rendered applications, static websites, and powerful single-page applications (SPAs). It enhances the development experience by providing built-in features such as routing, server-side rendering (SSR), and static site generation (SSG).

## My Experience

I have leveraged Nuxt.js in various projects to build efficient, SEO-friendly applications. Its modular architecture and powerful features like SSR and automatic code-splitting have enabled me to create performant and scalable web applications. Nuxt's seamless integration with Vue.js and its extensive ecosystem make it a go-to choice for advanced front-end development.

## Challenges and Learnings

One of the challenges I encountered with Nuxt.js was mastering the nuances of server-side rendering and handling complex asynchronous data-fetching strategies. I learned to optimize these processes, reducing the time to first byte (TTFB) and improving overall application performance. Additionally, configuring and customizing the Nuxt.js build process for different deployment environments provided valuable experience in managing production-grade applications.

## Future Aspirations

Going forward, I aim to explore more advanced aspects of Nuxt.js, such as building custom modules, optimizing large-scale applications, and deepening my understanding of static site generation for content-heavy projects. I am also interested in contributing to the Nuxt.js community through open-source contributions and sharing knowledge through blog posts and tutorials.

## Conclusion

Nuxt.js has become a critical tool in my front-end development workflow, offering a blend of simplicity and power. Its ability to handle complex requirements with ease makes it an indispensable framework for modern web applications. I look forward to continuing my journey with Nuxt.js, exploring its full potential in future projects.
`,k=`# Electron.js

## Overview
Electron.js is a framework that enables the development of cross-platform desktop applications using web technologies such as JavaScript, HTML, and CSS. It allows developers to build desktop applications with the same codebase used for web applications, leveraging Node.js and Chromium.

## My Experience with Electron.js

### Understanding and Usage
Though my experience with Electron.js is minimal, I have a good understanding of its core principles and capabilities. Electron.js is well-known for powering applications like Discord and Slack, providing a seamless experience across different operating systems by combining web technologies with native system functionalities.

#### Key Concepts
- **Main Process**: Manages the application's lifecycle and communicates with the renderer processes. Handles tasks such as creating windows and managing application-level events.
- **Renderer Process**: Responsible for rendering the application's user interface and running web technologies. Each window in an Electron app runs in its own renderer process.
- **IPC (Inter-Process Communication)**: Enables communication between the main process and renderer processes, allowing for interaction between different parts of the application.

### Example Code Block
\`\`\`javascript
// Example code block - Basic Electron.js Main Process Script
const { app, BrowserWindow } = require('electron');

function createWindow () {
  // Create the browser window.
  let mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  });

  // Load the index.html of the app.
  mainWindow.loadFile('index.html');
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
`,I=`Flutter is an open-source UI software development kit created by Google. It is used to develop cross platform applications from a single codebase for any web browser, Fuchsia, Android, iOS, Linux, macOS, and Windows. First described in 2015, Flutter was released in May 2017.
`,S=`# Angular

Angular is a robust, open-source framework developed by Google for building dynamic, single-page web applications. It provides a comprehensive suite of tools and features, including a powerful templating engine, two-way data binding, dependency injection, and a modular architecture. Angular’s design allows for building scalable, maintainable applications with a consistent development experience.

## My Experience

I have worked extensively with Angular to develop complex web applications that require high performance and scalability. Angular’s component-based architecture and extensive CLI tools have enabled me to build efficient and maintainable codebases. I’ve utilized Angular’s features such as RxJS for reactive programming, Angular Material for UI components, and NgRx for state management to deliver sophisticated applications.

## Challenges and Learnings

One challenge I encountered with Angular was managing large-scale state across different modules and components. I learned to effectively use NgRx for state management to ensure consistent data flow and simplify state handling. Additionally, optimizing Angular’s performance for large applications required in-depth knowledge of lazy loading, change detection strategies, and AOT (Ahead-Of-Time) compilation.

## Future Aspirations

I plan to explore advanced features of Angular, such as Angular Universal for server-side rendering and integrating with GraphQL for data management. I’m also interested in contributing to Angular’s open-source community and staying updated with the latest best practices and tools to enhance my development skills.

## Conclusion

Angular has been a powerful framework for building robust, scalable web applications. Its rich set of features and strong ecosystem have significantly enhanced my development workflow. I am excited to continue working with Angular and leveraging its capabilities to build innovative and high-performance applications.
`,P=`# Xamarin

Xamarin is a Microsoft-owned framework for building cross-platform mobile applications using .NET and C#. It allows developers to create native applications for iOS, Android, and Windows from a single codebase. Xamarin provides a powerful set of tools and libraries to develop high-performance, native mobile applications while sharing a significant portion of code across platforms.

## My Experience

I have utilized Xamarin to build robust cross-platform mobile applications, leveraging its ability to share code across different platforms while providing native performance and user experience. Xamarin’s integration with .NET and its rich set of libraries and tools have enabled me to develop feature-rich applications efficiently.

## Challenges and Learnings

One challenge with Xamarin was managing platform-specific customizations while maintaining a shared codebase. I learned to use Xamarin’s platform-specific APIs and dependency injection to handle such scenarios effectively. Additionally, optimizing performance for mobile devices and dealing with device fragmentation required careful attention to detail and extensive testing.

## Future Aspirations

I plan to further explore Xamarin’s integration with .NET MAUI (Multi-platform App UI) to enhance my cross-platform development skills. I am also interested in experimenting with new features and capabilities in Xamarin to improve app performance and user experience. Contributing to the Xamarin community and staying updated with the latest advancements in mobile development are also key goals for me.

## Conclusion

Xamarin has been a valuable tool for building cross-platform mobile applications, allowing me to leverage my .NET skills while delivering high-quality, native experiences on multiple platforms. Its comprehensive ecosystem and support for native features have greatly enhanced my mobile development capabilities. I look forward to continuing my work with Xamarin and exploring its evolving features and tools.
`,j=`# Node.js

## Overview
Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. It allows developers to build scalable network applications using JavaScript on the server side. Its non-blocking, event-driven architecture makes it suitable for building high-performance applications.

## My Experience with Node.js
In the Deez social media platform, Node.js was integral to the backend operations, enabling the server-side logic and handling asynchronous operations efficiently. Its non-blocking nature allowed the application to handle multiple concurrent requests seamlessly, contributing to the platform's overall performance and scalability.

## Project-Specific Example
For the Deez project, Node.js was used as the runtime environment to host the API server and manage the application's backend operations. It facilitated the integration of various tools and services, such as tRPC for type-safe APIs and Prisma for database interactions.

### Key Usage
- **API Server**: Node.js powered the API server that communicates with the frontend, handling requests and responses efficiently.
- **Integration**: It integrated various libraries and tools, such as tRPC and Prisma, ensuring smooth interaction between different parts of the stack.
- **Asynchronous Operations**: Leveraged Node.js's asynchronous capabilities to handle real-time updates and concurrent connections effectively.

\`\`\`javascript
// Example code block - Basic Express.js server setup in Node.js

const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// Sample route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(\`Server is running at http://localhost:\${port}\`);
});
`,C=`Deno /diːnoʊ/is a runtime for JavaScript, TypeScript, and WebAssembly that is based on the V8 JavaScript engine and the Rust programming language. Deno was co-created by Ryan Dahl, who also created Node.js.

<br/>

Deno explicitly takes on the role of both runtime and package manager within a single executable, rather than requiring a separate package-management program.
`,R=`# C

## Overview
C is a foundational programming language known for its efficiency and control over system resources. As one of the earliest high-level programming languages, C has significantly influenced many modern languages and is widely used in system programming, embedded systems, and performance-critical applications.

## My Experience with C
C was my first programming language that I truly learned, providing me with a solid foundation in programming concepts. My academic experience with C covered both fundamental and advanced topics, allowing me to grasp core programming principles and system-level operations.

### Key Competencies
- **Understanding Pointers**: Developed a robust understanding of pointers, a concept that many programmers find challenging. This includes pointer arithmetic, dynamic memory management, and using pointers effectively to manipulate data.
- **Memory Management**: Gained hands-on experience with dynamic memory allocation, deallocation, and memory management techniques.
- **Data Structures**: Implemented and used various data structures such as arrays, linked lists, stacks, and queues.

## Project-Specific Example

### 1. Academic Projects
Worked on several projects during my studies that deepened my understanding of C and its applications, from simple algorithms to complex system-level tasks.

#### Example Code Block
\`\`\`c
// Example code block - Simple C Program to Reverse an Array

#include <stdio.h>

void reverseArray(int arr[], int size) {
    int start = 0;
    int end = size - 1;
    while (start < end) {
        int temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
}

int main() {
    int arr[] = {1, 2, 3, 4, 5};
    int size = sizeof(arr) / sizeof(arr[0]);

    reverseArray(arr, size);

    printf("Reversed Array: ");
    for (int i = 0; i < size; i++) {
        printf("%d ", arr[i]);
    }
    return 0;
}
`,E=`# C++

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
\`\`\`cpp
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
`,A=`# Rust

## Overview
Rust is a systems programming language focused on safety, speed, and concurrency. Known for its rigorous compile-time checks and zero-cost abstractions, Rust is ideal for performance-critical applications. My experience with Rust includes personal projects, learning resources, and practical applications using various tools and libraries.

## My Experience with Rust
I have delved into Rust through various learning resources, including books and online tutorials. I have tackled Rustlings exercises, built CRUD applications, and developed APIs to deepen my understanding of the language. I also have experience with key libraries in the Rust ecosystem, such as Actix, Axum, and Tokio, which are essential for building robust and efficient applications.

## Project-Specific Examples

### 1. CRUD Application
Developed a CRUD (Create, Read, Update, Delete) application in Rust to learn the fundamentals of web development and API design using Rust's ecosystem.

#### Key Technologies Used
- **Actix**: A powerful and pragmatic web framework for building web applications with Rust.
- **Tokio**: An asynchronous runtime for writing reliable, asynchronous applications.
- **Diesel**: A safe and extensible ORM and query builder for interacting with databases.

#### Key Features
- **API Endpoints**: Implemented RESTful API endpoints for managing data in the CRUD application.
- **Database Integration**: Used Diesel for database interactions, ensuring type safety and ease of use.
- **Concurrency**: Leveraged Tokio to handle asynchronous operations and improve application performance.

\`\`\`rust
// Example code block - Actix Web API Endpoint

use actix_web::{web, App, HttpServer, Responder};

async fn get_item() -> impl Responder {
    "Item details"
}

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    HttpServer::new(|| {
        App::new()
            .route("/item", web::get().to(get_item))
    })
    .bind("127.0.0.1:8080")?
    .run()
    .await
}
`,D=`# Laravel

Laravel is a powerful and elegant PHP framework designed for web application development. It provides a robust set of tools and features, including routing, authentication, sessions, and caching, making it easier to build complex and scalable applications. Laravel follows the MVC (Model-View-Controller) architectural pattern, promoting a clean and organized codebase.

## My Experience

I have extensively used Laravel for developing a wide range of web applications, from small websites to large-scale enterprise solutions. Laravel’s intuitive syntax, rich feature set, and vibrant community have made it my go-to framework for PHP development. The framework's built-in tools, like Eloquent ORM, Blade templating engine, and Artisan command-line interface, have significantly streamlined my development process.

## Challenges and Learnings

One challenge with Laravel was managing performance for large-scale applications with high traffic. I learned to optimize database queries using Laravel’s Eloquent ORM and implemented caching strategies with Redis to enhance performance. Additionally, mastering Laravel’s advanced features, such as queues and job processing, was crucial for handling background tasks efficiently.

## Future Aspirations

I plan to explore Laravel's ecosystem further, including packages like Laravel Nova for admin dashboards and Laravel Passport for API authentication. I am also interested in contributing to open-source Laravel projects and staying updated with the latest developments in the Laravel community. Enhancing my knowledge of Laravel’s testing tools, such as PHPUnit and Laravel Dusk, is another area of focus.

## Conclusion

Laravel has been an essential framework in my web development career, offering a perfect balance between ease of use and advanced features. Its comprehensive ecosystem and active community have enabled me to build secure, scalable, and maintainable applications. I look forward to continuing my work with Laravel and applying its capabilities to new and challenging projects.
`,M=`# Hono.js

Hono.js is a minimalist, high-performance web framework for building APIs and web applications. Designed to be lightweight and fast, Hono.js focuses on simplicity and ease of use while still offering powerful features like middleware support, routing, and request handling.

## My Experience

I have utilized Hono.js to develop fast and efficient APIs, particularly in scenarios where minimal overhead and rapid response times were critical. Its straightforward API and lightweight nature allowed me to build scalable applications quickly. Hono.js’s middleware system provided the flexibility to extend functionality without compromising on performance.

## Challenges and Learnings

Working with Hono.js presented the challenge of managing state and complexity in larger applications due to its minimalist nature. However, this also taught me to write clean, modular code and leverage Hono.js’s middleware system effectively. I also learned to optimize performance by minimizing unnecessary dependencies and focusing on lean, efficient code.

## Future Aspirations

I plan to explore more advanced use cases with Hono.js, such as serverless deployments and edge computing, where its lightweight nature can offer significant advantages. Additionally, I am interested in contributing to the Hono.js community, potentially by developing plugins or middleware that can extend its functionality further. I also aim to integrate Hono.js with modern frontend frameworks like Svelte and SolidJS in future projects.

## Conclusion

Hono.js has proven to be an excellent framework for building high-performance, lightweight web applications and APIs. Its minimalist design allows for rapid development without sacrificing speed or efficiency. I look forward to continuing my work with Hono.js, especially in scenarios where performance is a key concern.
`,z=`# Fastify

Fastify is a highly performant, low-overhead web framework for Node.js, designed for building APIs and web applications with speed and efficiency. It is known for its extensibility, schema-based validation, and powerful plugin system, making it a strong choice for developers focused on performance and scalability.

## My Experience

I have used Fastify to develop lightweight, high-performance APIs and microservices. Its schema-based validation and request lifecycle hooks have allowed me to create secure and efficient endpoints with minimal boilerplate. Fastify’s plugin architecture has also enabled me to extend the framework’s capabilities easily, integrating various tools and libraries as needed.

## Challenges and Learnings

One of the challenges with Fastify was understanding its plugin system deeply enough to create reusable, maintainable code. Through experience, I learned how to effectively modularize components and middleware, enhancing code reuse and maintainability. Additionally, mastering schema validation and handling asynchronous operations efficiently were key areas of growth.

## Future Aspirations

I plan to explore Fastify’s capabilities in building serverless applications, taking advantage of its performance benefits in cloud environments. I am also interested in contributing to the Fastify community, possibly by developing and sharing custom plugins. Further, I aim to deepen my understanding of Fastify’s internals to optimize performance even more and to explore advanced features like request lifecycle management and custom decorators.

## Conclusion

Fastify has become a crucial part of my backend development toolkit, especially when performance and scalability are priorities. Its minimalist yet powerful design has allowed me to build robust, efficient APIs and web services. I am excited to continue using Fastify in future projects, particularly in environments where speed and efficiency are paramount.
`,L=`# Unity

## Overview
Unity is a versatile game development engine used for creating 2D and 3D games and simulations. It provides a wide range of tools and features that facilitate the development process, making it a go-to choice for many developers.

## My Experience with Unity

### Teaching and Content Creation
I have substantial experience with Unity, having created educational content for a large audience. With over 10,000 subscribers on YouTube, I focus on teaching Unity development and sharing various game development techniques.

#### Key Topics Covered
- **Game Clones**: Developed tutorials on creating game clones such as Vampire Survivor to illustrate core game mechanics and development practices.
- **Inventory Systems**: Provided guidance on designing and implementing inventory systems, including item management and user interfaces.
- **Skills and Character Stats Systems**: Demonstrated how to create complex character systems, including skills and stats, to enhance gameplay.
- **Pokemon Clone**: Led a tutorial on developing a Pokemon-inspired game, covering turn-based combat and character progression.
- **Stardew Valley Clone**: Taught how to build a game similar to Stardew Valley, focusing on farming mechanics and resource management.

### Dungeon Crawler Game Jam (2024)
- **Event**: Participated in a game jam where we built a dungeon crawler game.
- **Achievement**: Ranked #80 out of more than 300 submissions.
- **Contribution**: Designed and implemented a complex skills system with over 40 skills and perks for character progression.
- **Skills System**: Included various abilities and perks, providing depth and variety to gameplay.
`,T=`# PHP

## Overview
PHP is a widely-used, open-source server-side scripting language designed primarily for web development. It powers a significant portion of the web, with many popular sites and applications relying on PHP. Despite its mixed reputation, PHP's role in the internet landscape is undeniable.

## My Experience with PHP
While PHP is not my favorite language, I recognize its importance in web development and its extensive use across the internet. I have worked with PHP, particularly its popular framework, Laravel, which provides a robust set of tools for building modern web applications.

## Project-Specific Example

### 1. Working with Laravel
Laravel is a PHP framework that streamlines development by providing an elegant syntax, powerful tools, and a comprehensive ecosystem. I have utilized Laravel to build web applications efficiently, leveraging its features to enhance development productivity.

#### Key Concepts Covered
- **Routing**: Defined routes to handle incoming HTTP requests and direct them to appropriate controllers.
- **Eloquent ORM**: Used Laravel's Eloquent ORM for interacting with the database in an object-oriented manner.
- **Middleware**: Implemented middleware for handling HTTP requests and responses, adding security and functionality.

\`\`\`php
// Example code block - Basic Laravel Route and Controller

// web.php (Routes file)
Route::get('/welcome', [WelcomeController::class, 'index']);

// WelcomeController.php (Controller file)
namespace App\\Http\\Controllers;

use Illuminate\\Http\\Request;

class WelcomeController extends Controller
{
    public function index()
    {
        return view('welcome');
    }
}
`,O=`# tRPC

## Overview
tRPC is a powerful library that allows you to build end-to-end type-safe APIs with TypeScript. It simplifies the process of connecting the client and server, enabling full-stack applications to have shared types and validation, which reduces errors and improves developer productivity.

## My Experience with tRPC
In the Deez social media platform, tRPC was integral in creating a seamless communication layer between the frontend and backend. By using tRPC, I was able to define APIs that were strongly typed, ensuring that both the client and server had a consistent understanding of the data structures and operations involved.

## Project-Specific Example
A critical part of the Deez application was the real-time updates of emoji-only posts. tRPC made it easy to create a type-safe API for fetching and posting data, which was then consumed by the React frontend.

\`\`\`typescript
// Server-side implementation of tRPC router
import { createRouter } from './context';
import { z } from 'zod';

export const postRouter = createRouter()
  .query('getPosts', {
    async resolve({ ctx }) {
      return await ctx.prisma.post.findMany();
    },
  })
  .mutation('createPost', {
    input: z.object({
      content: z.string().regex(/^(\\p{Emoji_Presentation}|\\p{Emoji}\\uFE0F)$/u),
    }),
    async resolve({ input, ctx }) {
      return await ctx.prisma.post.create({
        data: {
          content: input.content,
        },
      });
    },
  });
`,_=`# Drizzle ORM

## Overview
Drizzle is a lightweight ORM designed to simplify database interactions while maintaining strong typing and flexibility. It provides a clean and intuitive API for building and executing SQL queries, making it easier to work with databases in TypeScript-based projects.

## My Experience with Drizzle
In the Deez social media platform, Drizzle ORM was essential in managing database operations. It allowed me to write clean and maintainable code for interacting with the SQLite database (Pico), ensuring that all queries were type-safe and optimized for performance.

## Project-Specific Example
One of the primary use cases for Drizzle in the Deez platform was storing and retrieving emoji-only posts. The ORM made it easy to define database schemas and execute queries without sacrificing type safety.

\`\`\`typescript
import { drizzle, sqliteTable, text } from 'drizzle-orm';
import { open } from 'sqlite';
import sqlite3 from 'sqlite3';

// Define the posts table schema
const posts = sqliteTable('posts', {
  id: text('id').primaryKey(),
  content: text('content').notNull(),
});

// Initialize the database connection
const db = drizzle(
  await open({
    filename: './db.sqlite',
    driver: sqlite3.Database,
  })
);

// Function to create a new post
async function createPost(content: string) {
  await db.insert(posts).values({
    id: generateUniqueId(),
    content,
  });
}

// Function to retrieve all posts
async function getPosts() {
  return await db.select().from(posts).all();
}
`,F=`# Prisma ORM

**Prisma ORM** is a next-generation Object-Relational Mapping (ORM) tool for TypeScript and JavaScript. It simplifies database interactions by providing an intuitive query language and automating database migrations, all while ensuring type safety across your application. Prisma supports a wide range of databases, making it a versatile tool for modern web development.

## How I Used Prisma ORM

In my T3 Stack project, **Prisma ORM** served as the backbone for all database interactions. I used Prisma to define my database schema, generate type-safe database queries, and manage migrations. This allowed me to focus on building features without worrying about potential database inconsistencies or errors.

For example, in the social media emoji platform, Prisma was used to manage complex data relationships, such as user profiles, posts, and interactions. The type safety provided by Prisma ensured that all queries were validated at compile-time, reducing the likelihood of runtime errors and making the development process more efficient.

## Advantages of Prisma ORM

- **Type Safety**: Ensures type safety across all database operations, reducing the risk of runtime errors.
- **Powerful Query Language**: Provides an intuitive and flexible query API that simplifies complex database interactions.
- **Automated Migrations**: Prisma's migration system automates the process of evolving your database schema, making it easier to manage changes over time.
- **Broad Database Support**: Works with various databases, including PostgreSQL, MySQL, SQLite, and more, making it highly versatile.

## Related Projects

- **Social Media Emoji Platform**: Prisma ORM was key to managing the platform's data layer. It allowed me to define a robust and scalable schema that handled user data and interactions efficiently. The type-safe queries provided by Prisma ensured that all data manipulations were reliable and free of errors, contributing to the overall stability of the application.
`,J=`# SolidJS

## Overview
SolidJS is a declarative JavaScript library for building user interfaces. It focuses on fine-grained reactivity, allowing for high performance and efficient updates. SolidJS provides a simple and intuitive API while maintaining the reactivity model for responsive and dynamic UIs.

## My Experience with SolidJS

### Understanding and Usage
Although my experience with SolidJS is minimal, I have a good understanding of its principles and features. SolidJS excels in building fast and efficient UIs by leveraging its fine-grained reactivity system, which ensures minimal re-rendering and optimal performance.

#### Key Concepts
- **Fine-Grained Reactivity**: SolidJS uses a fine-grained reactivity system to track dependencies and update the UI only when necessary, ensuring efficient updates.
- **Declarative Syntax**: Provides a simple and declarative syntax for defining components and managing state, making the development process more intuitive.
- **Compilation**: SolidJS compiles templates into highly optimized JavaScript code, reducing runtime overhead and enhancing performance.

### Example Code Block
\`\`\`javascript
// Example code block - Basic SolidJS Component
import { createSignal } from 'solid-js';

function Counter() {
  const [count, setCount] = createSignal(0);

  return (
    <div>
      <p>Count: {count()}</p>
      <button onClick={() => setCount(count() + 1)}>Increment</button>
    </div>
  );
}

export default Counter;
`;function U(t,...i){const o=Object.assign({},t);return Object.keys(o).forEach(r=>{i.includes(r)&&delete o[r]}),o}const a=t=>t,q=[a({name:"Programming Languages",slug:"pro-lang"}),a({name:"Frameworks",slug:"framework"}),a({name:"Libraries",slug:"library"}),a({name:"Langauges",slug:"lang"}),a({name:"Databases",slug:"db"}),a({name:"ORMs",slug:"orm"}),a({name:"DevOps",slug:"devops"}),a({name:"Testing",slug:"test"}),a({name:"Dev Tools",slug:"devtools"}),a({name:"Markup & Style",slug:"markup-style"}),a({name:"Design",slug:"design"}),a({name:"Soft Skills",slug:"soft"}),a({name:"Environments & Runtimes",slug:"env"})],e=t=>{const i=U(t,"category");return t.category&&(i.category=q.find(o=>o.slug===t.category)),i},c=[e({slug:"js",color:"yellow",description:p,logo:n.JavaScript,name:"Javascript",category:"pro-lang"}),e({slug:"ts",color:"blue",description:m,logo:n.TypeScript,name:"Typescript",category:"pro-lang"}),e({slug:"java",color:"red",description:u,logo:n.Java,category:"pro-lang",name:"Java"}),e({slug:"c",color:"purple",description:R,logo:n.C,category:"pro-lang",name:"C"}),e({slug:"c++",color:"purple",description:E,logo:n.Cpp,category:"pro-lang",name:"C++"}),e({slug:"csharp",color:"purple",description:f,logo:n.Csharp,category:"pro-lang",name:"C#"}),e({slug:"python",color:"yellow",description:h,logo:n.Python,category:"pro-lang",name:"Python"}),e({slug:"rust",color:"orange",description:A,logo:n.Rust,name:"Rust",category:"pro-lang"}),e({slug:"go",color:"cyan",description:g,logo:n.Go,name:"Go",category:"pro-lang"}),e({slug:"php",color:"cyan",description:T,logo:n.Php,name:"PHP",category:"pro-lang"}),e({slug:"reactjs",color:"cyan",description:y,logo:n.ReactJs,category:"library",name:"React Js"}),e({slug:"unity",color:"cyan",description:L,logo:n.Unity,category:"framework",name:"Unity"}),e({slug:"vue",color:"green",description:b,logo:n.VueJs,category:"framework",name:"VueJs"}),e({slug:"nuxt",color:"green",description:x,logo:n.Nuxt,category:"framework",name:"Nuxt"}),e({slug:"remix",color:"white",description:v,logo:n.Remix,category:"framework",name:"Remix"}),e({slug:"laravel",color:"white",description:D,logo:n.Laravel,category:"framework",name:"Laravel"}),e({slug:"svelte",color:"orange",description:w,logo:n.Svelte,category:"library",name:"Svelte"}),e({slug:"angular",color:"red",description:S,logo:n.Angular,category:"framework",name:"Angular"}),e({slug:"electron",color:"purple",description:k,logo:n.Electron,name:"Electron JS",category:"library"}),e({slug:"flutter",color:"green",description:I,logo:n.Flutter,category:"framework",name:"Flutter"}),e({slug:"solid",color:"blue",description:J,logo:n.SolidJs,category:"library",name:"Solid JS"}),e({slug:"quasar",color:"purple",description:"",logo:n.Quasar,category:"framework",name:"Quasar"}),e({slug:"xamarin",color:"purple",description:P,logo:n.Xamarin,category:"framework",name:"Xamarin"}),e({slug:"node",color:"green",description:j,logo:n.NodeJs,category:"env",name:"Node JS"}),e({slug:"trpc",color:"green",description:O,logo:n.Trpc,category:"env",name:"Trpc"}),e({slug:"deno",color:"white",description:C,logo:n.Deno,name:"Deno",category:"env"}),e({slug:"fastify",color:"fastify",description:z,logo:n.Fastify,name:"Fastify",category:"framework"}),e({slug:"express",color:"white",description:"",logo:n.ExpressJs,name:"Express JS",category:"framework"}),e({slug:"honojs",color:"orange",description:M,logo:n.HonoJs,name:"Hono JS",category:"framework"}),e({slug:"postgresql",color:"blue",description:"",logo:n.PostgreSQL,name:"PostgreSQL",category:"db"}),e({slug:"firebase",color:"orange",description:"",logo:n.Firebase,name:"Firebase",category:"db"}),e({slug:"mongodb",color:"green",description:"",logo:n.MongoDB,name:"MongoDB",category:"db"}),e({slug:"redis",color:"red",description:"",logo:n.Redis,category:"db",name:"Redis"}),e({slug:"neo4j",color:"blue",description:"",logo:n.Neo4j,category:"db",name:"Neo4j"}),e({slug:"prisma",color:"darkcyan",description:F,logo:n.Prisma,name:"Prisma",category:"orm"}),e({slug:"drizzle",color:"darkcyan",description:_,logo:n.Drizzle,name:"Drizzle",category:"orm"}),e({slug:"docker",color:"blue",description:"",logo:n.Docker,name:"Docker",category:"devops"}),e({slug:"kubernetes",color:"purple",description:"",logo:n.Kubernetes,name:"Kubernetes",category:"devops"}),e({slug:"vite",color:"purple",description:"",logo:n.Vite,name:"Vite",category:"devtools"}),e({slug:"vitest",color:"green",description:"",logo:n.Vitest,name:"Vitest",category:"test"}),e({slug:"jest",color:"green",description:"",logo:n.Jest,name:"Jest",category:"test"}),e({slug:"playwright",color:"green",description:"",logo:n.Playwright,name:"Playwright",category:"test"}),e({slug:"html",color:"orange",description:"",logo:n.HTML,name:"HTML",category:"markup-style"}),e({slug:"css",color:"blue",description:"",logo:n.CSS,name:"CSS",category:"markup-style"}),e({slug:"postcss",color:"red",description:"",logo:n.Postcss,name:"PostCSS",category:"markup-style"}),e({slug:"unocss",color:"gray",description:"",logo:"https://unocss.dev/logo.svg",name:"UnoCSS",category:"markup-style"}),e({slug:"sass",color:"pink",description:"",logo:n.Sass,name:"Sass",category:"markup-style"}),e({slug:"tailwind",color:"cyan",description:"",logo:n.Tailwind,name:"Tailwind",category:"markup-style"}),e({slug:"ps",color:"cyan",description:"",logo:n.Photoshop,name:"Adobe Photoshop",category:"design"}),e({slug:"ae",color:"purple",description:"",logo:n.AfterEffects,name:"Adobe After Effects",category:"design"}),e({slug:"pp",color:"pink",description:"",logo:n.Premiere,name:"Adobe Premiere",category:"design"}),e({slug:"ai",color:"orange",description:"",logo:n.Illustrator,name:"Adobe Illustrator",category:"design"})],N="Skills",G=(...t)=>c.filter(i=>t.includes(i.slug)),V=t=>{const i=[],o=[];return c.forEach(r=>{if(t.trim()&&!r.name.toLowerCase().includes(t.trim().toLowerCase()))return;if(!r.category){o.push(r);return}let s=i.find(d=>{var l;return d.category.slug===((l=r.category)==null?void 0:l.slug)});s||(s={items:[],category:r.category},i.push(s)),s.items.push(r)}),o.length!==0&&i.push({category:{name:"Others",slug:"others"},items:o}),i};export{V as a,G as g,c as i,N as t};
