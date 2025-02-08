import { pgTable, serial, timestamp, varchar } from "drizzle-orm/pg-core";

export const tags = pgTable("tag", {
	id: serial("id").primaryKey(),
	name: varchar("name", { length: 255 }).notNull(),
	color: varchar("color", { length: 255 }).notNull(),
	createdAt: timestamp("createdAt").notNull().defaultNow(),
	updatedAt: timestamp("updatedAt").notNull().defaultNow(),
});
