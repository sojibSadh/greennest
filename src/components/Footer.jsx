import React from "react";
import { Link, Navigate } from "react-router";
import { FaFacebookF, FaInstagram, FaPinterestP, FaLeaf } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black/30 text-gray-700 mt-10 border-t border-green-200">
      <div className="container mx-auto py-10 px-5 grid md:grid-cols-3 gap-8 md:text-center">

        {/* Brand Section */}
        <div>
          <div className="flex justify-center  items-center gap-2 mb-3">
            <FaLeaf className="text-green-600 text-2xl" />
            <h2 className="text-2xl font-bold text-orange-800 ">GreenNest</h2>
          </div>
          <p className="text-gray text-[18px]">
            Bringing nature closer to your home
            Explore indoor plants & expert care tips for a greener lifestyle.
            It brings a lush jungle vibe to any room and purifies the air naturally.
          </p>
        </div>

        {/* Quick Links */}
        <div className="max-md:text-center">
          <h3 className="text-lg font-bold text-orange-800 mb-3">
            Quick Links
          </h3>
          <ul className="space-y-2 text-white">
            <li>
              <Link
                to="/about"
                className="hover:text-green-600 transition-colors duration-200"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-green-600 transition-colors duration-200"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="/privacy"
                className="hover:text-green-600 transition-colors duration-200"
              >
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="text-center mx-auto ">
          <h3 className="text-lg font-bold text-orange-800 mb-5">
            Follow Us
          </h3>
          <div className="flex justify-center md:justify-start gap-4 text-green-700">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="p-2 bg-white rounded-full shadow hover:bg-green-200 transition"
            >
              <FaInstagram />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="p-2 bg-white rounded-full shadow hover:bg-green-200 transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://pinterest.com"
              target="_blank"
              rel="noreferrer"
              className="p-2 bg-white rounded-full shadow hover:bg-green-200 transition"
            >
              <FaPinterestP />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-blue-950 py-3 text-center text-sm text-gray-200 font-semibold">
        © 2025 GreenNest. All rights reserved By <a className="text-green-500" href="https://github.com/Sajib99design" target="_blank" rel="noreferrer"> SaJib Ahmed. </a>

      </div>
    </footer>
  );
};

export default Footer;
