"use client";
import React from "react";
import Sidebar from "@/components/ins_sidebar";
import Topbar from "@/components/topbar";
import PharmacyCard from "@/components/pharmacy_card";

export default function Insurance() {
  const pharmacies = [
    { logo: "/baho.png", name: "Baho Pharmacy", location: "Kigali, Rwanda", email: "baho@yahoo.com" },
    { logo: "/baho.png", name: "Baho Pharmacy", location: "Kigali, Rwanda", email: "baho@yahoo.com" },
    { logo: "/baho.png", name: "Baho Pharmacy", location: "Kigali, Rwanda", email: "baho@yahoo.com" },
    { logo: "/baho.png", name: "Baho Pharmacy", location: "Kigali, Rwanda", email: "baho@yahoo.com" },
    { logo: "/baho.png", name: "Baho Pharmacy", location: "Kigali, Rwanda", email: "baho@yahoo.com" },
    { logo: "/baho.png", name: "Baho Pharmacy", location: "Kigali, Rwanda", email: "baho@yahoo.com" },
    { logo: "/baho.png", name: "Baho Pharmacy", location: "Kigali, Rwanda", email: "baho@yahoo.com" },
    { logo: "/baho.png", name: "Baho Pharmacy", location: "Kigali, Rwanda", email: "baho@yahoo.com" },
    
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Topbar />

        <main className="p-6 overflow-y-auto">
          {/* Header Section */}
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold">Pharmacy</h2>
            <div className="flex gap-3">
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700">
                + New Pharmacy
              </button>
              <button className="bg-green-600 text-white px-4 py-2 rounded-lg shadow hover:bg-green-700">
                Download
              </button>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pharmacies.map((ins, index) => (
              <PharmacyCard key={index} {...ins} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
