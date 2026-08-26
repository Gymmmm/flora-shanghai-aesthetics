import { describe, expect, it } from "vitest";
import { appRouter } from "./routers";

const ctx = { user: null, req: {} as never, res: { clearCookie: () => undefined } as never } as never;
const validPayload = {
  fullName: "Aisha Example", country: "Malaysia", age: 31, email: "aisha@example.com", whatsapp: "+60123456789", preferredLanguage: "English", procedureSlug: "rhinoplasty", mainConcern: "I would like to understand the questions to bring to a rhinoplasty consultation.", previousProcedures: "", preferredAesthetic: "Natural and proportionate", estimatedBudget: "", expectedTravelDate: "", canTravelToShanghai: true, consent: true as const,
  attribution: { source: "test", utm_source: "", utm_medium: "", utm_campaign: "", utm_content: "", landing_page: "/consultation", referrer: "", created_at: new Date().toISOString() }, honeypot: "", photoNames: [],
};

describe("consultation workflow", () => {
  it("returns a safe upload policy with uploads disabled by default", async () => {
    const result = await appRouter.createCaller(ctx).consultation.uploadPolicy();
    expect(result.enabled).toBe(false);
    expect(result.reason).toContain("Secure patient upload");
  });

  it("accepts a valid inquiry in local mode without requiring a database", async () => {
    const previous = process.env.DATABASE_URL;
    process.env.DATABASE_URL = "";
    const result = await appRouter.createCaller(ctx).consultation.submit(validPayload);
    process.env.DATABASE_URL = previous;
    expect(result.accepted).toBe(true);
    expect(result.leadId).toMatch(/^lead_/);
  });

  it("rejects a bot honeypot value", async () => {
    await expect(appRouter.createCaller(ctx).consultation.submit({ ...validPayload, honeypot: "bot" })).rejects.toThrow();
  });
});
