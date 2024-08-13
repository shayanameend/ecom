import { defineConfig } from "drizzle-kit";
import { env } from "~/lib/env";

export default defineConfig({
	dialect: "sqlite",
	driver: "turso",
	schema: "./src/models/*",
	dbCredentials: {
		url: env.DATABASE_URL,
		authToken: env.DATABASE_AUTH_TOKEN,
	},
});
