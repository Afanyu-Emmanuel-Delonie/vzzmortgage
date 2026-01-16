/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { BiPhone, BiMenu, BiX } from "react-icons/bi";
import { navItems } from "../constants/constants";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleClick = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [menuOpen]);

  return (
    <>
      <nav
        className={`navbar w-full px-5 py-4 lg:px-16 lg:py-5 border-b fixed top-0 left-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white backdrop-blur-md border-gray-200 shadow-sm"
            : "bg-[#F8F9FA ]/20 backdrop-blur-sm border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <a href="#home" className="flex-shrink-0">
            <img
              src="/assets/logo/main-logo.png"
              alt="vzz-logo"
              className="w-28 md:w-36 lg:w-40"
            />
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center gap-8 xl:gap-10 font-inter">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={item.href}
                  className="text-[#111] hover:text-yellow-400 transition-colors duration-200 text-base font-medium relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-yellow-400 after:transition-all after:duration-300 hover:after:w-full"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4 font-inter">
            <a
              href="tel:2404719005"
              className="flex items-center gap-2 text-[#111] hover:text-yellow-400 transition-colors duration-200"
            >
              <BiPhone className="text-xl" />
              <span className="font-medium">(240) 471-9005</span>
            </a>

            <button className="px-4 py-2 text-white text-sm bg-[#102044] rounded-sm hover:bg-yellow-400 transition-all duration-200 font-medium shadow-sm hover:shadow-md">
              Apply Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-[#111] text-3xl z-50"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <BiX /> : <BiMenu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300 ${
          menuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMenuOpen(false)}
      />

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-[280px] sm:w-[320px] bg-[#FAFBFC] z-40 lg:hidden shadow-2xl transform transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full pt-24 px-6 font-inter">
          {/* Mobile Navigation Links */}
          <ul className="flex flex-col gap-6 mb-8">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={item.href}
                  onClick={handleClick}
                  className="text-[#111] hover:text-[#102044] transition-colors duration-200 text-lg font-medium block py-2"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile CTA Buttons */}
          <div className="flex flex-col gap-4 mt-auto mb-8">
            <a
              href="tel:2404719005"
              className="flex items-center justify-center gap-2 py-3 px-4 border-2 border-[#102044] text-[#102044] rounded-lg hover:bg-[#102044] hover:text-white transition-all duration-200 font-medium"
            >
              <BiPhone className="text-xl" />
              <span>(240) 471-9005</span>
            </a>

            <button className="w-full py-3 px-4 text-white bg-[#102044] rounded-lg hover:bg-[#1a2f5f] transition-all duration-200 font-medium shadow-md">
              Apply Now
            </button>
          </div>
        </div>
      </div>

      <div className="h-[72px] lg:h-[84px]" />
    </>
  );
}

export default Navbar;
