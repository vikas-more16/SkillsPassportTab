"use client";

import Link from "next/link";
import Image from "next/image";

/*
  Use only the 3 images you provided.
  Put these files in `src/assets` or `@/assets` and update names if needed.
*/
import VerifiedOrange from "@/assets/verified_orange.png";     // orange circular verified badge
import VerifiedBlue from "@/assets/digilocker_verified.png";   // blue Digilocker badge
import DiplomaIcon from "@/assets/diploma_icon.png";           // diploma / scroll icon
import Certificate from "@/assets/certificate.png";
import Calendar from "@/assets/calendar.png";

export default function ViewCredentialsPage() {
  const creds = [
    { id: 1, title: "Bachelor of Commerce", uni: "XYZ University", type: "Degree Certificate", year: 2026, badge: "blue", cta: "Continue to Skill Analysis" },
    { id: 2, title: "Bachelor of Commerce", uni: "XYZ University", type: "Degree Certificate", year: 2026, badge: "orange", cta: "View Details" },
    { id: 3, title: "Bachelor of Commerce", uni: "XYZ University", type: "Degree Certificate", year: 2026, badge: "blue", cta: "Continue to Skill Analysis" },
    { id: 4, title: "Bachelor of Commerce", uni: "XYZ University", type: "Degree Certificate", year: 2026, badge: "orange", cta: "Continue to Skill Analysis" },
    { id: 5, title: "Bachelor of Commerce", uni: "XYZ University", type: "Degree Certificate", year: 2026, badge: "orange", cta: "View Details" },
  ];

  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-[1200px] mx-auto px-8 py-8">
        {/* top header */}
        <div className="flex items-start justify-between mb-8">
          <div className="flex flex-col gap-2">
            <Link
              href="#"
              className="flex items-center gap-2 text-[#FF715D] hover:underline"
            >
              <svg
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#FF715D"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M15 18l-6-6 6-6" />
              </svg>
              <span className="text-sm">Go Back</span>
            </Link>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-[#0F1724]">Your Credentials</h1>
              <p className="text-sm text-slate-500 mt-1">Select the credentials you want to include for generating your Skills Passport.</p>
            </div>
          </div>

          {/* Fetch from Digilocker CTA */}
          <div className="ml-6">
            <Link href="/fetch-digilocker" className="inline-flex items-center gap-3 bg-gradient-to-r from-[#FF7E69] to-[#FF5E49] text-white px-5 py-3 rounded-lg shadow-md hover:opacity-95">
              <span>Fetch From Digilocker</span>
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
          </div>
        </div>

        {/* cards grid */}
        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {creds.map((c) => (
              <CredentialCard key={c.id} cred={c} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

/* -----------------------
   Credential Card Component
   ----------------------- */
function CredentialCard({ cred }) {
  const { title, uni, type, year, badge, cta } = cred;

  return (
    <div className="relative bg-white rounded-xl border border-slate-100 shadow-sm p-5 overflow-hidden">
      {/* verified badge in top-right */}
      <div className="absolute top-3 right-3">
        {badge === "orange" ? (
          <div className="flex items-center">
            <Image src={VerifiedOrange} alt="verified" width={56} height={56} />
          </div>
        ) : (
          <div className="w-20 h-8 translate-x-7">
            <Image src={VerifiedBlue} alt="digilocker verified" width={56} height={56} />
          </div>
        )}
      </div>

      {/* main content */}
      <div className="flex items-start gap-4">
        {/* left icon */}
        <div className="w-14 h-14 flex items-center justify-center rounded-lg bg-[#FFF8F6]">
          <div className="w-10 h-10 relative">
            <Image src={DiplomaIcon} alt="certificate" width={48} height={48} />
          </div>
        </div>

        <div className="flex-1">
          <h3 className="text-md font-semibold text-[#0F1724]">{title}</h3>
          <p className="text-sm text-slate-500 mt-1">{uni}</p>

          {/* tags row */}
          <div className="flex gap-2 items-center mt-3 flex-wrap">
            {/* Certificate tag */}
            <div className="flex items-center gap-2 bg-[#F8FAFB] border border-slate-100 rounded-full px-3 py-1 text-xs text-slate-600">
              <div className="w-4 h-4 relative">
                <Image src={Certificate} alt="degree" width={14} height={14} />
              </div>
              <span>{type}</span>
            </div>

            {/* Year tag with calendar icon */}
            <div className="flex items-center gap-2 bg-[#F8FAFB] border border-slate-100 rounded-full px-3 py-1 text-xs text-slate-600">
              <div className="w-4 h-4 relative">
                <Image src={Calendar} alt="year" width={14} height={14} />
              </div>
              <span>{year}</span>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-4">
            <button className="w-full py-2 border border-[#FFDDD6] text-[#FF6A58] rounded-md text-sm font-medium hover:bg-[#FFF4F2] transition">
              {cta} <span className="ml-2">→</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}