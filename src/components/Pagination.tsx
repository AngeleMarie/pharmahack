import React from "react";

export default function Pagination({ currentPage, totalPages, onPageChange }) {
  return (
    <div className="flex justify-between items-center p-4 text-sm text-gray-600">
      <span>
        Showing {(currentPage - 1) * 9 + 1}-
        {Math.min(currentPage * 9, totalPages * 9)} of {totalPages * 9}
      </span>
      <div className="flex gap-2">
        <button
          className="border px-2 py-1 rounded"
          disabled={currentPage === 1}
          onClick={() => onPageChange(currentPage - 1)}
        >
          {"<"}
        </button>
        <button
          className="border px-2 py-1 rounded"
          disabled={currentPage === totalPages}
          onClick={() => onPageChange(currentPage + 1)}
        >
          {">"}
        </button>
      </div>
    </div>
  );
}
