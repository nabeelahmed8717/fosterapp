import { useEffect, useState } from "react";
// next
import { useRouter } from "next/router";
// hooks
import useAuth from "../hooks/useAuth";
// routes
import { PATH_DASHBOARD } from "../routes/paths";
import LoadingScreen from "@root/components/LoadingScreen";

// ----------------------------------------------------------------------

export default function GuestGuard({ children }: any) {
  const { push } = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  const { isAuthenticated, isInitialized } = useAuth();

  useEffect(() => {
    if (!isInitialized) return;
    if (isAuthenticated) {
      push(PATH_DASHBOARD.root);
      return;
    }
    setIsLoading(false);
  }, [isAuthenticated, push, isInitialized]);

  if (!isInitialized || isLoading) {
    return <LoadingScreen />;
  }

  return <>{children}</>;
}
