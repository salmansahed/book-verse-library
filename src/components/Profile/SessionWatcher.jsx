"use client";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const SessionWatcher = () => {
  const router = useRouter();
  const session = authClient.useSession();

  useEffect(() => {
    if (session.data === null && !session.isPending) {
      router.push("/auth/login");
      router.refresh();
    }
  }, [session, router]);
  return null;
};

export default SessionWatcher;
