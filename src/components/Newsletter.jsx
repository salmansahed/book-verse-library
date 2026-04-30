"use client";

import { Button } from "@heroui/react";
import React from "react";
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
    <div className="px-2">
      <div className="container mx-auto my-20 flex flex-col gap-8 md:gap-12 lg:gap-4 lg:flex-row justify-between bg-linear-to-br from-indigo-900 via-purple-800 to-emerald-600 text-white p-6 sm:p-10 md:p-14 lg:p-16 rounded-2xl">
        <div className="space-y-4 md:space-y-5">
          <FaEnvelopeOpenText className="bg-[#593e9d] w-16 sm:w-18 h-16 sm:h-18 p-4 rounded-2xl mx-auto lg:mx-0" />
          <h1 className="text-3xl md:text-4xl xl:text-5xl font-black w-full lg:w-9/12 leading-10 md:leading-12 xl:leading-14 text-center lg:text-left">
            Stay Ahead with Every{" "}
            <span className="text-[#5ee9b5]">New Chapter</span>
          </h1>
          <p className="w-full text-center lg:text-left lg:w-9/12 xl:w-7/12">
            Join our circle of book lovers! Get curated recommendations and
            exclusive updates delivered straight to your inbox.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-3">
          <form onSubmit={handleSubmitBtn} className="relative">
            <input
              required
              type="email"
              name="email"
              placeholder="Enter your email address"
              className="border-2 px-3 sm:px-5 py-3 sm:py-4 w-80 sm:w-95 xl:w-100 rounded-lg bg-white/10 border-white/20"
            />
            <Button
              type="submit"
              className="py-6 sm:py-7 rounded-lg absolute right-0 top-0.5 bg-linear-to-r from-indigo-600 via-purple-600 to-pink-700"
            >
              Subscribe Now <FaPaperPlane />
            </Button>
          </form>
          <p className="text-zinc-300 pb-6 sm:pb-0">
            We value your privacy. No spam, only books.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
