import { Plus } from "lucide-react";

export default function BillsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Bills</h1>
          <p className="text-muted-foreground">Manage your bills and recurring payments.</p>
        </div>
        <button className="bg-primary text-primary-foreground hover:bg-primary/90 inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium">
          <Plus className="h-4 w-4" />
          Add Bill
        </button>
      </div>

      <div className="rounded-lg border">
        <div className="p-6">
          <div className="flex flex-col items-center justify-center py-12">
            <p className="text-lg font-medium">No bills yet</p>
            <p className="text-muted-foreground mt-1 text-sm">Add your first bill to start tracking payments.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
