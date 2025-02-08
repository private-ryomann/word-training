import { integer, pgTable, primaryKey, timestamp } from "drizzle-orm/pg-core";
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
