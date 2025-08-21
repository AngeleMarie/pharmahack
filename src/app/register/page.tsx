"use client";

export default function Register() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="w-full max-w-md bg-white p-6 rounded-xl shadow-md">
        <h1 className="text-2xl font-bold mb-4 text-center">Sign In</h1>
        {/* Your login form here */}
        <form className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email"
            className="border rounded-lg p-2"
          />
          <input
            type="password"
            placeholder="Password"
            className="border rounded-lg p-2"
          />
          <button
            type="submit"
            className="bg-[#4880FF] text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
