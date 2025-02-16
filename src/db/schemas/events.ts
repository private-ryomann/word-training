import { relations } from "drizzle-orm";
import {
	pgEnum,
	pgTable,
	serial,
	text,
	timestamp,
	varchar,
} from "drizzle-orm/pg-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import type { z } from "zod";
import { eventTags } from "./eventTags";
import { users } from "./users";

export const eventStatus = pgEnum("status", ["pending", "finished"]);

export const events = pgTable("event", {
	id: serial("id").primaryKey(),
	userId: text("userId")
		.references(() => users.id)
		.notNull(),
	title: varchar({ length: 255 }).notNull(),
	background: text("background").notNull(),
	description: text("description").notNull(),
	occurredAt: timestamp("occurredAt").notNull(),
	emotion: text("emotion").notNull(),
	status: eventStatus().notNull(),
	createdAt: timestamp("createdAt").notNull().defaultNow(),
	updatedAt: timestamp("updatedAt").notNull().defaultNow(),
});

export const eventsRelations = relations(events, ({ many }) => ({
	eventTags: many(eventTags),
}));

export const selectEventSchema = createSelectSchema(events);
export type selectEvent = z.infer<typeof selectEventSchema>;

export const insertEventSchema = createInsertSchema(events);
export type insertEvent = z.infer<typeof insertEventSchema>;

export const EventStatusSchema = createSelectSchema(eventStatus);
