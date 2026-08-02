import Image from "next/image";
import Link from "next/link";
import { Button, Card } from "@heroui/react";
import {
  FaBookOpen,
  FaUsers,
  FaBookmark,
  FaRocket,
  FaGithub,
  FaLinkedin,
  FaArrowRight,
} from "react-icons/fa";
import { HiOutlineSparkles } from "react-icons/hi";

export const metadata = {
  title: "About Us",
  description:
    "Learn more about BookVerse - Your modern digital library experience.",
};

const AboutPage = () => {
  const stats = [
    { id: 1, label: "Active Readers", value: "10K+", icon: FaUsers },
    { id: 2, label: "Books Collected", value: "25K+", icon: FaBookOpen },
    { id: 3, label: "Categories", value: "50+", icon: FaBookmark },
    {
      id: 4,
      label: "Community Rating",
      value: "4.9/5",
      icon: HiOutlineSparkles,
    },
  ];

  const features = [
    {
      id: 1,
      title: "Vast Digital Library",
      description:
        "Explore thousands of books across multiple categories and genres easily.",
      icon: FaBookOpen,
    },
    {
      id: 2,
      title: "Seamless Borrowing",
      description:
        "Simple and intuitive system to discover, track, and borrow your favorite reads.",
      icon: FaRocket,
    },
    {
      id: 3,
      title: "Community Driven",
      description:
        "Read authentic reviews and recommendations from passionate book lovers.",
      icon: FaUsers,
    },
  ];

  return (
    <div className="min-h-screen py-12 md:py-20">
      <div className="container mx-auto px-4">
        {/* 1. Hero Banner */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16 md:mb-24">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 border border-indigo-100 px-3.5 py-1.5 rounded-full inline-flex items-center gap-2">
            <HiOutlineSparkles className="text-indigo-600" /> Discover Our
            Mission
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-zinc-900 tracking-tight leading-tight">
            Redefining How You Experience{" "}
            <span className="bg-linear-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Literature
            </span>
          </h1>
          <p className="text-zinc-600 text-base sm:text-lg leading-relaxed">
            BookVerse is a modern digital platform designed to bring readers,
            books, and knowledge together seamlessly into one interactive
            ecosystem.
          </p>
        </div>

        {/* 2. Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20 md:mb-28">
          <div className="group relative aspect-4/3 w-full rounded-3xl overflow-hidden border border-zinc-200/60 shadow-xl bg-zinc-100 transition-all duration-500 hover:shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=1000&auto=format&fit=crop"
              alt="BookVerse Library Concept"
              fill
              className="object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
              priority
            />
            <div className="absolute inset-0 bg-linear-to-t from-zinc-950/50 via-transparent to-transparent" />
          </div>

          <div className="space-y-6">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-indigo-600">
              Our Journey
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 tracking-tight">
              Crafted for Book Lovers, by Passionate Creators
            </h2>
            <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
              BookVerse started with a simple vision: to eliminate the friction
              between finding a good book and starting your reading journey.
              Whether you are browsing for academics or fiction, our platform
              makes reading accessible and enjoyable.
            </p>
            <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
              Built with cutting-edge technologies like Next.js, Tailwind CSS,
              and HeroUI, BookVerse offers lightning-fast responsiveness and an
              intuitive user interface.
            </p>

            <div className="pt-2">
              <Link href="/all-books">
                <Button
                  variant="secondary"
                  className="primary-btn px-6 h-12 rounded-xl font-semibold gap-2"
                >
                  Explore Our Collection
                  <FaArrowRight className="text-xs" />
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* 3. Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-20 md:mb-28">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <Card
                key={stat.id}
                className="group bg-linear-to-br from-indigo-900 to-purple-900 text-white p-6 rounded-2xl border border-indigo-500/20 text-center space-y-2 shadow-lg hover:shadow-2xl hover:-translate-y-2 hover:border-indigo-400/50 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-white/10 mx-auto flex items-center justify-center text-indigo-300 group-hover:scale-110 group-hover:bg-white/20 transition-all duration-300">
                  <Icon className="text-xl" />
                </div>
                <h3 className="text-3xl sm:text-4xl font-black text-white">
                  {stat.value}
                </h3>
                <p className="text-zinc-300 text-xs sm:text-sm font-medium">
                  {stat.label}
                </p>
              </Card>
            );
          })}
        </div>

        {/* 4. Core Features */}
        <div className="mb-20 md:mb-28">
          <div className="text-center mb-12 space-y-2">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 tracking-tight">
              Why Readers Choose BookVerse
            </h2>
            <p className="text-zinc-500 text-sm sm:text-base">
              Designed with attention to detail for an unmatched digital library
              experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <Card
                  key={feature.id}
                  className="group bg-white border border-zinc-200/60 p-6 sm:p-8 rounded-2xl shadow-xs hover:shadow-2xl hover:-translate-y-2 hover:border-indigo-500/40 transition-all duration-300 space-y-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
                    <Icon className="text-xl" />
                  </div>
                  <h3 className="text-xl font-bold text-zinc-900 group-hover:text-indigo-600 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-zinc-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>

        {/* 5. Developer Spotlight */}
        <div className="relative overflow-hidden rounded-3xl bg-linear-to-r from-zinc-900 via-indigo-950 to-zinc-900 text-white p-8 sm:p-12 border border-zinc-800 shadow-2xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-4 text-center md:text-left max-w-xl">
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 px-3 py-1 rounded-full inline-block">
                Creator & Developer
              </span>
              <h2 className="text-3xl sm:text-4xl font-black">
                Created by Salman Sahed
              </h2>
              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                Passionate Web Developer specializing in Next.js, React, and
                modern UI engineering. Building interactive and scalable digital
                solutions for users around the globe.
              </p>

              {/* Developer Links */}
              <div className="flex items-center justify-center md:justify-start gap-4 pt-2">
                <Link
                  href="https://github.com/salmansahed"
                  target="_blank"
                  className="flex items-center gap-2 text-sm font-semibold bg-white/10 hover:bg-white/20 border border-white/20 px-4 py-2.5 rounded-xl hover:border-white/40 transition-all"
                >
                  <FaGithub className="text-lg" /> GitHub
                </Link>
                <Link
                  href="https://www.linkedin.com/in/salman-sahed/"
                  target="_blank"
                  className="flex items-center gap-2 text-sm font-semibold bg-indigo-600 hover:bg-indigo-500 px-4 py-2.5 rounded-xl shadow-lg hover:shadow-indigo-500/30 transition-all"
                >
                  <FaLinkedin className="text-lg" /> LinkedIn
                </Link>
              </div>
            </div>

            {/* Developer Avatar Badge */}
            <div className="group relative w-36 h-36 sm:w-44 sm:h-44 rounded-full overflow-hidden border-4 border-indigo-500/30 shadow-2xl shrink-0 bg-zinc-800 hover:border-indigo-500 transition-colors duration-300">
              <Image
                src="https://github.com/salmansahed.png"
                alt="Salman Sahed"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
