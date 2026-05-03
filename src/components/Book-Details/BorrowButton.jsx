"use client";

import { useSession } from "@/lib/auth-client";
import { Button } from "@heroui/react";
import toast from "react-hot-toast";
import { useState } from "react";

const BorrowButton = () => {
  const { isPending } = useSession();
  const [isChecking, setIsChecking] = useState(false);

  const handleBorrow = async () => {
    setIsChecking(true);

    try {
      const res = await fetch("/api/auth/get-session", {
        cache: "no-store",
      });
      const session = await res.json();

      if (!session || !session.user) {
        toast.error("Session expired! Please login again.");
        window.location.href = "/auth/login";
        return;
      }

      toast.success("Successfully borrowed the book!");
    } catch (error) {
      toast.error("Something went wrong, please try again.");
    } finally {
      setIsChecking(false);
    }
  };

  return (
    <Button
      onClick={handleBorrow}
      isDisabled={isPending || isChecking}
      className="py-8 rounded-2xl bg-indigo-800 px-12 text-lg font-bold text-white shadow-xl transition-all hover:bg-indigo-900 active:scale-95 w-full md:w-max"
    >
      {isPending || isChecking ? "Checking..." : "Borrow This Book"}
    </Button>
  );
};

export default BorrowButton;
