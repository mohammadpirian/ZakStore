import { URL } from "next/dist/compiled/@edge-runtime/primitives/url";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("adminToken")?.value;
  const usertoken = request.cookies.get("userToken")?.value;

  if (request.nextUrl.pathname.startsWith("/loginAdmin")) {
    if (token && token !== "undefined")
      return NextResponse.redirect(new URL("/admin", request.url));
  }

  if (request.nextUrl.pathname.startsWith("/loginUser")) {
    if (usertoken && usertoken !== "undefined")
      return NextResponse.redirect(new URL("/payment", request.url));
  }

  if (request.nextUrl.pathname.startsWith("/payment")) {
    if (!usertoken) return NextResponse.redirect(new URL("/cart", request.url));
  }
  if (request.nextUrl.pathname.startsWith("/admin")) {
    if (!token) return NextResponse.redirect(new URL("/", request.url));
  }

  NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/loginAdmin", "/payment", "/loginUser"],
};
