"use client";

import Image from "next/image";
import RobotImage from "@/assets/Illustration.png";
import Link from "next/link";
import { Sparkles } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex justify-center items-start bg-[#FBFBFD] py-6">
      <main className="w-[1100px] bg-transparent">
        {/* HEADER */}
        <header className="flex items-start justify-between mb-4">
          <div>
            <h2 className="text-[30px] font-semibold text-[#1F284A] leading-[1.05]">
              Skills Passport
            </h2>
            <p className="text-[14px] text-slate-500 mt-1 max-w-[689px]">
              Create a verified skill passport from your credentials to showcase your abilities to employers.
            </p>
          </div>

          <div>
            <button
              className="w-[326px] h-[52px] bg-[#FF6A58] hover:bg-[#ff5a45] text-white rounded-[10px] shadow-lg font-semibold flex items-center justify-center gap-2"
              aria-label="Create My Skills Passport"
            >
              <span>Create My Skills Passport</span>
              <span className="text-xl leading-none">→</span>
            </button>
          </div>
        </header>

        {/* TIMELINE CARD (1100 x ~289) */}
        <section className="mb-6">
  <div className="w-full bg-white rounded-[12px] border border-[#D7E6FB] p-6 shadow-sm">
    <h3 className="text-center text-[18px] font-semibold text-[#1F284A]">
      How Your Skills Passport Is Created
    </h3>

    <div className="relative mt-6">

      {/* connecting line THROUGH icons */}
      <div className="absolute left-[48px] right-[48px] top-[32px] h-[4px] bg-[#E6EDF7] z-0"></div>

      <div className="flex justify-between items-start relative z-10 px-6">
        {timelineSteps.map((step, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center text-center px-2 w-[180px]"
          >
            {/* icon */}
            <div className="relative mb-3">
              <HexIcon color="#FF6A3D" size={56}>
                {step.icon}
              </HexIcon>
            </div>

            {/* title */}
            <div className="text-sm font-semibold text-[#1F284A]">
              {step.title}
            </div>

            {/* subtitle */}
            <p className="text-[12px] text-slate-500 mt-1">
              {step.subtitle}
            </p>
          </div>
        ))}
      </div>

    </div>
  </div>
</section>

        {/* SECURITY & RIGHT CARD (700 + 376 = 1076 approx) */}
        <section>
          <div className="grid grid-cols-[700px_376px] gap-4">
            {/* left security box (700 x 250 approx) */}
            <div className="bg-white rounded-[12px] p-2 border border-[#D7E6FB] shadow-sm">
              <h4 className="text-[20px] font-semibold text-[#1F284A]">Security &amp; Privacy Assurance</h4>
              <p className="text-[13px] text-slate-500 mt-2">
                Your data is protected with bank-grade security and consent-driven access
              </p>

              <ul className="mt-2 space-y-1">
                <li className="flex gap-4 items-start">
                  <CheckIcon />
                  <div>
                    <div className="text-sm font-medium text-[#1F284A]">Aadhaar used only for identity assurance.</div>
                    <div className="text-sm text-slate-500">Number and biometrics are not stored.</div>
                  </div>
                </li>

                <li className="flex gap-4 items-start">
                  <CheckIcon />
                  <div className="text-sm font-medium text-[#1F284A]">Credentials retrieved securely via encrypted DigiLocker integration.</div>
                </li>

                <li className="flex gap-4 items-start">
                  <CheckIcon />
                  <div className="text-sm font-medium text-[#1F284A]">Skills generated using only verified credential evidence.</div>
                </li>

                <li className="flex gap-4 items-start">
                  <CheckIcon />
                  <div className="text-sm font-medium text-[#1F284A]">Consent-based access to records.</div>
                </li>
              </ul>
            </div>

            {/* right small card (376 x 250 approx) */}
            <div className="bg-[#FFF3F0] rounded-[12px] p-6 flex flex-col items-center text-center border border-transparent shadow-sm">
              <div className="w-28 h-28 mb-3 relative">
                <Image src={RobotImage} alt="Turn Credentials" fill className="object-contain" />
              </div>

              <h5 className="text-[16px] font-semibold text-[#1F284A]">Turn Credentials Into Career Skills</h5>
              <p className="text-[13px] text-slate-500 mt-2">
                Create a skills passport that showcases your strengths and connects you to the right opportunities.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

/* -------------------------
   Helper components & data
   ------------------------- */

const timelineSteps = [
  {
    title: "Select Credential Source",
    subtitle: "Choose where to retrieve your credential from — platform credentials or DigiLocker.",
    icon: (
      <svg width="22" height="18" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="6" width="18" height="12" rx="2" stroke="#FF6A3D" strokeWidth="1.5" />
        <path d="M7 9h10" stroke="#FF6A3D" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Select Credential",
    subtitle: "Pick the credential you want to analyze to generate your skill insights.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path d="M7 12h10" stroke="#FF6A3D" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M7 7h10" stroke="#FF6A3D" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "AI Intelligence Engine",
    subtitle: "AI extracts skills from credentials.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="3" stroke="#FF6A3D" strokeWidth="1.5"></circle>
        <path d="M12 3v2M12 19v2M3 12h2M19 12h2M5 5l1.5 1.5M17.5 17.5L19 19M5 19l1.5-1.5M17.5 6.5L19 5" stroke="#FF6A3D" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Skills Details",
    subtitle: "Review evidence and taxonomy.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <rect x="4" y="5" width="16" height="14" rx="2" stroke="#FF6A3D" strokeWidth="1.5" />
        <path d="M8 9h8M8 13h8" stroke="#FF6A3D" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Share & Find Jobs",
    subtitle: "Apply with your verified passport",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path d="M14 3v4" stroke="#FF6A3D" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M10 21v-4" stroke="#FF6A3D" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M5 8l7 8 7-8" stroke="#FF6A3D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

function HexIcon({ children, color = "#FF6A3D", size = 56 }) {
  return (
    <div style={{ width: size, height: size }} className="flex items-center justify-center">
      <svg viewBox="0 0 100 100" width={size} height={size} aria-hidden>
        <defs>
          <linearGradient id="g1" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="#FF8A5F" />
            <stop offset="100%" stopColor="#FF6A3D" />
          </linearGradient>
        </defs>
        <path d="M50 7 L80 26 L80 64 L50 93 L20 64 L20 26 Z" fill="white" stroke={color} strokeWidth="3.5" />
        <g transform="translate(50,50)" fill={color} stroke="none" style={{ transformOrigin: "50% 50%" }}>
          <g transform="translate(-9,-9)">{children}</g>
        </g>
      </svg>
    </div>
  );
}

function CheckIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ff6652" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shield-check-icon lucide-shield-check"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/></svg>
  );
}