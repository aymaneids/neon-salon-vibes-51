
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Team", path: "/team" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        scrolled
          ? "bg-white bg-opacity-95 backdrop-blur-md shadow-md py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="salon-container flex items-center justify-between">
        <NavLink to="/" className="z-50">
          <h1 className="text-2xl md:text-3xl font-bold">
            <span className="text-salon-black">Neon</span>
            <span className="text-salon-pink">Avenue</span>
          </h1>
        </NavLink>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-1">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                cn("nav-link", isActive && "nav-link-active")
              }
              onClick={closeMenu}
            >
              {item.name}
            </NavLink>
          ))}
          <NavLink
            to="/contact"
            className="ml-4 bg-salon-pink text-white px-6 py-2 rounded-full font-medium hover:bg-opacity-90 transition-all"
            onClick={closeMenu}
          >
            Book Now
          </NavLink>
        </div>

        {/* Mobile Navigation Toggle */}
        <button
          className="lg:hidden z-50 text-salon-black focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation Menu */}
        <div
          className={cn(
            "fixed inset-0 bg-white bg-opacity-95 backdrop-blur-md flex flex-col justify-center items-center transition-all duration-300 z-40",
            isOpen ? "opacity-100 visible" : "opacity-0 invisible"
          )}
        >
          <div className="flex flex-col space-y-6 items-center">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  cn(
                    "text-xl font-medium text-salon-black hover:text-salon-pink transition-colors",
                    isActive && "text-salon-pink"
                  )
                }
                onClick={closeMenu}
              >
                {item.name}
              </NavLink>
            ))}
            <NavLink
              to="/contact"
              className="mt-4 bg-salon-pink text-white px-8 py-3 rounded-full font-medium text-lg hover:bg-opacity-90 transition-all"
              onClick={closeMenu}
            >
              Book Now
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
