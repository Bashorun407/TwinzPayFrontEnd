"use client";

import { useMemo } from "react";

import type { User } from "@/types";
import { ADMIN_ROUTES, USER_ROUTES } from "@/config/routes";

type Role = User["role"];

export const permissions = [
  "view:dashboard",
  "view:admin",
  "manage:users",
  "manage:transactions",
  "manage:bill-types",
  "view:reports",
  "manage:settings",
  "view:bills",
  "manage:bills",
  "view:payments",
  "manage:payments",
  "view:beneficiaries",
  "manage:beneficiaries",
  "view:scheduled",
  "manage:scheduled",
] as const;

type Permission = (typeof permissions)[number];

const ROLE_PERMISSIONS: Record<Role, Permission[]> = {
  admin: [
    "view:dashboard",
    "view:admin",
    "manage:users",
    "manage:transactions",
    "manage:bill-types",
    "view:reports",
    "manage:settings",
    "view:bills",
    "manage:bills",
    "view:payments",
    "manage:payments",
    "view:beneficiaries",
    "manage:beneficiaries",
    "view:scheduled",
    "manage:scheduled",
  ],
  user: [
    "view:dashboard",
    "view:bills",
    "manage:bills",
    "view:payments",
    "manage:payments",
    "view:beneficiaries",
    "manage:beneficiaries",
    "view:scheduled",
    "manage:scheduled",
    "manage:settings",
  ],
};

const ROLE_ALLOWED_PATHS: Record<Role, string[]> = {
  admin: ADMIN_ROUTES.map((route) => route.href),
  user: USER_ROUTES.map((route) => route.href),
};

export const useRbac = (user: User | null) => {
  const role = user?.role ?? null;

  const permissions = useMemo(() => {
    if (!role) return [];
    return ROLE_PERMISSIONS[role] || [];
  }, [role]);

  const allowedPaths = useMemo(() => {
    if (!role) return [];
    return ROLE_ALLOWED_PATHS[role] || [];
  }, [role]);

  const hasPermission = (permission: Permission): boolean => {
    return permissions.includes(permission);
  };

  const hasAnyPermission = (perms: Permission[]): boolean => {
    return perms.some((p) => permissions.includes(p));
  };

  const hasAllPermissions = (perms: Permission[]): boolean => {
    return perms.every((p) => permissions.includes(p));
  };

  const canAccessPath = (path: string): boolean => {
    if (!role) return false;

    if (role === "admin") {
      return path.startsWith("/admin") || path === "/";
    }

    if (role === "user") {
      return !path.startsWith("/admin") || path === "/";
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
    permissions,
    allowedPaths,
    hasPermission,
    hasAnyPermission,
    hasAllPermissions,
    canAccessPath,
    getDefaultPath,
    isAdmin,
    isUser,
  };
};

export type { Permission, Role };
