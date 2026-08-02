"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { Button } from "@heroui/react";
import { IoSearch } from "react-icons/io5";

const SearchBar = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [searchTerm, setSearchTerm] = useState(
    searchParams.get("search") || "",
  );

  const handleSearch = () => {
    const params = new URLSearchParams(searchParams.toString());

    if (searchTerm.trim()) {
      params.set("search", searchTerm);
      params.set("category", "All");
    } else {
      params.delete("search");
    }

    router.push(`/all-books?${params.toString()}`);
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (value === "") {
      const params = new URLSearchParams(searchParams.toString());
      params.delete("search");
      router.push(`/all-books?${params.toString()}`);
    }
  };

  return (
    <div className="flex items-center justify-center w-full px-4">
      {/* Unified Professional Search Container */}
      <div className="relative flex items-center w-full max-w-xl bg-white/90 backdrop-blur-xl border border-zinc-200/90 rounded-2xl shadow-xs hover:shadow-md focus-within:border-indigo-600 focus-within:ring-4 focus-within:ring-indigo-600/10 transition-all duration-300 p-1.5">
        {/* Search Icon */}
        <div className="pl-3.5 text-zinc-400 flex items-center pointer-events-none">
          <IoSearch className="text-xl" />
        </div>

        {/* Search Input */}
        <input
          type="text"
          value={searchTerm}
          onChange={handleChange}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          placeholder="Search your favorite books..."
          className="w-full bg-transparent px-3 py-2 text-sm sm:text-base font-medium text-zinc-800 placeholder:text-zinc-400 focus:outline-none"
        />

        {/* Search Button */}
        <Button
          onClick={handleSearch}
          className="h-10 px-6 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm shadow-sm transition-all duration-300 shrink-0 cursor-pointer"
        >
          Search
        </Button>
      </div>
    </div>
  );
};

export default SearchBar;
