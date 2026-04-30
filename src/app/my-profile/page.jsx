"use client";

import { authClient } from "@/lib/auth-client";
import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaEdit } from "react-icons/fa";

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
        className="rounded-full mx-auto object-cover aspect-square"
      />
      <p className="text-center text-2xl font-bold">{user?.name}</p>
      <p className="text-center text-gray-500">{user?.email}</p>
      <Link className="mt-3" href={"/update-profile"}>
        <Button
          variant="primary"
          className={
            "bg-linear-to-r from-indigo-600 via-purple-600 to-pink-700"
          }
        >
          <FaEdit />
          Update Profile
        </Button>
      </Link>
    </div>
  );
};

export default MyProfilePage;
