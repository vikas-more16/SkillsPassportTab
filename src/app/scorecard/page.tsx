"use client";

import Image from "next/image";
import Link from "next/link";
import ChartImage from "@/assets/chart.png";
import { ChevronDown, ChevronUp, ListChecks, LocateFixed } from "lucide-react";
import { useState } from "react";

const coreMetrics = [
  {
    label: "Answer Structure",
    value: 75,
    description:
      "How well you organized your responses using frameworks like the STAR method.",
  },
  {
    label: "Communication & Clarity",
    value: 65,
    description:
      "How clearly and effectively you articulated your ideas and experiences.",
  },
  {
    label: "Sentiment",
    value: 75,
    description:
      "The positivity and enthusiasm in your tone. A positive attitude makes a great impression.",
  },
];

const leftQuestions = [
  {
    id: 1,
    question: "Q1 Tell me about yourself",
    answer:
      '🗨️ Your Answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec laoreet  condimentum finibus.',
    feedback: "Feedback: Clear intro, well aligned experience.",
    isPrimary: true,
  },
  {
    id: 2,
    question: "Q2 Why are you interested in this role?",
    answer:
      '🗨️ Your Answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec laoreet  condimentum finibus.',
    feedback: "Feedback: Clear intro, well aligned experience.",
  },
  {
    id: 3,
    question: "Q3 What are your strengths?",
    answer:
      '🗨️ Your Answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec laoreet  condimentum finibus.',
    feedback: "Feedback: Clear intro, well aligned experience.",
  },
];

const rightQuestions = [
  {
    id: 4,
    question: "Q4 What are your weaknesses?",
    answer:
      '🗨️ Your Answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec laoreet  condimentum finibus.',
    feedback: "Feedback: Clear intro, well aligned experience.",
  },
  {
    id: 5,
    question: "Q5 Tell me about a challenge you faced.",
    answer:
      '🗨️ Your Answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec laoreet  condimentum finibus.',
    feedback: "Feedback: Clear intro, well aligned experience.",
  },
  {
    id: 6,
    question: "Q6 Where do you see yourself in 5 years?",
    answer:
      '🗨️ Your Answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec laoreet  condimentum finibus.',
    feedback: "Feedback: Clear intro, well aligned experience.",
  },
];

