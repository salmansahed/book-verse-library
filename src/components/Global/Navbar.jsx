"use client";
import { Button } from "@heroui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sling as Hamburger } from "hamburger-react";
import { useState } from "react";
import { IoLogInOutline } from "react-icons/io5";
import { authClient } from "@/lib/auth-client";
import { FaSignOutAlt } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const pathName = usePathname();

  const { data, isPending } = authClient.useSession();
  const user = data?.user;

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
        <ul className="lg:flex items-center gap-8 xl:gap-12 hidden">
          {menuItems}
        </ul>

        {/* Hamburger Icon */}
        <div className="lg:hidden flex items-center gap-3">
          {user && (
            <p className="text-xl font-semibold bg-linear-to-r from-indigo-600 via-purple-600 to-pink-700 bg-clip-text text-transparent">
              Welcome, {user?.name?.split(" ").slice(0, 1).join(" ")}
            </p>
          )}
          <Hamburger size={22} toggled={isOpen} toggle={setOpen} />
        </div>

        {/* Desktop Login Button */}

        <div className="lg:block hidden">
          {isPending ? (
            <div className="flex items-center space-x-2">
              <div className="w-24 h-5 rounded-full bg-gray-300  animate-pulse"></div>
              <div className="w-25 h-9 rounded-full bg-gray-300 animate-pulse"></div>
            </div>
          ) : user ? (
            <div className="flex items-center gap-3">
              <h2 className="text-xl font-semibold bg-linear-to-r from-indigo-600 via-purple-600 to-pink-700 bg-clip-text text-transparent">
                Welcome, {user?.name?.split(" ").slice(0, 2).join(" ")}
              </h2>
              <Button
                className={
                  "bg-linear-to-r from-indigo-600 via-purple-600 to-pink-700"
                }
                onClick={async () => await authClient.signOut()}
              >
                Logout
                <FaSignOutAlt />
              </Button>
            </div>
          ) : (
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
          )}
        </div>
      </div>
      {/* Mobile Menu (Conditional Rendering) */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t p-4 z-50">
          <ul className="flex flex-col gap-4 items-center">
            {menuItems}
            {user ? (
              <Button
                className={
                  "bg-linear-to-r from-indigo-600 via-purple-600 to-pink-700"
                }
                onClick={async () => await authClient.signOut()}
              >
                Logout
                <FaSignOutAlt />
              </Button>
            ) : (
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
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
