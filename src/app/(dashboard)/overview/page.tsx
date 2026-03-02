export default function OverviewPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Overview</h1>
        <p className="text-muted-foreground">Welcome back! Here&apos;s a summary of your account.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <div className="bg-card rounded-lg border p-6">
          <h3 className="text-muted-foreground text-sm font-medium">Total Balance</h3>
          <p className="mt-2 text-2xl font-bold">$0.00</p>
        </div>
        <div className="bg-card rounded-lg border p-6">
          <h3 className="text-muted-foreground text-sm font-medium">Pending Bills</h3>
          <p className="mt-2 text-2xl font-bold">0</p>
        </div>
        <div className="bg-card rounded-lg border p-6">
          <h3 className="text-muted-foreground text-sm font-medium">This Month</h3>
          <p className="mt-2 text-2xl font-bold">$0.00</p>
        </div>
        <div className="bg-card rounded-lg border p-6">
          <h3 className="text-muted-foreground text-sm font-medium">Scheduled</h3>
          <p className="mt-2 text-2xl font-bold">0</p>
        </div>
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
