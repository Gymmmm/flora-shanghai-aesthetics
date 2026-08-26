import { createExpressMiddleware } from "@trpc/server/adapters/express";
import { appRouter } from "../../server/routers";
import { createContext } from "../../server/_core/context";
import type { VercelRequest, VercelResponse } from "@vercel/node";

// Vercel serverless function handler for tRPC
export default async function handler(req: VercelRequest, res: VercelResponse) {
  const expressHandler = createExpressMiddleware({
    router: appRouter,
    createContext,
  });

  return expressHandler(req as any, res as any);
}
