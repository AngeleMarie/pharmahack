import React from "react";
import { Filter, RotateCcw, Plus, FileText } from "lucide-react";

export default function FilterBar() {
  return (
    <div className="flex items-center justify-between mb-4">
      {/* Filters */}
      <div className="flex items-center gap-3">
        <button className="flex items-center gap-2 border px-3 py-2 rounded-lg">
          <Filter size={16} /> Filter By
        </button>
        <select className="border px-3 py-2 rounded-lg">
          <option>Date</option>
        </select>
        <select className="border px-3 py-2 rounded-lg">
          <option>Insurance</option>
        </select>
        <select className="border px-3 py-2 rounded-lg">
          <option>Status</option>
        </select>
        <button className="flex items-center gap-2 text-red-500">
          <RotateCcw size={16} /> Reset Filter
        </button>
      </div>

      {/* Action buttons */}
      <div className="flex gap-3">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center gap-2">
          <Plus size={16} /> New Appeal
        </button>
        <button className="bg-green-500 text-white px-4 py-2 rounded-lg flex items-center gap-2">
          <FileText size={16} /> Generate Report
        </button>
      </div>
    </div>
  );
}
