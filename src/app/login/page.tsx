"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex min-h-screen items-center justify-center bg-white">
      <div className="w-full max-w-4xl mx-6">
        {/* Logo + Title */}
        <div className="text-center mb-6">
          <div className="flex justify-center mb-4">
            <Image src="/logo.svg" alt="Logo" width={40} height={40} className="mx-2 " />
            <h1 className="text-2xl text-[#202224] font-semibold">
              Pharma<span className="text-blue-500">Hack</span>
            </h1>
          </div>
          <p className="mt-2 text-[#111827] text-lg font-semibold">Sign In</p>
        </div>

        {/* Google Sign In */}
        <button className="w-full flex items-center justify-center gap-2 border rounded-lg py-3 hover:bg-gray-100 transition mb-4">
          <Image
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="Google"
            height={20}
            width={20}
            className="w-5 h-5"
          />
          Sign in with Google
        </button>

        {/* Divider */}
        <div className="flex items-center my-4">
          <hr className="flex-grow border-gray-300" />
          <span className="px-2 text-gray-400 text-sm">OR</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        {/* Form */}
        <form className="flex flex-col gap-4 relative">
          {/* Email field with icon */}
          <div className="relative">
            <label htmlFor="email" className="text-[#6B6B6B]"> Email </label>
            <Mail className="absolute left-3 top-2/3 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Organisation@gmail.com"
              className="border rounded-lg p-4 pl-10 my-2 text-sm focus:ring-2 focus:ring-blue-400 outline-none w-full"
            />
          </div>

          {/* Password field with lock icon + eye toggle */}
          <div className="relative">
            <label htmlFor="email" className="text-[#6B6B6B]"> Password </label>

            <Lock className="absolute left-3 top-2/3 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Your password"
              className="border rounded-lg p-4 pl-10 pr-12 text-sm focus:ring-2 my-2 focus:ring-blue-400 outline-none w-full"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute top-2/3 right-3 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          <div className="flex items-center justify-between my-2 text-sm">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="w-4 h-4 text-blue-500" />
              Remember me
            </label>
            <a href="/forgot" className="text-blue-500 hover:underline">
              Forgot Password ?
            </a>
          </div>

          <button
            type="submit"
            className="bg-[#4880FF] text-white py-3 rounded-lg hover:bg-blue-600 transition font-medium"
          >
            Sign In
          </button>
        </form>

        {/* Footer links */}
        <div className="mt-6 flex justify-between text-sm text-gray-500">
          <Link href="/" className="hover:underline">
            Back To Home
          </Link>
          <p>
            No Account yet ?{" "}
            <a href="/register" className="text-blue-500 font-medium hover:underline">
              Sign Up →
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
