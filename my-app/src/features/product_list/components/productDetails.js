// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { motion } from "framer-motion";

// function ProductDetails() {
//   const { id } = useParams();
//   const [product, setProduct] = useState(null);

//   useEffect(() => {
//     fetch(`http://localhost:8000/products/${id}`)
//       .then((res) => {
//         if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
//         return res.json();
//       })
//       .then((data) => setProduct(data))
//       .catch((err) => console.log("Error fetching product:", err));
//   }, [id]);

//   if (!product) {
//     return (
//       <h2 className="text-center mt-12 text-xl font-semibold text-gray-600 dark:text-gray-300 animate-pulse">
//         Loading product details...
//       </h2>
//     );
//   }

//   return (
//     <motion.div
//       className="bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-10 min-h-screen"
//       initial={{ scale: 1.1, opacity: 0 }}
//       animate={{ scale: 1, opacity: 1 }}
//       transition={{ duration: 0.8, ease: "easeOut" }}
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.div
//           className="flex flex-col md:flex-row gap-8"
//           initial={{ y: 50, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
//         >
//           {/* Left Section */}
//           <motion.div
//             className="md:flex-1 space-y-4"
//             initial={{ x: -50, opacity: 0 }}
//             animate={{ x: 0, opacity: 1 }}
//             transition={{ delay: 0.5, duration: 0.7 }}
//           >
//             {/* Main Image */}
//             <div className="relative h-[460px] rounded-2xl overflow-hidden shadow-lg group">
//               <motion.img
//                 src={product.thumbnail}
//                 alt={product.title}
//                 className="w-full h-full object-cover rounded-2xl"
//                 whileHover={{ scale: 1.05 }}
//                 transition={{ duration: 0.5 }}
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 rounded-2xl"></div>
//             </div>

//             {/* Extra Images */}
//             <div className="flex gap-3 overflow-x-auto pb-2">
//               {product.images?.map((img, index) => (
//                 <motion.img
//                   key={index}
//                   src={img}
//                   alt={`${product.title}-${index}`}
//                   className="w-24 h-24 object-cover rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm cursor-pointer"
//                   whileHover={{ scale: 1.1 }}
//                   transition={{ type: "spring", stiffness: 200 }}
//                 />
//               ))}
//             </div>

//             {/* Buttons */}
//             <div className="flex gap-4">
//               <motion.button
//                 whileHover={{ scale: 1.07 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="flex-1 py-3 px-6 rounded-full font-bold bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg hover:shadow-xl transition duration-300"
//               >
//                 Add to Cart
//               </motion.button>
//               <motion.button
//                 whileHover={{ scale: 1.07 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="flex-1 py-3 px-6 rounded-full font-bold bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white shadow hover:shadow-md transition duration-300"
//               >
//                 Add to Wishlist
//               </motion.button>
//             </div>
//           </motion.div>

//           {/* Right Section */}
//           <motion.div
//             className="md:flex-1 px-2 md:px-0"
//             initial={{ x: 50, opacity: 0 }}
//             animate={{ x: 0, opacity: 1 }}
//             transition={{ delay: 0.6, duration: 0.7 }}
//           >
//             <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-3 tracking-tight">
//               {product.title}
//             </h2>
//             <p className="text-gray-600 dark:text-gray-300 text-base mb-6 leading-relaxed">
//               {product.description}
//             </p>

//             {/* Price & Availability */}
//             <div className="flex flex-wrap items-center mb-6 gap-6">
//               <div>
//                 <span className="block text-sm font-semibold text-gray-500 dark:text-gray-400">
//                   Price
//                 </span>
//                 <span className="text-2xl font-bold text-green-600 dark:text-green-400">
//                   ${product.price}
//                 </span>
//                 <span className="ml-2 text-red-500 text-sm">
//                   ({product.discountPercentage}% Off)
//                 </span>
//               </div>
//               <div>
//                 <span className="block text-sm font-semibold text-gray-500 dark:text-gray-400">
//                   Availability
//                 </span>
//                 <span className="text-gray-800 dark:text-gray-200">
//                   {product.availabilityStatus}
//                 </span>
//               </div>
//             </div>

//             {/* Specs */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm mb-6">
//               <p><b>Brand:</b> {product.brand}</p>
//               <p><b>SKU:</b> {product.sku}</p>
//               <p><b>Weight:</b> {product.weight}g</p>
//               {product.dimensions && (
//                 <p>
//                   <b>Dimensions:</b> {product.dimensions.width} × {product.dimensions.height} × {product.dimensions.depth} cm
//                 </p>
//               )}
//               <p><b>Warranty:</b> {product.warrantyInformation}</p>
//               <p><b>Shipping:</b> {product.shippingInformation}</p>
//               <p><b>Return:</b> {product.returnPolicy}</p>
//               <p><b>Min Order:</b> {product.minimumOrderQuantity}</p>
//             </div>

//             {/* Barcode & QR */}
//             {product.meta && (
//               <motion.div
//                 className="mt-8 p-5 bg-gray-50 dark:bg-gray-700 rounded-2xl shadow-inner"
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 1, duration: 0.6 }}
//               >
//                 <p className="font-medium text-gray-700 dark:text-gray-300">
//                   <b>Barcode:</b> {product.meta.barcode}
//                 </p>
//                 <motion.img
//                   src={product.meta.qrCode}
//                   alt="QR Code"
//                   className="w-24 h-24 mt-3 border border-gray-200 dark:border-gray-600 rounded-xl shadow-sm"
//                   whileHover={{ scale: 1.1 }}
//                 />
//               </motion.div>
//             )}
//           </motion.div>
//         </motion.div>
//       </div>
//     </motion.div>
//   );
// }

