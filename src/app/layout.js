import { Geist, Josefin_Sans } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/Global/Footer";
import Navbar from "@/components/Global/Navbar";

const josefinSans = Josefin_Sans({
  variable: "--font-josefin-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "BookVerse | Your Digital Library",
  description:
    "A digital platform to browse, search, and borrow your favorite books seamlessly.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${josefinSans.className}  h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <main>
          <Navbar />
          <Toaster />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
