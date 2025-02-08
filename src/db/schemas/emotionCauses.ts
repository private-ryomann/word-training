import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";
import { events } from "./events";

export const emotionCases = pgTable("emotionCause", {
	id: serial("id").primaryKey(),
	eventId: serial("eventId")
		.references(() => events.id)
		.notNull(),
	cause: text("cause").notNull(),
	createdAt: timestamp("createdAt").notNull().defaultNow(),
	updatedAt: timestamp("updatedAt").notNull().defaultNow(),
});
