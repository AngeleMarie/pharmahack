"use client";
import React from "react";
import Sidebar from "@/components/ins_sidebar";
import Topbar from "@/components/topbar";
import AffiliateCard from "@/components/affiliate_card";

export default function Customers() {
  const affiliates = [
    { logo: "/jane.png", name: "Angele Marie", type:"New", email: "sanlam@yahoo.com" },
    { logo: "/john.png", name: "Kalisa Ferry", type: "Returning", email: "prime@gmail.com" },
    { logo: "/john.png", name: "Andrew Nkotanyi", type: "Returning", email: "radiant@yahoo.com" },
    { logo: "/jane.png", name: "Ntare Carla", type: "New", email: "sonarwa@gmail.com" },
    { logo: "/john.png", name: "Larissa Kalrabo", type: "Returning", email: "sanlam@yahoo.com" },
    { logo: "/john.png", name: "Erica Ntwali", type: "New", email: "prime@gmail.com" },
    { logo: "/john.png", name: "Bella Saro", type: "New", email: "radiant@yahoo.com" },
    { logo: "/jane.png", name: "Cyubahiro Aime", type: "New", email: "sonarwa@gmail.com" },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Topbar />

        <main className="p-6 overflow-y-auto">
          {/* Header Section */}
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold">Affiliates</h2>
            <div className="flex gap-3">
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700">
                + New Affiliate
              </button>
              <button className="bg-green-600 text-white px-4 py-2 rounded-lg shadow hover:bg-green-700">
                Download
              </button>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {affiliates.map((ins, index) => (
              <AffiliateCard key={index} {...ins} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
