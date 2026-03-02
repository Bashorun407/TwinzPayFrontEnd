"use client";

import { useEffect, useMemo } from "react";
import { usePathname, useRouter } from "next/navigation";

import { useAuthStore } from "@/store/core/auth";
import { useRbac } from "./use-rbac";

const PUBLIC_ROUTES = ["/", "/signup", "/forgot-password", "/reset-password"];
const AUTH_ROUTES = ["/", "/signup", "/forgot-password", "/reset-password"];

export const useProtectedRoutes = () => {
  const router = useRouter();
  const pathname = usePathname();

  const { user, isAuthenticated, isLoading } = useAuthStore();
  const { canAccessPath, getDefaultPath, role } = useRbac(user);

  const isPublicRoute = useMemo(() => {
    return PUBLIC_ROUTES.some((route) => pathname === route || (route !== "/" && pathname.startsWith(route)));
  }, [pathname]);

  const isAuthRoute = useMemo(() => {
    return AUTH_ROUTES.some((route) => pathname === route || pathname.startsWith(route));
  }, [pathname]);

  const isProtectedRoute = useMemo(() => {
    return !isPublicRoute;
  }, [isPublicRoute]);

  const shouldRedirect = useMemo(() => {
    if (isLoading) return { should: false, to: null };

    if (!isAuthenticated && isProtectedRoute) {
      return { should: true, to: "/" };
    }

    if (isAuthenticated && isAuthRoute) {
      return { should: true, to: getDefaultPath() };
    }

    if (isAuthenticated && !canAccessPath(pathname)) {
      return { should: true, to: getDefaultPath() };
    }

    return { should: false, to: null };
  }, [isLoading, isAuthenticated, isProtectedRoute, isAuthRoute, canAccessPath, pathname, getDefaultPath]);

  useEffect(() => {
    if (shouldRedirect.should && shouldRedirect.to) {
      router.replace(shouldRedirect.to);
    }
  }, [shouldRedirect, router]);

  const checkAccess = (path: string): boolean => {
    if (!isAuthenticated) {
      return PUBLIC_ROUTES.includes(path);
    }
    return canAccessPath(path);
  };

  return {
    isLoading,
    isAuthenticated,
    isPublicRoute,
    isAuthRoute,
    isProtectedRoute,
    shouldRedirect: shouldRedirect.should,
    redirectTo: shouldRedirect.to,
    canAccessCurrentRoute: !shouldRedirect.should,
    checkAccess,
    user,
    role,
  };
};
