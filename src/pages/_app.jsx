import Footer from "@/components/footer";
import Header from "@/components/header";
import { useState, useEffect } from "react";
import { IoIosArrowDropupCircle } from "react-icons/io";
import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";

export default function App({ Component, pageProps }) {
  const [showButton, setShowButton] = useState(false);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 200) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <ThemeProvider
        enableSystem={true}
        defaultTheme="system"
        attribute="class"
      >
        <Header />
        <Component {...pageProps} />

        {showButton && (
          <div className="fixed bottom-24 right-10 z-50">
            <button
              onClick={handleScrollToTop}
              className="text-white bg-black dark:bg-white rounded-3xl overflow-visible relative left-8 top-8 dark:text-[#EB3678]"
            >
              <IoIosArrowDropupCircle size={50} />
            </button>
          </div>
        )}

        <Footer />
      </ThemeProvider>
    </>
  );
}
