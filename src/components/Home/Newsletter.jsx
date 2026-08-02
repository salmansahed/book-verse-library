"use client";

import React from "react";
import { Button, Input } from "@heroui/react";
import toast from "react-hot-toast";
import { FaEnvelopeOpenText, FaPaperPlane } from "react-icons/fa";

const Newsletter = () => {
  const handleSubmitBtn = (e) => {
    e.preventDefault();
    toast.success(
      "Welcome to the BookVerse family! We've added you to our list. 📚✨",
    );
    e.target.reset();
  };

  return (
    <section className="container mx-auto px-4 my-16 md:my-24">
      {/* Main Glassmorphic Wrapper */}
      <div className="relative overflow-hidden rounded-3xl bg-linear-to-br from-indigo-950 via-purple-900 to-indigo-900 text-white p-8 sm:p-12 md:p-16 border border-indigo-500/20 shadow-2xl">
        {/* Background Decorative Glow Blobs */}
        <div className="absolute -top-24 -right-24 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
          {/* Left Text Content */}
          <div className="space-y-4 text-center lg:text-left max-w-xl">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-indigo-300 mb-2">
              <FaEnvelopeOpenText className="text-2xl" />
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
              Stay Ahead with Every{" "}
              <span className="bg-linear-to-r from-indigo-300 via-purple-200 to-pink-300 bg-clip-text text-transparent">
                New Chapter
              </span>
            </h2>

            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
              Join our circle of book lovers! Get curated recommendations and
              exclusive updates delivered straight to your inbox.
            </p>
          </div>

          {/* Right Form Content - Combined Pill Input Field & Button */}
          <div className="w-full lg:w-auto flex flex-col items-center lg:items-end gap-3">
            <form
              onSubmit={handleSubmitBtn}
              className="flex items-center w-full max-w-md p-1.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 focus-within:border-indigo-400/80 transition-all shadow-inner"
            >
              <Input
                required
                type="email"
                name="email"
                placeholder="Enter your email address"
                className="w-full px-4 py-2 bg-transparent text-white placeholder:text-zinc-400 focus:outline-hidden text-sm"
              />

              <Button
                type="submit"
                variant="secondary"
                className="bg-linear-to-r from-indigo-500 to-purple-600 text-white font-semibold px-5 py-2.5 rounded-xl shadow-md hover:shadow-indigo-500/25 transition-all shrink-0 gap-2 text-sm"
              >
                Subscribe
                <FaPaperPlane className="text-xs" />
              </Button>
            </form>

            <p className="text-xs text-zinc-400 text-center lg:text-right mt-1">
              🔒 We value your privacy. No spam, only books.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
