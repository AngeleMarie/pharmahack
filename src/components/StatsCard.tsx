import React from "react";
import { colorMap } from "@/utils/colorMap";

export default function StatsCard({ title, value, icon, trend, trendText, color }) {
  return (
    <div className="flex-1 bg-white h-40  p-5 rounded-xl shadow-sm flex items-center gap-24">
      <div>
        <h4 className="text-gray-500 text-sm">{title}</h4>
        <p className="text-xl font-semibold">{value}</p>
        <p
          className={`text-sm ${
            trend > 0 ? "text-green-500" : trend < 0 ? "text-red-500" : "text-gray-500"
          }`}
        >
          {trendText}
        </p>
      </div>

      <div
        className={`w-16 h-16 flex items-center justify-center rounded-full ${color}`}
        style={{
          boxShadow: `0 0 12px 2px ${colorMap[color] || "#000"}`,
        }}
      >
        <span className="text-xl">{icon}</span>
      </div>
    </div>
  );
}
