import Link from "next/link";
import Image from "next/image";
import LinkSimple from "@/assets/linkSimple.png";

export default function AddCertificateViaLinkPage() {
  return (
    <main className="h-screen overflow-hidden bg-white">
      {/* Go Back */}
      <div className="px-8 pt-10">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-[14px] font-medium text-[#FF6A58] transition hover:opacity-90"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M15 18l-6-6 6-6"
              stroke="currentColor"
              strokeWidth="1.9"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Go Back
        </Link>
      </div>

      {/* Center Card */}
      <div className="flex h-[calc(100vh-72px)] items-start justify-center pt-[46px]">
        <section className="w-[520px] rounded-[18px] border border-[#E6EDF7] bg-white px-[34px] py-[30px] shadow-[0_0_0_1px_rgba(0,0,0,0.01)]">
          <h1 className="text-center text-[28px] font-semibold text-[#1F284A]">
            Add Certificate via Link
          </h1>

          <p className="mt-2 text-center text-[16px] text-[#5F6B85]">
            Paste your certificate link to verify and extract skills.
          </p>

          {/* Info Box */}
          <div className="mt-5 rounded-[12px] bg-[#FFF2EF] px-4 py-3">
            <div className="flex items-start gap-3">
              <div className="shrink-0 text-[#FF6A58]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M9.09 9a3 3 0 115.82 1c-.33.54-.8.86-1.25 1.18-.78.55-1.12 1.01-1.12 1.82v.5"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 17.5h.01"
                    stroke="currentColor"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                </svg>
              </div>

              <p className="text-[14px] text-[#6F7D96]">
                Supports certificates from Udemy, Coursera, AWS, Microsoft, and more.
              </p>
            </div>
          </div>

          {/* Input Section */}
          <div className="mt-5 rounded-[14px] bg-[#F7F9FC] px-5 py-7">
            <div className="flex flex-col items-center">
              <div className="flex h-[56px] w-[56px] items-center justify-center rounded-full bg-white shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
                <div className="relative h-7 w-7">
                  <Image src={LinkSimple} alt="link" fill className="object-contain" />
                </div>
              </div>

              <h2 className="mt-5 text-[18px] font-medium text-[#1F284A]">
                Paste Certificate Link
              </h2>

              <input
                type="text"
                placeholder="Paste your certificate URL here"
                className="mt-5 h-[34px] w-full rounded-[5px] border border-[#E1E5EE] px-3 text-[13px] outline-none"
              />

              <button
                type="button"
                className="mt-5 h-[30px] w-full rounded-[4px] bg-[#FF6A58] text-[14px] text-white transition hover:bg-[#ff5a45]"
              >
                Verify &amp; Continue
              </button>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}