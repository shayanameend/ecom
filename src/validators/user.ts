import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import type * as zod from "zod";
import { usersTable } from "~/models/user";

export const selectUserValidator = createSelectSchema(usersTable);
export const insertUserValidator = createInsertSchema(usersTable);

export type SelectUserType = zod.infer<typeof selectUserValidator>;
export type InsertUserType = zod.infer<typeof insertUserValidator>;
