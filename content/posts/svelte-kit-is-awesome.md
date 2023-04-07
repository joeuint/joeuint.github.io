---
title: "SvelteKit is Awesome!"
date: 2023-04-06T18:29:10-04:00
draft: false
---

I recently decided to finally try out a meta-framework. I chose SvelteKit as:

1. I already really loved Svelte
2. It recently came out of beta and would be fun to try out

Here is my experience with this framework!

## Starting Out

Starting a new project was quite simple. I just ran a command and chose all of my configurations like if I wanted Typescript, ESLint, etc. Once I had my setup I found a tutorial. But it turns out, SvelteKit recently completely overhauled the routing setup which means that I had to read the docs.

## The Docs

The docs were surprisingly helpful. It had almost everything I needed. I also used Typescript (for the hell of it) and it was a great experience. The docs had a switch that changed all of the code samples to Typescript which helped me a lot. These docs were some of the most helpful that I encountered.

## Creating my first app

After reading the documentation and building a sample app I got to work. I decided to build an app that pulled a user-created message from a database and showed it to the user. To create your message, you submit a form with the message's content. I thought it was simple enough and would teach me a lot of basic SvelteKit features. I also threw Prisma into the mix as I thought it would be nice to learn. I was expecting this to be an easy task I could complete in a couple of hours, but it was far from that.

## Difficulties

This plan did not go as smoothly as I imagined. My first issue was that Prisma kept throwing an error as it was running on the browser. I was confused as I could have sworn it was running on the `+page.ts` file. I will admit that this issue was my fault for not reading the documentation. I had to put it in a `+page.server.ts` file to run on the server. This somehow took me a day to figure out. Most of the errors I encountered after that were related to Typescript, which made sense as it was my first time using it seriously. Another drawback that I noticed was that the community support was not that good. Outside of the docs, there was nothing that could help me out. The posts were either outdated or non-existent.

## Conclusion

From this experience, I learned a lot of valuable skills that I could use in the future. I learned Typescript, SSR, and Prisma. This was not a painless experience, but it was an important one. I also enjoyed it a lot. As for SvelteKit, I hope more people adopt the technology as it would help with the issue of community support. Doing this was very worth it.

#### TL;DR: Using SvelteKit was a great experience, but the meta-framework lacks some community support.
