"use client";

import React, { useState } from "react";
import Image from "next/image";
import Logo from "@/assets/logo.png";
import RiveraImg from "@/assets/Alex Rivera.png";
import SourceIcon from "@/assets/GraduationCap.png";
import SkillBadgeIcon from "@/assets/SealCheck.png";
import SectionIcon from "@/assets/SealCheck (1).png";
import DiplomaIcon from "@/assets/diploma_icon.png";

export default function SkillsPassport() {
  const [showModal, setShowModal] = useState(false);

  const skills = [
    "Financial Accounting",
    "Auditing Principle",
    "Cost Accounting",
    "Corporate Finance Basics",
    "Auditing Principle",
  ];

  const categories = [
    { title: "Cognitive", color: "bg-[#4EA9FF]" },
    { title: "Interpersonal", color: "bg-[#B17DFF]" },
    { title: "Self-Leadership", color: "bg-[#FFB656]" },
    { title: "Digital", color: "bg-[#22C55E]" },
  ];

  const sourceCredentials = [
    { title: "Bachelor of Commerce", subtitle: "XYZ University" },
    { title: "Bachelor of Commerce", subtitle: "XYZ University" },
    { title: "Bachelor of Commerce", subtitle: "XYZ University" },
    { title: "Bachelor of Commerce", subtitle: "XYZ University" },
  ];

  return (
    <div className="min-h-screen bg-[#E6E6E6] p-6">
      <div className="mx-auto max-w-[760px] overflow-hidden rounded-[28px] border border-[#E2E8F0] border-t-[6px] border-t-[#FF6652] bg-white shadow-sm">
        {/* HEADER */}
        <div className="flex items-start justify-between px-8 pb-6 pt-6">
          <div className="flex items-center gap-4">
            <div className="relative h-[72px] w-[72px] overflow-hidden rounded-full">
              <Image src={RiveraImg} alt="Alex Rivera" fill className="object-cover" />
            </div>

            <div>
              <div className="flex items-center gap-3">
                <h2 className="text-[20px] font-semibold leading-none text-[#0F172A]">
                  Alex Rivera
                </h2>

                <span className="inline-flex items-center gap-1 rounded-[6px] bg-[#E0ECFF] px-2 py-[2px] text-[11px] font-medium text-[#2563EB]">
                  <span className="relative h-3 w-3">
                    <Image src={SkillBadgeIcon} alt="verified" fill className="object-contain" />
                  </span>
                  VERIFIED IDENTITY
                </span>
              </div>

              <p className="mt-2 text-[13px] text-[#64748B]">Skills Passport</p>
            </div>
          </div>

          <div className="mt-4 flex items-center justify-center">
            <Image src={Logo} alt="TruScholar" width={130} height={38} className="object-contain" />
          </div>
        </div>

        {/* SOURCE + PASSPORT */}
        <div className="px-6 pb-4">
          <div className="flex items-center justify-between rounded-[12px] bg-[#F7F9FC] p-4">
            <div className="flex items-center gap-3">
              <div className="flex h-14 w-14 items-center justify-center rounded-[12px] border-2 border-[#F3F4F6] bg-white">
                <div className="relative h-10 w-10">
                  <Image src={SourceIcon} alt="source credentials" fill className="object-contain" />
                </div>
              </div>

              <div>
                <p className="text-[10px] tracking-[0.28em] text-[#6B7280]">
                  SOURCE CREDENTIALS
                </p>
                <button
                  type="button"
                  onClick={() => setShowModal(true)}
                  className="text-[16px] text-[#FF6652] hover:opacity-90"
                >
                  View Credentials
                </button>
              </div>
            </div>

            <div className="text-right">
              <p className="text-[10px] font-semibold tracking-[0.22em] text-[#94A3B8]">
                PASSPORT ID
              </p>
              <p className="mt-1 text-[14px] font-medium text-[#2563EB]">
                TRU-SP-10294
              </p>
            </div>
          </div>
        </div>

        <div className="mx-6 my-4 border-t border-[#F1F5F9]" />

        {/* SKILLS SECTION */}
        <div className="px-6 pb-6">
          <div className="mb-4 flex items-center gap-2">
            <div className="relative h-5 w-5">
              <Image src={SectionIcon} alt="skills" fill className="object-contain" />
            </div>
            <h3 className="text-[22px] font-semibold text-[#0F172A]">Skills</h3>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {categories.map((cat, idx) => (
              <div key={idx} className="rounded-[14px] border border-[#E2E8F0] bg-white p-4">
                <div className="mb-3 flex items-center gap-2">
                  <span className={`h-2 w-2 rounded-full ${cat.color}`} />
                  <p className="text-[13px] tracking-[0.28em] text-[#6B7280]">
                    {cat.title}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2.5">
                  {skills.map((skill, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-1.5 rounded-full bg-[#F7F9FC] px-3 py-1.5"
                    >
                      <div className="relative h-3.5 w-3.5 shrink-0">
                        <Image
                          src={SkillBadgeIcon}
                          alt="verified skill"
                          fill
                          className="object-contain"
                        />
                      </div>
                      <span className="text-[12px] text-[#0F172A]">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FOOTER */}
        <div className="bg-[#F7F9FC] px-4 py-6 text-center text-[14px] text-[#6B7280]">
          This Skills Passport is generated using verified credentials and AI-based skill analysis.
        </div>
      </div>

      {/* MODAL */}
     {showModal && (
  <div
    className="fixed inset-0 z-50 flex items-center justify-center bg-black/35"
    onClick={() => setShowModal(false)}
  >
    <div
  className="relative w-[560px] max-w-[92vw] translate-x-[140px] rounded-[18px] border border-[#DCE7F5] bg-white px-5 py-5 shadow-[0_8px_30px_rgba(0,0,0,0.15)]"
  onClick={(e) => e.stopPropagation()}
>
      {/* Close */}
      <button
        type="button"
        onClick={() => setShowModal(false)}
        className="absolute right-4 top-3 text-[28px] text-[#7A7A7A] hover:text-[#555]"
      >
        ×
      </button>

      {/* Title */}
      <h2 className="text-center text-[22px] font-semibold text-[#1F284A]">
        Verified Source Credentials
      </h2>

      {/* List */}
      <div className="mt-5 space-y-5">
        {sourceCredentials.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between rounded-[14px] border border-[#DCE7F5] bg-white px-4 py-4"
          >
            <div className="flex items-center gap-4">
              <div className="flex h-[70px] w-[70px] items-center justify-center rounded-[10px] bg-[#F7F9FC]">
                <div className="relative h-[50px] w-[50px]">
                  <Image
                    src={DiplomaIcon}
                    alt="diploma"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              <div>
                <p className="text-[16px] font-semibold text-[#1F284A]">
                  {item.title}
                </p>
                <p className="mt-1 text-[14px] text-[#6B7A90]">
                  {item.subtitle}
                </p>
              </div>
            </div>

            <button className="flex items-center gap-2 text-[16px] font-medium text-[#FF6652]">
              Verify
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="17"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M14 5h5v5"
                  stroke="currentColor"
                  strokeWidth="1.8"
                />
                <path
                  d="M10 14L19 5"
                  stroke="currentColor"
                  strokeWidth="1.8"
                />
                <path
                  d="M19 13v4a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h4"
                  stroke="currentColor"
                  strokeWidth="1.8"
                />
              </svg>
            </button>
          </div>
        ))}
      </div>
    </div>
  </div>
)}
    </div>
  );
}