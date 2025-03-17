
import React from "react";
import { NavLink } from "react-router-dom";
import { Instagram, MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-salon-black text-white pt-16 pb-8">
      <div className="salon-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">
              <span className="text-white">Neon</span>
              <span className="text-salon-pink">Avenue</span>
            </h3>
            <p className="text-gray-300 mb-4">
              Chicago's premier destination for hair where beauty, style, and opportunity meet.
            </p>
            <div className="flex space-x-4 mt-6">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white bg-opacity-10 flex items-center justify-center hover:bg-salon-pink transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <NavLink to="/" className="text-gray-300 hover:text-salon-pink transition-colors">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className="text-gray-300 hover:text-salon-pink transition-colors">
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink to="/team" className="text-gray-300 hover:text-salon-pink transition-colors">
                  Our Team
                </NavLink>
              </li>
              <li>
                <NavLink to="/services" className="text-gray-300 hover:text-salon-pink transition-colors">
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="text-gray-300 hover:text-salon-pink transition-colors">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 uppercase tracking-wider">Our Services</h4>
            <ul className="space-y-3">
              <li className="text-gray-300 hover:text-salon-pink transition-colors">
                <NavLink to="/services">Color</NavLink>
              </li>
              <li className="text-gray-300 hover:text-salon-pink transition-colors">
                <NavLink to="/services">Haircuts</NavLink>
              </li>
              <li className="text-gray-300 hover:text-salon-pink transition-colors">
                <NavLink to="/services">Extensions</NavLink>
              </li>
              <li className="text-gray-300 hover:text-salon-pink transition-colors">
                <NavLink to="/services">Styling</NavLink>
              </li>
              <li className="text-gray-300 hover:text-salon-pink transition-colors">
                <NavLink to="/services">Treatments</NavLink>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 uppercase tracking-wider">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mt-1 mr-3 text-salon-pink" />
                <span className="text-gray-300">
                  111 N Wabash Ste 1805<br />
                  Chicago, Illinois 60601
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-salon-pink" />
                <a href="tel:+1234567890" className="text-gray-300 hover:text-salon-pink transition-colors">
                  (123) 456-7890
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-salon-pink" />
                <a href="mailto:info@neonavenuesalon.com" className="text-gray-300 hover:text-salon-pink transition-colors">
                  info@neonavenuesalon.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-8 text-center text-gray-400 text-sm">
          <p>&copy; {currentYear} Neon Avenue Salon. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
