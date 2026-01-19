import React, { useState, useEffect } from "react";
import { Phone, Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import { navItems } from "../../constants/constants";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const [mobileExpandedItems, setMobileExpandedItems] = useState({});

  const handleClick = () => {
    setMenuOpen(false);
    setMobileExpandedItems({});
  };

  const toggleMobileItem = (itemId) => {
    setMobileExpandedItems((prev) => {
      // If clicking the same item, close it
      if (prev[itemId]) {
        const newState = { ...prev };
        delete newState[itemId];
        return newState;
      }

      // Check if this is a category (has hyphen) or main menu item
      const isCategory = String(itemId).includes("-");

      if (isCategory) {
        // For categories, close other categories but keep parent menu open
        const parentId = String(itemId).split("-")[0];
        const newState = {};

        // Keep the parent menu open
        newState[parentId] = true;

        // Close all other categories and open this one
        newState[itemId] = true;

        return newState;
      } else {
        // For main menu items, close everything and open only this one
        return { [itemId]: true };
      }
    });
  };

  

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
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
        className={`w-full px-5 py-4 lg:px-16 lg:py-5 fixed top-0 left-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white shadow-lg border-b border-gray-100"
            : "bg-white/95 backdrop-blur-md"
        }`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <a href="/" className="flex-shrink-0 relative z-50">
            <img
              src="/assets/logo/main-logo.png"
              alt="vzz-logo"
              className="w-28 md:w-36 lg:w-40 cursor-pointer transition-transform duration-200 hover:scale-105"
            />
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center gap-1 xl:gap-2 font-inter">
            {navItems.map((item) => (
              <li
                key={item.id}
                className="relative"
                onMouseEnter={() => {
                  if (item.columns) {
                    setActiveDropdown(item.id);
                    setHoveredCategory(0); // Default to first category
                  }
                }}
                onMouseLeave={() => {
                  setActiveDropdown(null);
                  setHoveredCategory(null);
                }}
              >
                <a
                  href={item.href}
                  className={`px-4 py-2 text-[#1a1a1a] hover:text-yellow-500 transition-all duration-200 text-[15px] font-medium rounded-lg flex items-center gap-1.5 group ${
                    activeDropdown === item.id
                      ? "bg-gray-50 text-[#102044]"
                      : "hover:bg-gray-50"
                  }`}
                >
                  {item.label}
                  {item.columns && (
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        activeDropdown === item.id ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </a>

                {/* Two-Panel Dropdown Menu */}
                {item.columns && activeDropdown === item.id && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2">
                    <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
                      <div className="flex">
                        {/* LEFT PANEL - Category Menu */}
                        <div className="w-64 bg-gray-50 border-r border-gray-200">
                          <div className="p-4">
                            <h3 className="text-xs font-bold text-gray-400 mb-3 uppercase tracking-wider px-3">
                              {item.label}
                            </h3>
                            <ul className="space-y-1">
                              {item.columns.map((column, idx) => (
                                <li key={idx}>
                                  <button
                                    onMouseEnter={() => setHoveredCategory(idx)}
                                    className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-150 flex items-center justify-between group ${
                                      hoveredCategory === idx
                                        ? "bg-white text-[#102044] shadow-sm"
                                        : "text-gray-700 hover:bg-white hover:text-[#102044]"
                                    }`}
                                  >
                                    <span>{column.title}</span>
                                    <ChevronRight
                                      className={`w-4 h-4 transition-transform duration-150 ${
                                        hoveredCategory === idx
                                          ? "translate-x-0.5"
                                          : ""
                                      }`}
                                    />
                                  </button>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        {/* RIGHT PANEL - Links for Selected Category */}
                        <div
                          className="bg-white"
                          style={{
                            width: hoveredCategory !== null ? "auto" : "300px",
                            minWidth: "300px",
                          }}
                        >
                          {hoveredCategory !== null &&
                          item.columns[hoveredCategory] ? (
                            <div className="p-6">
                              <h4 className="text-xs font-bold text-gray-400 mb-4 uppercase tracking-wider">
                                {item.columns[hoveredCategory].title}
                              </h4>
                              <ul className="space-y-1">
                                {item.columns[hoveredCategory].links.map(
                                  (link, linkIdx) => (
                                    <li key={linkIdx}>
                                      <a
                                        href={link.href}
                                        className="text-gray-700 hover:text-yellow-500 transition-colors duration-150 text-[15px] block py-2.5 px-3 -mx-3 rounded-lg hover:bg-gray-50 group"
                                      >
                                        <span className="group-hover:translate-x-1 inline-block transition-transform duration-150">
                                          {link.label}
                                        </span>
                                      </a>
                                    </li>
                                  )
                                )}
                              </ul>
                            </div>
                          ) : (
                            <div className="flex items-center justify-center h-full p-6 text-gray-400 text-sm">
                              Hover over a category
                            </div>
                          )}
                        </div>

                        {/* Featured Content - Optional */}
                        {item.featured && (
                          <div className="w-80 bg-gradient-to-br from-gray-50 to-white border-l border-gray-100">
                            <div className="p-6">
                              <div className="relative overflow-hidden rounded-xl mb-4 group">
                                <img
                                  src={item.featured.image}
                                  alt="Featured"
                                  className="w-full h-44 object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                              </div>
                              <h4 className="text-lg font-bold text-gray-900 mb-2 leading-snug">
                                {item.featured.title}
                              </h4>
                              <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                                {item.featured.description}
                              </p>
                              <a
                                href={item.featured.cta.href}
                                className="inline-flex items-center gap-2 text-[#102044] hover:text-yellow-500 font-semibold text-sm group/link transition-colors duration-200"
                              >
                                <span>{item.featured.cta.text}</span>
                                <span className="group-hover/link:translate-x-1 transition-transform duration-200">
                                  →
                                </span>
                              </a>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4 font-inter">
            <a
              href="tel:2404719005"
              className="flex items-center gap-2 text-[#1a1a1a] hover:text-[#102044] transition-colors duration-200 px-3 py-2 rounded-lg hover:bg-gray-50"
            >
              <Phone className="w-4 h-4" />
              <span className="font-medium text-sm">(240) 471-9005</span>
            </a>

            <button className="px-6 py-2.5 text-white text-sm bg-gradient-to-r from-[#102044] to-[#1a2f5f] rounded-lg hover:shadow-xl hover:scale-105 transition-all duration-200 font-semibold shadow-md">
              Apply Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-[#1a1a1a] z-50"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <X className="w-7 h-7" />
            ) : (
              <Menu className="w-7 h-7" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300 ${
          menuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMenuOpen(false)}
      />

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 right-0 bg-white z-40 lg:hidden shadow-2xl transform transition-transform duration-300 ease-out overflow-y-auto max-h-screen ${
          menuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex flex-col pt-20 pb-6">
          {/* Mobile Navigation Links */}
          <div className="flex-1 overflow-y-auto px-5">
            <ul className="space-y-1">
              {navItems.map((item) => (
                <li key={item.id} className="border-b border-gray-100">
                  {/* Main nav item */}
                  <div className="flex items-center justify-between">
                    <a
                      href={item.href}
                      onClick={!item.columns ? handleClick : undefined}
                      className="text-[#1a1a1a] hover:text-yellow-500 transition-colors duration-200 flex-1 py-4"
                    >
                      {item.label}
                    </a>
                    {item.columns && (
                      <button
                        onClick={() => toggleMobileItem(item.id)}
                        className="p-2 text-gray-500 hover:text-[#102044] transition-colors duration-200"
                      >
                        <ChevronDown
                          className={`w-5 h-5 transition-transform duration-200 ${
                            mobileExpandedItems[item.id] ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                    )}
                  </div>

                  {/* Mobile dropdown items - Two panel style */}
                  {item.columns && mobileExpandedItems[item.id] && (
                    <div className="pb-3 animate-in slide-in-from-top-2 duration-200">
                      <div className="ml-3 pl-4 border-l-2 border-gray-200 space-y-1">
                        {/* Category buttons */}
                        {item.columns.map((column, idx) => {
                          const categoryKey = `${item.id}-${idx}`;
                          const isCategoryOpen =
                            mobileExpandedItems[categoryKey];

                          return (
                            <div key={idx}>
                              <button
                                onClick={() => toggleMobileItem(categoryKey)}
                                className="w-full flex items-center justify-between text-left py-2.5 px-3 -mx-3 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                              >
                                <span className="text-sm font-semibold text-gray-700">
                                  {column.title}
                                </span>
                                <ChevronDown
                                  className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${
                                    isCategoryOpen ? "rotate-180" : ""
                                  }`}
                                />
                              </button>

                              {/* Category links */}
                              {isCategoryOpen && (
                                <ul className="mt-1 ml-3 pl-3 border-l border-gray-200 space-y-1 animate-in slide-in-from-top-2 duration-200">
                                  {column.links.map((link, linkIdx) => (
                                    <li key={linkIdx}>
                                      <a
                                        href={link.href}
                                        onClick={handleClick}
                                        className="text-gray-600 hover:text-[#102044] transition-colors duration-200 text-sm block py-2 px-2 -mx-2 rounded-md hover:bg-gray-50"
                                      >
                                        {link.label}
                                      </a>
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile CTA Buttons */}
          <div className="flex gap-3 px-5 pt-6 border-t border-gray-200">
            <button className="w-full py-3.5 px-4 text-white bg-gradient-to-r from-[#102044] to-[#1a2f5f] rounded-xl hover:shadow-xl transition-all duration-200 font-semibold">
              Apply Now
            </button>
          </div>
        </div>
      </div>

      {/* Spacer */}
      <div className="h-[72px] lg:h-[84px]" />
    </>
  );
}

export default Navbar;
