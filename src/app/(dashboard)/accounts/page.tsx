import { Plus } from "lucide-react";

import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { NIGERIAN_BANKS } from "@/constants/banks";

const Page = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Accounts</h1>
          <p className="text-muted-foreground">Manage your saved accounts for quick funding.</p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <Plus className="size-4" />
              Add Account
            </Button>
          </DialogTrigger>
          <DialogContent>
            <div>
              <DialogTitle>Add Account</DialogTitle>
              <DialogDescription>Connect your bank account to fund your wallet.</DialogDescription>
            </div>
            <form className="space-y-4">
              <Input placeholder="Bank Account Number" />
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select bank" />
                </SelectTrigger>
                <SelectContent>
                  {NIGERIAN_BANKS.map((bank) => (
                    <SelectItem key={bank.swiftBic} value={bank.swiftBic}>
                      {bank.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </form>
          </DialogContent>
        </Dialog>
      </div>
      <div className="rounded-lg border">
        <div className="p-6">
          <div className="flex flex-col items-center justify-center py-12">
            <p className="text-lg font-medium">No accounts yet</p>
            <p className="text-muted-foreground mt-1 text-sm">Add bank accounts to quickly fund your account.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
