"use client";

import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import React from "react";

const MyProfilePage = () => {
  const { data } = authClient.useSession();
  const user = data?.user;
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-1">
      <Image
        src={user?.image}
        alt="avatar"
        width={150}
        height={150}
        className="rounded-full mx-auto"
      />
      <p className="text-center text-2xl font-bold">{user?.name}</p>
      <p className="text-center text-gray-500">{user?.email}</p>
    </div>
  );
};

export default MyProfilePage;
