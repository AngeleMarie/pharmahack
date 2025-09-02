import React from "react";

export default function MedicineCard({ medicine, onAdd }) {
  return (
    <div className="bg-white rounded-lg shadow p-4 flex flex-col items-center">
      <img src={medicine.image} alt={medicine.name} className="w-24 h-24 mb-2" />
      <h3 className="font-semibold">{medicine.name}</h3>
      <p className="text-blue-600 font-bold">{medicine.price.toFixed(2)} $</p>
      <div className="flex items-center text-sm text-gray-500 mt-1">
        ⭐⭐⭐⭐⭐ <span className="ml-1">(131)</span>
      </div>
      <button
        onClick={() => onAdd(medicine)}
        className="mt-3 px-3 py-1 bg-gray-100 rounded-full hover:bg-blue-500 hover:text-white"
      >
        +
      </button>
    </div>
  );
}
