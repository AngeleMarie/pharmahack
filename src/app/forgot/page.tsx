"use client";

import { useState } from "react";
import { Mail } from "lucide-react";
import Stepper from "@/components/login-sidebar";
import Image from "next/image";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");

  // Define steps
  const steps = [
    { id: 1, label: "Email Verification" },
    { id: 2, label: "Verification Code" },
    { id: 3, label: "Set New Password" },
  ];

  // Example: we are on step 1
  const currentStep = 1;

  return (
    <div className="flex min-h-screen items-center justify-center bg-white">
      <div className="w-full max-w-7xl flex flex-col md:flex-row gap-12 p-6">
     
        {/* Sidebar (Stepper) */}
        <div className="flex flex-col items-center hidden md: md:items-start md:w-1/3">

       
          <Stepper steps={steps} currentStep={currentStep} />
        </div>

        {/* Right Content */}
        <div className="flex-1 my-12">
          
          <div className="text-center mb-6">
                 <div className="flex  my-6 justify-center">
        <Image
          src="/logo.svg"
          alt="Logo"
          width={40}
          height={40}
          className="mx-2"
        />
        <h1 className="text-2xl text-[#202224] font-semibold">
          Pharma<span className="text-[#4880ff]">Hack</span>
        </h1>
      </div> 
            <p className="mt-2 text-gray-600 font-medium">Forgot Password</p>
            <p className="text-sm text-gray-500 mt-1">
              Enter your email to receive a link to reset your password
            </p>
          </div>

          {/* Form */}
          
          <form className="flex flex-col gap-4">
            <label className="text-sm text-gray-700 font-medium">Email</label>
            <div className="relative">
              <Mail
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={20}
              />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Organisation@gmail.com"
                className="border rounded-lg p-4 pl-10 my-2 text-sm focus:ring-2 focus:ring-blue-400 outline-none w-full"
              />
            </div>
            <button
              type="submit"
              className="bg-[#4880FF] text-white py-2 rounded-lg hover:bg-blue-600 transition font-medium"
            >
              Send Code
            </button>
          </form>

          <div className="mt-4 text-right text-sm text-gray-500">
            Didn’t receive code?{" "}
            <a href="#" className="text-[#4880ff] hover:underline">
              Resend →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
