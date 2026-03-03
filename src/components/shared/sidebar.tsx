"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { LogOut } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "../ui/dialog";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { ADMIN_ROUTES, USER_ROUTES } from "@/config/routes";
import { useGlobalStore } from "@/store/core";
import { Button } from "../ui/button";
import { cn } from "@/lib";

interface Props {
  role: "admin" | "user";
}

const sidebarVariants = {
  expanded: { width: 256 },
  collapsed: { width: 64 },
};

const linkTextVariants = {
  expanded: { opacity: 1, display: "block" },
  collapsed: { opacity: 0, display: "none", transition: { duration: 0.1 } },
};

export const Sidebar = ({ role }: Props) => {
  const { isCollapsed } = useGlobalStore();
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const routes = role === "admin" ? ADMIN_ROUTES : USER_ROUTES;

  return (
    <motion.aside
      className="bg-card relative h-screen border-r"
      variants={sidebarVariants}
      initial={false}
      animate={isCollapsed ? "collapsed" : "expanded"}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <div className="flex h-16 items-center border-b px-3">
        <AnimatePresence mode="wait">
          {!isCollapsed && (
            <motion.h2
              className="text-lg font-semibold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {role === "admin" ? "Admin Panel" : "TwinzPay"}
            </motion.h2>
          )}
        </AnimatePresence>
      </div>
      <div className="flex h-[calc(100%-64px)] w-full flex-col justify-between">
        <div className="space-y-4">
          <div className="grid place-items-center border-b p-3">
            <div className="flex flex-col items-center justify-center gap-y-4">
              <Avatar className={cn(isCollapsed ? "size-10" : "size-32")}>
                <AvatarImage />
                <AvatarFallback className="bg-gray-400"></AvatarFallback>
              </Avatar>
              {!isCollapsed && (
                <motion.div className="space-y-1 text-center" transition={{ delay: 1 }}>
                  <p className="text-sm font-medium">Johnny Appleseed</p>
                  <p className="text-xs text-gray-600">johnnyappleseed@exmaple.com</p>
                </motion.div>
              )}
            </div>
          </div>
          <nav className="space-y-1 px-3">
            {routes.map((route) => {
              const isActive = pathname === route.href;
              const Icon = route.icon;
              return (
                <Link
                  key={route.href}
                  href={route.href}
                  className={cn(
                    "flex items-center gap-x-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                    isActive
                      ? "bg-gray-900 text-gray-100 dark:bg-gray-100 dark:text-gray-900"
                      : "text-gray-600 hover:bg-gray-200 dark:text-gray-400 dark:hover:bg-gray-700",
                    isCollapsed && "justify-center px-2",
                  )}
                >
                  <Icon className="size-5 shrink-0" />
                  <motion.span
                    variants={linkTextVariants}
                    initial={false}
                    animate={isCollapsed ? "collapsed" : "expanded"}
                    transition={{ duration: 0.2 }}
                    className="whitespace-nowrap"
                  >
                    {route.name}
                  </motion.span>
                </Link>
              );
            })}
          </nav>
        </div>
        <div className="w-full p-3">
          <Dialog onOpenChange={setOpen} open={open}>
            <DialogTrigger asChild>
              <Button className="flex w-full items-center justify-start" variant="destructive">
                <LogOut className="size-5" /> Logout
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogTitle>Log Out</DialogTitle>
              <DialogDescription>Are you sure you want to logout?</DialogDescription>
              <div className="flex items-center justify-end gap-x-4">
                <Button onClick={() => setOpen(false)} variant="outline">
                  Cancel
                </Button>
                <Button onClick={() => setOpen(false)} variant="destructive">
                  Log Out
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </motion.aside>
  );
};
