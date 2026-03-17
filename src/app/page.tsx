"use client";

import Image from "next/image";
import RobotImage from "@/assets/Illustration.png";
import addcard from "@/assets/add_card.png";
import assignment from "@/assets/assignment_add.png";
import listalt from "@/assets/list_alt_check.png";
import psychology from "@/assets/psychology.png";
import share_reviews from "@/assets/share_reviews.png";
import shield from "@/assets/Shield.png";

export default function Home() {
  return (
    <div className="flex justify-center items-start bg-[#FBFBFD] py-6 overflow-x-hidden">
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
              className="w-[315px] h-[48px] bg-[#FF6A58] hover:bg-[#ff5a45] text-white rounded-[8px] shadow-lg font-semibold flex items-center justify-center gap-2"
              aria-label="Create My Skills Passport"
            >
              <span>Create My Skills Passport</span>
              <span className="text-xl leading-none">→</span>
            </button>
          </div>
        </header>

        {/* TIMELINE CARD */}
        <section className="mb-6">
          <div className="w-full bg-[#F7F9FC] rounded-[12px] border border-[#D7E6FB] p-6 shadow-sm">
            <h3 className="text-center text-[14px] font-bold text-[#1F284A]">
              How Your Skills Passport Is Created
            </h3>

            {/* ICON ROW (line sits through center of hex icons) */}
            <div className="mt-6 px-6">
              <div className="relative">
                {/* connector line — centered vertically inside the icon row */}
                <div className="absolute left-6 right-6 top-1/2 -translate-y-1/2 h-[4px] bg-[#E6EDF7] rounded -z-10" />

                {/* icons row */}
                <div className="flex justify-between items-center relative z-10">
                  {timelineSteps.map((step, idx) => (
                    <div key={idx} className="flex justify-center w-[180px]">
                      <div className="relative z-10">
                        <HexIcon size={56}>{step.icon}</HexIcon>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* titles + subtitles row (separate so line doesn't overlap text) */}
              <div className="flex justify-between mt-4 px-2">
                {timelineSteps.map((step, idx) => (
                  <div key={idx} className="w-[180px] text-center px-2">
                    <div className="text-[13px] font-semibold text-[#1F284A]">
                      {step.title}
                    </div>
                    <p className="text-[10px] text-slate-500 mt-1">
                      {step.subtitle}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SECURITY & RIGHT CARD */}
        <section>
          <div className="grid grid-cols-[700px_380px] gap-4">
            {/* left security box: make it relative so we can absolutely position the shield image inside it */}
            <div className="relative bg-white rounded-[12px] p-4 border border-[#D7E6FB] shadow-sm">
              <h4 className="text-[18px] font-semibold text-[#1F284A]">Security &amp; Privacy Assurance</h4>
              <p className="text-[11px] text-slate-500 mt-2">
                Your data is protected with bank-grade security and consent-driven access
              </p>

              <ul className="mt-3 space-y-2">
                <li className="flex gap-3 items-start">
                  <CheckIcon />
                  <div>
                    <div className="text-sm font-medium text-[#1F284A]">Aadhaar used only for identity assurance Number and biometrics are not stored.</div>
                  </div>
                </li>

                <li className="flex gap-3 items-start">
                  <CheckIcon />
                  <div className="text-sm font-medium text-[#1F284A]">Credentials retrieved securely via encrypted DigiLocker integration.</div>
                </li>

                <li className="flex gap-3 items-start">
                  <CheckIcon />
                  <div className="text-sm font-medium text-[#1F284A]">Skills generated using only verified credential evidence.</div>
                </li>

                <li className="flex gap-3 items-start">
                  <CheckIcon />
                  <div className="text-sm font-medium text-[#1F284A]">Consent-based access to records.</div>
                </li>
              </ul>

              {/* <-- Shield image placed at bottom-right inside this box --> */}
              <Image
                src={shield}
                alt="Security Shield"
                width={80}
                height={80}
                className="absolute right-4 bottom-4"
                priority={false}
              />
            </div>

            {/* right small card */}
            <div className="bg-[#FFF0EE] rounded-[12px] p-3 w-full h-[250px] flex flex-col items-center text-center shadow-sm">
              <div className="w-28 h-28 mb-1 relative">
                <Image
                  src={RobotImage}
                  alt="Turn Credentials"
                  fill
                  className="object-contain"
                />
              </div>

              <h5 className="text-[14px] font-semibold text-[#1F284A] leading-tight">
                Turn Credentials Into Career Skills
              </h5>

              <p className="text-[13px] text-slate-500 mt-1 max-w-[340px] leading-tight">
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
    icon: <Image src={addcard} alt="add card" width={17} height={17} />,
  },
  {
    title: "Select Credential",
    subtitle: "Pick the credential you want to analyze to generate your skill insights.",
    icon: <Image src={assignment} alt="assignment" width={17} height={17} />,
  },
  {
    title: "AI Intelligence Engine",
    subtitle: "AI extracts skills from credentials.",
    icon: <Image src={psychology} alt="ai" width={17} height={17} />,
  },
  {
    title: "Skills Details",
    subtitle: "Review evidence and taxonomy.",
    icon: <Image src={listalt} alt="list" width={17} height={17} />,
  },
  {
    title: "Share & Find Jobs",
    subtitle: "Apply with your verified passport",
    icon: <Image src={share_reviews} alt="share" width={17} height={17} />,
  },
];

function HexIcon({ children, size = 56 }) {
  // size = hex outer size; center line uses top-1/2 so hex center aligns automatically
  return (
    <div
      className="relative flex items-center justify-center"
      style={{ width: size, height: size }}
      aria-hidden
    >
      {/* hexagon border (white fill so connector behind won't show through) */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="white"
        stroke="#ff6652"
        strokeWidth={1}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="absolute"
        aria-hidden
      >
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      </svg>

      <div className="relative z-10 flex items-center justify-center">
        {children}
      </div>
    </div>
  );
}

function CheckIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#ff6652"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}