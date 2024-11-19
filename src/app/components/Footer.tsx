
import Image from 'next/image';
import React from 'react';
import Logo1 from "../assets/Logo1.png"

const Footer = () => {
  return (
    <footer className="bg-[#043873] text-white py-8">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo and description */}
        <div>
          <div className="flex items-center space-x-2 mb-4">
          <Image src={Logo1} alt='Apple img'/>
            
          </div>
          <p className="text-sm">
            Whitespace was created for the new ways we live and work. We make a better workspace around the world.
          </p>
        </div>

        {/* Product links */}
        <div>
          <h3 className="font-semibold mb-2">Product</h3>
          <ul className="text-sm space-y-1">
            <li><a href="#" className="hover:underline">Overview</a></li>
            <li><a href="#" className="hover:underline">Pricing</a></li>
            <li><a href="#" className="hover:underline">Customer stories</a></li>
          </ul>
        </div>

        {/* Resources links */}
        <div>
          <h3 className="font-semibold mb-2">Resources</h3>
          <ul className="text-sm space-y-1">
            <li><a href="#" className="hover:underline">Blog</a></li>
            <li><a href="#" className="hover:underline">Guides & tutorials</a></li>
            <li><a href="#" className="hover:underline">Help center</a></li>
          </ul>
        </div>

        {/* Company links */}
        <div>
          <h3 className="font-semibold mb-2">Company</h3>
          <ul className="text-sm space-y-1">
            <li><a href="#" className="hover:underline">About us</a></li>
            <li><a href="#" className="hover:underline">Careers</a></li>
            <li><a href="#" className="hover:underline">Media kit</a></li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-8 text-center text-sm border-t border-blue-800 pt-4">
        ©2021 Whitespace LLC.
      </div>
    </footer>
  );
};

export default Footer;
