import { formatCurrency } from "@/lib";

export default function Page() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Admin Dashboard</h1>
        <p className="text-muted-foreground">Overview of platform statistics and activity.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <div className="bg-card rounded-lg border p-6">
          <h3 className="text-muted-foreground text-sm font-medium">Total Users</h3>
          <p className="mt-2 text-2xl font-bold">{formatCurrency(0)}</p>
          <p className="text-muted-foreground mt-1 text-xs">+0 this month</p>
        </div>
        <div className="bg-card rounded-lg border p-6">
          <h3 className="text-muted-foreground text-sm font-medium">Total Transactions</h3>
          <p className="mt-2 text-2xl font-bold">{formatCurrency(0)}</p>
          <p className="text-muted-foreground mt-1 text-xs">+0 this month</p>
        </div>
        <div className="bg-card rounded-lg border p-6">
          <h3 className="text-muted-foreground text-sm font-medium">Transaction Volume</h3>
          <p className="mt-2 text-2xl font-bold">{formatCurrency(0)}</p>
          <p className="text-muted-foreground mt-1 text-xs">+0% from last month</p>
        </div>
        <div className="bg-card rounded-lg border p-6">
          <h3 className="text-muted-foreground text-sm font-medium">Active Bills</h3>
          <p className="mt-2 text-2xl font-bold">{formatCurrency(0)}</p>
          <p className="text-muted-foreground mt-1 text-xs">Across all users</p>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="bg-card rounded-lg border p-6">
          <h3 className="text-lg font-semibold">Recent Activity</h3>
          <p className="text-muted-foreground mt-4 text-sm">No recent activity to display.</p>
        </div>
        <div className="bg-card rounded-lg border p-6">
          <h3 className="text-lg font-semibold">System Status</h3>
          <div className="mt-4 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm">Payment Gateway</span>
              <span className="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-700">
                Operational
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm">Scheduled Jobs</span>
              <span className="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-700">Running</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm">Email Service</span>
              <span className="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-700">
                Operational
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
