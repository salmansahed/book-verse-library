import React from "react";
import { Card } from "@heroui/react";
import { FaBookOpen, FaUsers, FaBookBookmark, FaStar } from "react-icons/fa6";

const stats = [
  {
    id: 1,
    value: "10,000+",
    label: "Books Available",
    description: "Digital & physical collection",
    icon: FaBookOpen,
    color:
      "from-blue-500/20 to-indigo-500/20 text-indigo-600 border-indigo-200",
  },
  {
    id: 2,
    value: "5,500+",
    label: "Active Readers",
    description: "Growing reader community",
    icon: FaUsers,
    color:
      "from-purple-500/20 to-pink-500/20 text-purple-600 border-purple-200",
  },
  {
    id: 3,
    value: "12,800+",
    label: "Books Borrowed",
    description: "Total successful borrows",
    icon: FaBookBookmark,
    color:
      "from-emerald-500/20 to-teal-500/20 text-emerald-600 border-emerald-200",
  },
  {
    id: 4,
    value: "4.9 / 5.0",
    label: "User Rating",
    description: "Based on reader feedback",
    icon: FaStar,
    color: "from-amber-500/20 to-orange-500/20 text-amber-600 border-amber-200",
  },
];

const StatsSection = () => {
  return (
    <section className="py-12 px-4 sm:px-6 container mx-auto">
      <Card className="bg-white/80 backdrop-blur-xl border border-zinc-200/80 p-8 sm:p-10 rounded-3xl shadow-sm relative overflow-hidden">
        {/* Top Decorative Gradient Line */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-linear-to-r from-indigo-500 via-purple-500 to-fuchsia-500" />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 divide-y md:divide-y-0 md:divide-x divide-zinc-200/80">
          {stats.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.id}
                className={`group flex flex-col items-center text-center space-y-3.5 p-4 rounded-2xl transition-all duration-300 hover:bg-indigo-50/40 hover:-translate-y-1 ${
                  index !== 0 ? "pt-6 md:pt-4" : ""
                }`}
              >
                {/* Icon Wrapper with Hover Animation */}
                <div
                  className={`w-14 h-14 rounded-2xl bg-linear-to-br ${item.color} border flex items-center justify-center text-2xl shrink-0 shadow-inner transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}
                >
                  <IconComponent />
                </div>

                {/* Stats Value & Label */}
                <div className="space-y-1">
                  <h3 className="text-2xl sm:text-3xl font-black text-zinc-900 tracking-tight transition-colors duration-300 group-hover:text-indigo-600">
                    {item.value}
                  </h3>
                  <p className="font-bold text-indigo-600">
                    {item.label}
                  </p>
                  <p className="text-xs font-semibold text-zinc-400">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Card>
    </section>
  );
};

export default StatsSection;
