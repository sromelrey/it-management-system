import { NextResponse } from "next/server";

import { SESSION_COOKIE } from "@/lib/auth/session";

export function proxy(request: Request) {
  const url = new URL(request.url);

  const session = request.headers.get("cookie")?.includes(`${SESSION_COOKIE}=`);

  const isLoginPage = url.pathname === "/login";
  const isProtectedRoute = url.pathname.startsWith("/dashboard");

  // Redirect unauthenticated users to login.
  if (isProtectedRoute && !session) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // Redirect authenticated users away from login.
  if (isLoginPage && session) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/login", "/dashboard/:path*"],
};
