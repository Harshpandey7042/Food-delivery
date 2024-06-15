import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between space-y-8 md:space-y-0">
          {/* Logo and Quick Links */}
          <div className="md:w-1/3">
            <img src="img/mainlogo.jpeg" alt="mainlogo" className="w-32 h-32 mb-4 rounded-full" />
            <ul className="space-y-2">
              <li><a href="#home" className="hover:text-gray-400">Home</a></li>
              <li><a href="#about" className="hover:text-gray-400">About Us</a></li>
              <li><a href="#menu" className="hover:text-gray-400">Menu</a></li>
              <li><a href="#blog" className="hover:text-gray-400">Blog</a></li>
              <li><a href="#contact" className="hover:text-gray-400">Contact Us</a></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="md:w-1/3">
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li>
                <a href="mailto:Hemantpandey900@gmail.com" className="hover:text-gray-400 flex items-center">
                  <i className="ri-mail-check-line mr-2"></i> Hemantpandey900@gmail.com
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/hemantpandey092/" className="hover:text-gray-400 flex items-center">
                  <i className="ri-instagram-line mr-2"></i> Hemantpandey092
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400 flex items-center">
                  <i className="ri-facebook-box-fill mr-2"></i> Hemant Pandey
                </a>
              </li>
            </ul>
          </div>

          {/* Address */}
          <div className="md:w-1/3">
            <h3 className="text-lg font-semibold mb-4">Our Address</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://www.dlfmallofindia.com/dine" className="hover:text-gray-400">
                  DLF Mall Sector 18, Noida
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-4 text-center">
          <h2 className="text-sm">All Rights Reserved &copy; 2024</h2>
          <h2 className="text-sm">Website developed by Hemant</h2>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
