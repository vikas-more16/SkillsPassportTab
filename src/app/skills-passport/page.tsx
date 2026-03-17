"use client";

import React from "react";
import Image from "next/image";
import {
  BadgeCheck,
  Lightbulb,
  ShieldCheck,
  List,
  Check,
  FileText,
  Calendar,
} from "lucide-react";

import RiveraImg from "@/assets/Alex Rivera.png";
import CertificateImg from "@/assets/Certificate.png";
import DigilockerImg from "@/assets/digilocker.png";

export default function SkillsPassport() {
  const skillItems = [
    "Financial Accounting",
    "Cost Accounting",
    "Auditing Principle",
    "Financial Planing",
    "Corporate Finance Basics",
    "Cost Accounting",
    "Financial Planing",
    "Auditing Principle",
    "Corporate Finance Basics",
  ];

  const skillSections = [
    { title: "Cognitive Skills" },
    { title: "Interpersonal Skills" },
    { title: "Self-Leadership Skills" },
    { title: "Digital Skills" },
  ];

  return (
    <div className="bg-[#FFFFFF] min-h-screen px-6 md:px-10 py-8 font-sans">
      <div className="max-w-[1400px]">
        {/* HEADER */}
        <div>
          <h1 className="text-[28px] md:text-[32px] font-semibold text-[#111827]">
            Skills Passport
          </h1>
          <p className="mt-2 text-[15px] md:text-[16px] text-[#475569]">
            Create a verified skill passport from your credentials to showcase
            your abilities to employers.
          </p>
        </div>

        {/* PROFILE CARD */}
        <div className="mt-8 bg-[#FFF5F3] rounded-[20px] p-6 lg:p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="flex items-center gap-5">
            <div className="relative w-20 h-20  rounded-full overflow-hidden bg-white">
              <Image
                src={RiveraImg}
                alt="Alex Rivera"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <div className="flex items-center gap-3 mb-1.5 flex-wrap">
                <h2 className="text-[22px] md:text-[24px] font-bold text-[#0F172A] leading-tight">
                  Alex Rivera
                </h2>
                <div className="flex items-center gap-1 bg-[#E8F1FF] px-3 rounded-[6px] ">
                  <BadgeCheck
                    className="w-3.5 h-3.5 text-[#2563EB]"
                    strokeWidth={2.5}
                  />
                  <span className="text-[10px] font-bold text-[#2563EB] tracking-wide  mt-1">
                    VERIFIED IDENTITY
                  </span>
                </div>
              </div>
              <p className="text-[17px] text-[#64748B]">
                Bachelor of Commerce Graduate • Aspiring Data Analyst
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4 w-full md:w-auto">
            <button className="flex-1 md:flex-none text-[#FF6652] bg-white  hover:border-[#FF6652] transition font-semibold text-[16px] px-5 py-2 rounded-lg shadow-sm whitespace-nowrap">
              Share Skills Passport
            </button>
            <button className="flex-1 md:flex-none text-white bg-[#FF6652] hover:bg-[#E85C4A] transition font-semibold text-[16px] px-5 py-2 rounded-lg shadow-sm whitespace-nowrap">
              Analyze Another Credential
            </button>
          </div>
        </div>

        {/* MAIN TWO-COLUMN LAYOUT */}
        <div className="mt-8 flex flex-col xl:flex-row gap-6 lg:gap-8 overflow-hidden">
          {/* LEFT CONTENT COLUMN */}
          <div className="flex-1 flex flex-col gap-6 lg:gap-8">
            {/* SKILL COMPETENCY OVERVIEW */}
            <div className="bg-white rounded-[20px] border border-[#E2E8F0] p-6 lg:p-8">
              <div className="flex items-center gap-3 mb-6">
                <Lightbulb
                  className="text-[#FF6652] w-[25px] h-[25px]"
                  strokeWidth={2.5}
                />
                <h3 className="text-[20px] font-semibold text-[#0F172A]">
                  Skill Competency Overview
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
                {skillSections.map((section, idx) => (
                  <div
                    key={idx}
                    className="bg-[#F8F9FB] rounded-[16px] p-5 lg:p-6 border border-[#F1F5F9]"
                  >
                    <div className="flex items-center justify-between mb-5">
                      <span className="text-[16px] font-semibold text-[#0F172A]">
                        {section.title}
                      </span>
                      <button className="text-[#FF6652] text-[14px] font-semibold hover:underline">
                        View All
                      </button>
                    </div>

                    <div className="flex flex-wrap gap-x-3 gap-y-1.5">
                      {skillItems.map((skill, index) => (
                        <div
                          key={index}
                          className="flex items-start gap-2.5 bg-white p-2 rounded-full"
                        >
                          <div className="mt-[2px] w-[14px] h-[14px] flex-shrink-0 bg-[#FF6652] rounded-full flex items-center justify-center">
                            <Check
                              className="w-[10px] h-[10px] text-white"
                              strokeWidth={3.5}
                            />
                          </div>
                          <span className="text-[13px] font-medium text-[#0F172A] leading-tight">
                            {skill}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* VERIFIED CREDENTIALS */}
            <div className="bg-white rounded-[20px] border border-[#E2E8F0] p-6 lg:p-8">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <BadgeCheck
                    className="text-[#FF6652] w-[25px] h-[25px]"
                    strokeWidth={2}
                  />
                  <h3 className="text-[20px] font-semibold text-[#0F172A]">
                    Verified Credentials
                  </h3>
                </div>
                <button className="text-[#FF6652] text-[14px] font-semibold hover:underline border-none bg-transparent">
                  View All
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
                {[1, 2, 3, 4].map((item) => (
                  <div
                    key={item}
                    className="bg-[#F8F9FB] rounded-[16px] p-5 lg:p-6 border border-[#F1F5F9] flex flex-col"
                  >
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex gap-3 items-start">
                        {/* ICON BOX */}
                        <div className="flex-shrink-0 p-2 bg-[white] rounded-lg flex items-center justify-center">
                          <Image
                            src={CertificateImg}
                            alt="Certificate"
                            width={32}
                            height={32}
                            className="object-contain"
                          />
                        </div>

                        {/* TEXT */}
                        <div>
                          <h4 className="text-[15.5px] font-semibold text-[#0F172A] leading-tight mb-0.5">
                            Bachelor of Commerce
                          </h4>
                          <p className="text-[13.5px] text-[#64748B] mt-1.5">
                            XYZ University
                          </p>
                        </div>
                      </div>

                      {/* RIGHT IMAGE */}
                      <div className="relative w-[80px] h-[40px] flex-shrink-0">
                        <Image
                          src={DigilockerImg}
                          alt="Digilocker"
                          fill
                          className="object-contain object-right"
                        />
                      </div>
                    </div>

                    <div className="flex items-center gap-2.5 mb-6">
                      <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-[50px] bg-[#E3EBF6] ">
                        <FileText
                          className="w-3.5 h-3.5 text-[#64748B]"
                          strokeWidth={2}
                        />
                        <span className="text-[11px] font-semibold text-[#64748B] tracking-wide">
                          Degree Certificate
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-[50px] bg-[#E3EBF6]">
                        <Calendar
                          className="w-3.5 h-3.5 text-[#64748B]"
                          strokeWidth={2}
                        />
                        <span className="text-[11px] font-semibold text-[#64748B] tracking-wide">
                          2026
                        </span>
                      </div>
                    </div>

                    <button className="w-full text-[#FF6652] bg-white border border-[#FFE0DC] font-medium text-[14px] py-2.5 rounded-lg mt-auto">
                      View Details
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMNS (SIDEBAR/TRUST INDEX) */}
          <div className="w-full xl:w-[350px] flex flex-col gap-6 lg:gap-8">
            {/* TRUST INDEX */}
            <div className="bg-[#0F172A] rounded-[20px] p-7 shadow-sm">
              <p className="text-[#94A3B8] text-[14px] font-semibold tracking-[0.15em] uppercase mb-1">
                TRUST INDEX
              </p>
              <div className="flex items-baseline gap-1.5 mb-5 mt-4">
                <span className="text-[52px] font-bold text-white leading-none">
                  9.8
                </span>
                <span className="text-[15px] font-medium text-[#94A3B8]">
                  / 10
                </span>
              </div>

              {/* TIMELINE */}
              <div className="relative flex flex-col gap-8 ml-1 pl-[50px] mt-8">
                {/* Pill-shaped Timeline Background with Dashed Line */}
                <div className="absolute left-[2px] top-[-8px] bottom-[-8px] w-[30px] rounded-full bg-gradient-to-b from-[#b3c7d6] via-[#4d5e72] to-[#1a2536] flex flex-col items-center py-4 my-2">
                  <div className="w-[2px] flex-1 border-l-[2px] border-dashed border-white/60 my-2"></div>
                </div>

                {/* Node 1 */}
                <div className="relative flex items-center min-h-[28px]">
                  <div className="absolute left-[-42.5px] top-1/2 -translate-y-1/2 w-[18px] h-[18px] rounded-full bg-[#16A34A] flex items-center justify-center ring-[2px] ring-white z-10 box-border">
                    <Check
                      className="w-[10px] h-[10px] text-white"
                      strokeWidth={4}
                    />
                  </div>
                  <span className="text-[#16A34A] text-[14.5px]">
                    Identity Verified
                  </span>
                </div>

                {/* Node 2 */}
                <div className="relative flex items-center min-h-[28px]">
                  <div className="absolute left-[-42.5px] top-1/2 -translate-y-1/2 w-[18px] h-[18px] rounded-full bg-[#16A34A] flex items-center justify-center ring-[2px] ring-white z-10 box-border">
                    <Check
                      className="w-[12px] h-[12px] text-white"
                      strokeWidth={4}
                    />
                  </div>
                  <span className="text-[#16A34A]  text-[14.5px]">
                    Education Verified
                  </span>
                </div>

                {/* Node 3 */}
                <div className="relative flex items-center min-h-[28px]">
                  <div className="absolute left-[-44.5px] top-1/2 -translate-y-1/2 w-[23.5px] h-[23.5px] rounded-full bg-white flex flex-col items-center justify-center ring-[2.5px] ring-transparent z-10"></div>
                  <span className="text-white  text-[14.5px]">
                    Employment Verification Pending
                  </span>
                </div>
              </div>
            </div>

            {/* ROLE MATCHING */}
            <div className="bg-white rounded-[20px] border border-[#E2E8F0] shadow-sm overflow-hidden">
              {/* HEADER STRIP */}
              <div className="flex items-center gap-3 px-6 py-4 bg-[#FDECEC]">
                <List
                  className="text-[#FF6652] w-[20px] h-[20px]"
                  strokeWidth={2.5}
                />
                <h3 className="text-[20px] font-bold text-[#111827]">
                  Role Matching
                </h3>
              </div>

              <div className="p-5">
                <div className="flex flex-col gap-4 mb-5">
                  {[1, 2, 3, 4].map((item) => (
                    <div
                      key={item}
                      className="bg-[#F8FAFC] rounded-[12px] px-6 py-4"
                    >
                      <div className="flex justify-between items-start gap-2 mb-1.5">
                        <h4 className="text-[16px] font-bold text-[#0F172A] leading-snug">
                          Junior Financial
                          <br />
                          Analyst
                        </h4>
                        <div className="bg-[#DFFFEB] px-2.5 py-1.5 rounded-[10px] flex items-center mt-0.5">
                          <span className="text-[12px] font-semibold text-[#15803D] tracking-wide">
                            92% MATCH
                          </span>
                        </div>
                      </div>
                      <p className="text-[14px] font-small text-[#64748B] mt-4">
                        Based on B.Com & ICAI Certifications
                      </p>
                    </div>
                  ))}
                </div>

                <button className="w-full border-2 border-dashed border-[#EC5B1366] text-[#EC5B13] bg-white font-bold text-[14px] tracking-wide py-3 rounded-lg hover:bg-[#FFF4F3] transition">
                  FIND MATCHING JOBS
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
