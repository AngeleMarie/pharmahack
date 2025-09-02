"use client";
import React,{useState} from "react";
import Sidebar from "@/components/pharm_sidebar";
import Topbar from "@/components/topbar";
import FilterBar from "@/components/FilterBar";
import AppealsTable from "@/components/AppealsTable";
import Pagination from "@/components/Pagination";

const appealsData = [
  { id: "00001", name: "Christine Brooks", amount: "50000 Frw", date: "04 Sep 2019", insurance: "Radison", status: "Approved" },
  { id: "00002", name: "Rosie Pearson", amount: "50000 Frw", date: "28 May 2019", insurance: "Mutuelle", status: "Processing" },
  { id: "00003", name: "Darrell Caldwell", amount: "50000 Frw", date: "23 Nov 2019", insurance: "RAMA", status: "Rejected" },
  { id: "00004", name: "Gilbert Johnston", amount: "50000 Frw", date: "05 Feb 2019", insurance: "Soras", status: "Approved" },
  { id: "00005", name: "Alan Cain", amount: "50000 Frw", date: "29 Jul 2019", insurance: "Soras", status: "Processing" },
  { id: "00006", name: "Alfred Murray", amount: "50000 Frw", date: "15 Aug 2019", insurance: "Radison", status: "Approved" },
  { id: "00007", name: "Maggie Sullivan", amount: "50000 Frw", date: "21 Dec 2019", insurance: "MMI", status: "Processing" },
  { id: "00008", name: "Rosie Todd", amount: "50000 Frw", date: "30 Apr 2019", insurance: "Radison", status: "On Hold" },
  { id: "00009", name: "Dollie Hines", amount: "50000 Frw", date: "09 Jan 2019", insurance: "Mutuelle", status: "On Hold" },
];

export default function AppealsPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(78 / 9); // demo purpose
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Topbar />
        <main className="p-6 overflow-y-auto">
        <div className="p-6  ">
      <h1 className="text-2xl font-semibold mb-6">Appeals</h1>
      <FilterBar />
      <AppealsTable data={appealsData} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
        </main>
      </div>
    </div>
  );
}
