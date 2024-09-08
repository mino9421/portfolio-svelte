import{A as e}from"./UIcon.9cc97ea2.js";import{g as t}from"./skills.38218306.js";const n=`# Dungeon Crawler Jam 2024: Nightmare of the Gazer

## Overview
"Nightmare of the Gazer" is a cosmic horror-themed dungeon crawler RPG developed for the Dungeon Crawler Jam 2024. Set in ancient ruins, the game immerses players in a chilling atmosphere of solitude and dread. With procedurally generated enemies and a rich array of gameplay elements, the game offers endless replayability.

## Key Features
- **Cosmic Horror Theme**: The game creates an eerie atmosphere, focusing on the unsettling and mysterious aspects of cosmic horror.
- **Procedurally Generated Enemies**: Experience dynamic and unpredictable challenges with enemies that are generated in real-time.
- **Extensive Skills System**: Developed a comprehensive skills system featuring over 40 unique skills and perks, allowing for deep character customization and strategic gameplay.
- **Diverse Abilities and Spells**: Players can access a broad range of abilities and spells, each contributing to different strategies and playstyles.
- **Multiple Classes and Races**: Choose from various classes and races, each with distinct attributes and abilities, adding to the game's replayability.

## Achievements
- **Ranking**: The game achieved #80 out of more than 300 submissions, highlighting its strong design and engaging gameplay.

## Development Focus
The project concentrated on crafting a haunting cosmic horror experience and developing a complex skills system. This involved:
- **Skills and Perks**: Implementing a detailed system with over 40 skills and perks, enhancing character progression and gameplay depth.
- **Procedural Generation**: Utilizing procedural generation to create varied and immersive gameplay environments and challenges.

## Play the Game
Experience "Nightmare of the Gazer" by following this [link](https://brineshrimp.itch.io/nightmare-of-the-gazer).

## Summary
"Nightmare of the Gazer" stands out for its atmospheric design, innovative skills system, and engaging cosmic horror elements. The game's success in the Dungeon Crawler Jam demonstrates its effective blend of immersive gameplay and complex character mechanics.

`,a=`# React.js (Social Media Clone)

## Overview
- This project is a social media platform where users communicate strictly through emojis, designed to offer a unique and minimalist form of expression.
- It’s built using the T3 stack, with modern tools and best practices, ensuring a scalable and maintainable codebase.

## Project: Deez (Emoji-Only Social Media Platform)
- **Role**: Full Stack Developer
- **Technologies Used**:
  - **React.js**: For building the user interface.
  - **tRPC**: To create end-to-end typesafe APIs and simplify communication between the client and server.
  - **Zustand**: State management tool for handling global state in a simple and scalable way.
  - **Clerk**: Used for fast and secure authentication, allowing users to sign up and log in with ease.
  - **Pico**: A lightweight, SQLite-based database, used for storing user messages (posts).
  - **Zod**: For schema validation, ensuring that posts and other data structures are properly validated before being processed.
  - **Drizzle**: ORM used for database interactions, making it easier to write and maintain database queries.
  - **TypeScript**: To enforce type safety across the entire stack, reducing runtime errors and improving development efficiency.
  - **Tailwind CSS**: For styling the application with a utility-first approach.
  - **Vercel**: Deployed the production-ready application on Vercel for fast and scalable hosting.

## Features
- **Emoji-Only Posts**: Users can create posts using emojis only, restricting text input to ensure the unique communication style.
- **Fast Authentication**: Integrated Clerk to provide a seamless and secure authentication experience with quick sign-ups and logins.
- **Real-Time Updates**: Utilized React.js with tRPC to enable real-time updates for emoji-based interactions.
- **Production-Ready**: The application is fully deployed on Vercel, demonstrating production-readiness and scalability.

## Challenges and Solutions
- **Challenge**: Ensuring that the posts are restricted to emojis only.
  - **Solution**: Implemented strict validation using Zod to check that the input only contains emojis before allowing a post to be created.
  
- **Challenge**: Managing the global state efficiently across different components.
  - **Solution**: Used Zustand for simple and effective state management, allowing the app to remain performant and easy to maintain.

- **Challenge**: Simplifying database interactions while maintaining flexibility.
  - **Solution**: Leveraged Drizzle ORM to write clean and maintainable queries, working seamlessly with Pico.

## Impact
- The project serves as a demonstration of modern full-stack development practices, showing proficiency in using the T3 stack, TypeScript, and production deployment on Vercel.
- This project highlights innovative use cases like emoji-only communication, which sets it apart from traditional social media platforms.

\`\`\`typescript
// Example code block - Zod schema for validating emoji-only posts
import { z } from 'zod';

const emojiPostSchema = z.string().regex(/^(\\p{Emoji_Presentation}|\\p{Emoji}\\uFE0F)$/u, {
  message: "Posts can only contain emojis",
});

// Function to validate and create a new post
function createPost(content: string) {
  const validation = emojiPostSchema.safeParse(content);
  if (!validation.success) {
    throw new Error(validation.error.errors[0].message);
  }
  // Code to save the post to the database...
}
`,i=`# Modular Portfolio Project

## Overview

This **Modular Portfolio Project** is built with **SvelteKit**, **TypeScript**, and **Tailwind CSS**, complemented by **Sass** and **UnoCSS** for additional styling options. The project is designed with a modular structure, making it highly customizable and easily expandable based on the user's needs.

## Project Structure

The portfolio's architecture is clean and well-organized, promoting maintainability and ease of use. Here's how it's structured:

- **Data Directory**: All essential information, such as skills, projects, experience, and education, resides in the \`data\` directory. Each file within this directory maps specific data to the corresponding Markdown (\`.md\`) files in the \`md\` directory.
  
- **Markdown Files**: The \`md\` directory contains Markdown files that represent different sections of the portfolio, such as projects, skills, experience, and education. This allows for easy updates and expansion by simply editing or adding new \`.md\` files.

- **Static Assets**: All static assets, including logos, background images, and other media, are stored in the \`static\` directory. This ensures that all resources are neatly organized and readily accessible.

## Key Features

- **Modular Design**: The portfolio is designed to be easily configurable. Users can expand it by adding or modifying skills, projects, experience, and education through Markdown files.

- **Customizable and Scalable**: With its modular structure, the portfolio can be tailored to meet the specific needs of different users, allowing for easy scaling and customization.

- **Clean Codebase**: The project follows best practices in code organization, making it easy to navigate and maintain.

## Technologies Used

- **SvelteKit**: The framework used to build the portfolio, ensuring a fast and responsive user experience.
- **TypeScript**: Provides type safety and enhances code quality.
- **Tailwind CSS**: Enables rapid UI development with utility-first CSS classes.
- **Sass**: Offers powerful CSS extensions for more flexible styling.
- **UnoCSS**: Adds further styling options with a highly customizable utility-first approach.

## Conclusion

This portfolio project provides a robust foundation for anyone looking to create a personalized and professional online presence. With its clean and modular structure, it simplifies the process of showcasing skills, projects, and experience, making it an ideal choice for developers and professionals alike.
`,s=`# Ultimate Texas Hold'em Poker Game

## Overview
Developed a poker game simulating Ultimate Texas Hold'em, where players compete against a dealer using Vue and Nuxt. The project features a complete game experience, including the ability to test various poker hands and ranks with Vitest.

## Technologies Used
- **Vue.js**: For building the user interface and game logic.
- **Nuxt.js**: Framework for server-side rendering and routing.
- **Vitest**: Used to run comprehensive test cases for poker hands and ranks.

## Key Features
- **Complete Game Simulation**: Play Ultimate Texas Hold'em against a dealer with realistic game mechanics.
- **Extensive Testing**: Ran Vitest to ensure accurate handling of all possible poker hands and ranks.

## Challenges and Solutions
- **Challenge**: Validating all possible poker hands and ranks.
  - **Solution**: Implemented comprehensive test cases using Vitest to cover all scenarios, ensuring accuracy and reliability.

## Impact
- Showcases proficiency in Vue and Nuxt for game development.
- Demonstrates the use of Vitest for robust testing and validation of game rules.
`,o=""+new URL("../assets/portfolio_1.4e77044e.png",import.meta.url).href,r=""+new URL("../assets/portfolio_2.de7ee586.png",import.meta.url).href,l=""+new URL("../assets/portfolio_3.a4923f07.png",import.meta.url).href,c=""+new URL("../assets/portfolio_4.c9a971d8.png",import.meta.url).href,d=""+new URL("../assets/gazer_1.367797c4.png",import.meta.url).href,m=""+new URL("../assets/gazer_2.e7e46c3e.png",import.meta.url).href,p=""+new URL("../assets/gazer_3.05daa496.png",import.meta.url).href,h=""+new URL("../assets/poker_1.61e376e1.png",import.meta.url).href,g=""+new URL("../assets/poker_2.36f24e0b.png",import.meta.url).href,u=""+new URL("../assets/poker_3.7c663427.png",import.meta.url).href,f=""+new URL("../assets/deez_1.6a2d2e1f.png",import.meta.url).href,y=""+new URL("../assets/deez_2.9f089698.png",import.meta.url).href,b=""+new URL("../assets/deez_3.0e428465.png",import.meta.url).href,k=[{slug:"portfolio-svelte",color:"#5e95e3",description:i,shortDescription:"A modular and customizable portfolio built with SvelteKit, TypeScript, and Tailwind CSS, allowing users to easily manage and expand their portfolio by adding skills, projects, experience, and education via Markdown files.",links:[{to:"https://github.com/mino9421/portfolio-svelte",label:"GitHub"},{to:"https://mino9421.github.io/portfolio-svelte",label:"Pages"}],logo:e.Svelte,name:"Slick Portfolio",period:{from:new Date(2024,8,25),to:new Date(2024,9,3)},skills:t("svelte","ts","js","tailwind","unocss","sass","node","html"),type:"Website Template",screenshots:[{label:"1",src:o},{label:"2",src:r},{label:"3",src:l},{label:"4",src:c}]},{slug:"deez",color:"#ff3e00",description:a,shortDescription:"A social media platform built with Next.js, tRPC, and Prisma, where users communicate solely through emojis. It features modern tools like Tailwind CSS, Drizzle, and NextAuth.js for a seamless and secure experience.",links:[{to:"https://github.com/mino9421/deez-book",label:"GitHub"},{to:"https://deez-book.vercel.app/",label:"Vercel"}],logo:e.ReactJs,name:"Deez",period:{from:new Date(2024,4,10),to:new Date(2024,4,20)},skills:t("reactjs","ts","js","tailwind","prisma","vite","trpc","drizzle"),type:"Website Template",screenshots:[{label:"1",src:f},{label:"2",src:y},{label:"3",src:b}]},{slug:"Gazer",color:"#ff3e00",description:n,shortDescription:"Semi-Procedural RPG Dungeon Crawler: Infinity",links:[{to:"https://brineshrimp.itch.io/nightmare-of-the-gazer",label:"itch.io"}],logo:e.Unity,name:"Gazer",period:{from:new Date(2024,3,22),to:new Date(2024,3,31)},skills:t("unity","csharp"),type:"Website Template",screenshots:[{label:"1",src:d},{label:"2",src:m},{label:"3",src:p}]},{slug:"Poker Ultimte Texas Hold'em",color:"#ff3e00",description:s,shortDescription:"Built with Vue.js and Nuxt.js, this Ultimate Texas Hold'em Poker game lets players compete against a computer dealer with realistic gameplay and dynamic betting rounds.",links:[{to:"https://github.com/mino9421/poker-vue",label:"GitHub"},{to:"https://poker-vue.vercel.app/",label:"Vercel"}],logo:e.Nuxt,name:"Poker Ultimte Texas Hold'em",period:{from:new Date(2024,8,1),to:new Date(2024,8,10)},skills:t("ts","vue","nuxt","tailwind","unocss","vite","vitest"),type:"Website Template",screenshots:[{label:"1",src:h},{label:"2",src:g},{label:"3",src:u}]}],S="Projects";export{k as i,S as t};
