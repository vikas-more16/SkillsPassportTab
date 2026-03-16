"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Check, Maximize } from "lucide-react";
import BlankImage from "@/assets/BlankImage.png";

interface Skill {
  id: string;
  name: string;
  percentage: string;
  proficiency: "Beginner" | "Intermediate" | "Advance";
  selected: boolean;
}

interface Category {
  title: string;
  skills: Skill[];
}

export default function ShareSkillsPassport() {
  const [categories, setCategories] = useState<Category[]>([
    {
      title: "Cognitive Skills",
      skills: [
        {
          id: "c1",
          name: "Financial Accounting",
          percentage: "78%",
          proficiency: "Beginner",
          selected: true,
        },
        {
          id: "c2",
          name: "Financial Accounting",
          percentage: "78%",
          proficiency: "Intermediate",
          selected: true,
        },
        {
          id: "c3",
          name: "Financial Accounting",
          percentage: "78%",
          proficiency: "Advance",
          selected: false,
        },
        {
          id: "c4",
          name: "Financial Accounting",
          percentage: "78%",
          proficiency: "Beginner",
          selected: true,
        },
        {
          id: "c5",
          name: "Financial Accounting",
          percentage: "78%",
          proficiency: "Intermediate",
          selected: false,
        },
        {
          id: "c6",
          name: "Financial Accounting",
          percentage: "78%",
          proficiency: "Advance",
          selected: false,
        },
      ],
    },
    {
      title: "Interpersonal Skills",
      skills: [
        {
          id: "i1",
          name: "Financial Accounting",
          percentage: "78%",
          proficiency: "Beginner",
          selected: true,
        },
        {
          id: "i2",
          name: "Financial Accounting",
          percentage: "78%",
          proficiency: "Advance",
          selected: false,
        },
        {
          id: "i3",
          name: "Financial Accounting",
          percentage: "78%",
          proficiency: "Intermediate",
          selected: true,
        },
        {
          id: "i4",
          name: "Financial Accounting",
          percentage: "78%",
          proficiency: "Intermediate",
          selected: false,
        },
        {
          id: "i5",
          name: "Financial Accounting",
          percentage: "78%",
          proficiency: "Beginner",
          selected: true,
        },
        {
          id: "i6",
          name: "Financial Accounting",
          percentage: "78%",
          proficiency: "Advance",
          selected: false,
        },
      ],
    },
    {
      title: "Self-Leadership Skills",
      skills: [
        {
          id: "s1",
          name: "Financial Accounting",
          percentage: "78%",
          proficiency: "Beginner",
          selected: true,
        },
        {
          id: "s2",
          name: "Financial Accounting",
          percentage: "78%",
          proficiency: "Advance",
          selected: false,
        },
        {
          id: "s3",
          name: "Financial Accounting",
          percentage: "78%",
          proficiency: "Advance",
          selected: false,
        },
        {
          id: "s4",
          name: "Financial Accounting",
          percentage: "78%",
          proficiency: "Intermediate",
          selected: false,
        },
        {
          id: "s5",
          name: "Financial Accounting",
          percentage: "78%",
          proficiency: "Intermediate",
          selected: true,
        },
        {
          id: "s6",
          name: "Financial Accounting",
          percentage: "78%",
          proficiency: "Beginner",
          selected: true,
        },
      ],
    },
    {
      title: "Digital Skills",
      skills: [
        {
          id: "d1",
          name: "Financial Accounting",
          percentage: "78%",
          proficiency: "Beginner",
          selected: true,
        },
        {
          id: "d2",
          name: "Financial Accounting",
          percentage: "78%",
          proficiency: "Intermediate",
          selected: true,
        },
        {
          id: "d3",
          name: "Financial Accounting",
          percentage: "78%",
          proficiency: "Advance",
          selected: false,
        },
        {
          id: "d4",
          name: "Financial Accounting",
          percentage: "78%",
          proficiency: "Intermediate",
          selected: false,
        },
        {
          id: "d5",
          name: "Financial Accounting",
          percentage: "78%",
          proficiency: "Advance",
          selected: false,
        },
        {
          id: "d6",
          name: "Financial Accounting",
          percentage: "78%",
          proficiency: "Beginner",
          selected: true,
        },
      ],
    },
  ]);

  const toggleSkill = (categoryId: number, skillId: string) => {
    const newCategories = [...categories];
    const skill = newCategories[categoryId].skills.find(
      (s) => s.id === skillId,
    );
    if (skill) {
      skill.selected = !skill.selected;
      setCategories(newCategories);
    }
  };

  const totalSelected = categories.reduce(
    (acc, cat) => acc + cat.skills.filter((s) => s.selected).length,
    0,
  );

  return (
    <div className="bg-[#FDFDFD] h-screen px-10 pt-10 font-sans flex flex-col overflow-hidden">
      <div className="max-w-[1500px] w-full mx-auto flex flex-col h-full">
        {/* HEADER */}
        <div className="flex items-start justify-between mb-10">
          <div>
            <h1 className="text-[36px] font-bold text-[#111827]">
              Share Skills Passport
            </h1>
            <p className="mt-1 text-[17px] text-[#6B7280]">
              Select the skills you want to display on your Skills Passport
              before sharing it with others.
            </p>
          </div>

          <div className="flex items-center gap-8">
            <Link href="/interview">
              <button className="text-[17px] font-semibold text-[#FF6652] hover:opacity-80 transition-opacity">
                Cancel
              </button>
            </Link>
            <button className="rounded-xl bg-[#FF6652] px-8 py-3.5 text-[17px] font-semibold text-white shadow-sm hover:bg-[#ff5540] transition-colors">
              Generate Skills Passport
            </button>
          </div>
        </div>

        <div className="flex gap-12 flex-1 min-h-0 pb-10">
          {/* MAIN CONTENT - SKILLS LIST (SCROLLABLE) */}
          <div className="flex-1 overflow-y-auto pr-6 custom-scrollbar">
            <div className="bg-white rounded-[20px] border border-[#E5E7EB] p-8 space-y-12">
              {categories.map((category, catIdx) => (
                <div key={category.title}>
                  <h2 className="text-xl font-bold text-[#111827] mb-6">
                    {category.title}
                  </h2>
                  <div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
                  >
                    {category.skills.map((skill) => (
                      <div
                        key={skill.id}
                        onClick={() => toggleSkill(catIdx, skill.id)}
                        className={`relative ${category.title === "Cognitive Skills" ? "p-4" : "p-6"} rounded-[20px] border cursor-pointer transition-all duration-200 ${skill.selected
                          ? "border-[#FF6652] ring-1 ring-[#FF6652] bg-[#FFF4F3]"
                          : "border-[#E5E7EB] hover:border-[#D1D5DB] bg-white"
                          }`}
                      >
                        <div className="flex justify-between items-start mb-3">
                          <span className={`${category.title === "Cognitive Skills" ? "text-[16px]" : "text-[18px]"} font-bold text-[#111827]`}>
                            {skill.name}
                          </span>
                          <span className={`text-[13px] font-bold text-[#FF6652] px-2 py-0.5 rounded-xl ${skill.selected ? "bg-white" : "bg-[#FFF0F0]"
                            }`}>
                            {skill.percentage}
                          </span>
                        </div>

                        <div className="space-y-1.5">
                          <p className="text-[11px] font-bold text-[#9CA3AF] tracking-[0.05em] uppercase">
                            PROFICIENCY
                          </p>
                          <span
                            className={`text-[15px] font-bold ${skill.proficiency === "Beginner"
                              ? "text-[#F59E0B]"
                              : skill.proficiency === "Intermediate"
                                ? "text-[#2563EB]"
                                : "text-[#10B981]"
                              }`}
                          >
                            {skill.proficiency}
                          </span>
                        </div>

                        <div className="absolute bottom-6 right-6">
                          <div
                            className={`w-[26px] h-[26px] rounded-[6px] flex items-center justify-center transition-all duration-200   ${skill.selected
                              ? "bg-[#FF6652] border-[#FF6652]"
                              : "border-2 border-[#E5E7EB] bg-white text-transparent"
                              }`}
                          >
                            <Check
                              className={`w-4 h-4 text-white transition-opacity ${skill.selected ? "opacity-100" : "opacity-0"}`}
                              strokeWidth={4}
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* SIDEBAR (FIXED) */}
          <div className="w-[350px] space-y-8 flex-shrink-0">
            {/* SELECTED COUNTER CARD */}
            <div className="bg-[#FFF7F7] rounded-[15px] border-[1.5px] border-[#FF6652] p-6 flex items-center gap-6">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm">
                <div className="w-6 h-6 rounded-full bg-[#FF6652] flex items-center justify-center shadow-lg shadow-[#FF6652]/20">
                  <Check className="text-white w-5 h-5" strokeWidth={2.5} />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#111827] mb-2">
                  {totalSelected} Skills Selected
                </h3>
                <p className="text-sm text-[#6B7280]">
                  Ready to be included in passport
                </p>
              </div>
            </div>

            {/* PREVIEW SECTION */}
            <div className="bg-[#F7F9FC] rounded-[12px] p-5 ">
              <div className="flex justify-between items-center mb-5">
                <h3 className="text-[24px] font-bold text-[#111827]">
                  Passport Preview
                </h3>
                <Maximize className="text-[#FF6652] w-7 h-7" />
              </div>

              {/* GRID PREVIEW AREA */}
              <Image
                src={BlankImage}
                alt="Passport Preview"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
