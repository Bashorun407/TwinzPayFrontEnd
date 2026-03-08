"use client";

import { CartesianGrid, Line, LineChart, XAxis } from "recharts";

import { formatCurrency } from "@/lib";
import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from "@/components/ui/chart";

const config = {
  savings: { label: "Savings", color: "hsl(142, 76%, 36%)" },
  bills: { label: "Bills", color: "hsl(346, 87%, 43%)" },
  recurring: { label: "Recurring", color: "hsl(217, 91%, 60%)" },
} satisfies ChartConfig;

const data = [
  { month: "Mar", savings: 150_000, bills: 246_980, recurring: 350_000 },
  { month: "Apr", savings: 165_000, bills: 238_000, recurring: 365_000 },
  { month: "May", savings: 175_000, bills: 252_000, recurring: 340_000 },
  { month: "Jun", savings: 160_000, bills: 260_000, recurring: 380_000 },
  { month: "Jul", savings: 185_000, bills: 240_000, recurring: 360_000 },
  { month: "Aug", savings: 170_000, bills: 255_000, recurring: 345_000 },
  { month: "Sep", savings: 155_000, bills: 248_000, recurring: 370_000 },
  { month: "Oct", savings: 190_000, bills: 235_000, recurring: 355_000 },
  { month: "Nov", savings: 180_000, bills: 265_000, recurring: 390_000 },
  { month: "Dec", savings: 200_000, bills: 280_000, recurring: 420_000 },
  { month: "Jan", savings: 160_000, bills: 250_000, recurring: 340_000 },
  { month: "Feb", savings: 145_000, bills: 242_000, recurring: 330_000 },
];

export default function Page() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Overview</h1>
        <p className="text-muted-foreground">Welcome back! Here&apos;s a summary of your account.</p>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <div className="bg-card rounded-lg border p-6">
          <h3 className="text-muted-foreground text-sm font-medium">Total Balance</h3>
          <p className="mt-2 text-2xl font-bold">{formatCurrency(0)}</p>
        </div>
        <div className="bg-card rounded-lg border p-6">
          <h3 className="text-muted-foreground text-sm font-medium">Pending Bills</h3>
          <p className="mt-2 text-2xl font-bold">0</p>
        </div>
        <div className="bg-card rounded-lg border p-6">
          <h3 className="text-muted-foreground text-sm font-medium">This Month</h3>
          <p className="mt-2 text-2xl font-bold">{formatCurrency(0)}</p>
        </div>
        <div className="bg-card rounded-lg border p-6">
          <h3 className="text-muted-foreground text-sm font-medium">Scheduled</h3>
          <p className="mt-2 text-2xl font-bold">0</p>
        </div>
      </div>
      <div className="w-full">
        <ChartContainer className="max-h-75 w-full" config={config}>
          <LineChart accessibilityLayer data={data}>
            <CartesianGrid vertical={false} />
            <XAxis dataKey="month" tickLine={false} axisLine={false} tickMargin={8} />
            <ChartTooltip content={<ChartTooltipContent />} />
            <ChartLegend content={<ChartLegendContent />} />
            <Line dataKey="savings" type="monotone" stroke="var(--color-savings)" strokeWidth={2} dot={false} />
            <Line dataKey="bills" type="monotone" stroke="var(--color-bills)" strokeWidth={2} dot={false} />
            <Line dataKey="recurring" type="monotone" stroke="var(--color-recurring)" strokeWidth={2} dot={false} />
          </LineChart>
        </ChartContainer>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="bg-card rounded-lg border p-6">
          <h3 className="text-lg font-semibold">Recent Transactions</h3>
          <p className="text-muted-foreground mt-4 text-sm">No recent transactions.</p>
        </div>
        <div className="bg-card rounded-lg border p-6">
          <h3 className="text-lg font-semibold">Upcoming Payments</h3>
          <p className="text-muted-foreground mt-4 text-sm">No upcoming payments scheduled.</p>
        </div>
      </div>
    </div>
  );
}
