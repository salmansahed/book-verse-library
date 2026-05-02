"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { Button } from "@heroui/react";
import { IoSearch } from "react-icons/io5";

const SearchBar = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const check = searchParams.toString();
  console.log('searchParams =>', check);

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
    <div className="flex items-center justify-center">
      <div className="relative">
        <input
          type="text"
          value={searchTerm}
          onChange={handleChange}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          placeholder="Search book..."
          className="rounded-xl border-2 rounded-r-none py-1.5 border-r-0 w-60 sm:w-100 md:w-150 pl-9 shadow focus:outline-none focus:border-indigo-600 transition-colors"
        />
        <IoSearch className="absolute left-2 top-2 text-2xl text-zinc-500" />
      </div>
      <Button
        onClick={handleSearch}
        className="rounded-xl rounded-l-none py-5 shadow bg-indigo-600 text-white font-bold hover:bg-indigo-700 transition-all"
      >
        Search
      </Button>
    </div>
  );
};

export default SearchBar;
