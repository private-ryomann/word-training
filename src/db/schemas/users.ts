import { pgTable, text, timestamp } from "drizzle-orm/pg-core";

/**
 * # 注意点
 * - defaultFnは実行時にDrizzle側で生成されるので、データを入れる際はDrizzleを使うこと
 *   @link(https://orm.drizzle.team/docs/column-types/pg#default-value)
 */
export const users = pgTable("user", {
	id: text("id")
		.primaryKey()
		.$defaultFn(() => crypto.randomUUID()),
	name: text("name"),
	email: text("email").unique(),
	emailVerified: timestamp("emailVerified", { mode: "date" }),
	image: text("image"),
});
