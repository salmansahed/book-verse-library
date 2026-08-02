import { Suspense } from "react";
import Link from "next/link";
import { Button } from "@heroui/react";
import { FaArrowRight } from "react-icons/fa";
import BookCard from "../All-Books/BookCard";
import { FeaturedBooksSkeleton } from "./BookCardSkeleton";

// Async Server Component: Data Fetcher
const FeaturedBooksList = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/books`, {
    cache: "no-store",
  });
  const books = await res.json();
  const fourBooks = books.slice(0, 4);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
      {fourBooks.map((book) => (
        <BookCard key={book.id || book._id} book={book} />
      ))}
    </div>
  );
};

// Main Server Component
const FeaturedBooks = () => {
  return (
    <section className="container mx-auto px-4 my-16 md:mb-24 mt-16">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
        <div>
          <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 border border-indigo-100 px-3 py-1 rounded-full inline-block mb-3">
            Handpicked Classics
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 tracking-tight">
            Featured{" "}
            <span className="bg-linear-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Books
            </span>
          </h2>
          <p className="text-zinc-500 text-sm sm:text-base mt-2 max-w-lg">
            Explore our top-rated recommendations and most popular titles this
            season.
          </p>
        </div>

        {/* View All Button */}
        <Link href="/all-books">
          <Button
            variant="ghost"
            className="text-indigo-600 hover:text-indigo-700 hover:bg-indigo-50 font-semibold gap-2"
          >
            Explore All Books
            <FaArrowRight className="text-xs" />
          </Button>
        </Link>
      </div>

      {/* Suspense Boundary wrapping only the dynamic content */}
      <Suspense fallback={<FeaturedBooksSkeleton />}>
        <FeaturedBooksList />
      </Suspense>
    </section>
  );
};

export default FeaturedBooks;
