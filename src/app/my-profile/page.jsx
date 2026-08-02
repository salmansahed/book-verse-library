export const metadata = {
  title: "My Profile | BookVerse",
  description:
    "Manage your BookVerse personal profile, account settings, and activity overview.",
};

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { headers } from "next/headers";
import { Card, Button } from "@heroui/react";
import {
  FaPenToSquare,
  FaEnvelope,
  FaUserCheck,
  FaShieldHalved,
  FaBookOpen,
  FaClock,
  FaBookmark,
  FaKey,
} from "react-icons/fa6";
import SessionWatcher from "@/components/Profile/SessionWatcher";
import { auth } from "@/lib/auth";
import userAvatarPlaceholder from "../../assets/images/userAvatar.png";

const MyProfilePage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const user = session?.user;

  // Fallback avatar image
  const userAvatar = user?.image || userAvatarPlaceholder;

  return (
    <div className="min-h-screen bg-zinc-50/50 py-8 md:py-14 px-4 sm:px-6">
      <SessionWatcher />

      <div className="container mx-auto max-w-5xl space-y-8">
        {/* Profile Hero Card Header */}
        <Card className="relative bg-white/70 backdrop-blur-2xl border border-gray-200 rounded-3xl overflow-hidden">
          {/* Cover Banner */}
          <div className="h-44 sm:h-56 bg-linear-to-r from-indigo-500 via-purple-500 to-fuchsia-500 relative overflow-hidden rounded-xl">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.25),transparent_50%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(255,255,255,0.1))]" />
          </div>

          {/* Profile Details Container */}
          <div className="relative px-6 sm:px-10 pb-8 -mt-16 sm:-mt-20 flex flex-col md:flex-row items-center md:items-start justify-between gap-6">
            {/* User Avatar & Info */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-left w-full md:w-auto">
              {/* Profile Avatar */}
              <div className="relative shrink-0 group z-10">
                <div className="p-1.5 rounded-full bg-white/40 backdrop-blur-md shadow-lg shadow-indigo-900/10 transition-transform duration-300 group-hover:scale-105">
                  <Image
                    src={userAvatar}
                    alt={user?.name || "User Avatar"}
                    width={130}
                    height={130}
                    priority
                    className="rounded-full object-cover aspect-square border-4 border-white"
                  />
                </div>
                {/* Active Indicator Status */}
                <span
                  className="absolute bottom-3 right-3 w-5 h-5 bg-emerald-500 border-4 border-white rounded-full animate-pulse shadow-sm"
                  title="Active Now"
                />
              </div>

              {/* Name & Email */}
              <div className="space-y-1.5 pt-4 sm:pt-22">
                <div className="flex items-center justify-center sm:justify-start gap-3">
                  <h1 className="text-2xl sm:text-3xl font-black text-zinc-900 tracking-tight">
                    {user?.name || "Anonymous Reader"}
                  </h1>
                  <span className="hidden sm:inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 bg-emerald-100/80 border border-emerald-200 px-3 py-1 rounded-full shadow-sm">
                    <FaUserCheck className="text-[10px]" /> Verified
                  </span>
                </div>

                <p className="text-sm text-zinc-500 font-medium flex items-center justify-center sm:justify-start gap-2 bg-zinc-100/50 w-fit sm:mx-0 mx-auto px-3 py-1 rounded-lg">
                  <FaEnvelope className="text-indigo-400 text-xs shrink-0" />
                  <span>{user?.email || "No email linked"}</span>
                </p>
              </div>
            </div>

            {/* Profile Action Buttons */}
            <div className="flex items-center gap-3 w-full md:w-auto justify-center pt-2 sm:pt-22">
              <Link href="/update-profile" className="w-full md:w-auto">
                <Button
                  variant="outline"
                  className="w-full md:w-auto font-bold text-sm h-11 px-6 rounded-xl gap-2 bg-white hover:bg-zinc-50 border border-zinc-200 shadow-sm hover:shadow-md transition-all duration-300 text-zinc-700"
                >
                  <FaPenToSquare className="text-indigo-500" /> Edit Profile
                </Button>
              </Link>
            </div>
          </div>
        </Card>

        {/* Quick Activity Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          <Card className="bg-white/80 backdrop-blur-lg border border-zinc-200/60 p-6 rounded-3xl shadow-sm hover:shadow-lg hover:shadow-indigo-500/5 hover:-translate-y-1 transition-all duration-300 flex flex-row items-center gap-5">
            <div className="w-14 h-14 rounded-2xl bg-indigo-50/80 border border-indigo-100 text-indigo-600 flex items-center justify-center text-2xl shrink-0 shadow-inner">
              <FaBookOpen />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-0.5">
                Borrowed
              </p>
              <h3 className="text-2xl font-black text-zinc-900 leading-none">
                04
              </h3>
            </div>
          </Card>

          <Card className="bg-white/80 backdrop-blur-lg border border-zinc-200/60 p-6 rounded-3xl shadow-sm hover:shadow-lg hover:shadow-purple-500/5 hover:-translate-y-1 transition-all duration-300 flex flex-row items-center gap-5">
            <div className="w-14 h-14 rounded-2xl bg-purple-50/80 border border-purple-100 text-purple-600 flex items-center justify-center text-2xl shrink-0 shadow-inner">
              <FaBookmark />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-0.5">
                Wishlist
              </p>
              <h3 className="text-2xl font-black text-zinc-900 leading-none">
                12
              </h3>
            </div>
          </Card>

          <Card className="bg-white/80 backdrop-blur-lg border border-zinc-200/60 p-6 rounded-3xl shadow-sm hover:shadow-lg hover:shadow-emerald-500/5 hover:-translate-y-1 transition-all duration-300 flex flex-row items-center gap-5">
            <div className="w-14 h-14 rounded-2xl bg-emerald-50/80 border border-emerald-100 text-emerald-600 flex items-center justify-center text-2xl shrink-0 shadow-inner">
              <FaShieldHalved />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-0.5">
                Tier
              </p>
              <h3 className="text-xl font-black text-zinc-900 leading-none">
                PRO Reader
              </h3>
            </div>
          </Card>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          {/* Account Details */}
          <div className="lg:col-span-8 space-y-6">
            <Card className="bg-white/90 backdrop-blur-xl border border-zinc-200/60 p-6 sm:p-8 rounded-3xl shadow-sm space-y-8">
              <div className="flex items-center justify-between pb-5 border-b border-zinc-100/80">
                <h2 className="text-lg font-bold text-zinc-900 flex items-center gap-2.5">
                  <span className="p-2 bg-indigo-50 rounded-lg">
                    <FaUserCheck className="text-indigo-600 text-sm" />
                  </span>
                  Personal Information
                </h2>
                <span className="text-xs text-zinc-500 font-semibold bg-zinc-100 px-3 py-1 rounded-full">
                  Member Profile
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2 group">
                  <span className="text-xs font-bold uppercase tracking-wider text-zinc-400 ml-1">
                    Full Name
                  </span>
                  <p className="text-base font-semibold text-zinc-800 bg-zinc-50 border border-zinc-200/60 p-3.5 rounded-2xl transition-colors duration-200 group-hover:bg-zinc-100/80 group-hover:border-zinc-300/60">
                    {user?.name || "N/A"}
                  </p>
                </div>

                <div className="space-y-2 group">
                  <span className="text-xs font-bold uppercase tracking-wider text-zinc-400 ml-1">
                    Email Address
                  </span>
                  <p className="text-base font-semibold text-zinc-800 bg-zinc-50 border border-zinc-200/60 p-3.5 rounded-2xl truncate transition-colors duration-200 group-hover:bg-zinc-100/80 group-hover:border-zinc-300/60">
                    {user?.email || "N/A"}
                  </p>
                </div>

                <div className="space-y-2 group">
                  <span className="text-xs font-bold uppercase tracking-wider text-zinc-400 ml-1">
                    Member Since
                  </span>
                  <p className="text-base font-semibold text-zinc-800 bg-zinc-50 border border-zinc-200/60 p-3.5 rounded-2xl transition-colors duration-200 group-hover:bg-zinc-100/80 group-hover:border-zinc-300/60">
                    {user?.createdAt
                      ? new Date(user.createdAt).toLocaleDateString("en-US", {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        })
                      : "N/A"}
                  </p>
                </div>

                <div className="space-y-2 group">
                  <span className="text-xs font-bold uppercase tracking-wider text-zinc-400 ml-1">
                    Account Status
                  </span>
                  <p className="text-base font-semibold text-emerald-700 bg-emerald-50/50 border border-emerald-100 p-3.5 rounded-2xl flex items-center gap-2 transition-colors duration-200 group-hover:bg-emerald-50">
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                    Active Membership
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Quick Links Sidebar */}
          <div className="lg:col-span-4 space-y-6 flex flex-col h-full">
            <Card className="flex-1 bg-linear-to-br from-zinc-900 via-zinc-800 to-black text-white p-6 sm:p-8 rounded-3xl shadow-2xl space-y-8 border border-white/10 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-3xl group-hover:bg-indigo-500/20 transition-all duration-500"></div>

              <div className="relative z-10">
                <h3 className="text-xl font-bold tracking-wide">
                  Quick Manage
                </h3>
                <p className="text-sm text-zinc-400 mt-1.5 leading-relaxed">
                  Manage your reading history and account security easily.
                </p>
              </div>

              <div className="space-y-3 relative z-10">
                <Link href="/my-profile" className="block">
                  <Button
                    variant="ghost"
                    className="w-full justify-start text-zinc-300 hover:text-white hover:bg-white/10 font-semibold h-12 rounded-xl text-sm gap-3 border border-white/5 transition-all"
                  >
                    <div className="p-1.5 rounded-lg bg-white/5">
                      <FaClock className="text-indigo-400 text-sm" />
                    </div>
                    Borrow History
                  </Button>
                </Link>

                <Link href="/update-profile" className="block">
                  <Button
                    variant="ghost"
                    className="w-full justify-start text-zinc-300 hover:text-white hover:bg-white/10 font-semibold h-12 rounded-xl text-sm gap-3 border border-white/5 transition-all"
                  >
                    <div className="p-1.5 rounded-lg bg-white/5">
                      <FaKey className="text-purple-400 text-sm" />
                    </div>
                    Account Security
                  </Button>
                </Link>
              </div>

              <div className="pt-4 border-t border-white/10 text-xs font-medium text-zinc-500 flex items-center justify-between relative z-10 mt-auto">
                <span>BookVerse v3.2</span>
                <span className="flex items-center gap-1.5 text-emerald-400/90 bg-emerald-400/10 px-2 py-1 rounded-md">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  System Ready
                </span>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfilePage;
