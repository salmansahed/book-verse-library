import React from "react";
import Link from "next/link";
import { Card } from "@heroui/react";
import {
  FaLaptopCode,
  FaBookBookmark,
  FaAtom,
  FaMosque,
  FaBrain,
  FaArrowRight,
} from "react-icons/fa6";

const categories = [
  {
    id: 1,
    name: "Programming & Tech",
    count: "120+ Books",
    icon: FaLaptopCode,
    color:
      "from-blue-500/20 to-indigo-500/20 text-indigo-600 border-indigo-200",
  },
  {
    id: 2,
    name: "Fiction & Literature",
    count: "250+ Books",
    icon: FaBookBookmark,
    color:
      "from-purple-500/20 to-pink-500/20 text-purple-600 border-purple-200",
  },
  {
    id: 3,
    name: "Science & Physics",
    count: "85+ Books",
    icon: FaAtom,
    color: "from-cyan-500/20 to-teal-500/20 text-teal-600 border-teal-200",
  },
  {
    id: 4,
    name: "Islamic Studies",
    count: "180+ Books",
    icon: FaMosque,
    color:
      "from-emerald-500/20 to-green-500/20 text-emerald-600 border-emerald-200",
  },
  {
    id: 5,
    name: "Self Improvement",
    count: "140+ Books",
    icon: FaBrain,
    color: "from-amber-500/20 to-orange-500/20 text-amber-600 border-amber-200",
  },
];

const CategoriesSection = () => {
  return (
    <section className="py-12 px-4 sm:px-6 container mx-auto">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
        <div className="space-y-3">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-indigo-600 bg-indigo-50 px-3.5 py-1.5 rounded-full border border-indigo-100 mb-2">
            Explore Genres
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-zinc-900 tracking-tight">
            Explore <span className="text-indigo-600">Popular Categories</span>
          </h2>
          <p className="text-xs sm:text-sm text-zinc-500 font-medium">
            Find your next favorite read from our curated collection categories.
          </p>
        </div>

        <Link
          href="/all-books"
          className="inline-flex items-center gap-2 text-xs font-bold text-indigo-600 hover:text-indigo-700 transition-colors group shrink-0"
        >
          View All Categories
          <FaArrowRight className="text-xs transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        {categories.map((item) => {
          const IconComponent = item.icon;
          return (
            <Link key={item.id} href="/all-books" className="block group">
              <Card className="bg-white/80 backdrop-blur-xl border border-zinc-200/80 p-5 rounded-3xl shadow-sm hover:shadow-xl hover:shadow-indigo-500/10 hover:-translate-y-1.5 transition-all duration-300 h-full flex flex-col justify-between items-center text-center space-y-3">
                {/* Icon Wrapper */}
                <div
                  className={`w-14 h-14 rounded-2xl bg-linear-to-br ${item.color} border flex items-center justify-center text-2xl shrink-0 transition-transform duration-300 group-hover:scale-110 shadow-inner`}
                >
                  <IconComponent />
                </div>

                {/* Info */}
                <div className="space-y-1">
                  <h3 className="text-sm font-bold text-zinc-800 group-hover:text-indigo-600 transition-colors line-clamp-1">
                    {item.name}
                  </h3>
                  <p className="text-[11px] font-semibold text-zinc-400">
                    {item.count}
                  </p>
                </div>
              </Card>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default CategoriesSection;