// export default ProductDetails;

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  // manually added colors & sizes
  const colors = ["black", "white", "silver", "pink", "grey"];
  const sizes = ["S", "M", "L", "XL", "XXL"];

  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [selectedSize, setSelectedSize] = useState(sizes[0]);

  useEffect(() => {
    fetch(`http://localhost:8000/products/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        return res.json();
      })
      .then((data) => setProduct(data))
      .catch((err) => console.log("Error fetching product:", err));
  }, [id]);

  if (!product) {
    return (
      <h2 className="text-center mt-12 text-xl font-semibold text-gray-600 dark:text-gray-300 animate-pulse">
        Loading product details...
      </h2>
    );
  }

  return (
    <motion.div
      className="bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-10 min-h-screen"
      initial={{ scale: 1.1, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="flex flex-col md:flex-row gap-8"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
        >
          {/* Left Section */}
          <motion.div
            className="md:flex-1 space-y-4"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.7 }}
          >
            {/* Main Image */}
            <div className="relative h-[460px] rounded-2xl overflow-hidden shadow-lg group">
              <motion.img
                src={product.thumbnail}
                alt={product.title}
                className="w-full h-full object-cover rounded-2xl"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 rounded-2xl"></div>
            </div>

            {/* Extra Images */}
            <div className="flex gap-3 overflow-x-auto pb-2">
              {product.images?.map((img, index) => (
                <motion.img
                  key={index}
                  src={img}
                  alt={`${product.title}-${index}`}
                  className="w-24 h-24 object-cover rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm cursor-pointer"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 200 }}
                />
              ))}
            </div>

            {/* Buttons */}
            <div className="flex gap-4">
              <motion.button
                whileHover={{ scale: 1.07 }}
                whileTap={{ scale: 0.95 }}
                className="flex-1 py-3 px-6 rounded-full font-bold bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg hover:shadow-xl transition duration-300"
              >
                Add to Cart
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.07 }}
                whileTap={{ scale: 0.95 }}
                className="flex-1 py-3 px-6 rounded-full font-bold bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white shadow hover:shadow-md transition duration-300"
              >
                Add to Wishlist
              </motion.button>
            </div>
          </motion.div>

          {/* Right Section */}
          <motion.div
            className="md:flex-1 px-2 md:px-0"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.7 }}
          >
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-3 tracking-tight">
              {product.title}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-base mb-6 leading-relaxed">
              {product.description}
            </p>

            {/* Price & Availability */}
            <div className="flex flex-wrap items-center mb-6 gap-6">
              <div>
                <span className="block text-sm font-semibold text-gray-500 dark:text-gray-400">
                  Price
                </span>
                <span className="text-2xl font-bold text-green-600 dark:text-green-400">
                  ${product.price}
                </span>
                <span className="ml-2 text-red-500 text-sm">
                  ({product.discountPercentage}% Off)
                </span>
              </div>
              <div>
                <span className="block text-sm font-semibold text-gray-500 dark:text-gray-400">
                  Availability
                </span>
                <span className="text-gray-800 dark:text-gray-200">
                  {product.availabilityStatus}
                </span>
              </div>
            </div>

            {/* Color Selector */}
            <div className="mb-6">
              <span className="block text-sm font-semibold text-gray-500 dark:text-gray-400 mb-2">
                Select Color
              </span>
              <div className="flex gap-3">
                {colors.map((color) => (
                  <motion.button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`w-8 h-8 rounded-full border-2 ${
                      selectedColor === color
                        ? "border-indigo-600 scale-110"
                        : "border-gray-300"
                    }`}
                    style={{ backgroundColor: color }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  />
                ))}
              </div>
            </div>

            {/* Size Selector */}
            <div className="mb-6">
              <span className="block text-sm font-semibold text-gray-500 dark:text-gray-400 mb-2">
                Select Size
              </span>
              <div className="flex gap-3 flex-wrap">
                {sizes.map((size) => (
                  <motion.button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 rounded-full font-semibold border transition ${
                      selectedSize === size
                        ? "bg-indigo-600 text-white shadow-md"
                        : "bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 border-gray-300 dark:border-gray-600"
                    }`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {size}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Specs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm mb-6">
              <p><b>Brand:</b> {product.brand}</p>
              <p><b>SKU:</b> {product.sku}</p>
              <p><b>Weight:</b> {product.weight}g</p>
              {product.dimensions && (
                <p>
                  <b>Dimensions:</b> {product.dimensions.width} × {product.dimensions.height} × {product.dimensions.depth} cm
                </p>
              )}
              <p><b>Warranty:</b> {product.warrantyInformation}</p>
              <p><b>Shipping:</b> {product.shippingInformation}</p>
              <p><b>Return:</b> {product.returnPolicy}</p>
              <p><b>Min Order:</b> {product.minimumOrderQuantity}</p>
            </div>

            {/* Barcode & QR */}
            {product.meta && (
              <motion.div
                className="mt-8 p-5 bg-gray-50 dark:bg-gray-700 rounded-2xl shadow-inner"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.6 }}
              >
                <p className="font-medium text-gray-700 dark:text-gray-300">
                  <b>Barcode:</b> {product.meta.barcode}
                </p>
                <motion.img
                  src={product.meta.qrCode}
                  alt="QR Code"
                  className="w-24 h-24 mt-3 border border-gray-200 dark:border-gray-600 rounded-xl shadow-sm"
                  whileHover={{ scale: 1.1 }}
                />
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default ProductDetails;
