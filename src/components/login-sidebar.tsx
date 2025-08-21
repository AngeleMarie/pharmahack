"use client";

import React from "react";

interface Step {
  id: number;
  label: string;
}

interface StepperProps {
  steps: Step[];
  currentStep: number;
}

export default function Stepper({ steps, currentStep }: StepperProps) {
  return (
    
    
    <section className="w-full flex flex-col items-center lg:items-start">
      {/* Logo Section */}
    
      {/* Stepper Section */}
      <div className="w-full flex flex-col lg:flex-col md:flex-row items-center lg:items-start relative">
        {/* Line for vertical (desktop) */}
        <div className="hidden lg:block absolute left-4 top-0 bottom-0 border-l-2 border-gray-200"></div>

        {/* Line for horizontal (mobile) */}
        <div className="block lg:hidden absolute left-0 right-0 top-4 border-t-2 border-gray-200"></div>

        {/* Steps */}
        <div className="flex lg:flex-col md:flex-row gap-x-8 gap-y-24 relative z-10">
          {steps.map((step) => {
            const isActive = step.id === currentStep;
            return (
              <div key={step.id} className="flex items-center gap-3">
                <div
                  className={`w-8 h-8 flex items-center justify-center rounded-full font-semibold transition-all duration-300
                  ${
                    isActive
                      ? "bg-[#4880ff] text-white font-semibold shadow-[0_0_15px_5px_rgba(37,99,235,0.6)]"
                      : "bg-white font-normal border-2 border-gray-200 text-gray-600"
                  }`}
                >
                  {step.id}
                </div>
                {/* Hide labels on small screens, show on md+ */}
                <span
                  className={`hidden md:block text-sm font-medium ${
                    isActive ? "text-[#4880ff]" : "text-gray-500"
                  }`}
                >
                  {step.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
    
  );
}
