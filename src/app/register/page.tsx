"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";

// Import Stepper
import Stepper from "@/components/Stepper";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [countryCode, setCountryCode] = useState("+250"); // Default Rwanda
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const steps = [
    { id: 1, label: "Account" },
    { id: 2, label: "Organisation" },
    { id: 3, label: "Confirmation" },
  ];
  const currentStep = 1;

  return (
    <div className="flex min-h-screen items-center justify-center bg-white">
      <div className="w-full max-w-4xl mx-6">
        {/* Stepper */}
        <div className="mb-8">
          <Stepper steps={steps} currentStep={currentStep} />
        </div>

        {/* Logo + Title */}
        <div className="text-center mb-6">
          <div className="flex justify-center mb-4">
            <Image src="/logo.svg" alt="Logo" width={40} height={40} className="mx-2 " />
            <h1 className="text-2xl text-[#202224] font-semibold">
              Pharma<span className="text-blue-500">Hack</span>
            </h1>
          </div>
          <p className="mt-2 text-[#111827] text-lg font-semibold">Create New Account</p>
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
          Sign up with Google
        </button>

        {/* Divider */}
        <div className="flex items-center my-4">
          <hr className="flex-grow border-gray-300" />
          <span className="px-2 text-gray-400 text-sm">OR</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        {/* Form */}
        <form className="flex flex-col gap-4 relative">
          {/* Email field */}
          <div className="relative">
            <label htmlFor="email" className="text-[#6B6B6B]"> Email </label>
            <Mail className="absolute left-3 top-2/3 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="organisation@gmail.com"
              className="border rounded-lg p-4 pl-10 my-2 text-sm focus:ring-2 focus:ring-blue-400 outline-none w-full"
            />
          </div>

          {/* Phone number with flag + country code */}
          <div className="relative">
            <label htmlFor="phone" className="text-[#6B6B6B]"> Phone Number </label>
            <div className="flex my-2">
              {/* Country Code Selector */}
              <div className="flex items-center gap-2 border rounded-l-lg px-3 bg-gray-50">
                <Image
                  src="https://flagcdn.com/w20/rw.png"
                  alt="Rwanda"
                  width={20}
                  height={15}
                  className="rounded-sm"
                />
                <select
                  value={countryCode}
                  onChange={(e) => setCountryCode(e.target.value)}
                  className="bg-transparent text-sm outline-none"
                >
                  <option value="+250">🇷🇼 +250</option>
                  <option value="+254">🇰🇪 +254</option>
                  <option value="+255">🇹🇿 +255</option>
                  <option value="+256">🇺🇬 +256</option>
                  <option value="+1">🇺🇸 +1</option>
                </select>
              </div>

              {/* Phone input */}
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="7XX XXX XXX"
                className="border rounded-r-lg p-4 text-sm focus:ring-2 focus:ring-blue-400 outline-none w-full"
              />
            </div>
          </div>

          {/* Password */}
          <div className="relative">
            <label htmlFor="password" className="text-[#6B6B6B]"> Password </label>
            <Lock className="absolute left-3 top-2/3 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Your password"
              className="border rounded-lg p-4 pl-10 pr-12 my-2 text-sm focus:ring-2 focus:ring-blue-400 outline-none w-full"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute top-2/3 right-3 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          {/* Confirm Password */}
          <div className="relative">
            <label htmlFor="confirmPassword" className="text-[#6B6B6B]"> Confirm Password </label>
            <Lock className="absolute left-3 top-2/3 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type={showPassword ? "text" : "password"}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm your password"
              className="border rounded-lg p-4 pl-10 pr-12 my-2 text-sm focus:ring-2 focus:ring-blue-400 outline-none w-full"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="bg-[#4880FF] text-white py-3 rounded-lg hover:bg-blue-600 transition font-medium"
          >
            Sign Up
          </button>
        </form>

        {/* Footer links */}
        <div className="mt-6 flex justify-between text-sm text-gray-500">
          <Link href="/" className="hover:underline">
            Back To Home
          </Link>
          <p>
            Already Have An Account?{" "}
            <a href="/login" className="text-blue-500 font-medium hover:underline">
              Log In →
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
