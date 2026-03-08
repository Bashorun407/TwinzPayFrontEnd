"use client";

import { useEffect, useMemo } from "react";
import { usePathname, useRouter } from "next/navigation";

import { useAuthStore } from "@/store/core/auth";
import { useRbac } from "./use-rbac";

const PUBLIC_ROUTES = ["/", "/signup", "/forgot-password", "/reset-password"];

export const useProtectedRoutes = () => {
  const pathname = usePathname();
  const router = useRouter();

  const { user, isLoading } = useAuthStore();
  const { canAccessPath, getDefaultPath, role } = useRbac(user);

  const isPublicRoute = useMemo(() => {
    return PUBLIC_ROUTES.some((route) => pathname === route || (route !== "/" && pathname.startsWith(route)));
  }, [pathname]);

  const shouldRedirect = useMemo(() => {
    if (isLoading) return { should: false, to: null };

    if (!user && !isPublicRoute) {
      return { should: true, to: "/" };
    }

    if (user !== null && isPublicRoute) {
      return { should: true, to: getDefaultPath() };
    }

    if (user !== null && !canAccessPath(pathname)) {
      return { should: true, to: getDefaultPath() };
    }

    return { should: false, to: null };
  }, [isLoading, user, isPublicRoute, canAccessPath, pathname, getDefaultPath]);

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
    shouldRedirect: shouldRedirect.should,
    redirectTo: shouldRedirect.to,
    checkAccess,
    user,
    role,
  };
};
