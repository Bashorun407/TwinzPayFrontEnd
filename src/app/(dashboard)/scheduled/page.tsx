import { Plus } from "lucide-react";

export default function ScheduledPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Scheduled Payments</h1>
          <p className="text-muted-foreground">Manage your automated and recurring payments.</p>
        </div>
        <button className="bg-primary text-primary-foreground hover:bg-primary/90 inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium">
          <Plus className="h-4 w-4" />
          Schedule Payment
        </button>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <div className="bg-card rounded-lg border p-6">
          <h3 className="text-muted-foreground text-sm font-medium">Active Schedules</h3>
          <p className="mt-2 text-2xl font-bold">0</p>
        </div>
        <div className="bg-card rounded-lg border p-6">
          <h3 className="text-muted-foreground text-sm font-medium">Next Payment</h3>
          <p className="mt-2 text-2xl font-bold">-</p>
        </div>
        <div className="bg-card rounded-lg border p-6">
          <h3 className="text-muted-foreground text-sm font-medium">Monthly Total</h3>
          <p className="mt-2 text-2xl font-bold">$0.00</p>
        </div>
      </div>

      <div className="rounded-lg border">
        <div className="p-6">
          <div className="flex flex-col items-center justify-center py-12">
            <p className="text-lg font-medium">No scheduled payments</p>
            <p className="text-muted-foreground mt-1 text-sm">
              Set up automatic payments for your bills and transfers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
