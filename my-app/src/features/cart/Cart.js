import React, { useState } from "react";

import { Link } from "react-router-dom";

function Cart() {
  // State for cart items
  // const [cartItems, setCartItems] = useState([
  //   { id: 1, name: "Shirt", price: 10, quantity: 1, image: im },
  //   { id: 2, name: "Pants", price: 20, quantity: 1, image: im },
  //   { id: 3, name: "Shoes", price: 40, quantity: 1, image: im },
  // ]);
  const [cartItems, setCartItems] = useState([
  { id: 1, name: "Shirt", price: 10, quantity: 1, image: "/images/image2.jpg" },
  { id: 2, name: "Pants", price: 20, quantity: 1, image: "/images/image2.jpg" },
  { id: 3, name: "Shoes", price: 40, quantity: 1, image: "/images/image2.jpg" },
]);

  // Increase quantity
  const increaseQty = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // Decrease quantity
  const decreaseQty = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  // Subtotal calculation
  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="bg-gray-100 min-h-screen py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-2xl font-semibold mb-4">Shopping Cart</h1>
        <div className="flex flex-col md:flex-row gap-4">
          {/* Cart Items Section */}
          <div className="md:w-3/4">
            <div className="bg-white rounded-lg shadow-md p-6 mb-4">
              <table className="w-full">
                <thead>
                  <tr>
                    <th className="text-left font-semibold">Product</th>
                    <th className="text-left font-semibold">Price</th>
                    <th className="text-left font-semibold">Quantity</th>
                    <th className="text-left font-semibold">Total</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item) => (
                    <tr key={item.id}>
                      <td className="py-4">
                        <div className="flex items-center">
                          <img
                            className="h-16 w-16 mr-4"
                            src={item.image}
                            alt={item.name}
                          />
                          <span className="font-semibold">{item.name}</span>
                        </div>
                      </td>
                      <td className="py-4">${item.price.toFixed(2)}</td>
                      <td className="py-4">
                        <div className="flex items-center">
                          <button
                            onClick={() => decreaseQty(item.id)}
                            className="border rounded-md py-2 px-4 mr-2"
                          >
                            -
                          </button>
                          <span className="text-center w-8">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => increaseQty(item.id)}
                            className="border rounded-md py-2 px-4 ml-2"
                          >
                            +
                          </button>
                        </div>
                      </td>
                      <td className="py-4">
                        ${(item.price * item.quantity).toFixed(2)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Summary Section */}
          <div className="md:w-1/4">
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
              {/* Title */}
              <h2 className="text-xl font-bold text-gray-800 mb-6">
                Order Summary
              </h2>

              {/* Subtotal */}
              <div className="flex justify-between mb-3 text-gray-600">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>

              {/* Taxes */}
              <div className="flex justify-between mb-3 text-gray-600">
                <span>Taxes</span>
                <span>${(subtotal * 0.1).toFixed(2)}</span>
              </div>

              {/* Shipping */}
              <div className="flex justify-between mb-3 text-gray-600">
                <span>Shipping</span>
                <span>$5.00</span>
              </div>

              {/* Divider */}
              <hr className="my-4 border-gray-300" />

              {/* Total */}
              <div className="flex justify-between mb-4">
                <span className="font-semibold text-lg text-gray-800">
                  Total
                </span>
                <span className="font-semibold text-lg text-gray-900">
                  ${(subtotal * 1.1 + 5).toFixed(2)}
                </span>
              </div>

              {/* Checkout Button */}
              <Link to="/checkout">
              <button className="bg-blue-600 hover:bg-blue-700 transition duration-200 text-white py-3 px-6 rounded-lg w-full font-medium shadow-md">
                Proceed to Checkout
              </button>
              </Link>

              {/* Continue Shopping */}
              <div className="text-center mt-4">
                <p className="text-gray-500 text-sm">or</p>
                <Link
                  to="/"
                  className="text-blue-600 hover:text-blue-800 font-medium transition duration-200"
                >
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
