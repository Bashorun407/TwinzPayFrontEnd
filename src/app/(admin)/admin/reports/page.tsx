import { Download } from "lucide-react";

import { formatCurrency } from "@/lib";

export default function Page() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Reports</h1>
          <p className="text-muted-foreground">Analytics and reporting for platform activity.</p>
        </div>
        <div className="flex gap-2">
          <select className="rounded-md border px-4 py-2 text-sm">
            <option>Last 7 days</option>
            <option>Last 30 days</option>
            <option>Last 90 days</option>
            <option>This year</option>
          </select>
          <button className="bg-background hover:bg-muted inline-flex items-center gap-2 rounded-md border px-4 py-2 text-sm font-medium">
            <Download className="h-4 w-4" />
            Export Report
          </button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <div className="bg-card rounded-lg border p-6">
          <h3 className="text-muted-foreground text-sm font-medium">Total Revenue</h3>
          <p className="mt-2 text-2xl font-bold">{formatCurrency(0)}</p>
          <p className="mt-1 text-xs text-green-600">+0% from last period</p>
        </div>
        <div className="bg-card rounded-lg border p-6">
          <h3 className="text-muted-foreground text-sm font-medium">New Users</h3>
          <p className="mt-2 text-2xl font-bold">0</p>
          <p className="mt-1 text-xs text-green-600">+0% from last period</p>
        </div>
        <div className="bg-card rounded-lg border p-6">
          <h3 className="text-muted-foreground text-sm font-medium">Transactions</h3>
          <p className="mt-2 text-2xl font-bold">0</p>
          <p className="mt-1 text-xs text-green-600">+0% from last period</p>
        </div>
        <div className="bg-card rounded-lg border p-6">
          <h3 className="text-muted-foreground text-sm font-medium">Success Rate</h3>
          <p className="mt-2 text-2xl font-bold">0%</p>
          <p className="text-muted-foreground mt-1 text-xs">Transaction success</p>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="bg-card rounded-lg border p-6">
          <h3 className="text-lg font-semibold">Transaction Volume</h3>
          <div className="text-muted-foreground mt-8 flex h-48 items-center justify-center">Chart placeholder</div>
        </div>
        <div className="bg-card rounded-lg border p-6">
          <h3 className="text-lg font-semibold">User Growth</h3>
          <div className="text-muted-foreground mt-8 flex h-48 items-center justify-center">Chart placeholder</div>
        </div>
      </div>

      <div className="bg-card rounded-lg border p-6">
        <h3 className="text-lg font-semibold">Payment Types Distribution</h3>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          <div className="text-center">
            <p className="text-2xl font-bold">0%</p>
            <p className="text-muted-foreground text-sm">TwinzPays</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold">0%</p>
            <p className="text-muted-foreground text-sm">Transfers</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold">0%</p>
            <p className="text-muted-foreground text-sm">Levies</p>
          </div>
        </div>
      </div>
    </div>
  );
}
