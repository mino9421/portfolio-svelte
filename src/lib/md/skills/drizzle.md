# Drizzle ORM

## Overview
Drizzle is a lightweight ORM designed to simplify database interactions while maintaining strong typing and flexibility. It provides a clean and intuitive API for building and executing SQL queries, making it easier to work with databases in TypeScript-based projects.

## My Experience with Drizzle
In the Deez social media platform, Drizzle ORM was essential in managing database operations. It allowed me to write clean and maintainable code for interacting with the SQLite database (Pico), ensuring that all queries were type-safe and optimized for performance.

## Project-Specific Example
One of the primary use cases for Drizzle in the Deez platform was storing and retrieving emoji-only posts. The ORM made it easy to define database schemas and execute queries without sacrificing type safety.

```typescript
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
