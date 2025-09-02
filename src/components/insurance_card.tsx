"use client";

export default function InsuranceCard({ logo, name, users, email }) {
  return (
    <div
      className="w-2/3 h-72 bg-white rounded-2xl shadow-md flex flex-col items-center justify-center text-center p-4 bg-cover bg-center"
      style={{ backgroundImage: "url('/ins_pat.svg')" }} // Make sure background.svg is inside /public
    >
      <img src={logo} alt={name} className="w-24 h-24 mb-3  border-2  rounded-full" />
      <h3 className="font-semibold text-lg text-gray-800">{name}</h3>
      <p className="text-sm text-[#00B69B]">{users} Users</p>
      <p className="text-sm text-gray-600">{email}</p>
    </div>
  );
}
