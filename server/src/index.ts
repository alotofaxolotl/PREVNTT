import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

// Entry point of the server
async function main() {
  app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
  });
}

// Run the server, and then do some cleanup for prisma
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })