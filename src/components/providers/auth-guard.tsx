"use client";

import { useSyncExternalStore } from "react";

import { useProtectedRoutes } from "@/hooks/use-protected-routes";
import { Loader } from "../shared";

interface Props {
  children: React.ReactNode;
}

const emptySubscribe = () => () => {};

const AuthGuard = ({ children }: Props) => {
  const isMounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  );

  const { isLoading, shouldRedirect } = useProtectedRoutes();

  if (!isMounted || isLoading) {
    return <Loader fullScreen />;
  }

  if (shouldRedirect) {
    return <Loader fullScreen />;
  }

  return <>{children}</>;
};

export default AuthGuard;
