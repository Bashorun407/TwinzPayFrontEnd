import { Plus, Search } from "lucide-react";

export default function AdminUsersPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Users</h1>
          <p className="text-muted-foreground">Manage registered users and their accounts.</p>
        </div>
        <button className="bg-primary text-primary-foreground hover:bg-primary/90 inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium">
          <Plus className="h-4 w-4" />
          Add User
        </button>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative flex-1">
          <Search className="text-muted-foreground absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2" />
          <input type="text" placeholder="Search users..." className="w-full rounded-md border py-2 pr-4 pl-10" />
        </div>
        <select className="rounded-md border px-4 py-2">
          <option>All Status</option>
          <option>Active</option>
          <option>Inactive</option>
          <option>Suspended</option>
        </select>
      </div>

      <div className="rounded-lg border">
        <table className="w-full">
          <thead className="bg-muted/50 border-b">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-medium">Name</th>
              <th className="px-6 py-3 text-left text-sm font-medium">Email</th>
              <th className="px-6 py-3 text-left text-sm font-medium">Status</th>
              <th className="px-6 py-3 text-left text-sm font-medium">Joined</th>
              <th className="px-6 py-3 text-left text-sm font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan={5} className="px-6 py-12 text-center">
                <p className="text-muted-foreground">No users found.</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
