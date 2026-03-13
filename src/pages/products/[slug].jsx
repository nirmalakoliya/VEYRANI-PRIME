import { useRouter } from "next/router";
import Image from "next/image";

const productData = {
  rama: {
    images: [
      "/images/rama1.jpg",
      "/images/rama2.jpg",
      "/images/rama3.jpg",
      "/images/rama5.jpg",
    ],
    link: "https://www.meesho.com/VEYRANIPRIME",
  },

  black: {
    images: [
      "/images/black2.jpg",
      "/images/black3.jpg",
      "/images/black4.jpeg",
      "/images/black5.jpeg",
    ],
    link: "https://www.meesho.com/VEYRANIPRIME",
  },

  green: {
    images: [
      "/images/green1.png",
      "/images/green2.jpg",
      "/images/green3.jpg",
      "/images/green4.jpg",
    ],
    link: "https://www.meesho.com/VEYRANIPRIME",
  },

  orange: {
    images: [
      "/images/orange2.jpg",
      "/images/orange3.jpg",
      "/images/orange4.jpg",
      "/images/orange5.jpg",
    ],
    link: "https://www.meesho.com/VEYRANIPRIME",
  },

  purple: {
    images: [
      "/images/purple2.jpg",
      "/images/purple3.jpg",
      "/images/purple4.jpg",
      "/images/purple5.jpg",
    ],
    link: "https://www.meesho.com/VEYRANIPRIME",
  },
};

export default function ProductPage() {
  const router = useRouter();
  const { slug } = router.query;
  const product = productData[slug];

  if (!product) return null;

  return (
    <section className="w-full min-h-screen pt-28 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-neutral-950 to-black">
      <div className="max-w-7xl mx-auto">

        {/* Title */}
        <div className="text-center mb-14">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 bg-clip-text text-transparent">
            Saree Photo Gallery
          </h1>

          <p className="mt-3 text-sm sm:text-base text-gray-400">
            Discover the elegance of our premium saree collection
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

          {product.images.map((img, index) => (
            <div
              key={index}
              className="group relative rounded-2xl overflow-hidden border border-white/10 bg-black shadow-xl hover:-translate-y-1 transition duration-500 aspect-[3/4]"
            >

              <Image
                src={img}
                alt="Saree"
                fill
                sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 25vw"
                quality={100}
                className="object-cover transition duration-500 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

              <div className="absolute bottom-5 left-0 right-0 flex justify-center">
                <div className="px-4 py-2 text-xs sm:text-sm bg-black/60 backdrop-blur-md border border-white/20 rounded-full text-white">
                  VEYRANI PRIME
                </div>
              </div>

            </div>
          ))}

        </div>

        {/* Button */}
        <div className="flex justify-center mt-16">
          <a
            href={product.link}
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-4 text-lg font-semibold rounded-full bg-gradient-to-r from-pink-500 to-rose-600 text-white shadow-lg hover:scale-105 transition duration-300"
          >
            Visit Meesho Store
          </a>
        </div>

      </div>
    </section>
  );
}