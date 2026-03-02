"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

import { SCREEN_MESSAGES } from "@/constants";
import { useInterval } from "@/hooks";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      staggerChildren: 0.1,
      staggerDirection: -1,
    },
  },
} as const;

const titleVariants = {
  hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    filter: "blur(10px)",
    transition: {
      duration: 0.4,
      ease: "easeIn",
    },
  },
} as const;

const subtitleVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
  exit: {
    opacity: 0,
    y: -15,
    transition: {
      duration: 0.3,
      ease: "easeIn",
    },
  },
} as const;

export const AuthMessages = () => {
  const [current, setCurrent] = useState(0);

  useInterval(() => {
    setCurrent((prev) => (prev + 1) % SCREEN_MESSAGES.length);
  }, 5000);

  const message = SCREEN_MESSAGES[current];

  return (
    <div className="flex w-full flex-col items-start justify-center sm:w-4/5">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          className="space-y-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <motion.p className="text-3xl font-semibold text-white sm:text-6xl" variants={titleVariants}>
            {message.title}
          </motion.p>
          <motion.p className="text-sm text-white sm:text-xl" variants={subtitleVariants}>
            {message.subtitle}
          </motion.p>
        </motion.div>
      </AnimatePresence>
      <div className="mt-8 flex gap-2">
        {SCREEN_MESSAGES.map((_, index) => (
          <motion.div
            key={index}
            className="h-1.5 rounded-full bg-white/30"
            initial={false}
            animate={{
              width: index === current ? 32 : 12,
              backgroundColor: index === current ? "rgba(255,255,255,1)" : "rgba(255,255,255,0.3)",
            }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          />
        ))}
      </div>
    </div>
  );
};
