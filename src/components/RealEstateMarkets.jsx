import React from "react";

const RealEstateMarkets = () => {
  return (
    <section className="w-full py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 
    bg-gradient-to-b from-white via-gray-50 to-white 
    dark:from-black dark:via-neutral-950 dark:to-black">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold 
          bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 
          bg-clip-text text-transparent">
            About VEYRANI PRIME
          </h2>

          <p className="mt-5 text-sm sm:text-base md:text-lg 
          text-gray-600 dark:text-gray-300 leading-relaxed">
            At <span className="font-semibold text-black dark:text-white">VEYRANI PRIME</span> fashion is more than clothing  it is a way for
            every woman to express her confidence beauty and individuality
            Our mission is to deliver stylish and comfortable fashion that
            empowers women to feel confident in every moment
          </p>

        </div>

        {/* Brand Story */}
        <div className="mt-10 sm:mt-12 md:mt-14 max-w-4xl mx-auto text-center">

          <p className="text-sm sm:text-base md:text-lg 
          text-gray-600 dark:text-gray-300 leading-relaxed">

            Founded by{" "}
            <span className="font-bold 
            bg-gradient-to-r from-pink-500 to-rose-500 
            bg-clip-text text-transparent text-lg sm:text-xl">
              Nirmal
            </span> VEYRANI PRIME was created with a vision to build a trusted
            womens fashion brand that blends modern trends with timeless
            elegance Each piece is thoughtfully designed to provide the
            perfect combination of quality comfort and style

          </p>

          <p className="mt-5 text-sm sm:text-base md:text-lg 
          text-gray-600 dark:text-gray-300 leading-relaxed">

            From everyday wear to special occasions our collections help women
            look stylish and feel confident wherever they go

          </p>

        </div>

        {/* Feature Cards */}
        <div className="mt-14 sm:mt-16 grid 
        grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 
        gap-6 sm:gap-8">

          {/* Card 1 */}
          <div className="group p-6 sm:p-8 rounded-2xl 
          border border-gray-200 dark:border-neutral-800
          bg-white/70 dark:bg-neutral-900/70 
          backdrop-blur-xl
          shadow-sm hover:shadow-2xl
          transition duration-500 hover:-translate-y-1">

            <h3 className="text-lg sm:text-xl font-semibold 
            text-gray-900 dark:text-white">
              Premium Quality
            </h3>

            <p className="mt-3 text-sm sm:text-base 
            text-gray-600 dark:text-gray-400 leading-relaxed">
              Carefully selected fabrics and high attention to detail ensure
              every outfit provides lasting comfort and durability
            </p>

          </div>

          {/* Card 2 */}
          <div className="group p-6 sm:p-8 rounded-2xl 
          border border-gray-200 dark:border-neutral-800
          bg-white/70 dark:bg-neutral-900/70 
          backdrop-blur-xl
          shadow-sm hover:shadow-2xl
          transition duration-500 hover:-translate-y-1">

            <h3 className="text-lg sm:text-xl font-semibold 
            text-gray-900 dark:text-white">
              Trendy Designs
            </h3>

            <p className="mt-3 text-sm sm:text-base 
            text-gray-600 dark:text-gray-400 leading-relaxed">
              Our collections combine modern fashion trends with timeless
              elegance suitable for everyday style and special moments
            </p>

          </div>

          {/* Card 3 */}
          <div className="group p-6 sm:p-8 rounded-2xl 
          border border-gray-200 dark:border-neutral-800
          bg-white/70 dark:bg-neutral-900/70 
          backdrop-blur-xl
          shadow-sm hover:shadow-2xl
          transition duration-500 hover:-translate-y-1">

            <h3 className="text-lg sm:text-xl font-semibold 
            text-gray-900 dark:text-white">
              Customer First
            </h3>

            <p className="mt-3 text-sm sm:text-base 
            text-gray-600 dark:text-gray-400 leading-relaxed">
              We focus on delivering fashion that makes our customers feel
              confident stylish and happy every time they wear our products
            </p>

          </div>

        </div>

      </div>
    </section>
  );
};

export default RealEstateMarkets;