export default function Page() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Payments</h1>
        <p className="text-muted-foreground">View your payment history and transactions.</p>
      </div>

      <div className="flex gap-2">
        <button className="bg-primary text-primary-foreground rounded-md px-4 py-2 text-sm font-medium">All</button>
        <button className="bg-muted rounded-md px-4 py-2 text-sm font-medium">Completed</button>
        <button className="bg-muted rounded-md px-4 py-2 text-sm font-medium">Pending</button>
        <button className="bg-muted rounded-md px-4 py-2 text-sm font-medium">Failed</button>
      </div>

      <div className="rounded-lg border">
        <div className="p-6">
          <div className="flex flex-col items-center justify-center py-12">
            <p className="text-lg font-medium">No payments yet</p>
            <p className="text-muted-foreground mt-1 text-sm">Your payment history will appear here.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
