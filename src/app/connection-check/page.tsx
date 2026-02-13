"use client";

import GoBackButton from "@/components/GoBackButton";
import { Mic, Camera, MicOff } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import PreviewImage from "@/assets/2.png";

export default function ConnectionCheckPage() {
  const [micAllowed, setMicAllowed] = useState(false);
  const [cameraAllowed, setCameraAllowed] = useState(false);

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
        <div className="flex-1 space-y-8 flex flex-col justify-between">
          {/* TOP CONTENT */}
          <div className="space-y-8">
            <div>
              <h1 className="text-3xl font-medium">
                Camera & Micro Phone Check
              </h1>
              <p className="text-gray-500 mt-3">
                Please make sure your camera and microphone are working properly
                before we begin.
              </p>
            </div>

            {/* Microphone Card */}
            <div className="flex items-center justify-between bg-gray-100 p-6 rounded-xl">
              <div className="flex items-center gap-4">
                <div className=" p-3 rounded-lg">
                  <Mic size={25} color="#788394" />
                </div>
                <div>
                  <h3 className="font-medium">Micro Phone Access</h3>
                  <p className="text-sm text-gray-500">
                    This is a voice call and requires mic access.
                  </p>
                </div>
              </div>

              {micAllowed ? (
                <span className="text-sm px-4 py-1 bg-green-100 text-green-600 border border-green-500 rounded-full">
                  ● Working
                </span>
              ) : (
                <button
                  onClick={() => setMicAllowed(true)}
                  className="text-sm font-bold px-4 py-1 border-2 border-[rgba(255,224,220,1)] text-[#FF6652] rounded-[5px] bg-white transition"
                >
                  Allow Access
                </button>
              )}
            </div>

            {/* Camera Card */}
            <div className="flex items-center justify-between bg-gray-100 p-6 rounded-xl">
              <div className="flex items-center gap-4">
                <div className=" p-3 rounded-lg">
                  <Camera size={25} color="#788394" />
                </div>
                <div>
                  <h3 className="font-medium">Camera Access</h3>
                  <p className="text-sm text-gray-500">
                    Camera access is needed to continue.
                  </p>
                </div>
              </div>

              {cameraAllowed ? (
                <span className="text-sm px-4 py-1 bg-green-100 text-green-600 border border-green-500 rounded-full">
                  ● Connected
                </span>
              ) : (
                <button
                  onClick={() => setCameraAllowed(true)}
                  className="text-sm px-4 py-1 border-2 border-[rgba(255,224,220,1)] text-[#FF6652] rounded-[5px] bg-white font-bold transition"
                >
                  Allow Access
                </button>
              )}
            </div>
          </div>

          {/* Continue Button */}
          <Link href={'/interview'}>
          <button
            disabled={!micAllowed || !cameraAllowed}
            className={`w-full py-3 rounded-xl font-medium text-lg transition
    ${
      micAllowed && cameraAllowed
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
          <p className="relative  text-gray-700 text-center text-2xl max-w-lg mx-auto pb-6 mt-auto">
            Make sure your camera and microphone are ready for the interview.
          </p>
        </div>
      </div>
    </div>
  );
}
