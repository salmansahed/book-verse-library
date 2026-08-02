import React from "react";
import { Spinner } from "@heroui/react";
import { FaBookOpen } from "react-icons/fa6";

export default function Loading() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-zinc-50/80 backdrop-blur-md relative overflow-hidden px-4">
      {/* Background Decorative Glow Effect */}
      <div className="absolute w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center space-y-6 text-center">
        {/* Animated Book Logo Badge */}
        <div className="relative flex items-center justify-center">
          <div className="absolute inset-0 bg-indigo-600/20 rounded-2xl blur-xl animate-pulse" />
          <div className="relative w-16 h-16 rounded-2xl bg-linear-to-br from-indigo-600 to-indigo-900 text-white flex items-center justify-center shadow-xl border border-indigo-400/30 text-2xl">
            <FaBookOpen className="animate-bounce" />
          </div>
        </div>

        {/* Brand Title & Loading Subtitle */}
        <div className="space-y-2">
          <h2 className="text-xl sm:text-2xl font-black text-zinc-900 tracking-tight">
            Book<span className="text-indigo-600">Verse</span>
          </h2>
          <p className="text-xs sm:text-sm font-medium text-zinc-500">
            Preparing your digital library experience...
          </p>
        </div>

        {/* HeroUI Official Spinner */}
        <div className="pt-2">
          <Spinner size="lg" color="primary" />
        </div>
      </div>
    </div>
  );
}
