import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
	if (request.nextUrl.pathname === "/") {
		return NextResponse.redirect(new URL("/store", request.url));
	}

	return NextResponse.next();
}

export const config = {
	matcher: "/",
};
