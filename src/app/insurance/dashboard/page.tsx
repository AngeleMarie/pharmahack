"use client";
import React from "react";
import Sidebar from "@/components/ins_sidebar";
import Topbar from "@/components/topbar";
import StatsCard from "@/components/StatsCard";
import ClaimsGraph from "@/components/ClaimsGraph";
import ClaimsTable from "@/components/ClaimsTable";

import { Users, Shield, ShoppingCart, Package } from "lucide-react";

export default function Dashboard() {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Topbar />
      <h2 className="text-2xl text-[#202224]/80 font-semibold p-6">Dashboard</h2>

        <main className="p-6 overflow-y-auto">
          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <StatsCard
              title="Total Affiliates"
              value="40,689"
              icon={<Users className="w-6 h-6 text-white" />}
              trend={8.5}
              trendText="8.5% Up from yesterday"
              color="bg-blue-500"
            />
            <StatsCard
              title="Total Pharmacies"
              value="10,293"
              icon={<Shield className="w-6 h-6 text-white" />}
              trend={1.3}
              trendText="1.3% Up from past week"
              color="bg-yellow-500"
            />
            <StatsCard
              title="Payout Amount"
              value="$89,000"
              icon={<ShoppingCart className="w-6 h-6 text-white" />}
              trend={-4.3}
              trendText="4.3% Down from yesterday"
              color="bg-green-500"
            />
            <StatsCard
              title="Total Claims"
              value="2040"
              icon={<Package className="w-6 h-6 text-white" />}
              trend={1.8}
              trendText="1.8% Up from yesterday"
              color="bg-red-500"
            />
          </div>

          {/* Sales Graph */}
          <ClaimsGraph />

          {/* Sales Table */}
          <ClaimsTable />
        </main>
      </div>
    </div>
  );
}
