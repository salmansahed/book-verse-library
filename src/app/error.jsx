"use client";

import Link from "next/link";
import { Button } from "@heroui/react";
import { FaHouse, FaRotateRight, FaTriangleExclamation } from "react-icons/fa6";

export default function Error({ error, reset }) {
  return (
    <main className="min-h-screen w-full flex items-center justify-center bg-zinc-50/80 backdrop-blur-md px-4 py-12 relative overflow-hidden">
      {/* Background Decorative Glow Effects */}
      <div className="absolute w-96 h-96 bg-red-500/10 rounded-full blur-3xl pointer-events-none -top-10 -left-10" />
      <div className="absolute w-96 h-96 bg-indigo-500/15 rounded-full blur-3xl pointer-events-none -bottom-10 -right-10" />

      {/* Main Glassmorphism Card Container */}
      <div className="relative z-10 max-w-lg w-full text-center space-y-8 bg-white/80 backdrop-blur-2xl border border-zinc-200/80 p-8 sm:p-12 rounded-3xl shadow-xl">
        {/* Animated Warning Icon Badge */}
        <div className="mx-auto w-16 h-16 rounded-2xl bg-red-50 border border-red-100 flex items-center justify-center text-red-600 text-2xl shadow-inner">
          <FaTriangleExclamation className="animate-bounce" />
        </div>

        {/* Error Typography & Message */}
        <div className="space-y-3">
          <h1 className="text-3xl sm:text-4xl font-black text-zinc-900 tracking-tight">
            Something Went <span className="text-indigo-600">Wrong!</span>
          </h1>
          <p className="text-xs sm:text-sm font-medium text-zinc-500 leading-relaxed max-w-md mx-auto">
            An unexpected error occurred while loading this page or library
            resource. Don&apos;t worry, you can try again or return home.
          </p>

          {/* Optional: Error Message Box if available */}
          {error?.message && (
            <div className="p-3 bg-red-50/60 border border-red-100 rounded-xl text-xs font-mono text-red-600 overflow-x-auto text-left max-h-28">
              {error.message}
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          {/* Try Again Button (Triggers reset function) */}
          <Button
            variant="secondary"
            onPress={() => reset()}
            className="w-full sm:w-auto h-11 px-6 rounded-xl font-bold text-sm bg-indigo-600 hover:bg-indigo-700 text-white shadow-md transition-all gap-2 cursor-pointer"
          >
            <FaRotateRight className="text-xs" /> Try Again
          </Button>

          {/* Back to Home Button */}
          <Link href="/" className="w-full sm:w-auto">
            <Button
              variant="outline"
              className="w-full sm:w-auto h-11 px-6 rounded-xl font-bold text-sm border-zinc-200 hover:bg-zinc-100 text-zinc-800 transition-all gap-2 cursor-pointer"
            >
              <FaHouse className="text-xs text-indigo-600" /> Back to Home
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
}
