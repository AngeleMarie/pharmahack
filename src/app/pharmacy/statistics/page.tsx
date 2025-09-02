"use client";
import React from "react";
import Sidebar from "@/components/pharm_sidebar";
import Topbar from "@/components/topbar";
import Chart from "@/components/Chart";
import Charts from "@/components/analytics";
import MedicineCard from "@/components/new_med";
import CustomersPie from "@/components/customers_pie";



export default function Dashboard() {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Topbar />
      <h2 className="text-2xl text-[#202224]/80 font-semibold px-6 py-4">Statistics</h2>
        <main className="p-6 overflow-y-auto">
          {/* Sales Graph */}
          <Chart />

      <section className="grid grid-cols-3 gap-6 my-12">
  <div className="w-full">
    <CustomersPie />
  </div>
  <div className="w-full">
    <MedicineCard />
  </div>
  <div className="w-full">
    <Charts />
  </div>
</section>

        </main>
      </div>
    </div>
  );
}
