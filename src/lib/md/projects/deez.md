# React.js (Social Media Clone)

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

```typescript
// Example code block - Zod schema for validating emoji-only posts
import { z } from 'zod';

const emojiPostSchema = z.string().regex(/^(\p{Emoji_Presentation}|\p{Emoji}\uFE0F)$/u, {
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
