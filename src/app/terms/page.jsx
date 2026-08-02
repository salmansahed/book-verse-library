import Link from "next/link";
import { Card, Button } from "@heroui/react";
import {
  HiOutlineDocumentText,
  HiOutlineShieldCheck,
  HiOutlineBookOpen,
  HiOutlineExclamationCircle,
} from "react-icons/hi2";
import { FaArrowLeft, FaUserCheck } from "react-icons/fa6";

export const metadata = {
  title: "Terms & Conditions | BookVerse",
  description: "Terms and conditions for using the BookVerse library platform.",
};

const TermsPage = () => {
  const sections = [
    {
      id: "acceptance",
      icon: HiOutlineDocumentText,
      title: "1. Acceptance of Terms",
      content:
        "By accessing and using BookVerse, you agree to be bound by these Terms and Conditions and all applicable laws and regulations. If you do not agree with any part of these terms, you are prohibited from using or accessing this platform.",
    },
    {
      id: "account",
      icon: FaUserCheck,
      title: "2. User Accounts & Responsibilities",
      content:
        "When you create an account with us, you must provide accurate and complete information. You are solely responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.",
    },
    {
      id: "borrowing",
      icon: HiOutlineBookOpen,
      title: "3. Library & Book Borrowing Rules",
      content:
        "BookVerse provides a digital platform for exploring and requesting books. Users must return or renew borrowed books within the designated period. Any intentional damage to physical library resources or misuse of digital services may result in temporary or permanent suspension.",
    },
    {
      id: "privacy",
      icon: HiOutlineShieldCheck,
      title: "4. Intellectual Property & Usage",
      content:
        "All content, including book metadata, logos, branding, graphics, and code on BookVerse, are protected by copyright laws. You may not reproduce, distribute, or modify any material from this platform without explicit permission.",
    },
    {
      id: "termination",
      icon: HiOutlineExclamationCircle,
      title: "5. Termination & Liability",
      content:
        "We reserve the right to terminate or suspend access to our service immediately, without prior notice, for any reason whatsoever, including breach of these Terms. BookVerse shall not be liable for any indirect or consequential loss resulting from service downtime.",
    },
  ];

  return (
    <div className="min-h-screen py-12 md:py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Top Navigation Back Button */}
        <div className="mb-8">
          <Link href="/">
            <Button
              variant="ghost"
              className="text-zinc-600 hover:text-indigo-600 hover:bg-indigo-50 font-semibold gap-2 rounded-xl"
            >
              <FaArrowLeft className="text-xs" /> Back to Home
            </Button>
          </Link>
        </div>

        {/* Page Header */}
        <div className="text-center space-y-4 mb-12 md:mb-16">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 border border-indigo-100 px-3.5 py-1.5 rounded-full inline-flex items-center gap-2">
            <HiOutlineDocumentText className="text-indigo-600" /> Legal
            Information
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-zinc-900 tracking-tight">
            Terms &{" "}
            <span className="bg-linear-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Conditions
            </span>
          </h1>
          <p className="text-zinc-500 text-sm sm:text-base max-w-xl mx-auto">
            Please read these terms carefully before using the BookVerse
            platform.
          </p>
        </div>

        {/* Terms Sections Grid */}
        <div className="space-y-6">
          {sections.map((section) => {
            const Icon = section.icon;
            return (
              <Card
                key={section.id}
                className="group bg-white border border-zinc-200/60 p-6 sm:p-8 rounded-2xl shadow-xs hover:shadow-xl hover:-translate-y-1 hover:border-indigo-500/40 transition-all duration-300 space-y-3"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300 shrink-0">
                    <Icon className="text-lg" />
                  </div>
                  <h2 className="text-xl font-bold text-zinc-900 group-hover:text-indigo-600 transition-colors duration-300">
                    {section.title}
                  </h2>
                </div>
                <p className="text-zinc-600 text-sm sm:text-base leading-relaxed pl-0 sm:pl-14">
                  {section.content}
                </p>
              </Card>
            );
          })}
        </div>

        {/* Contact / Help Footer Note */}
        <div className="mt-12 text-center p-8 rounded-2xl bg-linear-to-r from-zinc-900 via-indigo-950 to-zinc-900 text-white space-y-3 border border-zinc-800 shadow-xl">
          <h3 className="text-lg font-bold">Have Questions About Our Terms?</h3>
          <p className="text-zinc-400 text-sm max-w-md mx-auto">
            If you have any questions or concerns regarding our terms and
            policies, feel free to reach out to our team.
          </p>
          <div className="pt-2">
            <Link href="mailto:salmansahedbd@gmail.com">
              <Button
                variant="secondary"
                className="primary-btn px-6 h-10 rounded-xl font-semibold text-sm"
              >
                Contact Legal Support
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsPage;
