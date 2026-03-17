"use client";

import React from "react";
import Lottie from "lottie-react";
import { ShieldCheck } from "lucide-react";
import scanningDocument from "@/lib/Scanning document.json";

export default function SkillAnalysis() {
  const steps = [
    "Credential metadata detected",
    "Mapping academic subjects to skill domains",
    "Identifying relevant domain and technical skills",
    "Generating skill taxonomy and classification",
    "Calculating skill confidence and proficiency levels",
  ];

  return (
    <div className="bg-[#FDFDFD] font-sans flex-1 h-[calc(100vh-100px)] flex flex-col justify-center items-center px-6 md:px-10 overflow-hidden">
      {/* CENTER AREA */}
      <div
        className="w-full h-[75vh] max-w-[1400px] bg-white rounded-[20px] 
             border border-[#E2E8F0] 
             p-8 md:p-10 lg:p-12 
             flex flex-col md:flex-row 
             items-center justify-between shadow-sm"
      >
        {/* LEFT: IMAGE */}
        <div className="flex-1 w-full">
          <Lottie animationData={scanningDocument} loop={true} />
        </div>

        {/* RIGHT: CONTENT */}
        <div className="flex-1 flex flex-col justify-center w-full">
          <h1 className="text-[30px] md:text-[36px] leading-tight font-semibold text-[#111827]">
            Skill Analysis
          </h1>

          <p className="mt-2 mb-6 text-[15px] md:text-base text-[#475569]">
            Analyzing your selected credential to identify relevant skills.
          </p>

          <ul className="space-y-4 md:space-y-5">
            {steps.map((step, index) => (
              <li key={index} className="flex items-start gap-4">
                <ShieldCheck
                  className="w-[20px] h-[20px] text-[#FF6652] flex-shrink-0 mt-[2px]"
                  strokeWidth={2.5}
                />
                <span className="text-[14px] md:text-[15px] font-normal text-[#212121]">
                  {step}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
