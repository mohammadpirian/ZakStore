import { URL } from "next/dist/compiled/@edge-runtime/primitives/url";
import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextResponse) {
  const token = request.cookies.get("adminToken")?.value;
  if (!token) return NextResponse.redirect(new URL("/", request.url));
  NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
