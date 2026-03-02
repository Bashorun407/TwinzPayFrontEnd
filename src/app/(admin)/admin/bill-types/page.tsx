import { Plus } from "lucide-react";

export default function AdminBillTypesPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Bill Types</h1>
          <p className="text-muted-foreground">Manage bill categories and payment types.</p>
        </div>
        <button className="bg-primary text-primary-foreground hover:bg-primary/90 inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium">
          <Plus className="h-4 w-4" />
          Add Bill Type
        </button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <div className="bg-card rounded-lg border p-6">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold">Utilities</h3>
            <span className="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-700">Active</span>
          </div>
          <p className="text-muted-foreground mt-2 text-sm">Electricity, water, gas bills</p>
          <p className="mt-4 text-sm">
            <span className="font-medium">0</span> active bills
          </p>
        </div>

        <div className="bg-card rounded-lg border p-6">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold">Levies</h3>
            <span className="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-700">Active</span>
          </div>
          <p className="text-muted-foreground mt-2 text-sm">Service charges, association fees</p>
          <p className="mt-4 text-sm">
            <span className="font-medium">0</span> active bills
          </p>
        </div>

        <div className="bg-card rounded-lg border p-6">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold">Transfers</h3>
            <span className="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-700">Active</span>
          </div>
          <p className="text-muted-foreground mt-2 text-sm">Person-to-person transfers</p>
          <p className="mt-4 text-sm">
            <span className="font-medium">0</span> active bills
          </p>
        </div>

        <div className="bg-card rounded-lg border p-6">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold">Subscriptions</h3>
            <span className="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-700">Active</span>
          </div>
          <p className="text-muted-foreground mt-2 text-sm">Streaming, memberships, SaaS</p>
          <p className="mt-4 text-sm">
            <span className="font-medium">0</span> active bills
          </p>
        </div>

        <div className="bg-card rounded-lg border p-6">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold">Insurance</h3>
            <span className="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-700">Active</span>
          </div>
          <p className="text-muted-foreground mt-2 text-sm">Health, auto, home insurance</p>
          <p className="mt-4 text-sm">
            <span className="font-medium">0</span> active bills
          </p>
        </div>

        <div className="bg-card rounded-lg border p-6">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold">Loans</h3>
            <span className="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-700">Active</span>
          </div>
          <p className="text-muted-foreground mt-2 text-sm">Mortgage, personal loans</p>
          <p className="mt-4 text-sm">
            <span className="font-medium">0</span> active bills
          </p>
        </div>
      </div>
    </div>
  );
}
