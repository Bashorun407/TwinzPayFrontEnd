import React from "react";

import { Header, Sidebar } from "@/components/shared";

interface Props {
  children: React.ReactNode;
}

const AdminLayout = ({ children }: Props) => {
  return (
    <div className="flex h-screen w-screen items-start">
      <Sidebar role="user" />
      <div className="h-full flex-1 overflow-hidden">
        <Header />
        <main className="h-[calc(100%-64px)] w-full overflow-y-auto p-6">{children}</main>
      </div>
    </div>
  );
};

export default AdminLayout;
