import Link from "next/link";
import Image from "next/image";
import banner from "../../assets/images/banner.jpg";
import { Button } from "@heroui/react";
import { IoBookSharp, IoSparklesSharp } from "react-icons/io5";

const Banner = () => {
  return (
    <section className="relative container mx-auto px-4 py-6">
      <div className="relative min-h-112 md:min-h-128 flex items-center justify-center overflow-hidden rounded-3xl border border-zinc-200/50 shadow-2xl">
        {/* Background Image with Scale Animation */}
        <Image
          src={banner}
          alt="BookVerse Library Banner"
          fill
          priority
          className="object-cover object-center scale-105 transition-transform duration-1000 hover:scale-100"
        />

        {/* Dark Overlay with Soft Indigo-Zinc Gradient */}
        <div className="absolute inset-0 bg-linear-to-t from-zinc-950 via-zinc-950/75 to-indigo-950/30" />

        {/* Content Box */}
        <div className="relative z-10 flex flex-col items-center text-center px-4 py-12 max-w-3xl mx-auto">
          {/* Top Pill Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-indigo-300/30 bg-indigo-950/40 backdrop-blur-md mb-6 shadow-xs">
            <IoSparklesSharp className="text-indigo-400 text-sm animate-pulse" />
            <span className="text-xs md:text-sm font-medium text-indigo-100">
              Your Gateway to Unlimited Knowledge
            </span>
          </div>

          {/* Heading (Indigo to Purple Accent) */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-tight mb-4">
            Find Your Next{" "}
            <span className="bg-linear-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Great Read
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-zinc-300 text-sm md:text-lg font-normal mb-8 max-w-xl leading-relaxed">
            Explore thousands of curated digital books, borrow your favorites
            effortlessly, and elevate your reading experience today.
          </p>

          {/* Call to Action Button */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <Link href="/all-books" className="w-full sm:w-auto">
              <Button variant="secondary" className="primary-btn h-11 px-8">
                Browse Now
                <IoBookSharp className="text-lg" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
