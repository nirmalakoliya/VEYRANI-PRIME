import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Header = () => {
  const [header, setHeader] = useState(false);

  const handleHeader = () => {
    setHeader(!header);
  };

  const handleMobileHeader = () => {
    setHeader(false);
  };

  return (
    <div className="fixed top-0 left-0 w-full h-20
    bg-gradient-to-r from-[#4a0d26] via-[#7b1e44] to-[#c2185b]
    shadow-[0_8px_30px_rgb(0,0,0,0.3)]
    flex items-center z-40
    transition-all duration-500">

      <div className="mx-auto px-4 flex justify-between items-center w-full max-w-7xl">

        {/* Logo */}
        <Link href="/">
          <div className="text-white font-semibold text-lg sm:text-xl tracking-wide cursor-pointer">
            VEYRANI PRIME
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden sm:flex items-center space-x-8 text-white">
          <Link href="/" className="hover:text-pink-200 transition">
            Home
          </Link>
        </div>

        {/* Mobile Icon */}
        <div className="sm:hidden text-white" onClick={handleHeader}>
          {header ? (
            <AiOutlineClose size={28} />
          ) : (
            <AiOutlineMenu size={28} />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          header ? "left-0" : "-left-full"
        } fixed top-20 w-full h-screen sm:hidden
        bg-gradient-to-b from-[#4a0d26] via-[#7b1e44] to-[#c2185b]
        backdrop-blur-xl
        flex flex-col items-center
        pt-16
        transition-all duration-500`}
      >

        <ul className="space-y-10 text-center">

          <li className="text-2xl text-white font-medium hover:text-pink-200 transition">
            <Link href="/" onClick={handleMobileHeader}>
              Home
            </Link>
          </li>

        </ul>

      </div>

    </div>
  );
};

export default Header;