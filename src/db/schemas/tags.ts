import { relations } from "drizzle-orm";
import { pgTable, serial, timestamp, varchar } from "drizzle-orm/pg-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import type { z } from "zod";
import { eventTags } from "./eventTags";

export const tags = pgTable("tag", {
	id: serial("id").primaryKey(),
	name: varchar("name", { length: 255 }).notNull(),
	color: varchar("color", { length: 255 }).notNull(),
	createdAt: timestamp("createdAt").notNull().defaultNow(),
	updatedAt: timestamp("updatedAt").notNull().defaultNow(),
});

export const tagsRelations = relations(tags, ({ many }) => ({
	eventTags: many(eventTags),
}));

export const selectTagSchema = createSelectSchema(tags);
export type selectTag = z.infer<typeof selectTagSchema>;

export const insertTagSchema = createInsertSchema(tags);
export type insertEventTag = z.infer<typeof insertTagSchema>;
