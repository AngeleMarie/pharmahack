import React from "react";

export default function Overview({ cart, total }) {
  return (
    <div className="bg-white rounded-lg shadow p-4">
      <h2 className="font-semibold mb-3">Overview</h2>
      <ul className="text-sm text-gray-700 mb-3">
        {cart.map((item, idx) => (
          <li key={idx} className="flex justify-between border-b py-1">
            <span>{item.name}</span>
            <span>${item.price}</span>
          </li>
        ))}
      </ul>
      <div className="flex justify-between font-semibold text-lg text-gray-800 mb-4">
        <span>Payment</span>
        <span className="text-green-600">${total.toFixed(2)}</span>
      </div>
      <button className="w-full bg-green-500 text-white py-2 rounded-lg">
        Generate Receipt
      </button>
    </div>
  );
}
