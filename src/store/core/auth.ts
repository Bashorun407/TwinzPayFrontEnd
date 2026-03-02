import Cookies from "js-cookie";

import type { Maybe, SigninResponse, User } from "@/types";
import { createPersistMiddleware } from "../middleware";

interface SignOutOptions {
  callbackUrl?: string;
  clearStorage?: boolean;
  redirectUrl?: string;
  soft?: boolean;
}

interface SignInOptions {
  expiresIn?: number;
  redirectUrl?: string;
  remember?: boolean;
}

interface AuthStore {
  hydrate: () => void;
  isHydrated: boolean;
  isLoading: boolean;
  signin: (payload: SigninResponse, options?: SignInOptions) => void;
  signout: (options?: SignOutOptions) => void;
  user: Maybe<User>;
}

const COOKIE_OPTIONS = {
  path: "/",
  sameSite: "lax" as const,
  secure: process.env.NODE_ENV === "production",
  expires: 30,
};

class UserManager {
  static clearUserData(clearStorage = true) {
    Cookies.remove("ACCESS_TOKEN", { path: "/" });
    if (clearStorage) {
      localStorage.removeItem("AUTH_STORE");
    }
  }

  static redirect(path: string = "/signin") {
    if (typeof window !== "undefined") {
      window.location.href = path;
    }
  }

  static getCookieOptions(remember?: boolean, expiresIn?: number) {
    return {
      ...COOKIE_OPTIONS,
      expires: remember ? expiresIn || 30 : undefined,
    };
  }

  static hasValidToken(): boolean {
    if (typeof window === "undefined") return false;
    return !!Cookies.get("ACCESS_TOKEN");
  }
}

export const useAuthStore = createPersistMiddleware<AuthStore>("AUTH_STORE", (set, get) => ({
  user: null,
  isHydrated: false,
  isLoading: false,
  hydrate: () => {
    if (typeof window !== "undefined" && !get().isHydrated) {
      if (!UserManager.hasValidToken() && get().user) {
        set({ user: null, isHydrated: true });
      } else {
        set({ isHydrated: true });
      }
    }
  },
  signin: (payload, options) => {
    try {
      const cookieOptions = UserManager.getCookieOptions(options?.remember, options?.expiresIn);
      Cookies.set("ACCESS_TOKEN", payload.accessToken, cookieOptions);
      set({ user: payload.user, isHydrated: true });
      if (options?.redirectUrl) {
        // Small delay to ensure zustand persist has saved to localStorage
        setTimeout(() => UserManager.redirect(options.redirectUrl), 100);
      }
    } catch (error) {
      console.error("Sign in failed:", error);
      throw new Error("Failed to sign in user");
    }
  },
  signout: (options) => {
    try {
      if (options?.soft) {
        set({ user: null });
        return;
      }
      UserManager.clearUserData(options?.clearStorage ?? true);
      set({ user: null });
      UserManager.redirect(options?.redirectUrl || options?.callbackUrl);
    } catch (error) {
      console.error("Sign out failed:", error);
      UserManager.clearUserData(options?.clearStorage ?? true);
      UserManager.redirect(options?.redirectUrl || options?.callbackUrl);
    }
  },
}));