export default function InterviewScorecardPage() {
  const [openQuestion, setOpenQuestion] = useState<number | null>(1);

  return (
    <div className="bg-[#FDFDFD] min-h-screen px-2   py-10">
      <div className=" mx-10  space-y-8">
        {/* PAGE HEADER */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-[26px] font-semibold text-gray-900">
              HR Interview Scorecard
            </h1>
            <p className="mt-1 text-sm text-gray-500">
              Personalized feedback from your AI interview session.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Link href="/interview">
              <button className="rounded-lg border border-[#FF6652] bg-white px-5 py-2 text-sm font-semibold text-[#FF6652] shadow-sm">
                Practice Again
              </button>
            </Link>
            <button className="rounded-lg bg-[#FF6652] px-5 py-2 text-sm font-semibold text-white shadow-sm">
              Download Report
            </button>
          </div>
        </div>

        {/* TOP SECTION: SCORE + CORE METRICS */}
        <div className="grid gap-6 lg:grid-cols-3">
          {/* OVERALL SCORE CARD */}
          <div className="rounded-2xl bg-[#FFF4F3] p-8 shadow-sm">
            <div className="flex flex-col items-center text-center">
              <div className="relative mb-4 h-28 w-28">
                <div className="absolute inset-0 rounded-full border-[10px] border-[#FF6652] border-t-[#FFFFFF] -rotate-45" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-2xl font-semibold text-gray-900">
                    70%
                  </span>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">
                Overall Interview Performance
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                This score represents the overall quality of your responses,
                communication, and confidence.
              </p>
            </div>
          </div>

          {/* CORE EVALUATION METRICS */}
          <div className="col-span-2 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
            <h2 className="text-lg font-semibold text-gray-900 mb-8">
              Core Evaluation Metrics
            </h2>

            <div className="grid grid-cols-3 divide-x divide-gray-200">
              {coreMetrics.map((metric, index) => (
                <div key={metric.label} className="px-6">
                  {/* Title + Check */}
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {metric.label}
                    </h3>

                    <div className="w-6 h-6 bg-[#47B881] rounded-full flex items-center justify-center text-white text-sm">
                      ✓
                    </div>
                  </div>

                  {/* Progress + Percentage */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex-1 h-3 bg-gray-200 rounded-full">
                      <div
                        className="h-3 bg-[#47B881] rounded-full"
                        style={{ width: `${metric.value}%` }}
                      />
                    </div>
                    <span className="text-sm font-semibold text-gray-800">
                      {metric.value}%
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {metric.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* SECOND ROW: BEHAVIORAL + STRENGTHS/FOCUS */}
        <div className="grid gap-6 lg:grid-cols-2">
          {/* ================= BEHAVIORAL ASSESSMENT ================= */}
          <div className=" p-6">
            <h2 className="text-lg font-semibold text-gray-900">
              Behavioral Assessment
            </h2>

            {/* Inner Analysis Card */}
            <div className="mt-6 rounded-2xl border border-gray-200 bg-[#FFFFFF] p-6">
              <h3 className="text-center text-base font-semibold text-gray-900 mb-4">
                Analysis
              </h3>

              {/* Legend */}
              <div className="flex justify-center gap-6 text-sm text-gray-600 mb-6">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 bg-[#6C7FF2] rounded-sm"></span>
                  Your Progress
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 bg-gray-300 rounded-sm"></span>
                  Target
                </div>
              </div>

              {/* Chart */}
              <div className="flex justify-center">
                <Image
                  src={ChartImage}
                  alt="Behavioral radar analysis"
                  className="w-[320px] max-w-full"
                />
              </div>
            </div>
          </div>

          {/* ================= STRENGTHS & IMPROVEMENT AREAS ================= */}
          <div>
            <h2 className="text-lg font-semibold text-gray-900 mt-6">
              Your Strengths & Improvement Areas
            </h2>

            <div className="space-y-5 p-6">
              {/* Strongest Area */}
              <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-[#FFE8E3] flex items-center justify-center">
                    <ListChecks color="#FF6652"/>
                  </div>
                  <h3 className="text-sm font-semibold text-gray-900">
                    Strongest Area: Clarity & Communication
                  </h3>
                </div>

                <div className=" w-[90%] rounded-lg  bg-[#F7F9FC] p-6 text-sm text-gray-600">
                  You excelled in clarity & communication. Keep leveraging this
                  strength in your interviews!
                </div>
              </div>

              {/* Focus Area */}
              <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-[#FFE8E3] flex items-center justify-center">
                    <LocateFixed color="#FF6652"/>
                  </div>
                  <h3 className="text-sm font-semibold text-gray-900">
                    Focus Area: Answer Structure
                  </h3>
                </div>

                <div className="w-[90%] rounded-lg bg-[#F7F9FC] p-6 text-sm text-gray-600">
                  Consider focusing on improving your answer structure for even
                  better results.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* PERFORMANCE SUMMARY */}
        <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
          <h2 className="text-lg font-semibold text-gray-900">
            Performance Summary
          </h2>

          <p className="mt-3 text-sm text-gray-600">
            You demonstrated a positive attitude and a willingness to learn
            throughout the interview, which is commendable! To improve, consider
            structuring your answers with specific examples and achievements to
            make your responses more impactful.
          </p>

          <div className="mt-6 bg-[#F4F5F7] rounded-xl p-6">
            <div className="grid md:grid-cols-2 items-start">
              {/* LEFT SIDE */}
              <div className="pr-6">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-5 h-5 flex items-center justify-center border-2 border-green-500 rounded-sm">
                    <span className="text-green-500 text-xs font-bold">✓</span>
                  </div>
                  <h4 className="text-sm font-semibold text-gray-900">
                    What You Did Well
                  </h4>
                </div>

                <ul className="space-y-3 text-sm text-gray-800">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    Positive attitude
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    Willingness to learn
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    Technical knowledge in blockchain
                  </li>
                </ul>
              </div>

              {/* RIGHT SIDE */}
              <div className="pl-6 border-l border-gray-300">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-5 h-5 flex items-center justify-center border border-orange-400 rounded-full">
                    <span className="text-orange-500 text-xs font-bold">i</span>
                  </div>
                  <h4 className="text-sm font-semibold text-gray-900">
                    Areas to Improve
                  </h4>
                </div>

                <ul className="space-y-3 text-sm text-gray-800">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-orange-400 rounded-full"></span>
                    Provide specific examples in your answers
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-orange-400 rounded-full"></span>
                    Use a clearer structure to organize your thoughts
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* RECOMMENDED NEXT STEPS */}
          <div className="py-6 ">
            <h3 className="mb-2 text-sm font-semibold text-gray-900">
              Recommended Next Steps
            </h3>
            <ol className="list-decimal space-y-1 pl-4 mt-6 text-sm text-gray-700">
              <li>Practice structuring answers with examples.</li>
              <li>Attend mock interviews to improve confidence.</li>
            </ol>
          </div>
        </div>

        {/* QUESTION-BY-QUESTION ANALYSIS */}
        <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
          <h2 className="text-xl font-semibold text-gray-900">
            Question-by-Question Analysis
          </h2>

          <div className="mt-5 grid gap-6 md:grid-cols-2">
            {/* LEFT COLUMN */}
            <div className="space-y-3">
              {leftQuestions.map((q) => {
                const isOpen = openQuestion === q.id;

                return (
                  <div
                    key={q.id}
                    className="rounded-lg bg-[#F4F5F7] p-4 text-gray-800"
                  >
                    {/* Header */}
                    <div
                      className="flex items-center justify-between cursor-pointer"
                      onClick={() => setOpenQuestion(isOpen ? null : q.id)}
                    >
                      <span className="text-lg font-medium">{q.question}</span>

                      {isOpen ? (
                        <ChevronUp className="text-gray-500" size={20} />
                      ) : (
                        <ChevronDown className="text-gray-500" size={20} />
                      )}
                    </div>

                    {/* Expandable Content */}
                    {isOpen && (
                      <div className="mt-3 space-y-2 text-sm overflow-hidden transition-all duration-300 ease-in-out">
                        <p className="text-gray-600">{q.answer}</p>
                        <p className="font-medium text-[#FF4B4B]">
                          {q.feedback}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* RIGHT COLUMN */}
            <div className="space-y-3">
              {rightQuestions.map((q) => {
                const isOpen = openQuestion === q.id;

                return (
                  <div
                    key={q.id}
                    className="rounded-lg bg-[#F4F5F7] p-4 text-gray-800"
                  >
                    <div
                      className="flex items-center justify-between cursor-pointer"
                      onClick={() => setOpenQuestion(isOpen ? null : q.id)}
                    >
                      <span className="text-lg font-medium">{q.question}</span>

                      {isOpen ? (
                        <ChevronUp className="text-gray-500" size={20} />
                      ) : (
                        <ChevronDown className="text-gray-500" size={20} />
                      )}
                    </div>

                    {isOpen && (
                      <div className="mt-3 space-y-2 text-sm">
                        <p className="text-gray-600">{q.answer}</p>
                        <p className="font-medium text-[#FF4B4B]">
                          {q.feedback}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
