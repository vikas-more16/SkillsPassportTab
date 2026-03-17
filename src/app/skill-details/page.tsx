"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  FileText,
  Calendar,
  Eye,
  CheckCircle2,
  ArrowRightCircle,
} from "lucide-react";
import GoBackButton from "@/components/GoBackButton";

import DegreeCertificateImg from "@/assets/DegreeCertificate.png";
import DigilockerImg from "@/assets/digilocker.png";

type Skill = {
  id: string;
  name: string;
  percentage: string;
  proficiency: "Beginner" | "Intermediate" | "Advance";
};

export default function SkillDetails() {
  const [showSkillPreview, setShowSkillPreview] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);
  const [showPreview, setShowPreview] = useState(false);
  const commonSkills: Skill[] = [
    {
      id: "1",
      name: "Financial Accounting",
      percentage: "78%",
      proficiency: "Beginner",
    },
    {
      id: "2",
      name: "Financial Accounting",
      percentage: "78%",
      proficiency: "Intermediate",
    },
    {
      id: "3",
      name: "Financial Accounting",
      percentage: "78%",
      proficiency: "Advance",
    },
    {
      id: "4",
      name: "Financial Accounting",
      percentage: "78%",
      proficiency: "Intermediate",
    },
    {
      id: "5",
      name: "Financial Accounting",
      percentage: "78%",
      proficiency: "Advance",
    },
  ];

  const chartData = [
    { label: "Cognitive", score: "06", percent: 40 },
    { label: "Interpersonal", score: "03", percent: 20 },
    { label: "Self Leadership", score: "09", percent: 70 },
    { label: "Digital", score: "10", percent: 80 },
  ];

  return (
    <>
      <div className="bg-[#FFFFFF] min-h-screen px-6 md:px-10 py-8 font-sans">
        <div className="max-w-[1400px]">
          {/* HEADER SECTION */}
          <GoBackButton />
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 ml-4">
            <div>
              <h1 className="text-[28px] md:text-[32px] font-semibold text-[#111827] mt-5">
                Skill Details
              </h1>
              <p className="mt-1 text-[15px] md:text-[16px] text-[#475569]">
                Review the skills identified from your credential along with
                evidence and confidence levels.
              </p>
            </div>

            {/* DigiLocker Verified Badge */}

            <div>
              <Image
                src={DigilockerImg}
                alt="Digilocker"
                width={150}
                height={40}
                className="object-contain p-[3px] rounded-full"
              />
            </div>
          </div>

          {/* MAIN LAYOUT */}
          <div className="mt-8 flex flex-col xl:flex-row gap-6 lg:gap-8 overflow-hidden items-stretch">
            {/* LEFT COLUMN */}
            <div className="w-full xl:w-[480px] flex flex-col gap-6 lg:gap-8">
              {/* Degree Card */}
              <div className="bg-white rounded-[20px] border-2 border-[#E2E8F0] p-6 lg:p-7 flex flex-col sm:flex-row xl:flex-row gap-6 items-start h-auto xl:h-[220px]">
                <div className="w-[130px] h-[170px] bg-[#F7F9FC]  relative flex-shrink-0 overflow-hidden">
                  <Image
                    src={DegreeCertificateImg}
                    alt="Degree Certificate"
                    fill
                    className="object-cover p-1"
                  />
                </div>

                <div className="flex flex-col justify-between h-full py-1 w-full">
                  <div>
                    <h3 className="text-[17px] md:text-[19px] font-semibold text-[#111827] leading-tight">
                      Bachelor of Commerce
                    </h3>
                    <p className="text-[14px] text-[#64748B] mt-1 mb-4">
                      XYZ University
                    </p>

                    <div className="flex items-center gap-2.5 mb-6">
                      <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-[50px] bg-[#F7F9FC] ">
                        <FileText
                          className="w-3.5 h-3.5 text-[#64748B]"
                          strokeWidth={1}
                        />
                        <span className="text-[12px] text-[#64748B] tracking-wide">
                          Degree Certificate
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-[50px] bg-[#F7F9FC]">
                        <Calendar
                          className="w-3.5 h-3.5 text-[#64748B]"
                          strokeWidth={1}
                        />
                        <span className="text-[12px]  text-[#64748B] tracking-wide">
                          2026
                        </span>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => setShowPreview(true)}
                    className="flex items-center justify-center gap-2 w-max text-[#FF6652] bg-white border border-[#FF6652] hover:bg-[#FFF4F3] transition px-3 py-1 rounded-[8px] text-[17px] font-semibold"
                  >
                    <Eye className="w-[22px] h-[22px]" strokeWidth={1.5} />
                    Preview Degree
                  </button>
                </div>
              </div>

              {/* Competency Distribution Card */}
              <div className="bg-white rounded-[20px] border-2 border-[#E2E8F0] p-2 lg:px-4 lg:py-7 flex-1">
                <h3 className="text-[20px] md:text-[22px] font-semibold text-[#111827]">
                  Skill Competency Distribution
                </h3>
                <p className="text-[16    px] text-[#64748B] mt-1 mb-8 leading-relaxed">
                  Shows how your skills are distributed across key competency
                  areas.
                </p>

                <div className="relative w-full max-w-[550px] mt-6 mb-2">
                  {/* Chart Header (X-axis) */}
                  <div className="relative h-[24px] ml-[115px] text-[13px] font-medium text-[#64748B]">
                    {[0, 20, 40, 60, 80, 100].map((val) => (
                      <span
                        key={val}
                        className="absolute -translate-x-1/2 bottom-0"
                        style={{ left: `${val}%` }}
                      >
                        {val}
                      </span>
                    ))}
                  </div>

                  <div className="flex relative mt-2">
                    {/* Left labels */}
                    <div className="w-[115px] flex flex-col text-[#0F172A] text-[15.5px] font-medium z-10">
                      {chartData.map((d, i) => (
                        <div
                          key={i}
                          className="h-[56px] flex items-center pr-3"
                        >
                          {d.label}
                        </div>
                      ))}
                    </div>

                    {/* Right bars + grid */}
                    <div className="flex-1 relative flex flex-col border-t border-dashed border-[#CBD5E1]">
                      {/* Vertical Grid Lines precisely placed */}
                      <div className="absolute inset-0 z-0">
                        {[0, 20, 40, 60, 80, 100].map((val) => (
                          <div
                            key={val}
                            className="absolute top-0 bottom-0 w-px border-l border-dashed border-[#CBD5E1]"
                            style={{ left: `${val}%` }}
                          />
                        ))}
                      </div>

                      {/* Bar rows */}
                      {chartData.map((d, index) => (
                        <div
                          key={index}
                          className="h-[56px] border-b border-dashed border-[#CBD5E1] flex items-center w-full z-10 relative"
                        >
                          <div className="w-full h-[34px] bg-[#FCE4E0] relative flex items-center">
                            <div
                              className="h-full bg-[#FA796B] flex items-center justify-end px-3 text-[#0F172A] text-[14px] font-medium relative overflow-hidden"
                              style={{ width: `${d.percent}%` }}
                            >
                              <span className="relative z-20 pointer-events-none">
                                {d.score}
                              </span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Legend */}
                <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 mt-8 lg:mt-12">
                  {chartData.map((d, index) => (
                    <div key={index} className="flex items-center gap-1.5">
                      <div className="w-[6px] h-[6px] bg-[#FF6652]"></div>
                      <span className="text-[14px] font-base text-[#000000B2]">
                        {d.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN */}
            <div className="flex-1 bg-white rounded-[20px] border-2 border-[#E2E8F0] p-6 lg:p-8 flex flex-col gap-8">
              {/* Verified Section */}
              <div>
                <div className="flex items-baseline gap-2 mb-5 flex-wrap">
                  <h3 className="text-[18px] md:text-[20px] font-semibold text-[#0F172A]">
                    Verified
                  </h3>
                  <span className="text-[16px] text-[#64748B] font-base">
                    (Skills directly supported by credential evidence)
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {commonSkills.map((skill, index) => (
                    <div
                      key={index}
                      className="rounded-[12px] p-5 flex flex-col justify-between h-[115px] bg-[#F7F9FC]"
                      onClick={() => {
                        setSelectedSkill(skill);
                        setShowSkillPreview(true);
                      }}
                    >
                      <div className="flex justify-between items-start">
                        <span className="text-[17px] font-medium text-[#0F172A] leading-tight pr-2">
                          {skill.name}
                        </span>
                        <span className="text-[13px] font-normal text-[#FF6652] px-2 py-0.5 rounded-xl bg-white">
                          {skill.percentage}
                        </span>
                      </div>

                      <div className="flex justify-between items-end mt-2">
                        <div>
                          <p className="text-[12px] font-medium text-[#94A3B8] mb-1">
                            PROFICIENCY
                          </p>
                          <span
                            className={`inline-block px-2 py-[2px] text-[12px] font-medium rounded ${
                              skill.proficiency === "Beginner"
                                ? "text-[#F59E0B] bg-[#FFF4E5]"
                                : skill.proficiency === "Intermediate"
                                  ? "text-[#2563EB] bg-[#E8F1FF]"
                                  : "text-[#16A34A] bg-[#E8F8EF]"
                            }`}
                          >
                            {skill.proficiency}
                          </span>
                        </div>
                        <CheckCircle2
                          className="w-[20px] h-[20px] text-white fill-[#3B82F6]"
                          strokeWidth={2.5}
                        />
                      </div>
                    </div>
                  ))}

                  {/* View More Button */}
                  <div className="flex items-center justify-center h-[115px]">
                    <button className="flex items-center gap-2 text-[#FF6652] text-[18px] font-medium ">
                      View More
                      <ArrowRightCircle
                        className="w-[22px] h-[22px]]"
                        strokeWidth={2}
                      />
                    </button>
                  </div>
                </div>
              </div>

              <div className="h-[2px] w-full bg-[#E2E8F0]"></div>

              {/* Inferred Section */}
              <div>
                <div className="flex items-baseline gap-2 mb-5 flex-wrap">
                  <h3 className="text-[18px] md:text-[20px] font-semibold text-[0F172A]">
                    Inferred
                  </h3>
                  <span className="text-[16px] text-[#64748B] font-base">
                    (Skills derived from course or program context)
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {commonSkills.map((skill, index) => (
                    <div
                      key={index}
                      className="border border-[#E2E8F0] shadow-sm rounded-[12px] p-5 flex flex-col justify-between h-[115px] bg-[#FDFDFD]"
                      onClick={() => {
                        setSelectedSkill(skill);
                        setShowSkillPreview(true);
                      }}
                    >
                      <div className="flex justify-between items-start">
                        <span className="text-[17px] font-medium text-[#0F172A] leading-tight pr-2">
                          {skill.name}
                        </span>
                        <span className="text-[13px] font-normal text-[#FF6652] px-2 py-0.5 rounded-xl bg-[#FFF0F0]">
                          {skill.percentage}
                        </span>
                      </div>

                      <div className="mt-2">
                        <p className="text-[12px] font-medium text-[#94A3B8] mb-1">
                          PROFICIENCY
                        </p>
                        <span
                          className={`inline-block px-2 py-[2px] text-[12px] font-medium rounded ${
                            skill.proficiency === "Beginner"
                              ? "text-[#F59E0B] bg-[#FFF4E5]"
                              : skill.proficiency === "Intermediate"
                                ? "text-[#2563EB] bg-[#E8F1FF]"
                                : "text-[#16A34A] bg-[#E8F8EF]"
                          }`}
                        >
                          {skill.proficiency}
                        </span>
                      </div>
                    </div>
                  ))}

                  {/* View More Button */}
                  <div className="flex items-center justify-center h-[115px]">
                    <button className="flex items-center gap-2 text-[#FF6652] text-[18px] font-medium ">
                      View More
                      <ArrowRightCircle
                        className="w-[22px] h-[22px]]"
                        strokeWidth={2}
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showPreview && (
        <div className="fixed inset-0 z-50 flex justify-end">
          {/* BACKDROP */}
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setShowPreview(false)}
          />

          {/* DRAWER */}
          <div className="relative w-full max-w-[700px] h-full bg-white shadow-xl flex flex-col">
            {/* HEADER */}
            <div className="flex justify-between items-center px-6 pt-10 pb-4 bg-[#F7F8F9] border-b border-[#E2E8F0]">
              <h2 className="text-[20px] font-semibold text-[#111827]">
                Preview
              </h2>
              <button
                onClick={() => setShowPreview(false)}
                className="absolute top-5 right-5 text-[#666666] text-2xl"
              >
                ✕
              </button>
            </div>

            {/* CONTENT */}
            <div className="flex-1 overflow-auto bg-white p-6">
              <div className="bg-white border border-[#E2E8F0] rounded-[12px] p-6">
                {/* DEGREE INFO + PAGINATION */}
                <div className="flex justify-between items-start mb-5">
                  <div>
                    <h3 className="text-[16px] font-semibold text-[#0F172A]">
                      Bachelor of Commerce
                    </h3>
                    <p className="text-[14px] text-[#64748B] mt-1">
                      XYZ University
                    </p>
                  </div>

                  {/* PAGE SWITCH */}
                  <div className="flex items-center gap-2 bg-[#E5E5E5] px-3 py-1 rounded-md text-[14px] text-[#475569]">
                    <button className="hover:text-black">‹</button>
                    <span>1 / 2</span>
                    <button className="hover:text-black">›</button>
                  </div>
                </div>

                {/* IMAGE */}
                <div className="relative w-full h-[700px]">
                  <Image
                    src={DegreeCertificateImg}
                    alt="Preview"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {showSkillPreview && selectedSkill && (
        <div className="fixed inset-0 z-50 flex justify-end">
          {/* BACKDROP */}
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setShowSkillPreview(false)}
          />

          {/* DRAWER */}
          <div className="relative w-full max-w-[500px] h-full bg-white flex flex-col shadow-xl">
            {/* HEADER */}
            <div className="flex justify-between items-center px-6 pt-10 pb-4 bg-[#F7F8F9] border-b border-[#E2E8F0]">
              <h2 className="text-[20px] font-semibold text-[#111827]">
                Skill Details
              </h2>
              <button
                onClick={() => setShowSkillPreview(false)}
                className="absolute top-5 right-5 text-[#666666] text-2xl"
              >
                ✕
              </button>
            </div>

            {/* CONTENT Section */}
            <div className="flex flex-1 items-center justify-center overflow-auto bg-white">
              <div className="w-full max-w-[480px] bg-[#F7F9FC] rounded-[16px] mx-5 px-5 py-10">
                {/* ICON */}
                <div className="flex justify-center -mt-16 mb-3">
                  <div className="w-[68px] h-[68px] bg-[#FF6652] rounded-full flex items-center justify-center shadow-[0_10px_20px_rgba(255,102,82,0.25)]">
                    <CheckCircle2
                      className="w-8 h-8 text-white"
                      strokeWidth={2.5}
                    />
                  </div>
                </div>

                {/* TITLE */}
                <h3 className="text-[24px] font-medium text-[#0F172A] text-center">
                  {selectedSkill.name}
                </h3>

                {/* VERIFIED BADGE */}
                <div className="flex justify-center mt-2">
                  <span className="px-3 py-1 text-[11px] font-semibold tracking-wide text-[#16A34A] bg-[#DCFCE7] rounded-full">
                    VERIFIED
                  </span>
                </div>

                <div className="h-px w-full bg-[#E2E8F0] my-4" />

                {/* SOURCE */}
                <div className="mb-5">
                  <p className="text-[12px] font-medium text-[#94A3B8] mb-2 tracking-wide">
                    SOURCE CREDENTIAL
                  </p>
                  <div className="flex items-center gap-3 bg-white px-4 py-3.5 rounded-[10px] border border-[#E2E8F0]">
                    <FileText className="w-4 h-4 text-[#FF6652]" />
                    <span className="text-[14px] text-[#0F172A] font-medium">
                      Bachelor of Commerce
                    </span>
                  </div>
                </div>

                {/* CONFIDENCE */}
                <div className="mb-5">
                  <p className="text-[12px] font-medium text-[#94A3B8] mb-2 tracking-wide">
                    CONFIDENCE SCORE
                  </p>

                  <div className="flex items-center gap-3">
                    <div className="flex-1 h-[6px] bg-[#FFFFFF] rounded-full overflow-hidden">
                      <div
                        className="h-full bg-[#3B82F6] rounded-full"
                        style={{ width: selectedSkill.percentage }}
                      />
                    </div>
                    <span className="text-[13px] font-semibold text-[#0F172A]">
                      {selectedSkill.percentage}
                    </span>
                  </div>
                </div>

                {/* PROFICIENCY */}
                <div className="bg-[#E7ECF3] rounded-[12px] p-4 mb-6 border border-[#E2E8F0]">
                  <p className="text-[12px] font-medium text-[#64748B] mb-1 tracking-wide">
                    PROFICIENCY
                  </p>

                  <span
                    className={`text-[14px] font-medium ${
                      selectedSkill.proficiency === "Beginner"
                        ? "text-[#F59E0B]"
                        : selectedSkill.proficiency === "Intermediate"
                          ? "text-[#2563EB]"
                          : "text-[#16A34A]"
                    }`}
                  >
                    {selectedSkill.proficiency}
                  </span>

                  <p className="text-[12px] text-[#64748B] mt-2 leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc massa tortor, commodo eu erat.
                  </p>
                </div>

                {/* BUTTON */}
                <button className="w-full bg-[#FF6652] hover:bg-[#ff5540] transition text-white py-3 rounded-[10px] text-[18px] font-medium">
                  Add To Skills Passport
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
