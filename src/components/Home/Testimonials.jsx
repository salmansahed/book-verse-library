"use client";

import { Pagination, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Card } from "@heroui/react";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import Image from "next/image";

import "swiper/css";
import "swiper/css/pagination";

const Testimonials = () => {
  const reviews = [
    {
      id: 1,
      name: "Sabbir Hossain",
      role: "Avid Reader",
      review:
        "BookVerse has truly simplified the hassle of finding books. The interface is so elegant that it feels like being in a modern library. A wonderful experience!",
      avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
    },
    {
      id: 2,
      name: "Tania Sultana",
      role: "Student",
      review:
        "Finding all my favorite storybooks in one place has become so much easier now. The site is not only beautiful but also very easy to use. The best place for book lovers!",
      avatar: "https://i.pravatar.cc/150?u=tania",
    },
    {
      id: 3,
      name: "Ariful Islam",
      role: "Book Collector",
      review:
        "I buy books regularly, and BookVerse's reviews really help me pick my next read. The featured books section is my absolute favorite!",
      avatar: "https://i.pravatar.cc/150?u=arif",
    },
    {
      id: 4,
      name: "Nusrat Jahan",
      role: "Fiction Lover",
      review:
        "I’ve been looking for a book site with such a beautiful design for a long time. The auto-sliding reviews and categories are top-notch. Truly impressive work!",
      avatar: "https://i.pravatar.cc/150?u=nusrat",
    },
  ];

  return (
    <section className="container mx-auto my-16 md:my-24 px-4">
      {/* Section Header */}
      <div className="text-center mb-12">
        <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 border border-indigo-100 px-3 py-1 rounded-full inline-block mb-3">
          Community Feedback
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 tracking-tight">
          Happy{" "}
          <span className="bg-linear-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Readers
          </span>
        </h2>
        <p className="text-zinc-500 text-sm sm:text-base mt-2 max-w-lg mx-auto">
          What our reader community says about their experience with BookVerse.
        </p>
      </div>

      {/* Swiper Slider */}
      <Swiper
        modules={[Pagination, A11y, Autoplay]}
        loop={true}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        spaceBetween={24}
        slidesPerView={1}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        pagination={{ clickable: true, dynamicBullets: true }}
        className="pb-14! [&_.swiper-pagination-bullet-active]:bg-indigo-600! [&_.swiper-pagination-bullet-active]:w-6! [&_.swiper-pagination-bullet]:transition-all"
      >
        {reviews.map((review) => (
          <SwiperSlide key={review.id} className="h-auto">
            <Card className="h-full bg-white border border-zinc-200/60 rounded-2xl p-6 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
              <div className="space-y-4">
                {/* Top Quote Icon & Stars */}
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600">
                    <FaQuoteLeft className="text-lg" />
                  </div>
                  <div className="flex text-amber-400 gap-1 text-sm">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>
                </div>

                {/* Review Text */}
                <p className="text-zinc-600 text-sm leading-relaxed italic">
                  &quot;{review.review}&quot;
                </p>
              </div>

              {/* User Profile Footer */}
              <div className="pt-6 mt-6 border-t border-zinc-100 flex items-center gap-3">
                <div className="relative w-11 h-11 rounded-full overflow-hidden border-2 border-indigo-100 shrink-0">
                  <Image
                    src={review.avatar}
                    alt={review.name}
                    fill
                    sizes="44px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-zinc-900 text-sm">
                    {review.name}
                  </h3>
                  <p className="text-xs text-zinc-500 font-medium">
                    {review.role}
                  </p>
                </div>
              </div>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
