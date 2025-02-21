import React from 'react';
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white mt-4  py-6">
      <div className="container mx-auto py-4 px-4">
        <div className="flex flex-wrap justify-between items-center">
          {/* Brand Logo */}
          <div className="w-full md:w-auto text-center md:text-left mb-1 md:mb-0">
            <Link href="/" className="flex items-center text-xl font-bold">
              <img src="https://rajasthan.gov.in/assets/images/raj-logo.png" className="h-20" alt="Rajasthan Government Logo" />
            </Link>
             {/* Copyright */}
        <div className="text-left mt-4">
          <p>&copy; {new Date().getFullYear()} Rajasthan Government. All rights reserved.</p>
        </div>
          </div>

          {/* Contact Information */}
          <div className="text-center space-y-2 md:text-left  mt-4  md:mb-2">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <p className='mt-0'>Department of Statistics, Government of Rajasthan</p>
            <p className='mb-1'>Directorate of Economics and Statistics</p>
            <p className='mb-1'>Yojna Bhawan, Tilak Marg, Jaipur 302005</p>
            <p className='mb-1'>Email: 
              <a href="mailto:yip.des@rajasthan.gov.in" className="text-yellow-500 hover:text-yellow-300">yip.des@rajasthan.gov.in</a>
            </p>
            <p className='mb-1'>Phone: 0141-2850229</p>
          </div>

          {/* Useful Links */}
          <div className="mt-4 md:mt-0">
            <h3 className="text-lg font-semibold">Useful Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-yellow-500 hover:text-yellow-300">Home</a></li>
              <li><a href="/about" className="text-yellow-500 hover:text-yellow-300">About Us</a></li>
              <li><a href="/contact" className="text-yellow-500 hover:text-yellow-300">Contact</a></li>
              <li><a href="/faq" className="text-yellow-500 hover:text-yellow-300">FAQ</a></li>
            </ul>
          </div>

          {/* Legal Information */}
          <div className="mt-4 md:mt-0">
            <h3 className="text-lg font-semibold">Legal</h3>
            <ul className="space-y-2">
              <li><a href="/privacy-policy" className="text-yellow-500 hover:text-yellow-300">Privacy Policy</a></li>
              <li><a href="/terms-conditions" className="text-yellow-500 hover:text-yellow-300">Terms & Conditions</a></li>
              <li><a href="/disclaimer" className="text-yellow-500 hover:text-yellow-300">Disclaimer</a></li>
              <li><a href="/sitemap" className="text-yellow-500 hover:text-yellow-300">Sitemap</a></li>
            </ul>
          </div>
        </div>

       
      </div>
    </footer>
  );
};

export default Footer;
