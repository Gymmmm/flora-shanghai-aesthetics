import { createExpressMiddleware } from "@trpc/server/adapters/express";
import { appRouter } from "../../server/routers";
import { createContext } from "../../server/_core/context";
import type { Request, Response } from "express";

// Vercel serverless function handler for tRPC
export default async function handler(req: Request, res: Response) {
  const expressHandler = createExpressMiddleware({
    router: appRouter,
    createContext,
  });

  return expressHandler(req, res);
}
