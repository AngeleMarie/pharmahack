// components/SalesTable.jsx
import React, { useState } from "react";
import { Eye, Pencil, Trash } from "lucide-react";

export default function ClaimsTable() {
  const rows = [
    {
      name: "Angele Marie",
      insurance: "Radison",
      date: "04 Sep 2019",
      amount: "$34,295",
      status: "Paid",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      name: "Angele Marie",
      insurance: "MMI",
      date: "04 Sep 2019",
      amount: "$42,323",
      status: "Pending",
      avatar: "https://randomuser.me/api/portraits/women/45.jpg",
    },
    {
      name: "Angele Marie",
      insurance: "Soras",
      date: "04 Sep 2019",
      amount: "$423,213",
      status: "Archived",
      avatar: "https://randomuser.me/api/portraits/women/46.jpg",
    },
  ];

  const [filter, setFilter] = useState("All");

  const statusStyles = {
    Paid: "bg-green-100 text-green-600",
    Pending: "bg-yellow-100 text-yellow-600",
    Archived: "bg-gray-200 text-gray-600",
  };

  // Apply filter
  const filteredRows =
    filter === "All" ? rows : rows.filter((row) => row.status === filter);

  return (
    <div className="bg-white p-5 rounded-2xl shadow-md mt-6">
      {/* Header Row */}
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-gray-800">Claims Details</h3>
        <div className="flex items-center gap-2">
          {/* Month Dropdown */}
          <select className="px-3 py-2 rounded-lg border border-gray-200 text-gray-600 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400">
            <option>October</option>
            <option>September</option>
            <option>August</option>
          </select>
          {/* Filter Dropdown */}
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="px-3 py-2 rounded-lg border border-gray-200 text-gray-600 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option>All</option>
            <option>Paid</option>
            <option>Pending</option>
            <option>Archived</option>
          </select>
          {/* Download Button */}
          <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg shadow-sm">
            Download
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-hidden rounded-xl border border-gray-100">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr
              className="text-gray-600 text-sm"
              style={{ backgroundColor: "#F1F4F9" }}
            >
              <th className="py-3 px-4">Customer Name</th>
              <th className="px-4">Insurance</th>
              <th className="px-4">Date</th>
              <th className="px-4">Amount</th>
              <th className="px-4">Status</th>
              <th className="px-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredRows.map((row, idx) => (
              <tr
                key={idx}
                className="border-t hover:bg-gray-50 text-gray-700"
              >
                <td className="py-3 px-4 flex items-center gap-3">
                  <img
                    src={row.avatar}
                    alt={row.name}
                    className="w-9 h-9 rounded-full object-cover"
                  />
                  {row.name}
                </td>
                <td className="px-4">{row.insurance}</td>
                <td className="px-4">{row.date}</td>
                <td className="px-4">{row.amount}</td>
                <td className="px-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${statusStyles[row.status]}`}
                  >
                    {row.status}
                  </span>
                </td>
                <td className="px-4">
                  <div className="flex gap-3">
                    <Eye className="w-5 h-5 text-blue-500 cursor-pointer hover:scale-110 transition" />
                    <Pencil className="w-5 h-5 text-yellow-500 cursor-pointer hover:scale-110 transition" />
                    <Trash className="w-5 h-5 text-red-500 cursor-pointer hover:scale-110 transition" />
                  </div>
                </td>
              </tr>
            ))}
            {filteredRows.length === 0 && (
              <tr>
                <td
                  colSpan="6"
                  className="py-4 text-center text-gray-500 italic"
                >
                  No records found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
