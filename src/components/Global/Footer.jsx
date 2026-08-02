import Link from "next/link";
import { FaFacebookF, FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import {
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineLocationMarker,
} from "react-icons/hi";

const Footer = () => {
  return (
    <footer className="bg-zinc-900 text-zinc-300 border-t border-zinc-800 pt-16 pb-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* 1. Brand Section */}
          <div className="space-y-4">
            <h2 className="text-2xl font-black bg-linear-to-r from-indigo-400 via-purple-300 to-pink-400 bg-clip-text text-transparent">
              BookVerse
            </h2>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Your ultimate destination for a vast collection of books. Read,
              learn, and enrich your soul with the power of knowledge.
            </p>
          </div>

          {/* 2. Quick Links */}
          <div className="space-y-4">
            <h3 className="text-base font-bold text-white tracking-wider uppercase">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm text-zinc-400">
              <li>
                <Link
                  href="/"
                  className="hover:text-indigo-400 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/all-books"
                  className="hover:text-indigo-400 transition-colors"
                >
                  All Books
                </Link>
              </li>
              <li>
                <Link
                  href="/all-books"
                  className="hover:text-indigo-400 transition-colors"
                >
                  Categories
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-indigo-400 transition-colors"
                >
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* 3. Contact Us Section */}
          <div className="space-y-4">
            <h3 className="text-base font-bold text-white tracking-wider uppercase">
              Contact Us
            </h3>
            <ul className="space-y-3 text-sm text-zinc-400">
              <li className="flex items-center gap-3">
                <HiOutlineMail className="text-indigo-400 text-lg shrink-0" />
                <span>salmansahed10@gmail.com</span>
              </li>
              <li className="flex items-center gap-3">
                <HiOutlinePhone className="text-indigo-400 text-lg shrink-0" />
                <span>+880 1234 567890</span>
              </li>
              <li className="flex items-start gap-3">
                <HiOutlineLocationMarker className="text-indigo-400 text-lg shrink-0 mt-0.5" />
                <span>Bhaluka, Mymensingh, Bangladesh</span>
              </li>
            </ul>
          </div>

          {/* 4. Social Media Section */}
          <div className="space-y-4">
            <h3 className="text-base font-bold text-white tracking-wider uppercase">
              Follow Us
            </h3>
            <p className="text-zinc-400 text-sm">
              Connect with us on social media for daily updates and highlights.
            </p>
            <div className="flex items-center gap-3 pt-1">
              <Link
                href="https://www.facebook.com/salmansahedbd"
                target="_blank"
                className="w-10 h-10 rounded-xl bg-zinc-800 border border-zinc-700/60 flex items-center justify-center text-zinc-300 hover:text-white hover:bg-indigo-600 hover:border-indigo-600 transition-all text-base shadow-xs"
              >
                <FaFacebookF />
              </Link>
              <Link
                href="https://github.com/salmansahed"
                target="_blank"
                className="w-10 h-10 rounded-xl bg-zinc-800 border border-zinc-700/60 flex items-center justify-center text-zinc-300 hover:text-white hover:bg-zinc-700 hover:border-zinc-600 transition-all text-base shadow-xs"
              >
                <FaGithub />
              </Link>
              <Link
                href="https://www.linkedin.com/in/salman-sahed/"
                target="_blank"
                className="w-10 h-10 rounded-xl bg-zinc-800 border border-zinc-700/60 flex items-center justify-center text-zinc-300 hover:text-white hover:bg-blue-600 hover:border-blue-600 transition-all text-base shadow-xs"
              >
                <FaLinkedinIn />
              </Link>
              <Link
                href="https://x.com/salman_sahed10"
                target="_blank"
                className="w-10 h-10 rounded-xl bg-zinc-800 border border-zinc-700/60 flex items-center justify-center text-zinc-300 hover:text-white hover:bg-sky-500 hover:border-sky-500 transition-all text-base shadow-xs"
              >
                <FaTwitter />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Section */}
        <div className="border-t border-zinc-800/80 mt-12 pt-8 text-zinc-400 text-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-center sm:text-left">
            © {new Date().getFullYear()}{" "}
            <span className="text-white font-medium">BookVerse</span>. All
            rights reserved by Salman Sahed.
          </p>
          <div className="flex flex-row gap-6 text-xs sm:text-sm">
            <Link
              href="/terms"
              className="hover:text-indigo-400 transition-colors"
            >
              Terms & Conditions
            </Link>
            <Link
              href="/privacy"
              className="hover:text-indigo-400 transition-colors"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
