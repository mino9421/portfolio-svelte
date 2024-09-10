import{A as e}from"./UIcon.e734038b.js";import{g as n}from"./skills.04bf8dfa.js";const t=`# Dungeon Crawler Jam 2024: Nightmare of the Gazer

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
`,o=`# Let's write the provided content to a markdown file.

content = """
# Vue Soccer Web App

## Overview
This web application is designed to provide real-time soccer information, including league standings, match results, and upcoming games. Built using Vue.js and integrating with the Soccer API, the app offers users a seamless experience in browsing data for various soccer leagues. It showcases current, past, and future match results and statistics for each team and league. 

The project is currently a work in progress, with continuous improvements being made to enhance the presentation and filtering of data, ensuring a more refined user experience.

## Technologies Used
- **Vue.js**: Core framework for building the frontend and handling user interactions.
- **Vue Router**: For navigating through different views like league standings, game schedules, and results.
- **Soccer API**: The backend service providing live and historical data about leagues, matches, and teams.
- **Axios**: For handling API requests and fetching data from the Soccer API.

## Key Features
- **League Standings**: Displays up-to-date league standings for multiple soccer leagues, showing team rankings, points, and statistics.
- **Match Information**: View upcoming, live, and past match results, including detailed game stats like goals, red cards, and assists.
- **Filtering Options**: Users can filter matches by league, date, and type (e.g., upcoming, ongoing, completed).
- **Real-Time Data**: The application integrates real-time data updates, ensuring users always see the latest scores and standings.

## Work in Progress
- **Enhanced UI Design**: Current development is focused on improving the visual presentation of the data, making it more engaging and intuitive for users.
- **Advanced Filtering**: Plans to implement additional filtering capabilities, such as sorting by specific teams, match locations, and detailed stats.
- **Future Features**:
  - **Team Profiles**: Adding detailed team and player profiles, allowing users to explore individual team statistics, key players, and historical performance.
  - **User Personalization**: Enabling users to select favorite leagues and teams for a more tailored viewing experience.
  - **Mobile Optimization**: Improving the layout and performance on mobile devices to ensure accessibility across all platforms.

## Challenges and Solutions
- **Challenge**: Fetching and managing large sets of data from multiple leagues.
  - **Solution**: Optimized API requests with Axios to fetch only the relevant data when needed, reducing load times and improving performance.

- **Challenge**: Displaying complex soccer data in a user-friendly manner.
  - **Solution**: Applied Vue.js for efficient state management and conditional rendering, making the interface responsive and intuitive.

## Impact
- Demonstrates proficiency in using Vue.js and integrating third-party APIs, showcasing skills in building dynamic, real-time web applications.
- Highlights ongoing development efforts, reflecting adaptability in handling live data and improving the application over time.

## Summary
The Vue Soccer Web App is an evolving project that brings live soccer data to users in an organized and visually appealing format. With plans for further UI enhancements and more robust filtering options, the application demonstrates a commitment to quality and continuous improvement.
"""

# Save the content to a markdown file
file_path = '/mnt/data/vue_soccer_web_app.md'
with open(file_path, 'w') as file:
    file.write(content)

file_path
`,r=""+new URL("../assets/portfolio_1.4e77044e.png",import.meta.url).href,l=""+new URL("../assets/portfolio_2.de7ee586.png",import.meta.url).href,c=""+new URL("../assets/portfolio_3.a4923f07.png",import.meta.url).href,d=""+new URL("../assets/portfolio_4.c9a971d8.png",import.meta.url).href,m=""+new URL("../assets/gazer_1.367797c4.png",import.meta.url).href,p=""+new URL("../assets/gazer_2.e7e46c3e.png",import.meta.url).href,g=""+new URL("../assets/gazer_3.05daa496.png",import.meta.url).href,u=""+new URL("../assets/poker_1.61e376e1.png",import.meta.url).href,h=""+new URL("../assets/poker_2.36f24e0b.png",import.meta.url).href,f=""+new URL("../assets/poker_3.7c663427.png",import.meta.url).href,b=""+new URL("../assets/deez_1.6a2d2e1f.png",import.meta.url).href,y=""+new URL("../assets/deez_2.9f089698.png",import.meta.url).href,w=""+new URL("../assets/deez_3.0e428465.png",import.meta.url).href,v=""+new URL("../assets/football_1.dd9fdbae.png",import.meta.url).href,k=""+new URL("../assets/football_2.1c37a622.png",import.meta.url).href,S=""+new URL("../assets/football_3.f1cdf647.png",import.meta.url).href,z=[{slug:"portfolio-svelte",color:"#5e95e3",description:i,shortDescription:"A modular and customizable portfolio built with SvelteKit, TypeScript, and Tailwind CSS, allowing users to easily manage and expand their portfolio by adding skills, projects, experience, and education via Markdown files.",links:[{to:"https://github.com/mino9421/portfolio-svelte",label:"GitHub"},{to:"https://mino9421.github.io/portfolio-svelte",label:"Pages"}],logo:e.Svelte,name:"Slick Portfolio",period:{from:new Date(2024,8,25),to:new Date(2024,9,3)},skills:n("svelte","ts","js","tailwind","unocss","sass","node","html"),type:"Website Template",screenshots:[{label:"1",src:r},{label:"2",src:l},{label:"3",src:c},{label:"4",src:d}]},{slug:"deez",color:"#ff3e00",description:a,shortDescription:"A social media platform built with Next.js, tRPC, and Prisma, where users communicate solely through emojis. It features modern tools like Tailwind CSS, Drizzle, and NextAuth.js for a seamless and secure experience.",links:[{to:"https://github.com/mino9421/deez-book",label:"GitHub"},{to:"https://deez-book.vercel.app/",label:"Vercel"}],logo:e.ReactJs,name:"Deez",period:{from:new Date(2024,4,10),to:new Date(2024,4,20)},skills:n("reactjs","ts","js","tailwind","prisma","vite","trpc","drizzle"),type:"Social Media",screenshots:[{label:"1",src:b},{label:"2",src:y},{label:"3",src:w}]},{slug:"Sports League",color:"#ff3e00",description:o,shortDescription:"A sports league platform built with Nuxt.js, Vue, and Tailwind CSS, providing real-time standings, match schedules, and statistics for soccer leagues. It integrates cutting-edge tools like UnoCSS, Chart.js, and Supabase for a smooth and data-driven experience.",links:[{to:"https://github.com/mino9421/sports-league-ui",label:"GitHub"},{to:"https://sports-league-ui.vercel.app/",label:"Vercel"}],logo:e.VueJs,name:"Sports League",period:{from:new Date(2024,9,1),to:new Date(2024,9,5)},skills:n("vue","ts","js","tailwind","prisma","vite","vite","unocss","express"),type:"Data-Driven Application",screenshots:[{label:"1",src:v},{label:"2",src:k},{label:"3",src:S}]},{slug:"Poker Ultimte Texas Hold'em",color:"#ff3e00",description:s,shortDescription:"Built with Vue.js and Nuxt.js, this Ultimate Texas Hold'em Poker game lets players compete against a computer dealer with realistic gameplay and dynamic betting rounds.",links:[{to:"https://github.com/mino9421/poker-vue",label:"GitHub"},{to:"https://poker-vue.vercel.app/",label:"Vercel"}],logo:e.Nuxt,name:"Poker Ultimte Texas Hold'em",period:{from:new Date(2024,8,1),to:new Date(2024,8,10)},skills:n("ts","vue","nuxt","tailwind","unocss","vite","vitest"),type:"Browser-Based Poker Game",screenshots:[{label:"1",src:u},{label:"2",src:h},{label:"3",src:f}]},{slug:"Gazer",color:"#ff3e00",description:t,shortDescription:"Semi-Procedural RPG Dungeon Crawler: Infinity",links:[{to:"https://github.com/GixGosu/DungeonCrawler2024",label:"GitHub"},{to:"https://brineshrimp.itch.io/nightmare-of-the-gazer",label:"itch.io"}],logo:e.Unity,name:"Gazer",period:{from:new Date(2024,3,22),to:new Date(2024,3,31)},skills:n("unity","csharp"),type:"Dungeon Crawler Game",screenshots:[{label:"1",src:m},{label:"2",src:p},{label:"3",src:g}]}],x="Projects";export{z as i,x as t};
