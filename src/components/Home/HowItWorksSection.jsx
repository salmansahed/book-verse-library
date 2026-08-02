import React from "react";
import { Card } from "@heroui/react";
import {
  FaMagnifyingGlass,
  FaBookBookmark,
  FaBookOpenReader,
  FaArrowRight,
} from "react-icons/fa6";

const steps = [
  {
    step: "01",
    title: "Discover & Choose",
    description:
      "Explore our vast catalog of digital books and find the ones that match your curiosity.",
    icon: FaMagnifyingGlass,
    badgeColor: "bg-indigo-50 text-indigo-600 border-indigo-100",
    iconBg:
      "from-indigo-500/10 to-indigo-500/20 text-indigo-600 border-indigo-200",
  },
  {
    step: "02",
    title: "Borrow Instantly",
    description:
      "Log in to your account and borrow your selected book with just a single click.",
    icon: FaBookBookmark,
    badgeColor: "bg-purple-50 text-purple-600 border-purple-100",
    iconBg:
      "from-purple-500/10 to-purple-500/20 text-purple-600 border-purple-200",
  },
  {
    step: "03",
    title: "Read & Enjoy",
    description:
      "Access your borrowed books instantly anytime, anywhere, and track your reading journey.",
    icon: FaBookOpenReader,
    badgeColor: "bg-emerald-50 text-emerald-600 border-emerald-100",
    iconBg:
      "from-emerald-500/10 to-emerald-500/20 text-emerald-600 border-emerald-200",
  },
];

const HowItWorksSection = () => {
  return (
    <section className="py-12 px-4 sm:px-6 container mx-auto">
      {/* Section Header */}
      <div className="text-center space-y-3 max-w-2xl mx-auto mb-12">
        <span className="inline-block text-xs font-bold uppercase tracking-widest text-indigo-600 bg-indigo-50 px-3.5 py-1.5 rounded-full border border-indigo-100">
          Simple Process
        </span>
        <h2 className="text-2xl sm:text-3xl font-black text-zinc-900 tracking-tight">
          How <span className="text-indigo-600">BookVerse</span> Works
        </h2>
        <p className="text-xs sm:text-sm text-zinc-500 font-medium">
          Start reading your favorite books in three quick and effortless steps.
        </p>
      </div>

      {/* Steps Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
        {steps.map((item, index) => {
          const IconComponent = item.icon;
          return (
            <div key={item.step} className="relative group">
              <Card className="bg-white/80 backdrop-blur-xl border border-zinc-200/80 p-6 sm:p-8 rounded-3xl shadow-sm hover:shadow-xl hover:shadow-indigo-500/10 hover:-translate-y-1.5 transition-all duration-300 h-full flex flex-col justify-between space-y-6 relative overflow-hidden">
                {/* Background Step Number Accent */}
                <span className="absolute -right-2 -bottom-4 text-7xl font-black text-zinc-100 select-none pointer-events-none group-hover:text-indigo-50 transition-colors duration-300">
                  {item.step}
                </span>

                <div className="space-y-5 relative z-10">
                  {/* Top Row: Icon + Badge */}
                  <div className="flex items-center justify-between">
                    <div
                      className={`w-14 h-14 rounded-2xl bg-linear-to-br ${item.iconBg} border flex items-center justify-center text-2xl shrink-0 transition-transform duration-300 group-hover:scale-110 shadow-inner`}
                    >
                      <IconComponent />
                    </div>
                    <span
                      className={`text-xs font-black tracking-wider px-3 py-1 rounded-full border ${item.badgeColor}`}
                    >
                      Step {item.step}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-zinc-900 group-hover:text-indigo-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-500 font-medium leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Card>

              {/* Connecting Arrow for Desktop */}
              {index < steps.length - 1 && (
                <div className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 z-20 text-zinc-300 text-sm">
                  <FaArrowRight />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default HowItWorksSection;
