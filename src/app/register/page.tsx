"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

// Import Stepper
import Stepper from "@/components/stepper";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const steps = [
    { id: 1, label: "Register Account" },
    { id: 2, label: "Email Verification" },
    { id: 3, label: "Organisation Information" },
    { id: 4, label: "Admin Information" },
  ];
  const currentStep = 1;

  return (
    <div className="flex min-h-screen items-center justify-center bg-white">
      <div className="w-full max-w-7xl mx-12 flex flex-col md:flex-row gap-16">
        
        {/* Left column: Logo + Stepper (1/3) */}
        <div className="flex flex-col flex-1 md:flex-[1]">
          <div className="flex items-center mb-16">
            <Image src="/logo.svg" alt="Logo" width={40} height={40} className="mx-2" />
            <h1 className="text-2xl text-[#202224] font-semibold">
              Pharma<span className="text-blue-500">Hack</span>
            </h1>
          </div>

          <Stepper steps={steps} currentStep={currentStep} />
        </div>
        

        {/* Right column: Form (2/3) */}
        <div className="flex-[2]">
          <p className="mt-2 text-[#111827] text-lg text-center my-8 font-semibold">Create New Account</p>

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
              <Mail className="absolute left-3 top-[3.1rem] text-gray-400" size={20} />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="organisation@gmail.com"
                className="border rounded-lg p-4 pl-10 my-2 text-sm focus:ring-2 focus:ring-blue-400 outline-none w-full"
              />
            </div>

            {/* Phone number */}
            <div className="relative">
              <label htmlFor="phone" className="text-[#6B6B6B]"> Phone Number </label>
              <PhoneInput
                country={"rw"} // default Rwanda
                value={phone}
                onChange={(value) => setPhone(value)}
                inputClass="!w-full !h-12 !pl-12 !text-sm !border !rounded-lg focus:!ring-2 focus:!ring-blue-400"
                buttonClass="!rounded-l-lg !border-r bg-gray-50"
                containerClass="my-2"
                dropdownClass="!z-50"
              />
            </div>

            {/* Password */}
            <div className="relative">
              <label htmlFor="password" className="text-[#6B6B6B]"> Password </label>
              <Lock className="absolute left-3 top-[3.1rem] text-gray-400" size={20} />
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
                className="absolute top-[3.1rem] right-3 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            {/* Confirm Password */}
    <div className="relative">
              <label htmlFor="password" className="text-[#6B6B6B]">Confirm New Password </label>
              <Lock className="absolute left-3 top-[3.1rem] text-gray-400" size={20} />
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
                className="absolute top-[3.1rem] right-3 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
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
    </div>
  );
}
