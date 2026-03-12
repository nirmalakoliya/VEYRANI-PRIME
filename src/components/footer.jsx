import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 dark:border-neutral-800 
    bg-gradient-to-b from-white via-gray-50 to-white 
    dark:from-black dark:via-neutral-950 dark:to-black">

      <div className="mx-auto max-w-screen-xl px-4 py-10 sm:px-6 lg:px-8">

        <div className="flex flex-col items-center justify-center text-center space-y-6">

          {/* Logo */}
          <Link href="/">
            <div className="text-2xl sm:text-3xl font-extrabold cursor-pointer 
            bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 
            bg-clip-text text-transparent tracking-wide">
              VEYRANI PRIME
            </div>
          </Link>

          {/* Tagline */}
          <p className="text-xs sm:text-sm md:text-base 
          text-gray-600 dark:text-gray-400 max-w-md">
            Elegant fashion designed to bring confidence, comfort, and timeless
            style to every woman.
          </p>

          {/* Divider */}
          <div className="w-24 h-[2px] 
          bg-gradient-to-r from-pink-500 to-rose-500 rounded-full"></div>

        </div>

        {/* Bottom */}
        <p className="mt-8 text-center text-xs sm:text-sm 
        text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} <span className="font-semibold">VEYRANI PRIME</span>. All rights reserved.
        </p>

      </div>
    </footer>
  );
};

export default Footer;