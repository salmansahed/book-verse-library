import Link from "next/link";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-zinc-50 border-t py-12">
      <div className="container mx-auto px-2">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* 1. Brand Section */}
          <div className="flex flex-col gap-4">
            <h1 className="text-2xl font-extrabold bg-linear-to-r from-indigo-600 via-purple-600 to-pink-700 bg-clip-text text-transparent w-fit">
              BookVerse
            </h1>
            <p className="text-zinc-600 text-sm leading-relaxed">
              Your ultimate destination for a vast collection of books. Read,
              learn, and enrich your soul with the power of knowledge.
            </p>
          </div>

          {/* 2. Social Media Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-zinc-800">
              Follow Us
            </h3>
            <div className="flex gap-5">
              <Link
                href="https://www.facebook.com/salmansahedbd"
                target="_blank"
                className="text-zinc-500 hover:text-blue-600 transition-colors text-2xl"
              >
                <FaFacebook />
              </Link>
              <Link
                href="https://github.com/salmansahed"
                target="_blank"
                className="text-zinc-500 hover:text-zinc-900 transition-colors text-2xl"
              >
                <FaGithub />
              </Link>
              <Link
                href="https://www.linkedin.com/in/salman-sahed/"
                target="_blank"
                className="text-zinc-500 hover:text-blue-700 transition-colors text-2xl"
              >
                <FaLinkedin />
              </Link>
              <Link
                href="https://twitter.com"
                target="_blank"
                className="text-zinc-500 hover:text-blue-400 transition-colors text-2xl"
              >
                <FaTwitter />
              </Link>
            </div>
          </div>

          {/* 3. Contact Us Section */}
          <div>
            <h3 className="text-lg font-semisbold font-semibold mb-4 text-zinc-800">
              Contact Us
            </h3>
            <ul className="text-zinc-600 text-sm space-y-2">
              <li>Email: salmansahedbd@gmail.com</li>
              <li>Phone: +880 1234 567890</li>
              <li>Location: Bhaluka, Mymensingh, Bangladesh</li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright Section */}
        <div className="border-t mt-10 pt-8 text-center text-zinc-500 text-sm flex flex-col gap-4 md:gap-0 md:flex-row items-center justify-between">
          <p>
            © {new Date().getFullYear()} BookVerse. All rights reserved by
            Salman Sahed.
          </p>
          <div className="flex flex-row gap-8">
            <Link href={""} className="hover:text-purple-600 transition-all">
              Terms & Conditions
            </Link>
            <Link href={""} className="hover:text-purple-600 transition-all">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
