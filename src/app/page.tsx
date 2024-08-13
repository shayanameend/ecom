"use client";

import { useEffect, useState } from "react";
import { Button } from "~/components/ui/button";
import { doSmth } from "~/server/doSmth";

export default function HomePage() {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		(async () => {
			const fetchedUsers = await doSmth();
			setUsers(fetchedUsers);
		})();
	}, []);

	return (
		<main>
			<article>{JSON.stringify(users, null, 2)}</article>
			<Button>Click me</Button>
		</main>
	);
}
