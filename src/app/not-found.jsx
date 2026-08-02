import React from "react";
import Link from "next/link";
import { Button } from "@heroui/react";
import { FaHouse, FaCompass, FaTriangleExclamation } from "react-icons/fa6";

export default function NotFound() {
  return (
    <main className="min-h-screen w-full flex items-center justify-center bg-zinc-50/80 backdrop-blur-md px-4 py-12 relative overflow-hidden">
      {/* Background Decorative Glow Effects */}
      <div className="absolute w-96 h-96 bg-indigo-500/15 rounded-full blur-3xl pointer-events-none -top-10 -left-10" />
      <div className="absolute w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none -bottom-10 -right-10" />

      {/* Main Glassmorphism Card Container */}
      <div className="relative z-10 max-w-lg w-full text-center space-y-8 bg-white/80 backdrop-blur-2xl border border-zinc-200/80 p-8 sm:p-12 rounded-3xl shadow-xl">
        {/* Animated Warning Icon Badge */}
        <div className="mx-auto w-16 h-16 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 text-2xl shadow-inner">
          <FaTriangleExclamation className="animate-bounce" />
        </div>

        {/* 404 Typography & Message */}
        <div className="space-y-3">
          <h1 className="text-6xl sm:text-7xl font-black text-zinc-900 tracking-tight">
            4<span className="text-indigo-600">0</span>4
          </h1>
          <h2 className="text-xl sm:text-2xl font-bold text-zinc-800 tracking-tight">
            Page Not Found in the Library
          </h2>
          <p className="text-xs sm:text-sm font-medium text-zinc-500 leading-relaxed max-w-md mx-auto">
            Oops! It seems the book or page you are looking for has been
            misplaced, removed, or never existed on BookVerse.
          </p>
        </div>

        {/* Action Buttons (Using Allowed HeroUI Variants) */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <Link href="/" className="w-full sm:w-auto">
            <Button
              variant="secondary"
              className="w-full sm:w-auto h-11 px-6 rounded-xl font-bold text-sm bg-indigo-600 hover:bg-indigo-700 text-white shadow-md transition-all gap-2 cursor-pointer"
            >
              <FaHouse className="text-xs" /> Back to Home
            </Button>
          </Link>

          <Link href="/all-books" className="w-full sm:w-auto">
            <Button
              variant="outline"
              className="w-full sm:w-auto h-11 px-6 rounded-xl font-bold text-sm border-zinc-200 hover:bg-zinc-100 text-zinc-800 transition-all gap-2 cursor-pointer"
            >
              <FaCompass className="text-xs text-indigo-600" /> Explore Library
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
}
