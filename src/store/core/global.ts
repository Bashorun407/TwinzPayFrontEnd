import { createPersistMiddleware } from "../middleware";

type Theme = "dark" | "light";

interface GlobalStore {
  isCollapsed: boolean;
  setIsCollapsed: (isCollapsed: boolean) => void;
  setThem: (theme: Theme) => void;
  theme: Theme;
}

export const useGlobalStore = createPersistMiddleware<GlobalStore>("GLOBAL_SETTINGS", (set) => ({
  isCollapsed: false,
  setIsCollapsed: (isCollapsed) => set({ isCollapsed }),
  setThem: (theme) => {
    if (document) {
      document.body.classList.toggle("dark", theme === "dark");
    }
    set({ theme });
  },
  theme: "light",
}));
