"use client";
import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";

const data = [
  { name: "Affiliates ", value: 400 },
  { name: "Pharmacies", value: 200 },
];

const COLORS = ["#31B365","#4880FF"]; // blue for new, red for repeated

export default function UsersPie() {
  return (
    <div className="bg-white shadow rounded-2xl p-6 w-full max-w-md mx-auto">
      <h3 className="text-lg font-semibold mb-4 text-gray-800">Total Users</h3>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={100}
            fill="#8884d8"
            label
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip
            formatter={(value) => [`${value}`, "Customers"]}
            contentStyle={{ borderRadius: "10px", border: "none", boxShadow: "0 2px 10px rgba(0,0,0,0.1)" }}
          />
          <Legend verticalAlign="bottom" height={36} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
