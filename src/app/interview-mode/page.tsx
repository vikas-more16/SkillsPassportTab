"use client";

import GoBackButton from "@/components/GoBackButton";
import { Camera, UserSquare, Laptop } from "lucide-react";
import PreviewImage from "@/assets/1.png";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function InterviewModePage() {
  const [selectedMode, setSelectedMode] = useState<string | null>(null);
  const router = useRouter();

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
          <div className="space-y-10">
            <div>
              <h1 className="text-3xl font-medium">
                Choose Your Interview Mode
              </h1>
              <p className="text-gray-500 mt-3">
                Select the type of interview you want to practice today.
              </p>
            </div>

            {/* HR Round */}
            <div
              onClick={() => setSelectedMode("hr")}
              className={`flex items-center justify-between p-6 rounded-xl cursor-pointer transition
    ${
      selectedMode === "hr"
        ? "bg-gray-100 border-2 border-[#FF6652]"
        : "bg-gray-100 border border-transparent"
    }`}
            >
              <div className="flex items-center gap-4">
                <div className=" p-3 rounded-lg">
                  <UserSquare
                    size={25}
                    color={selectedMode === "hr" ? "#FF6652" : "#788394"}
                  />
                </div>
                <div>
                  <div className="flex items-center gap-3">
                    <h3 className="font-medium">HR Round</h3>
                    <span className="text-sm text-gray-500">
                      (7 Questions · ~15 minutes)
                    </span>
                  </div>

                  <p className="text-sm text-gray-500 mt-1">
                    Behavioral and communication-focused questions
                  </p>
                </div>
              </div>

              <span className="w-6 h-6 bg-white border rounded-full flex items-center justify-center">
                {selectedMode === "hr" && (
                  <span className="w-3 h-3 bg-[#FF6652] rounded-full"></span>
                )}
              </span>
            </div>

            {/* Technical Round */}
            <div
              onClick={() => setSelectedMode("technical")}
              className={`flex items-center justify-between p-6 rounded-xl cursor-pointer transition
    ${
      selectedMode === "technical"
        ? "bg-gray-100 border-2 border-[#FF6652]"
        : "bg-gray-100 border border-transparent"
    }`}
            >
              <div className="flex items-center gap-4">
                <div className=" p-3 rounded-lg">
                  <Laptop
                    size={25}
                    color={selectedMode === "technical" ? "#FF6652" : "#788394"}
                  />
                </div>
                <div>
                  <div className="flex items-center gap-3">
                    <h3 className="font-medium">Technical Round</h3>
                    <span className="text-sm text-gray-500">
                      (7 Questions · ~20 minutes)
                    </span>
                  </div>

                  <p className="text-sm text-gray-500 mt-1">
                    Role-specific technical questions
                  </p>
                </div>
              </div>

              <span className="w-6 h-6 bg-white border rounded-full flex items-center justify-center">
                {selectedMode === "technical" && (
                  <span className="w-3 h-3 bg-[#FF6652] rounded-full"></span>
                )}
              </span>
            </div>

            {/* Full Interview */}
            <div
              onClick={() => setSelectedMode("full")}
              className={`flex items-center justify-between p-6 rounded-xl cursor-pointer transition
    ${
      selectedMode === "full"
        ? "bg-gray-100 border-2 border-[#FF6652]"
        : "bg-gray-100 border border-transparent"
    }`}
            >
              <div className="flex items-center gap-4">
                <div className=" p-3 rounded-lg">
                  <Camera
                    size={25}
                    color={selectedMode === "full" ? "#FF6652" : "#788394"}
                  />
                </div>
                <div>
                  <div className="flex items-center gap-3">
                    <h3 className="font-medium">Full Interview</h3>
                    <span className="text-sm text-gray-500">
                      ( 15 Questions · ~35–40 minutes )
                    </span>
                  </div>

                  <p className="text-sm text-gray-500 mt-1">
                    HR + Technical combined experience
                  </p>
                </div>
              </div>

              <span className="w-6 h-6 bg-white border rounded-full flex items-center justify-center">
                {selectedMode === "full" && (
                  <span className="w-3 h-3 bg-[#FF6652] rounded-full"></span>
                )}
              </span>
            </div>
          </div>

          {/* Continue Button */}
          <Link href="/about">
            <button
              disabled={!selectedMode}
              className={`w-full py-3 rounded-xl font-medium text-lg  mt-10 transition
    ${
      selectedMode
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
          <div className="relative w-full max-w-lg mx-auto mt-8 flex justify-center">
            <Image
              src={PreviewImage}
              alt="Interview Preview"
              className="w-full h-auto object-contain"
              priority
            />
          </div>

          {/* BOTTOM TEXT */}
          <p className="relative  text-gray-700 text-center text-semibold text-2xl max-w-lg mx-auto pb-6 mt-auto">
            Choose the interview format you’d like to prepare for.
          </p>
        </div>
      </div>
    </div>
  );
}
