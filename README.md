# PREVNTT
The stack I use for creating full-stack web applications.

## The Stack

* Prisma
* React
* Express
* Vite
* Node
* Typescript
* Tailwind

## Getting Started

Once you've downloaded the starting project, the first thing to do is install all dependencies. You can do that by running `npm i` inside both `client/` and `server/`.

Next, inside of `server/` you'll want to get Prisma set up. In `schema.prisma`, set `provider` to your database provider of choice. By default it is `sqlite`.

Next, run `npx prisma migrate dev --name init` to create your database and the Prisma client.

Start the client and server with `npm run dev` or `npm run start`.