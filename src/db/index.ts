import serverEnv from "@/env/serverEnv";
import { drizzle } from "drizzle-orm/neon-http";
import * as eventTags from "./schemas/eventTags";
import * as events from "./schemas/events";
import * as tags from "./schemas/tags";

export const db = drizzle(serverEnv.DATABASE_URL, {
	schema: { ...events, ...tags, ...eventTags },
});
