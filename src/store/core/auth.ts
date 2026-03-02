import { createPersistMiddleware } from "../middleware";
import type { User } from "@/types";

interface AuthStore {
  user: User | null;
  accessToken: string | null;
  refreshToken: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  setUser: (user: User | null) => void;
  setTokens: (accessToken: string | null, refreshToken: string | null) => void;
  signin: (user: User, accessToken: string, refreshToken: string) => void;
  signout: () => void;
  setLoading: (isLoading: boolean) => void;
}

export const useAuthStore = createPersistMiddleware<AuthStore>(
  "AUTH_STORE",
  (set) => ({
    user: null,
    accessToken: null,
    refreshToken: null,
    isAuthenticated: false,
    isLoading: true,
    setUser: (user) => set({ user, isAuthenticated: !!user }),
    setTokens: (accessToken, refreshToken) => set({ accessToken, refreshToken }),
    signin: (user, accessToken, refreshToken) => {
      if (typeof document !== "undefined") {
        document.cookie = `accessToken=${accessToken}; path=/; max-age=${60 * 60 * 24 * 7}; SameSite=Strict`;
      }
      set({
        user,
        accessToken,
        refreshToken,
        isAuthenticated: true,
        isLoading: false,
      });
    },

    signout: () => {
      if (typeof document !== "undefined") {
        document.cookie = "accessToken=; path=/; max-age=0";
      }
      set({
        user: null,
        accessToken: null,
        refreshToken: null,
        isAuthenticated: false,
        isLoading: false,
      });
    },

    setLoading: (isLoading) => set({ isLoading }),
  }),
  {
    onRehydrateStorage: () => (state) => {
      if (state) {
        state.setLoading(false);
        if (state.accessToken && typeof document !== "undefined") {
          document.cookie = `accessToken=${state.accessToken}; path=/; max-age=${60 * 60 * 24 * 7}; SameSite=Strict`;
        }
      }
    },
  },
);
