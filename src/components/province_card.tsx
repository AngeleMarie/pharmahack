"use client";

import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const data = [
  { name: "Kigali", value: 35 },
  { name: "East", value: 23 },
  { name: "South", value: 15 },
  { name: "West", value: 20 },
  { name: "North", value: 7 },
];

const COLORS = ["#3B82F6", "#22C55E", "#FACC15", "#EF4444", "#06B6D4"];

export default function PharmaciesChart() {
  return (
    <section className="bg-white shadow rounded-2xl p-6 w-full max-w-md mx-auto">
      <h2 className="text-xl flex-start font-bold mb-4">Pharmacies</h2>
    <div className="flex  flex-col items-center">
      <PieChart width={400} height={300}>
        {/* Define drop shadow filter */}
        <defs>
          <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="2" dy="4" stdDeviation="4" floodColor="rgba(0,0,0,0.3)" />
          </filter>
        </defs>

        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={50}
          outerRadius={100}
          dataKey="value"
          paddingAngle={2}
        >
          {data.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={COLORS[index % COLORS.length]}
              filter="url(#shadow)" // apply shadow here
            />
          ))}
        </Pie>
        <Tooltip formatter={(value, name) => [`${value}`, name]} />
        <Legend />
      </PieChart>
    </div>
    </section>

  );
}
