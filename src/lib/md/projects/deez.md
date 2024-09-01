https://github.com/mino9421/deez-book

# The T3 Stack

The **T3 Stack** is a web development stack created by Theo focused on simplicity, modularity, and full-stack typesafety. It includes:

- **Next.js**
- **tRPC**
- **Tailwind CSS**
- **TypeScript**
- **Prisma**
- **Drizzle**
- **NextAuth.js**

## What is `create-t3-app`? A Template?

Kind of. `create-t3-app` is a CLI tool developed by experienced T3 Stack developers to streamline the setup of a modular T3 Stack application. Unlike traditional templates, `create-t3-app` generates a project structure based on your specific needs, allowing you to choose the components that are most relevant to your project.

After working on countless projects and gathering years of experience with this technology, we've formed strong opinions and insights, which we've encoded into this CLI.

### Not an All-Inclusive Template

This is NOT an all-inclusive template. We expect you to bring your own libraries that solve the needs of YOUR application. While we don’t prescribe solutions to more specific problems like state management and deployment, we do have some recommendations listed here.

## T3 Axioms

The T3 Stack is built on a set of core beliefs that guide our decisions. We call these the **T3 Axioms**:

### 1. Solve Problems

It's easy to fall into the trap of "adding everything." We explicitly avoid that. Everything added to `create-t3-app` solves a specific problem within the core technologies included. For example, we won't include state management libraries like Zustand or Redux, but we will integrate **NextAuth.js**, **Prisma**, and **tRPC** to solve common authentication and data handling challenges.

### 2. Bleed Responsibly

We love bleeding-edge technology. The speed and fun that come with new tech are genuinely exciting. However, we believe in "bleeding responsibly." This means using riskier tech in safer areas. For instance, we wouldn’t bet on risky new database tech (SQL is great!), but we happily use **tRPC** since it's just functions that are easy to refactor or replace.

### 3. Typesafety Isn't Optional

The main goal of `create-t3-app` is to provide the quickest way to start a new full-stack, typesafe web application. We take typesafety very seriously as it improves our productivity and helps us ship fewer bugs. Any decision that compromises the typesafe nature of `create-t3-app` is a decision that should be made in a different project.
