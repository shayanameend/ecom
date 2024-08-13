"use server";

import { db } from "~/lib/db";
import { usersTable } from "~/models/user";

export const doSmth = async () => {
	await db.insert(usersTable).values({
		name: "John Doe",
	});

	const users = await db
		.select({
			name: usersTable.name,
		})
		.from(usersTable);

	return users;
};
