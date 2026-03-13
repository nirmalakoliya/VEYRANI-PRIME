import Link from "next/link";
import React from "react";
import Image from "next/image";

const TrendEdit = () => {
  return (
    <section className="w-full py-20 px-4 sm:px-6 lg:px-10 bg-gradient-to-b from-[#1a000d] via-[#2b0015] to-black">

      {/* Title */}
      <div className="max-w-7xl mx-auto text-center sm:text-left mb-10">

        <p className="text-pink-300 text-xs sm:text-sm md:text-base font-medium">
          Styles that everyone is falling in love with
        </p>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-pink-300 via-rose-300 to-pink-500 bg-clip-text text-transparent mt-2">
          Shop Our Trend Edit
        </h2>

      </div>

      {/* GRID */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

        {/* RAMA */}
        <Link href="/products/rama">
          <div className="group relative rounded-2xl overflow-hidden border border-white/10 bg-black shadow-xl hover:scale-[1.03] transition duration-500 aspect-[3/4]">

            <Image
              src="/images/rama1.jpg"
              alt="Rama Saree"
              fill
              sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 25vw"
              quality={100}
              className="object-cover transition duration-500 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

            <div className="absolute bottom-5 left-0 right-0 text-center">
              <p className="text-white font-semibold">Click & View Collection</p>
            </div>

          </div>
        </Link>

        {/* BLACK */}
        <Link href="/products/black">
          <div className="group relative rounded-2xl overflow-hidden border border-white/10 bg-black shadow-xl hover:scale-[1.03] transition duration-500 aspect-[3/4]">

            <Image
              src="/images/black1.jpg"
              alt="Black Saree"
              fill
              sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 25vw"
              quality={100}
              className="object-cover transition duration-500 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

            <div className="absolute bottom-5 left-0 right-0 text-center">
              <p className="text-white font-semibold">Click & View Collection</p>
            </div>

          </div>
        </Link>

        {/* GREEN */}
        <Link href="/products/green">
          <div className="group relative rounded-2xl overflow-hidden border border-white/10 bg-black shadow-xl hover:scale-[1.03] transition duration-500 aspect-[3/4]">

            <Image
              src="/images/green1.png"
              alt="Green Saree"
              fill
              sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 25vw"
              quality={100}
              className="object-cover transition duration-500 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

            <div className="absolute bottom-5 left-0 right-0 text-center">
              <p className="text-white font-semibold">Click & View Collection</p>
            </div>

          </div>
        </Link>

        {/* ORANGE */}
        <Link href="/products/orange">
          <div className="group relative rounded-2xl overflow-hidden border border-white/10 bg-black shadow-xl hover:scale-[1.03] transition duration-500 aspect-[3/4]">

            <Image
              src="/images/orange1.jpg"
              alt="Orange Saree"
              fill
              sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 25vw"
              quality={100}
              className="object-cover transition duration-500 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

            <div className="absolute bottom-5 left-0 right-0 text-center">
              <p className="text-white font-semibold">Click & View Collection</p>
            </div>

          </div>
        </Link>

        {/* PURPLE */}
        <Link href="/products/purple">
          <div className="group relative rounded-2xl overflow-hidden border border-white/10 bg-black shadow-xl hover:scale-[1.03] transition duration-500 aspect-[3/4]">

            <Image
              src="/images/purple1.jpg"
              alt="Purple Saree"
              fill
              sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 25vw"
              quality={100}
              className="object-cover transition duration-500 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

            <div className="absolute bottom-5 left-0 right-0 text-center">
              <p className="text-white font-semibold">Click & View Collection</p>
            </div>

          </div>
        </Link>

        {/* COMING SOON */}
        {[1,2,3].map((i)=>(
          <div key={i} className="relative rounded-2xl overflow-hidden border border-white/10 bg-black aspect-[3/4]">

            <Image
              src="/images/coming.jpg"
              alt="Coming Soon"
              fill
              sizes="25vw"
              className="object-cover blur-[2px]"
            />

            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-white text-lg font-semibold bg-black/60 px-4 py-2 rounded-lg">
                Coming Soon
              </p>
            </div>

          </div>
        ))}

      </div>
    </section>
  );
};

export default TrendEdit;