"use client"
import React from "react";

export default function CategoryBar({ categories, active, setActive }) {
  return (
    <div className="flex items-center gap-2 mb-4">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => setActive(cat)}
          className={`px-4 py-2 rounded-lg ${
            active === cat
              ? "bg-blue-500 text-white"
              : "bg-gray-100 text-gray-700 hover:bg-blue-100"
          }`}
        >
          {cat}
        </button>
      ))}
      <button className="px-4 py-2 bg-green-500 text-white rounded-lg">+</button>
    </div>
  );
}
