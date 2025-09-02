import React from "react";

const statusColors = {
  Approved: "bg-green-100 text-green-600",
  Processing: "bg-purple-100 text-purple-600",
  Rejected: "bg-red-100 text-red-600",
  "On Hold": "bg-orange-100 text-orange-600",
};

export default function AppealsTable({ data }) {
  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <table className="w-full text-sm text-left">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-3">ID</th>
            <th className="px-4 py-3">NAME</th>
            <th className="px-4 py-3">Total Amount</th>
            <th className="px-4 py-3">DATE</th>
            <th className="px-4 py-3">INSURANCE</th>
            <th className="px-4 py-3">STATUS</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.id} className="border-b hover:bg-gray-50 py-2">
              <td className="px-4 py-3">{row.id}</td>
              <td className="px-4 py-3">{row.name}</td>
              <td className="px-4 py-3">{row.amount}</td>
              <td className="px-4 py-3">{row.date}</td>
              <td className="px-4 py-3">{row.insurance}</td>
              <td className="px-4 py-3">
                <span
                  className={`px-2 py-1 rounded-full text-sm font-medium ${statusColors[row.status]}`}
                >
                  {row.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
