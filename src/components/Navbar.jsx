import logo from "../assets/icons/tadelogo.png";
import blacklogo from "../assets/icons/tadeblack.png";
import menu from "../assets/icons/hamburger.png";
import cancel from "../assets/icons/cancel.png";
import { useState, useEffect } from "react";

export default function Hero() {
  const [scrolled, setScrolled] = useState(false);
  const phoneNumber = "2348039361942";
  const initialMessage = "Hello TADÉ, I would like to book a fitting session.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(initialMessage)}`;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Sidebar logic
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
    <div className="overflow-x-hidden">
      {/* 1. THE FLOATING NAVBAR */}
      <div
        className={` flex justify-between items-center z-40 transition-all duration-200 ${
          scrolled
            ? "fixed bottom-6 left-1/2 -translate-x-1/2 sm:w-[80%] w-[90%] bg-accent/80 border border-primary px-4 sm:px-10 py-4 rounded-2xl shadow-lg backdrop-blur-lg"
            : "absolute top-0 left-0 w-full bg-transparent p-4 sm:px-10 sm:py-6"
        }`}
      >
        <a href="#hero">
          <img
            src={scrolled ? blacklogo : logo}
            alt="logo"
            className="md:w-21 md:h-8 w-12 h-5 transition-all duration-300"
          />
        </a>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="button"
        >
          Book Your Fitting
        </a>

        {/* Menu Button - Trigger Sidebar */}
        <a onClick={() => setIsSidebarOpen(true)} className="cursor-pointer">
          <img
            src={menu}
            alt="menu"
            className={`w-6 h-6 transition-all duration-300 ${
              scrolled
                ? "filter sepia-[100%] hue-rotate-[320deg] saturate-[500%]"
                : "filter invert brightness-0"
            }`}
          />
        </a>
      </div>

      {/* 2. THE FULL-PAGE SIDEBAR (MOVED OUTSIDE) */}
      {/* Being on the root level fixes the transform issue. z-50 ensures it's above the navbar's z-40 */}
      <div
        className={`fixed inset-0 h-screen w-screen bg-primary/95 backdrop-blur-xl flex flex-col items-center justify-center transition-all duration-500 z-50 ${
          isSidebarOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Close Button */}
        <button
          onClick={() => setIsSidebarOpen(false)}
          className="absolute top-8 right-8 text-accent bg-transparent hover:bg-transparent border-none transition-transform "
        >
        <img src={cancel} alt="Cancel" className="w-6 h-6  filter invert brightness-0" />
        </button>

        {/* Centered Links */}
        <div className="flex flex-col gap-8 text-center text-3xl font-medium text-accent">
          <a
            href="#hero"
            onClick={() => setIsSidebarOpen(false)}
            className="hover:text-white transition-colors"
          >
            Home
          </a>
          <a
            href="#about"
            onClick={() => setIsSidebarOpen(false)}
            className="hover:text-white transition-colors"
          >
            About
          </a>
          <a
            href="#brand"
            onClick={() => setIsSidebarOpen(false)}
            className="hover:text-white transition-colors"
          >
            Brand
          </a>
          <a
            href="#gallery"
            onClick={() => setIsSidebarOpen(false)}
            className="hover:text-white transition-colors"
          >
            Gallery
          </a>
          <a
            href="#booking"
            onClick={() => setIsSidebarOpen(false)}
            className="hover:text-white transition-colors"
          >
            Booking
          </a>
        </div>
      </div>
      </div>

    </>
  );
}
