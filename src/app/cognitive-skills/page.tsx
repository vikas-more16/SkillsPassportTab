"use client";

import React, { useState } from "react";
import GoBackButton from "@/components/GoBackButton";

interface Skill {
  id: string;
  name: string;
  percentage: string;
  proficiency: "Beginner" | "Intermediate" | "Advance";
}

export default function CognitiveSkills() {
  const [skills] = useState<Skill[]>([
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
      proficiency: "Intermediate",
    },
    {
      id: "6",
      name: "Financial Accounting",
      percentage: "78%",
      proficiency: "Beginner",
    },
    {
      id: "7",
      name: "Financial Accounting",
      percentage: "78%",
      proficiency: "Advance",
    },
    {
      id: "8",
      name: "Financial Accounting",
      percentage: "78%",
      proficiency: "Intermediate",
    },
    {
      id: "9",
      name: "Financial Accounting",
      percentage: "78%",
      proficiency: "Beginner",
    },
    {
      id: "10",
      name: "Financial Accounting",
      percentage: "78%",
      proficiency: "Intermediate",
    },
    {
      id: "11",
      name: "Financial Accounting",
      percentage: "78%",
      proficiency: "Advance",
    },
    {
      id: "12",
      name: "Financial Accounting",
      percentage: "78%",
      proficiency: "Beginner",
    },
  ]);

  return (
    <div className="bg-[#FFFFFF] min-h-screen px-6 md:px-10 py-8 font-sans">
      <div className="max-w-[1400px]">
        <GoBackButton />

        <div className="mt-6 ml-4">
          {/* HEADER */}
          <h1 className="text-[28px] md:text-[32px] font-semibold text-[#111827]">
            Cognitive Skills
          </h1>
          <p className=" text-[15px] md:text-[16px] text-[#6B7280]">
            Skills related to thinking, problem solving, and understanding
            information.
          </p>

          {/* CARD CONTAINER */}
          <div className="mt-8 bg-white rounded-[20px] border border-[#E2E8F0] p-6 lg:p-8 h-[65vh]">
            {/* GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 xl:gap-6">
              {skills.map((skill) => (
                <div
                  key={skill.id}
                  className="bg-[#F7F9FC] p-5 rounded-[12px] flex flex-col justify-between min-h-[110px]"
                >
                  {/* TOP */}
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-[16px] font-medium text-[#111827] leading-tight pr-2">
                      {skill.name}
                    </span>
                    <span className="text-[13px] font-normal text-[#FF6652] px-2 py-0.5 rounded-xl bg-white">
                      {skill.percentage}
                    </span>
                  </div>

                  {/* PROFICIENCY */}
                  <div>
                    <p className="text-[11px] font-semibold text-[#94A3B8] mb-1 ">
                      PROFICIENCY
                    </p>
                    <span
                      className={`inline-block px-2 py-[2px] text-[11px] font-medium rounded ${
                        skill.proficiency === "Beginner"
                          ? "text-[#F59E0B] bg-[#FFF4E5]"
                          : skill.proficiency === "Intermediate"
                            ? "text-[#3B82F6] bg-[#E8F1FF]"
                            : "text-[#10B981] bg-[#E8F8EF]"
                      }`}
                    >
                      {skill.proficiency}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
