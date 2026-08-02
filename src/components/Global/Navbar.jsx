"use client";

import { Button } from "@heroui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sling as Hamburger } from "hamburger-react";
import { useState } from "react";
import { IoLogInOutline } from "react-icons/io5";
import { HiUserPlus } from "react-icons/hi2";
import { FaSignOutAlt } from "react-icons/fa";
import { authClient } from "@/lib/auth-client";
import LogoutModal from "../Auth/LogoutModal";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const pathName = usePathname();

  const { data, isPending } = authClient.useSession();
  const user = data?.user;

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "All Books", href: "/all-books" },
    { name: "My Profile", href: "/my-profile" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-200/60 bg-white/80 backdrop-blur-md transition-all">
      <div className="container mx-auto flex items-center justify-between px-4 py-3.5">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl font-black tracking-tight bg-linear-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            BookVerse
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = pathName === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                  isActive
                    ? "text-indigo-600 bg-indigo-50/80 shadow-xs"
                    : "text-zinc-600 hover:text-indigo-600 hover:bg-zinc-100/60"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Desktop User Section */}
        <div className="hidden lg:flex items-center gap-3">
          {isPending ? (
            <div className="flex items-center gap-3">
              <div className="w-22 h-9 rounded-full bg-zinc-200 animate-pulse" />
              <div className="w-22 h-9 rounded-full bg-zinc-200 animate-pulse" />
            </div>
          ) : user ? (
            <div className="flex items-center gap-4">
              <span className="text-sm font-semibold text-zinc-700">
                Welcome,{" "}
                <span className="bg-linear-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent font-bold">
                  {user?.name?.split(" ")[0]}
                </span>
              </span>
              <LogoutModal />
            </div>
          ) : (
            <div className="flex items-center gap-2.5">
              <Link href="/auth/login">
                <Button
                  variant="outline"
                  className="border-zinc-300 text-zinc-700 hover:bg-zinc-100 font-semibold"
                >
                  <IoLogInOutline className="text-lg" />
                  Login
                </Button>
              </Link>

              <Link href="/auth/registration">
                <Button variant="secondary" className="primary-btn">
                  <HiUserPlus className="text-lg" />
                  Sign Up
                </Button>
              </Link>
            </div>
          )}
        </div>

        {/* Mobile Hamburger & Welcome Text */}
        <div className="flex items-center gap-3 lg:hidden">
          {user && (
            <span className="text-sm font-bold bg-linear-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Hi, {user?.name?.split(" ")[0]}
            </span>
          )}
          <Hamburger
            size={20}
            toggled={isOpen}
            toggle={setOpen}
            color="#4F46E5"
          />
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="lg:hidden border-t border-zinc-100 bg-white/95 backdrop-blur-lg px-4 py-6 shadow-xl transition-all">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => {
              const isActive = pathName === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`px-4 py-2.5 rounded-xl text-base font-semibold transition-all ${
                    isActive
                      ? "text-indigo-600 bg-indigo-50 font-bold"
                      : "text-zinc-600 hover:text-indigo-600 hover:bg-zinc-50"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}

            <div className="pt-4 mt-2 border-t border-zinc-100">
              {user ? (
                <LogoutModal />
              ) : (
                <div className="flex flex-col gap-2.5">
                  <Link href="/auth/login" onClick={() => setOpen(false)}>
                    <Button
                      variant="outline"
                      className="w-full justify-center border-zinc-300 text-zinc-700 font-semibold"
                    >
                      <IoLogInOutline className="text-lg" />
                      Login
                    </Button>
                  </Link>

                  <Link
                    href="/auth/registration"
                    onClick={() => setOpen(false)}
                  >
                    <Button variant="secondary" className="w-full primary-btn">
                      <HiUserPlus className="text-lg" />
                      Sign Up
                    </Button>
                  </Link>
                </div>
              )}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
