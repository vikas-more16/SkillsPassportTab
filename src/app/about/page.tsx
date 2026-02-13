"use client";

import GoBackButton from "@/components/GoBackButton";
import { Camera, MicOff } from "lucide-react";
import { Field, FieldLabel } from "@/components/ui/field";
import Image from "next/image";
import PreviewImage from "@/assets/5.png";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export default function AboutPage() {
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
              <h1 className="text-3xl font-medium">Tell Us About You </h1>
              <p className="text-gray-500 mt-3">
                This helps us personalize your interview experience and share
                your report.
              </p>
            </div>
            <div>
              <Field>
                <FieldLabel htmlFor="input-required">
                  Full Name<span className="text-destructive">*</span>
                </FieldLabel>
                <Input id="input-required" placeholder="Type here" required />
              </Field>
            </div>
            <div>
              <Field>
                <FieldLabel htmlFor="input-required">
                  Email Address<span className="text-destructive">*</span>
                </FieldLabel>
                <Input
                  id="input-required"
                  placeholder="example@domain.com"
                  required
                />
              </Field>
            </div>
            <div>
              <Field>
                <FieldLabel htmlFor="input-required">
                  Target Role<span className="text-destructive">*</span>
                </FieldLabel>
                <Input
                  id="input-required"
                  placeholder="e.g. “Full Stack Developer”"
                  required
                />
              </Field>
            </div>
          </div>

          {/* Continue Button */}
          <Link href="/resume">
            <button className="w-full bg-[#FF6652] hover:opacity-90 transition text-white py-3 rounded-xl font-medium text-lg mt-10">
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
          <div className="relative w-full max-w-lg mx-auto flex justify-center">
            <Image
              src={PreviewImage}
              alt="Interview Preview"
              className="w-full h-auto object-contain"
              priority
            />
          </div>

          {/* BOTTOM TEXT */}
          <p className="relative  text-gray-700 text-center text-2xl max-w-lg mx-auto pt-6 mt-auto">
            Just a few details before we begin.{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
