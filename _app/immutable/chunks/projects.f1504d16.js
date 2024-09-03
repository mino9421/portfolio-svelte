import{A as e}from"./UIcon.4047acf2.js";import{g as t}from"./skills.4fc447f2.js";const i=`Developed for Dungeon Crawler Jam 2024, this game is a cosmic horror-themed RPG set within ancient ruins, designed to evoke feelings of solitude and dread. The gameplay features procedurally generated enemies, along with diverse abilities, spells, classes, and races, offering endless replayability. Out of 167 entries, we ranked #80, focusing on the eerie atmosphere of cosmic horror and the mystique of ancient ruins to create a uniquely haunting experience.


#### Try The Link Below To Play The Game:

https://brineshrimp.itch.io/nightmare-of-the-gazer`,o=`https://github.com/mino9421/deez-book

# The T3 Stack

The **T3 Stack** is a web development stack created by Theo focused on simplicity, modularity, and full-stack typesafety. It includes:

- **Next.js**
- **tRPC**
- **Tailwind CSS**
- **TypeScript**
- **Prisma**
- **Drizzle**
- **NextAuth.js**

## What is \`create-t3-app\`? A Template?

Kind of. \`create-t3-app\` is a CLI tool developed by experienced T3 Stack developers to streamline the setup of a modular T3 Stack application. Unlike traditional templates, \`create-t3-app\` generates a project structure based on your specific needs, allowing you to choose the components that are most relevant to your project.

After working on countless projects and gathering years of experience with this technology, we've formed strong opinions and insights, which we've encoded into this CLI.

### Not an All-Inclusive Template

This is NOT an all-inclusive template. We expect you to bring your own libraries that solve the needs of YOUR application. While we don’t prescribe solutions to more specific problems like state management and deployment, we do have some recommendations listed here.

## T3 Axioms

The T3 Stack is built on a set of core beliefs that guide our decisions. We call these the **T3 Axioms**:

### 1. Solve Problems

It's easy to fall into the trap of "adding everything." We explicitly avoid that. Everything added to \`create-t3-app\` solves a specific problem within the core technologies included. For example, we won't include state management libraries like Zustand or Redux, but we will integrate **NextAuth.js**, **Prisma**, and **tRPC** to solve common authentication and data handling challenges.

### 2. Bleed Responsibly

We love bleeding-edge technology. The speed and fun that come with new tech are genuinely exciting. However, we believe in "bleeding responsibly." This means using riskier tech in safer areas. For instance, we wouldn’t bet on risky new database tech (SQL is great!), but we happily use **tRPC** since it's just functions that are easy to refactor or replace.

### 3. Typesafety Isn't Optional

The main goal of \`create-t3-app\` is to provide the quickest way to start a new full-stack, typesafe web application. We take typesafety very seriously as it improves our productivity and helps us ship fewer bugs. Any decision that compromises the typesafe nature of \`create-t3-app\` is a decision that should be made in a different project.
`,n=`# Modular Portfolio Project

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
`,s=""+new URL("../assets/portfolio_1.4e77044e.png",import.meta.url).href,a=""+new URL("../assets/portfolio_2.de7ee586.png",import.meta.url).href,r=""+new URL("../assets/portfolio_3.a4923f07.png",import.meta.url).href,l=""+new URL("../assets/portfolio_4.c9a971d8.png",import.meta.url).href,c=""+new URL("../assets/gazer_1.367797c4.png",import.meta.url).href,d=""+new URL("../assets/gazer_2.e7e46c3e.png",import.meta.url).href,p=""+new URL("../assets/gazer_3.05daa496.png",import.meta.url).href,u=[{slug:"portfolio-svelte",color:"#5e95e3",description:n,shortDescription:"A modular and customizable portfolio built with SvelteKit, TypeScript, and Tailwind CSS, allowing users to easily manage and expand their portfolio by adding skills, projects, experience, and education via Markdown files.",links:[{to:"https://github.com/mino9421/portfolio-svelte",label:"GitHub"}],logo:e.Svelte,name:"Slick Portfolio",period:{from:new Date},skills:t("svelte","ts","js","tailwind","unocss","sass","node","html"),type:"Website Template",screenshots:[{label:"1",src:s},{label:"2",src:a},{label:"3",src:r},{label:"4",src:l}]},{slug:"deez",color:"#ff3e00",description:o,shortDescription:"A social media platform built with Next.js, tRPC, and Prisma, where users communicate solely through emojis. It features modern tools like Tailwind CSS, Drizzle, and NextAuth.js for a seamless and secure experience.",links:[{to:"https://github.com/mino9421/deez-book",label:"GitHub"}],logo:e.ReactJs,name:"Deez",period:{from:new Date},skills:t("reactjs","ts","js","tailwind","prisma","vite","trpc","drizzle"),type:"Website Template"},{slug:"Gazer",color:"#ff3e00",description:i,shortDescription:"Semi-Procedural RPG Dungeon Crawler: Infinity",links:[{to:"https://brineshrimp.itch.io/nightmare-of-the-gazer",label:"itch.io"}],logo:e.Unity,name:"Gazer",period:{from:new Date},skills:t("unity","csharp"),type:"Website Template",screenshots:[{label:"1",src:c},{label:"2",src:d},{label:"3",src:p}]}],f="Projects";export{u as i,f as t};
