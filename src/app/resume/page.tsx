"use client";

import GoBackButton from "@/components/GoBackButton";
import { Camera, MicOff } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import PreviewImage from "@/assets/4.png";
import PDFUpload from "@/components/PDFUpload";

export default function ResumePage() {
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
        <div className="flex-1 space-y-8 flex flex-col justify-between my-auto">
          {/* TOP CONTENT */}
          <div className="space-y-10">
            <div>
              <h1 className="text-3xl font-medium">Upload Your Resume</h1>
              <p className="text-gray-500 mt-3">
                Uploading your resume helps us tailor interview questions. You
                can skip this step.
              </p>
            </div>
            <div>
              <PDFUpload />
            </div>
          </div>

          {/* Continue Button */}
          <Link href="/skills">
            <button className="w-full bg-[#FF6652] hover:opacity-90 transition text-white py-3 rounded-xl font-medium text-lg">
              Continue
            </button>
          </Link>

          {/* Skip Button */}
          <Link href="/skills">
            <button className="w-full hover:opacity-90 transition text-[#FF6652] py-3 rounded-xl font-medium text-lg">
              Skip for now
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
          <p className="relative  text-gray-700 text-center text-2xl max-w-lg mx-auto pb-6 mt-auto">
            Use your resume to tailor the interview.{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
