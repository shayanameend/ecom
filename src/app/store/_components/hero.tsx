"use client";

import { useGSAP } from "@gsap/react";
import { default as gsap } from "gsap";
import { ShoppingCartIcon } from "lucide-react";
import { default as Link } from "next/link";
import { usePathname } from "next/navigation";
import { useRef } from "react";
import { Button } from "~/components/ui/button";
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "~/components/ui/sheet";
import { cn } from "~/lib/utils";

const featuredCollectionsLinks = [
	{
		label: "Belts",
		href: "/store",
	},
	{
		label: "Men's Wallets",
		href: "/store/products",
	},
	{
		label: "Luggage & Bags",
		href: "/store/products",
	},
	{
		label: "Splender Series",
		href: "/store/products",
	},
];

export function HeroSection() {
	const section = useRef(null);
	const pathname = usePathname();

	useGSAP(
		() => {
			const tl = gsap.timeline({
				defaults: {
					delay: 0.25,
					duration: 0.5,
					ease: "power4.out",
				},
			});

			tl.to(
				section.current,

				{
					scale: 1,
					padding: "0.5rem",
				},
			);

			tl.to("nav", {
				opacity: 1,
			});

			tl.to("#featured-collections-link", {
				delay: 0.15,
				opacity: 1,
				stagger: 0.1,
			});
		},
		{ scope: section },
	);

	return (
		<section ref={section} className={cn("h-screen scale-125")}>
			<div className={cn("h-full p-2 rounded-md bg-primary text-white")}>
				<nav className={cn("opacity-0 flex justify-between py-4 px-8")}>
					<h1 className={cn("text-3xl")}>Stichlore.</h1>
					<ul className={cn("flex gap-6 items-center")}>
						{featuredCollectionsLinks.map(({ label, href }) => (
							<li
								key={href}
								id="featured-collections-link"
								className={cn(
									"opacity-0 group flex gap-1 flex-col items-center text-lg",
								)}
							>
								<Link href={href}>{label}</Link>
								<span
									className={cn(
										"opacity-0 transition-all duration-500 w-1 h-1 bg-white rounded-full",
										pathname === href && "opacity-100",
										"group-hover:opacity-100",
									)}
								/>
							</li>
						))}
					</ul>
					<ul className={cn("flex gap-4 items-center")}>
						<li>
							<Button variant={"secondary"}>Shop Now</Button>
						</li>
						<li>
							<Sheet>
								<SheetTrigger asChild>
									<Button variant={"secondary"} size={"icon"}>
										<ShoppingCartIcon />
									</Button>
								</SheetTrigger>
								<SheetContent
									className={cn("border-0 rounded-l-md bg-primary text-white")}
								>
									<SheetHeader>
										<SheetTitle className={cn("text-white")}>
											<h1 className={cn("text-3xl")}>Stichlore.</h1>
										</SheetTitle>
									</SheetHeader>
								</SheetContent>
							</Sheet>
						</li>
					</ul>
				</nav>
			</div>
		</section>
	);
}
