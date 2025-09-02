"use client";

export default function CustomerCard({ logo, name, type, email }) {
  // Decide color based on type
  const typeColor =
    type?.toLowerCase() === "new"
      ? "text-green-600"
      : type?.toLowerCase() === "returning"
      ? "text-amber-900" // chocolate-like
      : "text-gray-600";

  return (
    <div
      className="w-2/3 h-72 bg-white rounded-2xl shadow-md flex flex-col items-center justify-center text-center p-4 bg-cover bg-center"
      style={{ backgroundImage: "url('/ins_pat.svg')" }}
    >
      <img
        src={logo}
        alt={name}
        className="w-24 h-24 mb-3 border-2 rounded-full"
      />
      <h3 className="font-semibold text-lg text-gray-800">{name}</h3>
      <p className={`text-sm font-medium ${typeColor}`}>{type}</p>
      <p className="text-sm text-gray-600">{email}</p>
    </div>
  );
}
