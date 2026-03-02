import { Download, Search } from "lucide-react";

export default function AdminTransactionsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Transactions</h1>
          <p className="text-muted-foreground">View and manage all platform transactions.</p>
        </div>
        <button className="bg-background hover:bg-muted inline-flex items-center gap-2 rounded-md border px-4 py-2 text-sm font-medium">
          <Download className="h-4 w-4" />
          Export
        </button>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        <div className="bg-card rounded-lg border p-4">
          <h3 className="text-muted-foreground text-sm font-medium">Total Volume</h3>
          <p className="mt-1 text-xl font-bold">$0.00</p>
        </div>
        <div className="bg-card rounded-lg border p-4">
          <h3 className="text-muted-foreground text-sm font-medium">Successful</h3>
          <p className="mt-1 text-xl font-bold text-green-600">0</p>
        </div>
        <div className="bg-card rounded-lg border p-4">
          <h3 className="text-muted-foreground text-sm font-medium">Pending</h3>
          <p className="mt-1 text-xl font-bold text-yellow-600">0</p>
        </div>
        <div className="bg-card rounded-lg border p-4">
          <h3 className="text-muted-foreground text-sm font-medium">Failed</h3>
          <p className="mt-1 text-xl font-bold text-red-600">0</p>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative flex-1">
          <Search className="text-muted-foreground absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search transactions..."
            className="w-full rounded-md border py-2 pr-4 pl-10"
          />
        </div>
        <select className="rounded-md border px-4 py-2">
          <option>All Types</option>
          <option>TwinzPay</option>
          <option>Transfer</option>
          <option>Levy</option>
        </select>
        <select className="rounded-md border px-4 py-2">
          <option>All Status</option>
          <option>Successful</option>
          <option>Pending</option>
          <option>Failed</option>
        </select>
      </div>

      <div className="rounded-lg border">
        <table className="w-full">
          <thead className="bg-muted/50 border-b">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-medium">ID</th>
              <th className="px-6 py-3 text-left text-sm font-medium">User</th>
              <th className="px-6 py-3 text-left text-sm font-medium">Type</th>
              <th className="px-6 py-3 text-left text-sm font-medium">Amount</th>
              <th className="px-6 py-3 text-left text-sm font-medium">Status</th>
              <th className="px-6 py-3 text-left text-sm font-medium">Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan={6} className="px-6 py-12 text-center">
                <p className="text-muted-foreground">No transactions found.</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
