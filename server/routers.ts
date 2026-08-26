import { z } from "zod";
import { nanoid } from "nanoid";
import { COOKIE_NAME } from "@shared/const";
import { crmPipelineStatuses } from "../client/src/data/site";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";
import { createLead } from "./db";
import { floatingContactButtonsRouter } from "./routers/floatingContactButtons";
import type { ConsultationPayload } from "../shared/lead";

const attributionSchema = z.object({ source: z.string().max(120), utm_source: z.string().max(120), utm_medium: z.string().max(120), utm_campaign: z.string().max(160), utm_content: z.string().max(160), landing_page: z.string().max(500), referrer: z.string().max(500), created_at: z.string().datetime() });
const consultationSchema = z.object({
  fullName: z.string().trim().min(2).max(160), country: z.string().trim().min(2).max(120), age: z.number().int().min(18).max(100).nullable(), email: z.string().email().max(320), whatsapp: z.string().max(80), preferredLanguage: z.string().min(2).max(40), procedureSlug: z.string().regex(/^[a-z0-9-]+$/).max(100), mainConcern: z.string().trim().min(10).max(5000), previousProcedures: z.string().max(5000), preferredAesthetic: z.string().max(2000), estimatedBudget: z.string().max(120), expectedTravelDate: z.string().max(40), canTravelToShanghai: z.boolean(), consent: z.literal(true), attribution: attributionSchema, honeypot: z.string().max(0).optional(), photoNames: z.array(z.string().max(255)).max(5),
});

const attempts = new Map<string, { count: number; resetAt: number }>();
const adapter = { async submit(payload: ConsultationPayload, publicId: string) { return createLead(payload, publicId); } };

export const appRouter = router({
  system: systemRouter,
  floatingContactButtons: floatingContactButtonsRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => { const cookieOptions = getSessionCookieOptions(ctx.req); ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 }); return { success: true } as const; }),
  }),
  consultation: router({
    uploadPolicy: publicProcedure.query(() => ({ enabled: false, mode: process.env.CONSULTATION_STORAGE_MODE || "disabled", reason: "Secure patient upload is disabled until encrypted storage, signed URLs, access control, expiration, and deletion policy are configured." })),
    pipelineStatuses: publicProcedure.query(() => crmPipelineStatuses),
    submit: publicProcedure.input(consultationSchema).mutation(async ({ input }) => {
      const now = Date.now(); const key = input.email.toLowerCase(); const previous = attempts.get(key);
      if (previous && previous.resetAt > now && previous.count >= 3) throw new Error("Too many submissions. Please try again later.");
      attempts.set(key, previous && previous.resetAt > now ? { count: previous.count + 1, resetAt: previous.resetAt } : { count: 1, resetAt: now + 60 * 60 * 1000 });
      const publicId = `lead_${nanoid(12)}`;
      const result = await adapter.submit(input as ConsultationPayload, publicId);
      if (result.mode === "local") console.info("[Consultation local mode]", { publicId, emailDomain: input.email.split("@")[1], procedureSlug: input.procedureSlug, attribution: input.attribution });
      return { accepted: true, leadId: publicId, mode: result.mode, message: result.mode === "database" ? "Your inquiry has been received for review." : "Local mode received the inquiry without persisting patient data." } as const;
    }),
  }),
});

export type AppRouter = typeof appRouter;
