import * as zod from "zod";
import { NodeEnvironment } from "~/lib/types";

export const envSchema = zod.object({
	NODE_ENV: zod.enum([NodeEnvironment.Development, NodeEnvironment.Production]),
	DATABASE_URL: zod.string().url(),
	DATABASE_AUTH_TOKEN: zod.string(),
});

export type Env = zod.infer<typeof envSchema>;

export const env = envSchema.parse(process.env);
