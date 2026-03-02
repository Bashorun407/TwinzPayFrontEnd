export default function AdminSettingsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Admin Settings</h1>
        <p className="text-muted-foreground">Configure platform settings and preferences.</p>
      </div>

      <div className="space-y-6">
        <div className="rounded-lg border p-6">
          <h3 className="text-lg font-semibold">General Settings</h3>
          <p className="text-muted-foreground mt-1 text-sm">Basic platform configuration.</p>
          <div className="mt-4 space-y-4">
            <div>
              <label className="text-sm font-medium">Platform Name</label>
              <input type="text" className="mt-1 w-full rounded-md border px-3 py-2" defaultValue="TwinzPay" />
            </div>
            <div>
              <label className="text-sm font-medium">Support Email</label>
              <input
                type="email"
                className="mt-1 w-full rounded-md border px-3 py-2"
                placeholder="support@example.com"
              />
            </div>
          </div>
        </div>

        <div className="rounded-lg border p-6">
          <h3 className="text-lg font-semibold">Payment Gateway</h3>
          <p className="text-muted-foreground mt-1 text-sm">Configure payment processing settings.</p>
          <div className="mt-4 space-y-4">
            <div>
              <label className="text-sm font-medium">Gateway Provider</label>
              <select className="mt-1 w-full rounded-md border px-3 py-2">
                <option>Stripe</option>
                <option>PayStack</option>
                <option>Flutterwave</option>
              </select>
            </div>
            <div>
              <label className="text-sm font-medium">API Key</label>
              <input type="password" className="mt-1 w-full rounded-md border px-3 py-2" placeholder="Enter API key" />
            </div>
          </div>
        </div>

        <div className="rounded-lg border p-6">
          <h3 className="text-lg font-semibold">Transaction Limits</h3>
          <p className="text-muted-foreground mt-1 text-sm">Set limits for user transactions.</p>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div>
              <label className="text-sm font-medium">Min Transaction Amount</label>
              <input type="number" className="mt-1 w-full rounded-md border px-3 py-2" placeholder="1.00" />
            </div>
            <div>
              <label className="text-sm font-medium">Max Transaction Amount</label>
              <input type="number" className="mt-1 w-full rounded-md border px-3 py-2" placeholder="10000.00" />
            </div>
            <div>
              <label className="text-sm font-medium">Daily Limit</label>
              <input type="number" className="mt-1 w-full rounded-md border px-3 py-2" placeholder="50000.00" />
            </div>
            <div>
              <label className="text-sm font-medium">Monthly Limit</label>
              <input type="number" className="mt-1 w-full rounded-md border px-3 py-2" placeholder="500000.00" />
            </div>
          </div>
        </div>

        <div className="rounded-lg border p-6">
          <h3 className="text-lg font-semibold">Email Notifications</h3>
          <p className="text-muted-foreground mt-1 text-sm">Configure automated email notifications.</p>
          <div className="mt-4 space-y-3">
            <label className="flex items-center gap-3">
              <input type="checkbox" className="h-4 w-4 rounded border" defaultChecked />
              <span className="text-sm">New user registration alerts</span>
            </label>
            <label className="flex items-center gap-3">
              <input type="checkbox" className="h-4 w-4 rounded border" defaultChecked />
              <span className="text-sm">Failed transaction alerts</span>
            </label>
            <label className="flex items-center gap-3">
              <input type="checkbox" className="h-4 w-4 rounded border" defaultChecked />
              <span className="text-sm">Daily summary reports</span>
            </label>
          </div>
        </div>

        <div className="flex justify-end">
          <button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-md px-6 py-2 text-sm font-medium">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}
