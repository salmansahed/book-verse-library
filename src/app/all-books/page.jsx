export const metadata = {
  title: "All Books | BookVerse",
  description:
    "Explore our extensive collection of books, search by title, and filter by categories like Story, Tech, or Science to find your next great read.",
};

import Link from "next/link";
import { Button } from "@heroui/react";
import { IoSearch } from "react-icons/io5";
import BookCard from "@/components/All-Books/BookCard";
import SearchBar from "@/components/All-Books/SearchBar";

const AllBooksPage = async ({ searchParams }) => {
  const params = await searchParams;
  const selectedCategory = params?.category || "All";
  const searchQuery = params?.search || "";

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/books`, {
    cache: "no-store",
  });
  const books = await res.json();

  // Extract unique categories safely
  const categories = ["All", ...new Set(books.map((book) => book.category))];

  // Filter books by category and search query
  const filterByCategory = books.filter((book) => {
    const matchesCategory =
      selectedCategory === "All" || book.category === selectedCategory;
    const matchesSearch = book.title
      ?.toLowerCase()
      .includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="container mx-auto mb-10 sm:mb-20 px-4 sm:px-6">
      {/* Search Field Header */}
      <div className="flex items-center justify-center my-8 sm:my-12">
        <SearchBar />
      </div>

      {/* Main Content Grid: Categories Sidebar & Book Listings */}
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-8">
        {/* Categories Sidebar */}
        <div className="sm:col-span-4 lg:col-span-3 flex flex-col gap-3">
          <div className="pb-2 border-b border-zinc-200">
            <h2 className="text-xl sm:text-2xl font-bold text-zinc-900">
              Categories
            </h2>
          </div>

          <div className="flex flex-col gap-2">
            {categories.map((category) => {
              const isActive = category === selectedCategory;
              return (
                <Link
                  key={category}
                  href={`/all-books?category=${category}${
                    searchQuery ? `&search=${searchQuery}` : ""
                  }`}
                  className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 flex items-center justify-between border ${
                    isActive
                      ? "bg-indigo-600 text-white border-indigo-600 shadow-md shadow-indigo-600/20"
                      : "bg-white text-zinc-700 border-zinc-200 hover:border-indigo-300 hover:bg-indigo-50/50 hover:text-indigo-600"
                  }`}
                >
                  <span>{category}</span>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Books Listing Section */}
        <div className="sm:col-span-8 lg:col-span-9">
          {/* Header Bar */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 mb-6 pb-2 border-b border-zinc-100">
            <h1 className="text-xl sm:text-2xl font-bold text-zinc-900">
              Showing:{" "}
              <span className="bg-linear-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                {selectedCategory}
              </span>
            </h1>
            <p className="text-sm text-zinc-500 font-medium">
              <span className="text-indigo-600 font-bold">
                {filterByCategory.length}
              </span>{" "}
              {filterByCategory.length === 1 ? "book" : "books"} found
            </p>
          </div>

          {/* Book Cards Grid or Empty State */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
            {filterByCategory.length > 0 ? (
              filterByCategory.map((book) => (
                <BookCard key={book._id || book.id} book={book} />
              ))
            ) : (
              <div className="col-span-full flex flex-col items-center justify-center py-12 sm:py-20 px-4 text-center border-2 border-dashed border-zinc-200 rounded-3xl bg-zinc-50/50">
                <div className="mb-6">
                  <div className="bg-indigo-50 p-5 rounded-2xl border border-indigo-100 inline-block text-indigo-600">
                    <IoSearch className="text-4xl sm:text-5xl" />
                  </div>
                </div>

                <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 mb-3">
                  Oops! No Books Found
                </h2>

                <p className="text-sm sm:text-base text-zinc-500 max-w-md mx-auto mb-8 leading-relaxed">
                  We couldn&apos;t find any books in the{" "}
                  <span className="font-semibold text-indigo-600">
                    &quot;{selectedCategory}&quot;
                  </span>{" "}
                  category. Try searching for something else or explore all
                  available books.
                </p>

                <Link href="/all-books?category=All">
                  <Button
                    variant="outline"
                    className="font-semibold px-8 h-12 rounded-xl border-indigo-600 text-indigo-600 hover:bg-indigo-50 transition-colors"
                  >
                    View All Books
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllBooksPage;
