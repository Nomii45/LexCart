import React, { useState } from "react";
import { motion } from "framer-motion";

const images = [
  { src: "/images/shoe.jpg", color: "bg-yellow-500" },
  { src: "/images/headphones2.jpg", color: "bg-[#00142a]" },
  { src: "/images/bag.jpg", color: "bg-[#3C0D4A]" },
];

function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Rotate anticlockwise
  const handleImageClick = () => {
    setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  // Triangle positions
  const positions = [
    { x: -60, y: 95, zIndex: 2, scale: 1.5 }, 
    { x: 80, y: -140, zIndex: 1, scale: 1 },  
    { x: -200, y: -140, zIndex: 1, scale: 1 }, 
  ];


  
  return (
    <section className="h-[500px] text-white">

      {/* Medium & Large Screens - Rotating Images */}
      <div
        className={`hidden md:flex h-full items-center justify-between px-10 transition-colors duration-700 ${images[activeIndex].color}`}
      >
        {/* Left Content */}
        <div className="w-1/2">
          <h1 className="text-5xl font-bold mb-4">Step Into Style</h1>
          <p className="text-lg mb-6">
            Discover the perfect pair of headphones for every vibe.
          </p>
          <a
            href="#"
            className="inline-block bg-black hover:bg-gray-800 text-white font-semibold py-3 px-8 rounded-full"
          >
            Shop Now
          </a>
        </div>

        {/* Right Side - Circular Rotating Images */}
        <div className="w-1/2 relative h-[400px] flex justify-center items-center">
          {images.map((img, index) => {
            const posIndex =
              (activeIndex - index + images.length) % images.length;
            const isActive = index === activeIndex;

            return (
              <motion.img
                key={index}
                src={img.src}
                alt="product"
                className={`absolute rounded-full shadow-xl cursor-pointer border-2 border-white ${
                  isActive ? "blur-0" : "blur-sm opacity-70"
                }`}
                style={{ width: "200px", height: "200px", objectFit: "cover" }}
                animate={{
                  x: positions[posIndex].x,
                  y: positions[posIndex].y,
                  scale: positions[posIndex].scale,
                  zIndex: positions[posIndex].zIndex,
                }}
                transition={{ duration: 0.8, type: "spring" }}
                onClick={handleImageClick}
              />
            );
          })}
        </div>
      </div>

       
      {/* Small Screens Hero Background */}
      <div
        className="flex items-center text-center md:hidden h-full"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/images/shoe.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h1 className="text-5xl font-bold mb-4">Step Into Style</h1>
            <p className="text-lg mb-6">
              Discover the perfect pair of shoes for every occasion from our
              premium collection
            </p>
            <a
              href="#"
              className="inline-block bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-8 rounded-full"
            >
              Shop Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
