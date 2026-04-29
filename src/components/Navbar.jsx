"use client";
import { Button } from "@heroui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sling as Hamburger } from "hamburger-react";
import { useState } from "react";
import { IoLogInOutline } from "react-icons/io5";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const pathName = usePathname();

  const menuItems = (
    <>
      <li
        className={`transition-all duration-300 ease-in-out font-medium px-3 py-0.5 rounded-full ${pathName === "/" ? "bg-indigo-50 border border-indigo-200 text-indigo-600" : "text-zinc-600 hover:text-indigo-600"}`}
      >
        <Link href={"/"} onClick={() => setOpen(false)}>
          Home
        </Link>
      </li>
      <li
        className={`transition-all duration-300 ease-in-out font-medium px-3 py-0.5 rounded-full ${pathName === "/all-books" ? "bg-indigo-50 border border-indigo-200 text-indigo-600" : "text-zinc-600 hover:text-indigo-600"}`}
      >
        <Link href={"/all-books"} onClick={() => setOpen(false)}>
          All Books
        </Link>
      </li>
      <li
        className={`transition-all duration-300 ease-in-out font-medium px-3 py-0.5 rounded-full ${pathName === "/my-profile" ? "bg-indigo-50 border border-indigo-200 text-indigo-600" : "text-zinc-600 hover:text-indigo-600"}`}
      >
        <Link href={"/my-profile"} onClick={() => setOpen(false)}>
          My Profile
        </Link>
      </li>
    </>
  );

  return (
    <div className="shadow py-4 relative">
      {" "}
      {/* Relative */}
      <div className="flex justify-between items-center container mx-auto px-2">
        <div>
          <Link
            href={"/"}
            className="text-2xl font-extrabold bg-linear-to-r from-indigo-600 via-purple-600 to-pink-700 bg-clip-text text-transparent"
          >
            BookVerse
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul className="md:flex items-center gap-8 lg:gap-12 hidden">
          {menuItems}
        </ul>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <Hamburger size={22} toggled={isOpen} toggle={setOpen} />
        </div>

        {/* Desktop Login Button */}
        <div className="md:block hidden">
          <Link href={"/auth/login"}>
            <Button
              className={
                "bg-linear-to-r from-indigo-600 via-purple-600 to-pink-700"
              }
            >
              <IoLogInOutline />
              Login
            </Button>
          </Link>
        </div>
      </div>
      {/* Mobile Menu (Conditional Rendering) */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t p-4 z-50">
          <ul className="flex flex-col gap-4 items-center">
            {menuItems}
            <Link href={"/auth/login"}>
              <Button
                className={
                  "bg-linear-to-r from-indigo-600 via-purple-600 to-pink-700"
                }
                onClick={() => setOpen(false)}
              >
                <IoLogInOutline />
                Login
              </Button>
            </Link>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
