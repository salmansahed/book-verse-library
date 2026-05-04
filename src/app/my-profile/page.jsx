export const metadata = {
  title: "My Profile | BookVerse",
  description: "View and manage your personal profile, update your information",
};

import SessionWatcher from "@/components/Profile/SessionWatcher";
import { auth } from "@/lib/auth";
import { Button } from "@heroui/react";
import { headers } from "next/headers";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const MyProfilePage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const user = session?.user;
  return (
    <div>
      <SessionWatcher />
      <div className="flex items-center justify-center h-[80vh] sm:min-h-screen bg-gray-100 p-4">
        {/* Main Container */}
        <div className="w-full max-w-sm bg-white/80 backdrop-blur-md rounded-3xl shadow-xl p-8 flex flex-col items-center border border-gray-200">
          {/* Edit Button */}
          <div className="w-full flex justify-end mb-2">
            <Link href="/update-profile">
              <Button
                size="sm"
                className="bg-purple-100 text-purple-700 font-bold px-5 py-2 rounded-full border border-purple-200"
              >
                Edit Profile
              </Button>
            </Link>
          </div>

          {/* Profile Image with Gradient Ring */}
          <div className="p-1 rounded-full bg-linear-to-tr from-indigo-500 via-purple-500 to-pink-500 shadow-md">
            <Image
              src={user?.image}
              alt={user?.name}
              width={140}
              height={140}
              className="rounded-full object-cover aspect-square bg-white p-1"
            />
          </div>

          {/* User Info */}
          <div className="mt-8 text-center space-y-4">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] font-bold text-gray-400 block">
                Full Name
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-gray-800 tracking-tight">
                {user?.name}
              </h2>
            </div>

            <div className="w-16 h-0.5 bg-linear-to-r from-transparent via-purple-300 to-transparent mx-auto" />

            <div>
              <span className="text-xs uppercase tracking-[0.3em] font-bold text-gray-400 block">
                Email Address
              </span>
              <p className="text-lg font-medium text-gray-600 italic">
                {user?.email}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfilePage;
