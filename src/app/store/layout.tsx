import type { PropsWithChildren } from "react";

export default function StoreLayout({ children }: Readonly<PropsWithChildren>) {
	return (
		<>
			<main>{children}</main>
		</>
	);
}
