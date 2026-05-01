import BookCard from "@/components/BookCard";
import Link from "next/link";
import { Button } from "@heroui/react";
import { IoSearch } from "react-icons/io5";

const AllBooksPage = async ({ searchParams }) => {
  const params = await searchParams;
  const selectedCategory = params?.category || "All";
  const res = await fetch(
    "https://book-verse-library-server.onrender.com/books",
    {
      cache: "no-store",
    },
  );
  const books = await res.json();

  const categories = ["All", ...new Set(books.map((book) => book.category))];

  const filterByCategory = books.filter(
    (book) => selectedCategory === "All" || book.category === selectedCategory,
  );

  return (
    <div className="container mx-auto mb-10 sm:mb-20 px-2">
      {/* Search Feild */}
      <div className="flex items-center justify-center my-8 sm:my-12">
        <div className="relative">
          <input
            type="search"
            placeholder="Search book..."
            className="rounded-xl border-2 rounded-r-none py-1.5 border-r-0 w-60 sm:w-100 md:w-150 pl-9 shadow"
          />
          <IoSearch className="absolute left-2 top-2 text-2xl text-zinc-500 " />
        </div>
        <Button className="rounded-xl rounded-l-none py-5 shadow">
          Search
        </Button>
      </div>

      {/* Books & Category */}
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-6">
        <div className="sm:col-span-3 lg:col-span-2 flex flex-col gap-2 sm:gap-4">
          <p className="text-2xl text-indigo-900 font-semibold">Categories</p>
          <hr />
          {categories.map((category) => (
            <Link
              key={category}
              href={`/all-books?category=${category}`}
              className={`${category === selectedCategory && "bg-indigo-600 text-white font-semibold"} transition-all duration-300 px-3 py-2 rounded-md border-2`}
            >
              {category}
            </Link>
          ))}
        </div>
        <div className="sm:col-span-9 lg:col-span-10">
          <div className="flex items-center justify-between">
            <h1 className="mb-5 text-2xl font-semibold">
              Showing:{" "}
              <span className="text-indigo-600">{selectedCategory}</span>
            </h1>
            <p className="text-gray-600">
              <span className="text-orange-500 font-semibold">
                {filterByCategory.length}
              </span>{" "}
              book found
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filterByCategory.length > 0 ? (
              filterByCategory.map((book) => (
                <BookCard key={book.id} book={book} />
              ))
            ) : (
              <div className="col-span-full flex flex-col items-center justify-center py-10 sm:py-16 md:py-20 px-4 text-center border-2 border-dashed border-gray-200 rounded-2xl bg-gray-50/50">
                <div className="mb-4 sm:mb-6">
                  <div className="bg-red-50 p-4 sm:p-6 rounded-full inline-block">
                    <IoSearch className="text-4xl sm:text-5xl md:text-6xl text-red-400" />
                  </div>
                </div>

                <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-2">
                  Oops! No Books Found
                </h1>

                <p className="text-sm sm:text-base text-gray-500 max-w-xs sm:max-w-sm md:max-w-md mx-auto mb-6 sm:mb-8">
                  We couldn&apos;t find any books in the{" "}
                  <span className="font-semibold text-indigo-600">
                    &quot;{selectedCategory}&quot;
                  </span>{" "}
                  category. Please try selecting a different category or adjust
                  your search.
                </p>

                <Link
                  href="/all-books?category=All"
                  className="w-full sm:w-auto"
                >
                  <Button
                    variant="outline"
                    className="w-full sm:w-auto font-semibold px-8 py-4 sm:py-5 rounded-xl border-indigo-600 text-indigo-600 bg-indigo-50 hover:bg-indigo-100 transition-colors"
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
