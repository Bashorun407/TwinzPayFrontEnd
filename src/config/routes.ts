import {
  LayoutDashboard,
  Users,
  Receipt,
  CreditCard,
  UserPlus,
  CalendarClock,
  Settings,
  BarChart3,
  FileText,
  type LucideIcon,
} from "lucide-react";

type RouteConfig = {
  name: string;
  href: string;
  icon: LucideIcon;
};

export const USER_ROUTES: RouteConfig[] = [
  {
    name: "Overview",
    href: "/overview",
    icon: LayoutDashboard,
  },
  {
    name: "Bills",
    href: "/bills",
    icon: Receipt,
  },
  {
    name: "Payments",
    href: "/payments",
    icon: CreditCard,
  },
  {
    name: "Beneficiaries",
    href: "/beneficiaries",
    icon: UserPlus,
  },
  {
    name: "Scheduled",
    href: "/scheduled",
    icon: CalendarClock,
  },
  {
    name: "Settings",
    href: "/settings",
    icon: Settings,
  },
];

export const ADMIN_ROUTES: RouteConfig[] = [
  {
    name: "Dashboard",
    href: "/admin",
    icon: LayoutDashboard,
  },
  {
    name: "Users",
    href: "/admin/users",
    icon: Users,
  },
  {
    name: "Transactions",
    href: "/admin/transactions",
    icon: CreditCard,
  },
  {
    name: "Bill Types",
    href: "/admin/bill-types",
    icon: FileText,
  },
  {
    name: "Reports",
    href: "/admin/reports",
    icon: BarChart3,
  },
  {
    name: "Settings",
    href: "/admin/settings",
    icon: Settings,
  },
];
