import type { PropsWithChildren } from "react";
import { cn } from "~/lib/utils";

export default function DashboardLayout({
	children,
}: Readonly<PropsWithChildren>) {
	return (
		<>
			<main className={cn("min-h-screen")}>{children}</main>
		</>
	);
}
