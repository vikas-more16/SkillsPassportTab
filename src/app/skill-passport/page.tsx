"use client";

import React from "react";
import Image from "next/image";
import { BadgeCheck, GraduationCap, CheckCircle2 } from "lucide-react";
import Logo from "@/assets/logo.png";
import RiveraImg from "@/assets/Alex Rivera.png";

export default function SkillsPassport() {
  const skills = [
    "Financial Accounting",
    "Cost Accounting",
    "Auditing Principle",
    "Corporate Finance Basics",
  ];

  const categories = [
    { title: "COGNITIVE", color: "bg-[#4EA9FF]" },
    { title: "Interpersonal", color: "bg-[#B17DFF]" },
    { title: "Self-Leadership", color: "bg-[#FFB656]" },
    { title: "Digital", color: "bg-[#22C55E]" },
  ];

  return (
    <div className="min-h-screen bg-[#E6E6E6] p-6">
      <div className="max-w-[750px] mx-auto bg-white rounded-[28px] shadow-sm overflow-hidden border border-[#E2E8F0] border-t-[6px] border-t-[#FF6652]">
        {/* HEADER */}
        <div className="flex justify-between items-start p-8">
          {/* LEFT */}
          <div className="flex items-center gap-4">
            {/* PROFILE IMAGE */}
            <div className="relative w-[72px] h-[72px] rounded-full overflow-hidden">
              <Image
                src={RiveraImg}
                alt="Alex Rivera"
                fill
                className="object-cover"
              />
            </div>

            {/* TEXT CONTENT */}
            <div>
              {/* NAME + VERIFIED */}
              <div className="flex items-center gap-3">
                <h2 className="text-[20px] font-semibold text-[#0F172A]">
                  Alex Rivera
                </h2>

                <span className="flex items-center gap-1 text-[11px] px-2 py-[2px] bg-[#E0ECFF] text-[#2563EB] rounded-full font-medium">
                  <BadgeCheck className="w-3 h-3" />
                  VERIFIED IDENTITY
                </span>
              </div>

              {/* SUBTEXT */}
              <p className="text-[13px] text-[#FF6652] mt-1">Skills Passport</p>
            </div>
          </div>

          {/* RIGHT LOGO */}
          <div className="flex items-center gap-2 justify-center mt-5">
            <Image src={Logo} alt="Logo" width={140} />
          </div>
        </div>

        {/* SOURCE + PASSPORT */}
        <div className="px-6 pb-4">
          <div className="flex justify-between items-center bg-[#F7F9FC]  rounded-[12px] p-4">
            {/* LEFT */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-[#FFFFFF] rounded-xl flex items-center justify-center border-2 border-[#F3F4F6]">
                <GraduationCap
                  strokeWidth={1}
                  className="w-8 h-8 text-[#FF6652]"
                />
              </div>

              <div>
                <p className="text-[10px] text-[#6B7280] tracking-wide">
                  SOURCE CREDENTIAL
                </p>
                <p className="text-[16px] text-[#212121]">
                  Bachelor of Commerce
                </p>
              </div>
            </div>

            {/* RIGHT */}
            <div className="text-center">
              <p className="text-[10px] text-[#94A3B8] font-semibold tracking-wide">
                PASSPORT ID
              </p>
              <p className="text-[14px] font-medium text-[#FF6652]">
                TRU-SP-10294
              </p>
            </div>
          </div>
        </div>
        <div className="mt-2 mb-7 mx-6 border-t border-[#F1F5F9]"></div>
        {/* SKILLS SECTION */}
        <div className="px-6 pb-6">
          <div className="flex items-center gap-2 mb-4">
            <CheckCircle2 className="w-6 h-6 text-[#FF6652]" />
            <h3 className="text-[22px] font-semibold text-[#0F172A]">Skills</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {categories.map((cat, idx) => (
              <div
                key={idx}
                className="border-2 border-[#E2E8F0] rounded-[14px] p-4 bg-white"
              >
                {/* CATEGORY TITLE */}
                <div className="flex items-center gap-2 mb-3">
                  <span className={`w-2 h-2 rounded-full ${cat.color}`} />
                  <p className="text-[13px] text-[#6B7280] tracking-widest">
                    {cat.title}
                  </p>
                </div>

                {/* SKILLS */}
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-1.5 bg-[#F7F9FC] px-3 py-1 rounded-full"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#FF6652]" />
                      <span className="text-[12px] text-[#0F172A]">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FOOTER */}
        <div className="bg-[#F7F9FC] text-center text-[14px] text-[#6B7280] py-6 px-4">
          This Skills Passport is generated using verified credentials and
          AI-based skill analysis.
        </div>
      </div>
    </div>
  );
}
