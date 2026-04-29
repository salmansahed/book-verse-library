"use client";
import { Button } from "@heroui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sling as Hamburger } from "hamburger-react";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const pathName = usePathname();

  const menuItems = (
    <>
      <li
        className={`${pathName === "/" && "border-2 px-3 py-0.5 rounded-full border-blue-500 bg-blue-100"} hover:text-zinc-700 transition-all font-medium`}
      >
        <Link href={"/"} onClick={() => setOpen(false)}>
          Home
        </Link>
      </li>
      <li
        className={`${pathName === "/all-books" && "border-2 px-3 py-0.5 rounded-full border-blue-500 bg-blue-100"} hover:text-zinc-700 transition-all font-medium`}
      >
        <Link href={"/all-books"} onClick={() => setOpen(false)}>
          All Books
        </Link>
      </li>
      <li
        className={`${pathName === "/my-profile" && "border-2 px-3 py-0.5 rounded-full border-blue-500 bg-blue-100"} hover:text-zinc-700 transition-all font-medium`}
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
          <Link href={"/"} className="text-2xl font-bold text-green-600">
            Book<span className="text-blue-600">Verse</span>
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
          <Link href={"/login"}>
            <Button>Login</Button>
          </Link>
        </div>
      </div>
      {/* Mobile Menu (Conditional Rendering) */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t p-4 z-50">
          <ul className="flex flex-col gap-4 items-center">
            {menuItems}
            <Link href={"/login"}>
              <Button>Login</Button>
            </Link>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
