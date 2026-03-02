"use client";

import { useEffect, useMemo } from "react";
import { usePathname, useRouter } from "next/navigation";

import { useAuthStore } from "@/store/core/auth";
import { useRbac } from "./use-rbac";

const PUBLIC_ROUTES = ["/", "/signup", "/forgot-password", "/reset-password"];

export const useProtectedRoutes = () => {
  const router = useRouter();
  const pathname = usePathname();

  const { user, isLoading } = useAuthStore();
  const { canAccessPath, getDefaultPath, role } = useRbac(user);

  const isPublicRoute = useMemo(() => {
    return PUBLIC_ROUTES.some((route) => pathname === route || (route !== "/" && pathname.startsWith(route)));
  }, [pathname]);

  const isProtectedRoute = useMemo(() => {
    return !isPublicRoute;
  }, [isPublicRoute]);

  const shouldRedirect = useMemo(() => {
    if (isLoading) return { should: false, to: null };

    if (!user && isProtectedRoute) {
      return { should: true, to: "/" };
    }

    if (user !== null && isPublicRoute) {
      return { should: true, to: getDefaultPath() };
    }

    if (user !== null && !canAccessPath(pathname)) {
      return { should: true, to: getDefaultPath() };
    }

    return { should: false, to: null };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading, user, isProtectedRoute, canAccessPath, pathname, getDefaultPath]);

  useEffect(() => {
    if (shouldRedirect.should && shouldRedirect.to) {
      router.replace(shouldRedirect.to);
    }
  }, [shouldRedirect, router]);

  const checkAccess = (path: string): boolean => {
    if (!user) {
      return PUBLIC_ROUTES.includes(path);
    }
    return canAccessPath(path);
  };

  return {
    isLoading,
    isPublicRoute,
    isProtectedRoute,
    shouldRedirect: shouldRedirect.should,
    redirectTo: shouldRedirect.to,
    canAccessCurrentRoute: !shouldRedirect.should,
    checkAccess,
    user,
    role,
  };
};
