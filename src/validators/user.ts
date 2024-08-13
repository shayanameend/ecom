import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import type * as zod from "zod";
import { usersTable } from "~/models/user";

export const selectUserValidator = createSelectSchema(usersTable);
export const insertUserValidator = createInsertSchema(usersTable);

export type SelectUser = zod.infer<typeof selectUserValidator>;
export type InsertUser = zod.infer<typeof insertUserValidator>;
