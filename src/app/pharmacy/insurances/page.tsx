"use client";
import React from "react";
import Sidebar from "@/components/pharm_sidebar";
import Topbar from "@/components/topbar";
import InsuranceCard from "@/components/insurance_card";

export default function Insurance() {
  const insurances = [
    { logo: "/sanlam.png", name: "Sanlam Ltd", users: 120, email: "sanlam@yahoo.com" },
    { logo: "/sanlam.png", name: "Prime Insurance", users: 300, email: "prime@gmail.com" },
    { logo: "/sanlam.png", name: "Radiant Insurance", users: 150, email: "radiant@yahoo.com" },
    { logo: "/sanlam.png", name: "Sonarwa Ltd", users: 200, email: "sonarwa@gmail.com" },
    { logo: "/sanlam.png", name: "Sanlam Ltd", users: 100, email: "sanlam@yahoo.com" },
    { logo: "/sanlam.png", name: "Prime Insurance", users: 90, email: "prime@gmail.com" },
    { logo: "/sanlam.png", name: "Radiant Insurance", users: 110, email: "radiant@yahoo.com" },
    { logo: "/sanlam.png", name: "Sonarwa Ltd", users: 80, email: "sonarwa@gmail.com" },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Topbar />

        <main className="p-6 overflow-y-auto">
          {/* Header Section */}
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold">Insurance</h2>
            <div className="flex gap-3">
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700">
                + New Insurance
              </button>
              <button className="bg-green-600 text-white px-4 py-2 rounded-lg shadow hover:bg-green-700">
                Download
              </button>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {insurances.map((ins, index) => (
              <InsuranceCard key={index} {...ins} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
