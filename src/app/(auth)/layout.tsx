import React from "react";

import { AuthMessages } from "@/components/shared";

interface Props {
  children: React.ReactNode;
}

const AuthLayout = ({ children }: Props) => {
  return (
    <div className="grid h-auto w-screen grid-cols-1 sm:h-screen lg:grid-cols-2">
      <div className="bg-primary-400 grid h-75 place-items-center rounded-b-4xl p-8 sm:h-full lg:order-2 lg:rounded-l-4xl lg:rounded-br-none">
        <AuthMessages />
      </div>
      <div className="flex min-h-[60vh] flex-col items-center justify-between p-6 lg:order-1 lg:min-h-full lg:p-10">
        <div className="flex w-full items-center">
          <p className="text-xl font-semibold">TwinzPay</p>
        </div>
        {children}
        <div className="flex w-full items-center justify-between">
          <p className="text-sm text-gray-600">&copy; {new Date().getFullYear()}.All rights reserved</p>
          <p className="text-sm text-gray-600">TwinzPay</p>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
