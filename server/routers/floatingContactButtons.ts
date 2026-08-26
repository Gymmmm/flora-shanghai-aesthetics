import { z } from "zod";
import { eq } from "drizzle-orm";
import { publicProcedure, router } from "../_core/trpc";
import { getDb } from "../db";
import { floatingContactButtons } from "../../drizzle/schema";

const createButtonSchema = z.object({
  platformType: z.string().min(1).max(40),
  iconUrl: z.string().url().max(500),
  linkUrl: z.string().url().max(500),
  displayText: z.string().max(100).optional(),
  tooltipText: z.string().max(200).optional(),
  isActive: z.boolean().default(true),
  sortOrder: z.number().int().default(0),
});

const updateButtonSchema = z.object({
  id: z.number().int().positive(),
  platformType: z.string().min(1).max(40).optional(),
  iconUrl: z.string().url().max(500).optional(),
  linkUrl: z.string().url().max(500).optional(),
  displayText: z.string().max(100).optional(),
  tooltipText: z.string().max(200).optional(),
  isActive: z.boolean().optional(),
  sortOrder: z.number().int().optional(),
});

export const floatingContactButtonsRouter = router({
  list: publicProcedure.query(async () => {
    const db = getDb();
    if (!db) return [];

    const buttons = await db
      .select()
      .from(floatingContactButtons)
      .where(eq(floatingContactButtons.isActive, 1))
      .orderBy(floatingContactButtons.sortOrder);

    return buttons;
  }),

  listAll: publicProcedure.query(async () => {
    const db = getDb();
    if (!db) return [];

    const buttons = await db
      .select()
      .from(floatingContactButtons)
      .orderBy(floatingContactButtons.sortOrder);

    return buttons;
  }),

  create: publicProcedure
    .input(createButtonSchema)
    .mutation(async ({ input }) => {
      const db = getDb();
      if (!db) throw new Error("Database not configured");

      const [button] = await db.insert(floatingContactButtons).values({
        platformType: input.platformType,
        iconUrl: input.iconUrl,
        linkUrl: input.linkUrl,
        displayText: input.displayText || null,
        tooltipText: input.tooltipText || null,
        isActive: input.isActive ? 1 : 0,
        sortOrder: input.sortOrder,
      });

      return { success: true, id: button.insertId };
    }),

  update: publicProcedure
    .input(updateButtonSchema)
    .mutation(async ({ input }) => {
      const db = getDb();
      if (!db) throw new Error("Database not configured");

      const updateData: any = {};
      if (input.platformType !== undefined) updateData.platformType = input.platformType;
      if (input.iconUrl !== undefined) updateData.iconUrl = input.iconUrl;
      if (input.linkUrl !== undefined) updateData.linkUrl = input.linkUrl;
      if (input.displayText !== undefined) updateData.displayText = input.displayText;
      if (input.tooltipText !== undefined) updateData.tooltipText = input.tooltipText;
      if (input.isActive !== undefined) updateData.isActive = input.isActive ? 1 : 0;
      if (input.sortOrder !== undefined) updateData.sortOrder = input.sortOrder;

      await db
        .update(floatingContactButtons)
        .set(updateData)
        .where(eq(floatingContactButtons.id, input.id));

      return { success: true };
    }),

  delete: publicProcedure
    .input(z.object({ id: z.number().int().positive() }))
    .mutation(async ({ input }) => {
      const db = getDb();
      if (!db) throw new Error("Database not configured");

      await db
        .delete(floatingContactButtons)
        .where(eq(floatingContactButtons.id, input.id));

      return { success: true };
    }),
});
