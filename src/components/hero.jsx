import React from "react";
import { MdMarkEmailRead } from "react-icons/md";

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden px-4">

      {/* Background Image */}
      <img
        src="https://t4.ftcdn.net/jpg/08/74/88/31/360_F_874883136_weXp7jguYciiVvSuJn0UJfcJ4NLTKcVf.jpg"
        alt="Veyrani Prime Saree"
        className="absolute inset-0 w-full h-full object-cover scale-105 animate-[zoomHero_20s_linear_infinite]"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a000d]/80 via-black/60 to-[#2a0014]/90"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white 
      w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl
      px-6 py-8 sm:px-8 sm:py-10
      bg-white/10 backdrop-blur-xl 
      rounded-2xl sm:rounded-3xl
      border border-white/20
      shadow-[0_20px_60px_rgba(0,0,0,0.6)]">

        {/* Heading */}
        <h1 className="font-bold tracking-wide 
        text-2xl sm:text-3xl md:text-4xl lg:text-5xl
        bg-gradient-to-r from-[#ffd6e7] via-[#ff9ac4] to-[#ff6fa8] 
        bg-clip-text text-transparent">

          VEYRANI PRIME

        </h1>

        {/* Subtitle */}
        <p className="mt-3 sm:mt-4 
        text-gray-200 
        text-xs sm:text-sm md:text-base lg:text-lg
        leading-relaxed">

          Elegant Saree Collection Crafted For Timeless Beauty

        </p>

        {/* Email */}
        <div className="flex justify-center items-center gap-2 sm:gap-3 mt-5 sm:mt-6
        text-gray-200 hover:text-pink-300 transition flex-wrap">

          <MdMarkEmailRead className="text-lg sm:text-xl md:text-2xl" />

          <span className="text-xs sm:text-sm md:text-base break-all">
            veyraniprime@gmail.com
          </span>

        </div>

      </div>

      {/* Background Animation */}
      <style jsx>{`
        @keyframes zoomHero {
          0% { transform: scale(1.05); }
          50% { transform: scale(1.1); }
          100% { transform: scale(1.05); }
        }
      `}</style>

    </section>
  );
};

export default Hero;