import Link from "next/link";
import banner from "../assets/images/banner.jpg";
import { Button } from "@heroui/react";
import { IoBookSharp } from "react-icons/io5";

const Banner = () => {
  return (
    <div className="px-2">
      <div
        style={{ backgroundImage: `url(${banner.src})` }}
        className="h-70 md:h-100 xl:h-120 bg-cover bg-center relative flex items-center justify-center container mx-auto my-5 rounded-lg "
      >
        <div className="absolute inset-0 bg-black/60 rounded-lg"></div>

        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 sm:mb-10 animate-fadeIn">
            Find Your Next Read
          </h1>

          <Link href="/all-books">
            <Button className="px-5 sm:px-6 py-5 sm:py-6 rounded-lg bg-linear-to-r from-indigo-600 via-purple-600 to-pink-700 hover:scale-105 transition-all duration-300 hover:opacity-80">
              Browse Now <IoBookSharp />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
