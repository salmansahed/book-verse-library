export const metadata = {
  title: "Book Details | BookVerse",
  description:
    "Explore detailed information about your favorite books, including descriptions, authors, categories, and available quantity. Log in to access the borrow button and start reading today.",
};

import React from "react";
import Image from "next/image";
import { FaArrowRight, FaBookOpen } from "react-icons/fa";
import Link from "next/link";
import BorrowButton from "@/components/Book-Details/BorrowButton";

const BookDetails = async ({ params }) => {
  const { bookId } = await params;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/books/${bookId}`,
    { cache: "no-store" },
  );

  if (!res.ok)
    return (
      <div className="flex h-[90vh] sm:min-h-screen flex-col items-center justify-center px-4 text-center">
        <div className="flex flex-col items-center">
          <h1 className="text-3xl font-bold text-gray-400 uppercase tracking-widest">
            No
          </h1>

          <div className="flex font-black text-8xl md:text-[190px] tracking-tighter">
            <span className="text-indigo-600">B</span>
            <span className="text-rose-500">O</span>
            <span className="text-amber-500">O</span>
            <span className="text-emerald-500">K</span>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-400 uppercase tracking-widest mt-2">
            Found
          </h1>
        </div>

        <p className="mt-8 text-gray-500 max-w-sm mx-auto font-medium">
          We couldn&apos;t find any results matching your search.
        </p>

        <div className="mt-6 sm:mt-10">
          <Link
            href="/all-books"
            className="bg-gray-900 text-white text-sm font-bold px-10 py-4 rounded-xl shadow-lg hover:bg-indigo-800 transition-all active:scale-95 flex items-center gap-2"
          >
            <span>View All Books</span>
            <FaArrowRight />
          </Link>
        </div>
      </div>
    );

  const book = await res.json();
  const {
    title,
    author,
    description,
    category,
    available_quantity,
    image_url,
  } = book;

  return (
    <main className="mx-auto container px-4 min-h-screen my-12 lg:my-20">
      <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-16">
        <div className="w-full lg:w-5/12 flex justify-center lg:justify-end">
          <div className="w-full max-w-sm  rounded-2xl p-2 shadow-[0_0_5px_10px_rgba(0,0,0,0.1)]">
            <Image
              src={image_url}
              alt={title}
              width={500}
              height={700}
              className="w-full h-auto rounded-xl object-cover shadow-sm"
            />
          </div>
        </div>

        <div className="w-full space-y-8 lg:w-7/12">
          <div className="space-y-4">
            <div className="inline-flex items-center rounded-full bg-indigo-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-indigo-600 border  border-indigo-200">
              {category}
            </div>

            <h1 className="text-4xl font-black tracking-tight text-gray-900 lg:text-5xl">
              {title}
            </h1>

            <p className="text-lg text-gray-600">
              by:{" "}
              <span className="font-semibold text-indigo-600 underline decoration-indigo-200 underline-offset-4">
                {author}
              </span>
            </p>
          </div>

          <div className="border-y border-gray-200 py-8">
            <h3 className="mb-4 text-xs font-black uppercase tracking-widest text-gray-400">
              Description
            </h3>
            <p className="text-lg leading-relaxed text-gray-600">
              {description}
            </p>
          </div>

          <div>
            <p className="inline-flex items-center gap-2 uppercase border px-4 py-2 rounded-xl bg-red-100 font-medium tracking-wide shadow">
              <FaBookOpen />
              {available_quantity} Copies Available
            </p>
          </div>

          <div className="pt-4">
            <BorrowButton />
          </div>
        </div>
      </div>
    </main>
  );
};

export default BookDetails;
