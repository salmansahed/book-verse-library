"use client";

import {
  Pagination,
  A11y,
  Autoplay,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import Image from "next/image";

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
    <div className="container mx-auto mt-30 lg:mt-36 px-2">
      <div className="px-2 mb-10 md:mb-16 text-center">
        <h2 className="text-4xl font-bold text-gray-800">Happy Readers</h2>
        <div className="w-20 h-1 bg-black mx-auto mt-4 rounded-full"></div>
        <p className="text-gray-500 mt-4 text-lg">
          What our community says about BookVerse
        </p>
      </div>

      <Swiper
        modules={[Pagination, A11y, Autoplay]}
        loop={true}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        pagination={{ clickable: true, dynamicBullets: true }}
      >
        {reviews.map((review) => (
          <SwiperSlide key={review.id}>
            <div className="border p-6 rounded-md space-y-5 shadow-lg mb-10">
              <div className="flex justify-between">
                <div>
                  <FaQuoteLeft className="text-gray-200 text-3xl" />
                </div>
                <div className="flex text-yellow-500 gap-1.5">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
              </div>
              <p className="italic text-center">&quot;{review.review}&quot;</p>
              <hr />
              <div className="flex items-center justify-start gap-2">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-gray-100">
                  <Image
                    src={review.avatar}
                    alt={review.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-semibold">{review.name}</h3>
                  <p className="text-sm text-zinc-500">{review.role}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;
