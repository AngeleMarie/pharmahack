"use client";
import React,{useState} from "react";
import Sidebar from "@/components/pharm_sidebar";
import Topbar from "@/components/topbar";
import Image from "next/image";
import { Edit, Trash2, Plus } from "lucide-react";

const initialData = [
  {
    id: 1,
    name: "Paracetamol",
    category: "Syrup",
    date: "May 23, 2024",
    price: 690,
    quantity: 63,
    status: "Expired",
    img: "/medicine.png",
  },
  {
    id: 2,
    name: "Amoxicillin",
    category: "Tablets",
    date: "May 23, 2024",
    price: 190,
    quantity: 13,
    status: "Expired",
    img: "/medicine.png",
  },
  {
    id: 3,
    name: "Ibuprofen",
    category: "Cream",
    date: "May 23, 2024",
    price: 640,
    quantity: 635,
    status: "Valid",
    img: "/medicine.png",
  },
  // add more items here
];


export default function MedicationStock() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState(initialData);

  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Topbar />
        <main className="p-6 overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
      <h2 className="text-2xl text-[#202224]/80 font-semibold px-6 py-4">Medication Stock</h2>
      
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Search medicine name"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 flex items-center gap-1">
            <Plus size={16} /> 
          </button>
        </div>
      </div>
         <div className="bg-white p-6 rounded-2xl shadow-md">
    

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              {["Image", "Medicine Name", "Category", "Manufactured Date", "Unit Price", "Quantity", "Status", "Action"].map((head) => (
                <th
                  key={head}
                  className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider"
                >
                  {head}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredData.map((item) => (
              <tr key={item.id}>
                <td className="px-4 py-3">
                  <Image
                    src={item.img}
                    alt={item.name}
                    width={50}
                    height={50}
                    className="rounded"
                  />
                </td>
                <td className="px-4 py-3">{item.name}</td>
                <td className="px-4 py-3">{item.category}</td>
                <td className="px-4 py-3">{item.date}</td>
                <td className="px-4 py-3">${item.price.toFixed(2)}</td>
                <td className="px-4 py-3">{item.quantity}</td>
                <td className="px-4 py-3">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-semibold ${
                      item.status === "Valid"
                        ? "bg-green-100 text-green-700"
                        : "bg-gray-200 text-gray-500"
                    }`}
                  >
                    {item.status}
                  </span>
                </td>
                <td className="px-4 py-3 flex gap-2">
                  <button className="text-blue-500 hover:text-blue-700">
                    <Edit size={18} />
                  </button>
                  <button className="text-red-500 hover:text-red-700">
                    <Trash2 size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination (simple example) */}
      <div className="flex justify-between items-center mt-4 text-gray-600">
        <span>
          Showing 1-{filteredData.length} of {data.length}
        </span>
        <div className="flex gap-2">
          <button className="px-3 py-1 border rounded hover:bg-gray-100">&lt;</button>
          <button className="px-3 py-1 border rounded hover:bg-gray-100">&gt;</button>
        </div>
      </div>
    </div>
        </main>
      </div>
    </div>
  );
}
