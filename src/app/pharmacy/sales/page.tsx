"use client";
import React,{useState} from "react";
import Sidebar from "@/components/pharm_sidebar";
import Topbar from "@/components/topbar";
import MedicineCard from "@/components/MedicineCard";
import Overview from "@/components/Overview";
import CategoryBar from "@/components/CategoryBar";

const initialMedicines = [
  { id: 1, name: "Strepsils", category: "Tablets", price: 120, stock: 6, image: "https://cdn-icons-png.flaticon.com/512/2965/2965567.png" },
  { id: 2, name: "Ketas", category: "Syrup", price: 40, stock: 10, image: "https://cdn-icons-png.flaticon.com/512/2965/2965567.png" },
  { id: 3, name: "Ketapor", category: "Cream", price: 40, stock: 8, image: "https://cdn-icons-png.flaticon.com/512/2965/2965567.png" },
  { id: 4, name: "Paracetamol", category: "Tablets", price: 60, stock: 15, image: "https://cdn-icons-png.flaticon.com/512/2965/2965567.png" },
];

const categories = ["All", "Tablets", "Syrup", "Cream", "Ointment", "Liquid"];

export default function SalesPage() {
  const [medicines, setMedicines] = useState(initialMedicines);
  const [cart, setCart] = useState([]);
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [customer, setCustomer] = useState("Walking Customer");

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  const handleAddMedicine = (medicine) => {
    if (medicine.stock <= 0) return;

    // Add to cart
    setCart([...cart, medicine]);

    // Decrease stock
    setMedicines((prev) =>
      prev.map((m) =>
        m.id === medicine.id ? { ...m, stock: m.stock - 1 } : m
      )
    );
  };

  const filteredMedicines = medicines.filter((m) => {
    const matchesCategory = activeCategory === "All" || m.category === activeCategory;
    const matchesSearch = m.name.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Topbar />
        <main className="p-6 overflow-y-auto">
         <div className="p-6 bg-gray-50 min-h-screen flex gap-6">
      {/* Medicines Section */}
      <div className="flex-1">
        <h1 className="text-2xl font-semibold mb-4">Sales</h1>
        
        <CategoryBar
          categories={categories}
          active={activeCategory}
          setActive={setActiveCategory}
        />

        <div className="flex gap-3 mb-4">
          <input
            type="text"
            placeholder="Search Medicine"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 border px-3 py-2 rounded-lg"
          />
          <input
            type="text"
            value={customer}
            onChange={(e) => setCustomer(e.target.value)}
            className="w-1/3 border px-3 py-2 rounded-lg"
          />
        </div>

        <div className="grid grid-cols-3 gap-4">
          {filteredMedicines.map((med) => (
            <MedicineCard
              key={med.id}
              medicine={med}
              onAdd={handleAddMedicine}
            />
          ))}
        </div>
      </div>

      {/* Overview Section */}
      <div className="w-1/3">
        <Overview cart={cart} total={total} />
      </div>
    </div>
        </main>
      </div>
    </div>
  );
}
