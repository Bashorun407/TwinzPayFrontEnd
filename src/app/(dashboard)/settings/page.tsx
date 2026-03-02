export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
        <p className="text-muted-foreground">Manage your account preferences and security.</p>
      </div>

      <div className="space-y-6">
        <div className="rounded-lg border p-6">
          <h3 className="text-lg font-semibold">Profile</h3>
          <p className="text-muted-foreground mt-1 text-sm">Update your personal information.</p>
          <div className="mt-4 space-y-4">
            <div>
              <label className="text-sm font-medium">Full Name</label>
              <input type="text" className="mt-1 w-full rounded-md border px-3 py-2" placeholder="Enter your name" />
            </div>
            <div>
              <label className="text-sm font-medium">Email</label>
              <input type="email" className="mt-1 w-full rounded-md border px-3 py-2" placeholder="Enter your email" />
            </div>
          </div>
        </div>

        <div className="rounded-lg border p-6">
          <h3 className="text-lg font-semibold">Security</h3>
          <p className="text-muted-foreground mt-1 text-sm">Manage your password and security settings.</p>
          <div className="mt-4">
            <button className="bg-muted rounded-md px-4 py-2 text-sm font-medium">Change Password</button>
          </div>
        </div>

        <div className="rounded-lg border p-6">
          <h3 className="text-lg font-semibold">Notifications</h3>
          <p className="text-muted-foreground mt-1 text-sm">Configure how you receive notifications.</p>
          <div className="mt-4 space-y-3">
            <label className="flex items-center gap-3">
              <input type="checkbox" className="h-4 w-4 rounded border" />
              <span className="text-sm">Email notifications</span>
            </label>
            <label className="flex items-center gap-3">
              <input type="checkbox" className="h-4 w-4 rounded border" />
              <span className="text-sm">Payment reminders</span>
            </label>
            <label className="flex items-center gap-3">
              <input type="checkbox" className="h-4 w-4 rounded border" />
              <span className="text-sm">Transaction alerts</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
