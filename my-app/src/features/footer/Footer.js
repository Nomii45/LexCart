import React from "react";

function Footer () {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
        <div>
          <h3 className="text-xl font-bold text-red-500 mb-4">Shoe Haven</h3>
          <p>Your one-stop destination for premium quality shoes.</p>
        </div>
        <div>
          <h3 className="text-xl font-bold text-red-500 mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-red-500">Home</a></li>
            <li><a href="#" className="hover:text-red-500">Shop</a></li>
            <li><a href="#" className="hover:text-red-500">About Us</a></li>
            <li><a href="#" className="hover:text-red-500">Contact</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold text-red-500 mb-4">Customer Service</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-red-500">FAQs</a></li>
            <li><a href="#" className="hover:text-red-500">Shipping Policy</a></li>
            <li><a href="#" className="hover:text-red-500">Return Policy</a></li>
            <li><a href="#" className="hover:text-red-500">Size Guide</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold text-red-500 mb-4">Contact Us</h3>
          <ul className="space-y-2">
            <li>123 Shoe Street, Footville</li>
            <li>Email: info@shoehaven.com</li>
            <li>Phone: (123) 456-7890</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-700 text-center pt-6 text-gray-400 text-sm">
        © 2023 Shoe Haven. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
