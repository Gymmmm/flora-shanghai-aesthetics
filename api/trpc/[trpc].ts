import { fetchRequestHandler } from "@trpc/server/adapters/fetch";
import { appRouter } from "../../server/routers";
import type { VercelRequest, VercelResponse } from "@vercel/node";

// Vercel serverless function handler for tRPC
export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Convert Vercel request to Fetch API Request
  const url = new URL(req.url || '', `http://${req.headers.host}`);
  const fetchRequest = new Request(url, {
    method: req.method,
    headers: new Headers(req.headers as Record<string, string>),
    body: req.method !== 'GET' && req.method !== 'HEAD' ? JSON.stringify(req.body) : undefined,
  });

  const response = await fetchRequestHandler({
    endpoint: "/api/trpc",
    req: fetchRequest,
    router: appRouter,
    createContext: () => Promise.resolve({ req, res, user: null }),
  });

  // Convert Fetch Response back to Vercel response
  res.status(response.status);
  response.headers.forEach((value, key) => {
    res.setHeader(key, value);
  });

  const body = await response.text();
  res.send(body);
}
