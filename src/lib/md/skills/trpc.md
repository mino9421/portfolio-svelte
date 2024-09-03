# tRPC

## Overview
tRPC is a powerful library that allows you to build end-to-end type-safe APIs with TypeScript. It simplifies the process of connecting the client and server, enabling full-stack applications to have shared types and validation, which reduces errors and improves developer productivity.

## My Experience with tRPC
In the Deez social media platform, tRPC was integral in creating a seamless communication layer between the frontend and backend. By using tRPC, I was able to define APIs that were strongly typed, ensuring that both the client and server had a consistent understanding of the data structures and operations involved.

## Project-Specific Example
A critical part of the Deez application was the real-time updates of emoji-only posts. tRPC made it easy to create a type-safe API for fetching and posting data, which was then consumed by the React frontend.

```typescript
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
      content: z.string().regex(/^(\p{Emoji_Presentation}|\p{Emoji}\uFE0F)$/u),
    }),
    async resolve({ input, ctx }) {
      return await ctx.prisma.post.create({
        data: {
          content: input.content,
        },
      });
    },
  });
