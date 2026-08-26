import { createExpressMiddleware } from "@trpc/server/adapters/express";
import { appRouter } from "../routers";
import { createContext } from "./context";
import type { Request, Response } from "express";

// Vercel serverless function handler for tRPC
export default async function handler(req: Request, res: Response) {
  const expressHandler = createExpressMiddleware({
    router: appRouter,
    createContext,
  });

  return expressHandler(req, res);
}
