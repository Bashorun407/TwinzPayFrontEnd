"use client";

import { useMemo } from "react";

import { ADMIN_ROUTES, USER_ROUTES } from "@/config/routes";
import type { User, UserRole } from "@/types";

const userRoutes = USER_ROUTES.map((route) => route.href);

const ROLE_ALLOWED_PATHS: Record<UserRole, string[]> = {
  admin: ADMIN_ROUTES.map((route) => route.href),
  user: USER_ROUTES.map((route) => route.href),
};

export const useRbac = (user: User | null) => {
  const role = user?.role ?? null;

  const allowedPaths = useMemo(() => {
    if (!role) return [];
    return ROLE_ALLOWED_PATHS[role] || [];
  }, [role]);

  const canAccessPath = (path: string): boolean => {
    if (!role) return false;

    if (role === "admin") {
      return path.startsWith("/admin") || path === "/";
    }

    if (role === "user") {
      return userRoutes.map((route) => route).includes(path) || path === "/";
    }

    return allowedPaths.some((allowedPath) => path === allowedPath || path.startsWith(`${allowedPath}/`));
  };

  const getDefaultPath = (): string => {
    if (!role) return "/";
    return role === "admin" ? "/admin" : "/overview";
  };

  const isAdmin = role === "admin";
  const isUser = role === "user";

  return {
    role,
    allowedPaths,
    canAccessPath,
    getDefaultPath,
    isAdmin,
    isUser,
  };
};
