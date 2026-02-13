"use client";

import Image from "next/image";
import RobotImage from "@/assets/AICareerCoach.png";
import { Sparkles } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full">
      {/* ================= UPPER SECTION ================= */}
      <section
        className="w-full bg-gradient-to-b 
             from-[#EDE9F6] 
             to-[#FDFDFD]  border-b-4 border-purple-400 
                    px-10 min-h-[45vh] 
                    flex flex-col lg:flex-row"
      >
        {/* LEFT IMAGE */}
        <div className="relative lg:w-1/2 w-full my-4">
          <Image
            src={RobotImage}
            alt="AI Career Coach"
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* RIGHT CONTENT */}
        <div
          className="lg:w-1/2 w-full 
                  flex flex-col justify-center 
                  px-6 py-16 lg:py-0"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white px-4 py-1 rounded-full text-sm shadow-sm w-fit mt-2">
            <div className="flex items-center">
              <svg width="0" height="0">
                <defs>
                  <linearGradient
                    id="sparklesGradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stopColor="#FA71CD" />
                    <stop offset="100%" stopColor="#6A3199" />
                  </linearGradient>
                </defs>
              </svg>

              <Sparkles
                size={18}
                style={{ stroke: "url(#sparklesGradient)" }}
              />
            </div>
            <span>AI Career Coach</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl lg:text-6xl font-bold text-[#2E236C] leading-tight mt-6">
            Find the Career You’re Built For
          </h1>

          {/* Description */}
          <p className="text-gray-600 text-2xl mt-6 pr-10">
            Let AI guide you toward career options aligned with who you are.
          </p>

          {/* Button */}
          <Link href="/interview-mode">
            <button className="bg-[#FF6652] mt-10 text-white px-6 py-3 rounded-lg font-semibold w-fit">
              Start Assessment
            </button>
          </Link>
        </div>
      </section>

      {/* ================= BOTTOM SECTION ================= */}
      {/* <section className="px-8 py-16 bg-white">

        <div className="max-w-8xl mx-auto">

          <h2 className="text-3xl font-bold text-gray-900">
            Why Take the AI Career Test?
          </h2>

          <p className="text-gray-600 mt-2 mb-10 text-lg">
            Understand your strengths and discover careers that truly suit you.
          </p>

          <div className="grid md:grid-cols-3 gap-8">

            <FeatureCard
              title="Scientifically Backed Assessment"
              description="Based on the globally recognized RIASEC model to identify your true career interests."
              icon="💡"
            />

            <FeatureCard
              title="Careers Matched Just for You"
              description="AI analyzes your interests and aptitudes to recommend careers that truly fit you."
              icon="🔍"
            />

            <FeatureCard
              title="Clear Direction, Not Confusion"
              description="Get clear career paths, required skills, and next steps—no guesswork involved."
              icon="✨"
            />

          </div>

        </div>
      </section> */}
    </div>
  );
}

/* ================= FEATURE CARD ================= */

function FeatureCard({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: string;
}) {
  return (
    <div className="border rounded-xl p-6 hover:shadow-md transition bg-white">
      <div className="text-3xl mb-4 bg-gray-100 rounded-lg w-12 h-12 flex items-center justify-center">
        {icon}
      </div>
      <h3 className="font-semibold text-lg mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
}
