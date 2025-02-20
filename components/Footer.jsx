import React from 'react';
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white  padding-1rem pt-4 relative py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-auto text-center md:text-left mb-4 md:mb-0">
             {/* ✅ Brand Logo */}
        <Link href="/" className="flex items-center text-xl font-bold">
          <img src="https://rajasthan.gov.in/assets/images/raj-logo.png" className="h-20" alt="TE Logo" />
        </Link>
          
          </div>
          <div className="w-full md:w-auto text-center">
            <ul className="flex flex-wrap justify-center md:justify-start space-x-4">
              <li>
                <a href="/about" className="hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="/services" className="hover:underline">
                  Services
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:underline">
                  Contact
                </a>
              </li>
              <li>
                <a href="/privacy" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-auto text-center md:text-right mt-4 md:mt-0">
            <p className="text-sm">
              &copy; {new Date().getFullYear()} Your Company Name. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
