import { relations } from "drizzle-orm";
import { integer, pgTable, primaryKey, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import type { z } from "zod";
import { events } from "./events";
import { tags } from "./tags";

export const eventTags = pgTable(
	"eventTag",
	{
		eventId: integer("eventId").references(() => events.id),
		tagId: integer("tagId").references(() => tags.id),
		createdAt: timestamp("createdAt").notNull().defaultNow(),
		updatedAt: timestamp("updatedAt").notNull().defaultNow(),
	},
	(table) => {
		return {
			pk: primaryKey({ columns: [table.eventId, table.tagId] }),
		};
	},
);

export const eventTagsRelations = relations(eventTags, ({ one }) => ({
	event: one(events, {
		fields: [eventTags.eventId],
		references: [events.id],
	}),
	tag: one(tags, {
		fields: [eventTags.tagId],
		references: [tags.id],
	}),
}));

export const selectEventTagSchema = createSelectSchema(eventTags);
export type selectEventTag = z.infer<typeof selectEventTagSchema>;

export const insertEventTagSchema = createInsertSchema(eventTags);
export type insertEventTag = z.infer<typeof insertEventTagSchema>;
