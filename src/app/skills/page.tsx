"use client";

import GoBackButton from "@/components/GoBackButton";
import { Camera, MicOff } from "lucide-react";
import Link from "next/link";
import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import Image from "next/image";
import PreviewImage from "@/assets/3.png";
import { X, Plus } from "lucide-react";

export default function SkillsPage() {
  const allSkills = [
    "Communication",
    "Writing",
    "Management",
    "Problem Solving",
    "Coding",
    "Analysis",
    "Design",
    "Leadership",
  ];

  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [search, setSearch] = useState("");

  const addSkill = (skill: string) => {
    if (!selectedSkills.includes(skill)) {
      setSelectedSkills([...selectedSkills, skill]);
    }
  };

  const removeSkill = (skill: string) => {
    setSelectedSkills(selectedSkills.filter((s) => s !== skill));
  };

  return (
    <div className="p-10 space-y-6">
      {/* Back Button */}
      <GoBackButton />

      {/* Main Card Container */}
      <div
        className="w-full 
                      h-[77vh]
                      bg-white 
                      rounded-2xl 
                      border 
                      p-10 
                      flex 
                      gap-10"
      >
        {/* LEFT SIDE */}
        <div className="flex-1 my-auto flex flex-col justify-between">
          {/* TOP CONTENT */}
          <div className="space-y-8">
            <div>
              <h1 className="text-3xl font-medium">Select Your Skills</h1>
              <p className="text-gray-500 mt-3">
                These skills will be used to generate your technical interview
                questions.
              </p>
            </div>
            <div>
              <Field>
                <FieldLabel>
                  Skills<span className="text-destructive">*</span>
                </FieldLabel>

                <Input
                  placeholder="Search here"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </Field>

              {/* Selected Skills */}
              {selectedSkills.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-4">
                  {selectedSkills.map((skill) => (
                    <div
                      key={skill}
                      className="flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-full text-sm"
                    >
                      <span>{skill}</span>
                      <button onClick={() => removeSkill(skill)}>
                        <X size={14} className="text-gray-500" />
                      </button>
                    </div>
                  ))}
                </div>
              )}

              {/* Available Skills */}
              <div className="mt-6">
                <p className="text-sm text-gray-500 mb-3">Select Skills</p>

                <div className="flex flex-wrap gap-3">
                  {allSkills
                    .filter(
                      (skill) =>
                        skill.toLowerCase().includes(search.toLowerCase()) &&
                        !selectedSkills.includes(skill),
                    )
                    .map((skill) => (
                      <button
                        key={skill}
                        onClick={() => addSkill(skill)}
                        className="flex items-center gap-2 border px-4 py-1 rounded-full text-sm hover:bg-gray-100 transition"
                      >
                        {skill}
                        <Plus size={14} />
                      </button>
                    ))}
                </div>
              </div>
            </div>
          </div>

          <Link href="/connection-check">
            <button
              disabled={selectedSkills.length === 0}
              className={`w-full py-3 rounded-xl font-medium text-lg mt-10 transition
    ${
      selectedSkills.length > 0
        ? "bg-[#FF6652] text-white hover:opacity-90"
        : "bg-gray-300 text-gray-500 cursor-not-allowed"
    }`}
            >
              Continue
            </button>
          </Link>
        </div>

        {/* RIGHT SIDE */}
        <div
          className="flex-1 relative rounded-2xl overflow-hidden
             bg-[linear-gradient(180deg,#FFF6DF_0%,#F2D9FA_75%,#FFFFFF_95%)]
             flex flex-col
             p-10"
        >
          {/* GRID OVERLAY */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,1)_1px,transparent_1px)] bg-[size:40px_40px] opacity-40 pointer-events-none" />

          {/* CONTENT IMAGE */}
          <div className="relative w-full max-w-lg mx-auto my-auto flex justify-center">
            <Image
              src={PreviewImage}
              alt="Interview Preview"
              className="w-full h-auto object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}
