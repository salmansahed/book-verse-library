import Link from "next/link";
import { Card, Button } from "@heroui/react";
import {
  FaArrowLeft,
  FaShieldHalved,
  FaDatabase,
  FaGear,
  FaLock,
  FaEye,
  FaUserShield,
} from "react-icons/fa6";

export const metadata = {
  title: "Privacy Policy | BookVerse",
  description:
    "Privacy Policy explaining how BookVerse collects, uses, and protects user data.",
};

const PrivacyPage = () => {
  const sections = [
    {
      id: "collection",
      icon: FaDatabase,
      title: "1. Information We Collect",
      content:
        "We collect personal information that you voluntarily provide when creating an account, such as your name, email address, and profile details. Additionally, we store basic activity logs related to book borrowing and search history to improve your personalized experience.",
    },
    {
      id: "usage",
      icon: FaGear,
      title: "2. How We Use Your Information",
      content:
        "Your data is strictly used to provide, maintain, and optimize BookVerse services. This includes managing book borrowing requests, authenticating users securely, personalizing book recommendations, and sending important system notifications.",
    },
    {
      id: "protection",
      icon: FaLock,
      title: "3. Data Security & Storage",
      content:
        "We implement industry-standard security protocols and encryption to safeguard your data against unauthorized access, loss, or disclosure. Your sensitive account details and passwords are encrypted using secure authentication systems.",
    },
    {
      id: "third-party",
      icon: FaEye,
      title: "4. Third-Party Sharing",
      content:
        "BookVerse does not sell, trade, or rent your personal information to third parties. We may only share anonymized analytical data or necessary information with trusted service providers required to operate our core infrastructure.",
    },
    {
      id: "rights",
      icon: FaUserShield,
      title: "5. Your Privacy Rights",
      content:
        "You have full control over your personal data. You can access, update, or request the deletion of your account and associated borrowing records at any time through your dashboard settings or by contacting support.",
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
            <FaShieldHalved className="text-indigo-600" /> Data Protection
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-zinc-900 tracking-tight">
            Privacy{" "}
            <span className="bg-linear-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Policy
            </span>
          </h1>
          <p className="text-zinc-500 text-sm sm:text-base max-w-xl mx-auto">
            Your privacy is important to us. Learn how we handle and safeguard
            your information on BookVerse.
          </p>
        </div>

        {/* Policy Sections Grid */}
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
          <h3 className="text-lg font-bold">Have Privacy Concerns?</h3>
          <p className="text-zinc-400 text-sm max-w-md mx-auto">
            If you have any questions regarding your data or want to request
            account data removal, reach out directly.
          </p>
          <div className="pt-2">
            <Link href="mailto:salmansahedbd@gmail.com">
              <Button
                variant="secondary"
                className="primary-btn px-6 h-10 rounded-xl font-semibold text-sm"
              >
                Contact Privacy Team
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPage;
