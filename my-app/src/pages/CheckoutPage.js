import React, { useState } from "react";
import { Link } from "react-router-dom";

function CheckoutPage() {
  const [cartItems, setCartItems] = useState([
     { id: 1, name: "Shirt", price: 10, quantity: 1},
  ])
  // Subtotal calculation
  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  return (
    <div className="max-w-4xl mx-auto p-8 bg-white shadow-md rounded-lg">
      <form className="space-y-8">
    
        {/* Personal Info */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Personal Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium">First name</label>
              <input
                type="text"
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Last name</label>
              <input
                type="text"
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              />
            </div>
          </div>

          <div className="mt-4">
            <label className="block text-sm font-medium">Email address</label>
            <input
              type="email"
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            />
          </div>

          <div className="mt-4">
            <label className="block text-sm font-medium">Country</label>
            <select className="mt-1 block w-full border border-gray-300 rounded-md p-2">
              <option>Pakistan</option>
              <option>Chine</option>
              <option>India</option>
              <option>United Kingdom</option>
              <option value="Bangladesh">Bangladesh</option>
              <option value="Sri Lanka">Sri Lanka</option>
              <option value="Nepal">Nepal</option>
              <option value="China">China</option>
              <option value="Japan">Japan</option>
              <option value="South Korea">South Korea</option>
              <option value="United States">United States</option>
              <option value="Canada">Canada</option>
              <option value="Mexico">Mexico</option>
              <option value="Brazil">Brazil</option>
              <option value="United Kingdom">United Kingdom</option>
              <option value="Germany">Germany</option>
              <option value="France">France</option>
              <option value="Italy">Italy</option>
              <option value="Spain">Spain</option>
              <option value="Australia">Australia</option>
              <option value="New Zealand">New Zealand</option>
              <option value="South Africa">South Africa</option>
            </select>
          </div>

          <div className="mt-4">
            <label className="block text-sm font-medium">Street address</label>
            <input
              type="text"
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
            <div>
              <label className="block text-sm font-medium">City</label>
              <input
                type="text"
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">
                State / Province
              </label>
              <input
                type="text"
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">
                ZIP / Postal code
              </label>
              <input
                type="text"
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              />
            </div>
          </div>
        </div>

        <hr className="border-gray-300" />

        {/* Notifications */}
        <div>
          <h2 className="text-lg font-semibold mb-2">Address</h2>
          <p className="text-sm text-gray-600 mb-4">
            Choose from Existing address
          </p>

          <div>
            <h3 className="font-medium text-gray-700 mb-2">Payment Methods</h3>
            <p className="text-sm text-gray-500 mb-4">Choose One</p>

            <div className="space-y-2">
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="payment"
                  className="text-indigo-600"
                />
                <span>Cash</span>
              </label>

              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="payment"
                  className="text-indigo-600"
                />
                <span>Card Payment</span>
              </label>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-end space-x-4">
          <button
            type="button"
            className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100"
          >
            Reset
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
}

export default CheckoutPage;
