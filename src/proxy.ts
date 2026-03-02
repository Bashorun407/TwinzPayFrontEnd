import type { NextURL } from "next/dist/server/web/next-url";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
    "/(admin)/:path*",
    "/(auth)/:path*",
    "/(dashboard)/:path*",
  ],
  name: "auth-proxy",
};

const PROTECTED_ROUTES = ["/admin", "/overview", "/bills", "/payments", "/beneficiaries", "/scheduled", "/settings"];
const AUTH_ROUTES = ["/", "/signup", "/forgot-password", "/reset-password"];

export function proxy(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-next-pathname", request.nextUrl.pathname);

  const url = request.nextUrl.clone();
  const pathname = url.pathname;

  const accessToken = request.cookies.get("accessToken")?.value;
  const isAuthenticated = !!accessToken;

  const redirect = (redirectUrl: NextURL | string) => {
    const destination = typeof redirectUrl === "string" ? redirectUrl : redirectUrl.toString();
    const response = NextResponse.redirect(destination);
    response.headers.set("x-middleware-cache", "no-cache");
    return response;
  };

  const isProtectedRoute = PROTECTED_ROUTES.some((route) => pathname.startsWith(route));
  const isAuthRoute = AUTH_ROUTES.some((route) => pathname.startsWith(route));

  if (!isAuthenticated && isProtectedRoute) {
    url.pathname = "/";
    url.searchParams.set("callbackUrl", pathname);
    return redirect(url);
  }

  if (isAuthenticated && isAuthRoute) {
    url.pathname = "/overview";
    return redirect(url);
  }

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}
