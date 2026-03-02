"use client";

import { motion } from "framer-motion";

import { cn } from "@/lib";

interface Props {
  className?: string;
  fullScreen?: boolean;
  message?: string;
}

export const Loader = ({ className, fullScreen = false, message = "Loading..." }: Props) => {
  return (
    <motion.div
      className={cn(
        "grid place-items-center",
        fullScreen ? "fixed top-0 left-0 z-50! h-screen w-screen" : "h-full w-full",
        className,
      )}
    >
      <motion.div className="flex flex-col items-center gap-y-5">
        <motion.div className="size-6 animate-spin rounded-full border-4 border-gray-600 border-t-transparent sm:size-12"></motion.div>
        <p className="text-sm text-gray-600 sm:text-xl">{message}</p>
      </motion.div>
    </motion.div>
  );
};
