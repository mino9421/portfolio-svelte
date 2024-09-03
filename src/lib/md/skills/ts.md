# TypeScript

## Overview
TypeScript is a strongly typed programming language that builds on JavaScript by adding static type definitions. It allows developers to catch errors early in the development process, leading to more robust and maintainable code.

## My Experience with TypeScript
In the Deez social media platform, TypeScript played a crucial role in ensuring type safety across the entire stack. By using TypeScript, I was able to reduce runtime errors, improve code quality, and ensure a seamless development experience, particularly when working with complex data structures and APIs.

## Project-Specific Example
One of the key areas where TypeScript was invaluable was in defining the schema validation for emoji-only posts. By using TypeScript in conjunction with Zod, I was able to enforce strict type rules that ensured only valid emoji content could be posted.

```typescript
import { z } from 'zod';

const emojiPostSchema = z.string().regex(/^(\p{Emoji_Presentation}|\p{Emoji}\uFE0F)$/u, {
  message: "Posts can only contain emojis",
});

function createPost(content: string) {
  const validation = emojiPostSchema.safeParse(content);
  if (!validation.success) {
    throw new Error(validation.error.errors[0].message);
  }
  // Save the post to the database...
}
