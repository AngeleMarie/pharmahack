"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const medicines = [
  { name: "Hydrochlorothiazide", price: 829, img: "/medicine.png" },
  { name: "Amlodipine", price: 540, img: "/medicine2.png" },
  { name: "Metformin", price: 620, img: "/medicine3.png" },
];

export default function MedicineCard() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevCard = () => {
    setCurrentIndex((prev) => (prev === 0 ? medicines.length - 1 : prev - 1));
  };

  const nextCard = () => {
    setCurrentIndex((prev) => (prev === medicines.length - 1 ? 0 : prev + 1));
  };

  const medicine = medicines[currentIndex];

  return (
    <div className="max-w-lg relative bg-white rounded-2xl shadow-lg p-6 text-center w-full  mx-auto">
      {/* Left Arrow */}
      <button
        onClick={prevCard}
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-[E2EAF8 p-2 rounded-full shadow hover:bg-gray-100"
      >
        <ChevronLeft size={24} color="#626262" />
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextCard}
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-100"
      >
        <ChevronRight size={24} color="#626262" />
      </button>

      {/* Medicine Info */}
      <h2 className="text-lg font-semibold text-start text-gray-800 mb-3">New Medicine</h2>
      
      <div className="flex justify-center mb-3">
        <Image
          src={medicine.img}
          alt={medicine.name}
          width={350}
          height={300}
          className="rounded-md"
        />
      </div>

      <p className="text-gray-700 font-medium mb-2">{medicine.name}</p>
      <p className="text-blue-500 font-semibold text-lg">${medicine.price}.00</p>
    </div>
  );
}
