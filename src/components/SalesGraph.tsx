// components/SalesGraph.jsx
"use client";
import React, { useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const generateDailyData = (days) =>
  Array.from({ length: days }, (_, i) => ({
    day: i + 1,
    sales: Math.floor(Math.random() * 5000) + 1500,
  }));

const monthlyDataTemplate = [
  { month: "Jan", sales: 2000 },
  { month: "Feb", sales: 3000 },
  { month: "Mar", sales: 2500 },
  { month: "Apr", sales: 6400 },
  { month: "May", sales: 3200 },
  { month: "Jun", sales: 4000 },
  { month: "Jul", sales: 4200 },
  { month: "Aug", sales: 1800 },
  { month: "Sep", sales: 5000 },
  { month: "Oct", sales: 3900 },
  { month: "Nov", sales: 4100 },
  { month: "Dec", sales: 4300 },
];

const yearlyData = [
  { year: "2020", sales: 25000 },
  { year: "2021", sales: 31000 },
  { year: "2022", sales: 28000 },
  { year: "2023", sales: 35000 },
  { year: "2024", sales: 40000 },
];

const months = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];

export default function SalesGraph() {
  const [filter, setFilter] = useState("month");
  const [selectedYear, setSelectedYear] = useState("2024");
  const [selectedMonth, setSelectedMonth] = useState("Jan");

  // days per month (basic version, no leap year handling)
  const daysInMonth = {
    Jan: 31, Feb: 28, Mar: 31, Apr: 30, May: 31, Jun: 30,
    Jul: 31, Aug: 31, Sep: 30, Oct: 31, Nov: 30, Dec: 31,
  };

  let chartData = [];
  let dataKey = "";

  if (filter === "day") {
    chartData = generateDailyData(daysInMonth[selectedMonth]);
    dataKey = "day";
  } else if (filter === "month") {
    chartData = monthlyDataTemplate;
    dataKey = "month";
  } else {
    chartData = yearlyData;
    dataKey = "year";
  }

  return (
    <div className="bg-white p-5 rounded-2xl shadow-md mt-6">
      {/* Filters Row */}
      <div className="flex flex-wrap gap-3 justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-gray-800">Sales Details</h3>

        <div className="flex gap-2">
          {/* Filter Type */}
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="px-3 py-2 rounded-xl shadow-sm border border-gray-200 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="day">By Date</option>
            <option value="month">By Month</option>
            <option value="year">By Year</option>
          </select>

          {/* Year Selector (for month & day filter) */}
          {(filter === "month" || filter === "day") && (
            <select
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              className="px-3 py-2 rounded-xl shadow-sm border border-gray-200 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              {yearlyData.map((y) => (
                <option key={y.year} value={y.year}>
                  {y.year}
                </option>
              ))}
            </select>
          )}

          {/* Month Selector (only for day filter) */}
          {filter === "day" && (
            <select
              value={selectedMonth}
              onChange={(e) => setSelectedMonth(e.target.value)}
              className="px-3 py-2 rounded-xl shadow-sm border border-gray-200 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              {months.map((m) => (
                <option key={m} value={m}>
                  {m}
                </option>
              ))}
            </select>
          )}
        </div>
      </div>

      {/* Chart */}
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={chartData}>
          <defs>
            <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
          <XAxis dataKey={dataKey} tick={{ fill: "#6b7280" }} axisLine={false} tickLine={false} />
          <YAxis tick={{ fill: "#6b7280" }} axisLine={false} tickLine={false} />
          <Tooltip
            contentStyle={{
              borderRadius: "10px",
              border: "none",
              boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
            }}
          />
          <Area
            type="monotone"
            dataKey="sales"
            stroke="#3b82f6"
            fill="url(#colorSales)"
            strokeWidth={2}
            dot={{ stroke: "#3b82f6", strokeWidth: 2, r: 4 }}
            activeDot={{ r: 6 }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
