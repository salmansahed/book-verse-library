import Image from "next/image";
import Link from "next/link";
import { Button } from "@heroui/react";
import { FaArrowRight } from "react-icons/fa";

const BookCard = ({ book }) => {
  const { title, image_url, id } = book;

  return (
    <div className="group space-y-4 shadow-md hover:shadow-2xl rounded-2xl p-4 bg-white border border-gray-100 transition-all duration-300">
      <div className="overflow-hidden rounded-xl relative">
        <Image
          src={image_url}
          alt={title}
          width={300}
          height={400}
          className="h-72 object-cover aspect-3/4 w-full transform group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      <div className="space-y-3">
        <h2 className="text-lg font-bold text-gray-800 line-clamp-1 group-hover:text-primary transition-colors">
          {title}
        </h2>

        <Link href={`/book-details/${id}`} className="block">
          <Button className="w-full rounded-xl bg-black text-white font-semibold flex items-center justify-center gap-2 group/btn hover:bg-primary transition-all shadow-lg hover:shadow-primary/30">
            View Details
            <FaArrowRight className="group-hover/btn:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default BookCard;
