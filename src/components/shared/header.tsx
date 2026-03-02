"use client";

import { Bell, Moon, PanelLeft, Sun } from "lucide-react";
import { motion } from "framer-motion";

import { useGlobalStore } from "@/store/core";
import { cn } from "@/lib";

export const Header = () => {
  const { isCollapsed, setIsCollapsed, setThem, theme } = useGlobalStore();

  const handleToggleTheme = () => {
    setThem(theme === "dark" ? "light" : "dark");
  };

  return (
    <motion.header className="flex h-16 w-full items-center justify-between border-b px-6">
      <motion.div className="flex items-center gap-x-4">
        <button className="grid size-8 shrink-0 place-items-center" onClick={() => setIsCollapsed(!isCollapsed)}>
          <PanelLeft className={cn("size-5 transition-all", isCollapsed && "rotate-180")} />
        </button>
        <div className="h-7 w-px bg-gray-300"></div>
        <div>
          <p className="text-sm font-medium">Good morning, Johnny</p>
          <p className="text-xs text-gray-600"></p>
        </div>
      </motion.div>
      <motion.div className="flex items-center gap-x-4">
        <button className="grid size-8 shrink-0 place-items-center">
          <Bell className="size-5" />
        </button>
        <button className="grid size-8 shrink-0 place-items-center" onClick={handleToggleTheme}>
          {theme === "dark" ? (
            <Sun
              className={cn(
                "size-5 transition-all duration-500",
                theme === "dark" ? "scale-100 rotate-0 opacity-100" : "scale-0 -rotate-90 opacity-0",
              )}
            />
          ) : (
            <Moon
              className={cn(
                "size-5 transition-all duration-500",
                theme === "light" ? "scale-100 rotate-0 opacity-100" : "scale-0 -rotate-90 opacity-0",
              )}
            />
          )}
        </button>
      </motion.div>
    </motion.header>
  );
};
