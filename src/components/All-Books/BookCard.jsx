import Image from "next/image";
import Link from "next/link";
import { Button, Card } from "@heroui/react";
import { FaArrowRight } from "react-icons/fa";
import { IoBookmarkOutline } from "react-icons/io5";

const BookCard = ({ book }) => {
  const { title, image_url, id, _id, category, author } = book || {};
  const bookId = id || _id;

  return (
    <Card className="group relative bg-white border border-zinc-200/60 rounded-2xl p-3.5 shadow-xs hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      {/* Book Cover Image Container */}
      <div className="relative aspect-3/4 w-full overflow-hidden rounded-xl bg-zinc-100">
        <Image
          src={image_url}
          alt={title || "Book Cover"}
          fill
          className="object-cover transform group-hover:scale-105 transition-transform duration-500 ease-out"
        />

        {/* Top Floating Badge */}
        <div className="absolute top-2.5 left-2.5 z-10">
          <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md text-zinc-800 shadow-2xs border border-white/40">
            <IoBookmarkOutline className="text-indigo-600" />
            {category || "Books"}
          </span>
        </div>

        {/* Subtle Bottom Image Gradient */}
        <div className="absolute inset-0 bg-linear-to-t from-zinc-950/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content Area */}
      <div className="flex flex-col gap-3 pt-3.5 pb-1 px-1">
        {/* Title & Optional Author */}
        <div className="space-y-1">
          <h3 className="text-base font-bold text-zinc-900 line-clamp-1 group-hover:text-indigo-600 transition-colors">
            {title}
          </h3>
          {author && (
            <p className="text-xs text-zinc-500 font-medium line-clamp-1">
              By {author}
            </p>
          )}
        </div>

        {/* View Details Action Button */}
        <Link href={`/book-details/${bookId}`} className="w-full">
          <Button
            variant="secondary"
            className="primary-btn w-full h-10 rounded-xl"
          >
            View Details
            <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </div>
    </Card>
  );
};

export default BookCard;
