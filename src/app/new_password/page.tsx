"use client";

import { useState } from "react";
import { Lock,EyeOff,Eye } from "lucide-react";
import Stepper from "@/components/stepper";
import Image from "next/image";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // Define steps
  const steps = [
    { id: 1, label: "Email Verification" },
    { id: 2, label: "Verification Code" },
    { id: 3, label: "Set New Password" },
  ];

  // Example: we are on step 1
  const currentStep = 3;

  return (
    <div className="flex min-h-screen items-center justify-center bg-white">
      <div className="w-full max-w-7xl flex flex-col md:flex-row gap-12 p-6">
     
        {/* Sidebar (Stepper) */}
        <div className="flex flex-col items-center my-auto md:items-start md:w-1/3">

           
          <Stepper steps={steps} currentStep={currentStep} />
        </div>

        {/* Right Content */}
        <div className="flex-1 my-12">
            <div className="flex  my-12 justify-center">
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
          <div className="text-center mb-6">
           
            <p className="mt-2 text-[#4880ff] text-lg font-semibold">Setup New Password</p>
            <p className="text-sm text-gray-500 mt-1">
              Secure your account by creating a new password.
            </p>
          </div>

          {/* Form */}
          
          <form className="flex flex-col gap-4">
              <div className="relative">
                <label htmlFor="newPass" className="text-[#6B6B6B]"> New Password</label>
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

             <div className="relative">
                <label htmlFor="newPass" className="text-[#6B6B6B]">Confirm  New Password</label>
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
          
            <button
              type="submit"
              className="bg-[#4880FF] text-white py-3 rounded-lg hover:bg-blue-600 transition font-medium"
            >
              Set  Password
            </button>
          </form>

        </div>
      </div>
    </div>
  );
}
