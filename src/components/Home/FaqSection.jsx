import React from "react";
import Link from "next/link";
import { Card, Accordion, Button } from "@heroui/react";
import {
  FaHeadset,
  FaArrowRight,
  FaChevronDown,
  FaBook,
  FaUserCheck,
  FaClock,
  FaShield,
} from "react-icons/fa6";

const faqs = [
  {
    id: "1",
    title: "How do I borrow a book from BookVerse?",
    subtitle: "Quick guide to instant book borrowing",
    content:
      "Simply sign in to your account, browse through our library, choose your desired book, and click the borrow button to get it instantly.",
    icon: <FaBook className="text-indigo-600 text-base" />,
  },
  {
    id: "2",
    title: "Can I read or browse books without logging in?",
    subtitle: "Explore public library features",
    content:
      "Yes! Browsing the library, searching for titles, and viewing details are open to everyone. Logging in is only required when borrowing.",
    icon: <FaUserCheck className="text-indigo-600 text-base" />,
  },
  {
    id: "3",
    title: "How long can I keep a borrowed book?",
    subtitle: "Standard borrowing duration & extensions",
    content:
      "The standard borrowing duration is 14 days. You can easily manage or request extensions from your user dashboard.",
    icon: <FaClock className="text-indigo-600 text-base" />,
  },
  {
    id: "4",
    title: "Are there any hidden fees or charges?",
    subtitle: "100% free and transparent platform",
    content:
      "No, BookVerse is completely transparent and free to explore for all avid book lovers.",
    icon: <FaShield className="text-indigo-600 text-base" />,
  },
];

const FaqSection = () => {
  return (
    <section className="py-12 px-4 sm:px-6 container mx-auto max-w-7xl">
      {/* Section Header */}
      <div className="text-center space-y-3 max-w-2xl mx-auto mb-12">
        <span className="inline-block text-xs font-bold uppercase tracking-widest text-indigo-600 bg-indigo-50 px-3.5 py-1.5 rounded-full border border-indigo-100">
          Got Questions?
        </span>
        <h2 className="text-2xl sm:text-3xl font-black text-zinc-900 tracking-tight">
          Frequently Asked <span className="text-indigo-600">Questions</span>
        </h2>
        <p className="text-xs sm:text-sm text-zinc-500 font-medium">
          Everything you need to know about borrowing and reading on BookVerse.
        </p>
      </div>

      {/* Two Column Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Side: HeroUI Accordion with Icons (Span 7) */}
        <div className="lg:col-span-7">
          <Accordion className="w-full rounded-3xl bg-white shadow p-2 border border-gray-200">
            {faqs.map((item) => (
              <Accordion.Item
                key={item.id}
                className="bg-purple-50 backdrop-blur-xl  rounded-2xl mb-4 shadow-xs hover:shadow-md transition-all duration-300 overflow-hidden"
              >
                <Accordion.Heading>
                  <Accordion.Trigger className="group flex items-center justify-between w-full p-4 sm:p-5 text-left transition-none hover:bg-indigo-50/40 cursor-pointer">
                    <div className="flex items-center gap-3.5">
                      <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-inner">
                        {item.icon}
                      </div>
                      <div className="flex flex-col gap-0.5">
                        <span className="text-sm sm:text-base font-bold text-zinc-900 group-hover:text-indigo-600 transition-colors">
                          {item.title}
                        </span>
                        <span className="text-xs font-medium text-zinc-400">
                          {item.subtitle}
                        </span>
                      </div>
                    </div>
                    <Accordion.Indicator className="text-zinc-400 [&>svg]:size-4 transition-transform duration-300 shrink-0 ml-2">
                      <FaChevronDown />
                    </Accordion.Indicator>
                  </Accordion.Trigger>
                </Accordion.Heading>
                <Accordion.Panel>
                  <Accordion.Body className="text-xs sm:text-sm text-zinc-500 font-medium leading-relaxed px-5 pb-5 pt-2 border-t border-zinc-100/80 mt-1">
                    {item.content}
                  </Accordion.Body>
                </Accordion.Panel>
              </Accordion.Item>
            ))}
          </Accordion>
        </div>

        {/* Right Side: Help & Support Card (Span 5) */}
        <div className="lg:col-span-5">
          <Card className="bg-linear-to-br from-indigo-900 via-indigo-950 to-zinc-900 text-white p-8 rounded-3xl shadow-xl relative overflow-hidden flex flex-col justify-between space-y-8 h-full">
            {/* Background Decorative Glow */}
            <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none" />

            <div className="space-y-4 relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-indigo-300 flex items-center justify-center text-2xl shadow-inner">
                <FaHeadset />
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-black tracking-tight text-white">
                  Still have questions or need assistance?
                </h3>
                <p className="text-xs sm:text-sm text-zinc-300 font-medium leading-relaxed">
                  Can&apos;t find the answer you&apos;re looking for? Feel free
                  to reach out to our community support or explore the catalog.
                </p>
              </div>
            </div>

            <div className="relative z-10 pt-4">
              <Link href="/all-books">
                <Button
                  variant="secondary"
                  className="w-full h-11 rounded-xl font-bold text-sm bg-white hover:bg-zinc-100 text-zinc-900 shadow-md transition-all gap-2 cursor-pointer"
                >
                  Explore Library{" "}
                  <FaArrowRight className="text-xs text-indigo-600" />
                </Button>
              </Link>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
