"use client";

import {
  VideoOff,
  Mic,
  RotateCcw,
  ArrowRight,
  Camera,
  MessageCircleMore,
  Timer,
  Lightbulb,
} from "lucide-react";
import Image from "next/image";
import BotLogoImage from "@/assets/botlogo.png";
import { useState } from "react";
import Link from "next/link";

export default function InterviewPage() {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <div className="p-10 space-y-8">
      {/* ================= HEADER ================= */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-semibold">Practice Session</h1>
          <p className="text-gray-500 mt-1">
            Answer the question clearly and confidently.
          </p>
        </div>

        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2  font-medium">
            <Camera size={20} color="#FF6652" />
            HR Round
          </div>
          <Link href="/scorecard">
          <button className="text-red-600 font-medium">End Session</button>
          </Link>
        </div>
      </div>

      {/* ================= MAIN CONTENT ================= */}
      <div className="grid grid-cols-[30%_70%] gap-8 h-[75vh]">
        {/* ============ LEFT SIDE ============ */}
        <div className="space-y-6 border border-[#E8E8E8] rounded-xl bg-white p-6 ">
          {/* Camera Box */}
          <div className="bg-[#4A4A4A] rounded-2xl p-10 text-center text-white relative">
            <span className="absolute top-4 left-4 bg-[#808080] px-4 py-1 rounded-full text-sm">
              You
            </span>

            <VideoOff size={48} className="mx-auto mb-4 opacity-80" />
            <p className="text-lg mb-6">Camera is off</p>

            <div className="flex justify-center gap-4">
              <button className="w-12 h-12 bg-[#E01F00] rounded-full flex items-center justify-center">
                <VideoOff size={25} />
              </button>
              <button className="w-12 h-12 bg-[#808080] rounded-full flex items-center justify-center">
                <Mic size={25} />
              </button>
            </div>
          </div>

          {/* STAR Framework */}
          <div className="bg-[#FFF9F8] border-2 border-[#FF6652] rounded-2xl p-6">
            <h2 className="text-xl font-semibold mb-6">STAR Framework</h2>

            {[
              {
                letter: "S",
                title: "Situation",
                desc: "Set the scene - When, Where, What Context?",
              },
              {
                letter: "T",
                title: "Task",
                desc: "What was your responsibility or goal?",
              },
              {
                letter: "A",
                title: "Action",
                desc: "What specific steps did you take?",
              },
              {
                letter: "R",
                title: "Result",
                desc: "What was the measurable outcome?",
              },
            ].map((item) => (
              <div key={item.letter} className="flex gap-4 mb-5">
                <div className="w-10 h-10 rounded-full bg-[#FFFFFF] flex items-center justify-center font-semibold text-lg text-[#FF6652]">
                  {item.letter}
                </div>
                <div>
                  <h4 className="font-medium">{item.title}</h4>
                  <p className="text-xs text-gray-500">{item.desc}</p>
                </div>
              </div>
            ))}

            <p className="text-gray-600 mt-4 text-[#212121] text-lg">
              Structure your answer using each component above for maximum
              impact.
            </p>
          </div>
        </div>

        {/* ============ RIGHT SIDE ============ */}
        <div className="h-full flex flex-col border border-[#E8E8E8] rounded-xl bg-white p-4">
          {/* Question Card */}
          <div className="flex-1 overflow-auto space-y-6">
            {/* Question Header */}
            <div className="flex justify-between items-center text-sm text-gray-600 bg-[#F7F9FC] p-4 rounded-xl">
              <div className="flex items-center gap-2">
                <MessageCircleMore size={18} />
                <span>Question 01/07</span>
              </div>
              <div className="flex items-center gap-2">
                <Timer size={18} />
                <span>04:32 remaining</span>
              </div>
            </div>

            {/* Question Body */}
            <div className="px-2">
              <div className="flex items-center gap-2 mb-3">
                <Image
                  src={BotLogoImage}
                  alt="Bot"
                  className="w-7 h-7"
                  priority
                />
                <h3 className="font-semibold text-sm">Question 1</h3>
              </div>

              <div className="bg-[#F7F9FC] rounded-xl p-5 text-gray-700 w-[55%]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                tincidunt, purus{" "}
              </div>

              {showAnswer && (
                <>
                  <div className="bg-[#F8E4E0] rounded-xl p-5 text-gray-700 mt-4 w-[55%] ml-auto">
                    Donec diam risus, euismod vel volutpat eu, vehicula eu
                    arcu.{" "}
                  </div>

                  <div className="border rounded-xl p-4 mt-4 w-[55%]">
                    <div className="flex items-center gap-2 mb-2">
                      <Lightbulb size={22} color="#FF6652" />
                      <h4 className="font-semibold">Feedback</h4>
                    </div>

                    <p className="text-sm text-gray-600">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Mauris tincidunt, purus sem. In condimentum sem sed arcu
                      lobortis luctus in vitae dui. Quisque vitae mattis felis.
                    </p>
                  </div>

                  <div className="flex gap-4 pt-4 mx-12 mt-10">
                    <button className="flex-1 border-2 border-[#FF6652] text-[#FF6652] py-3 rounded-xl flex items-center justify-center gap-2 font-medium" onClick={()=> setShowAnswer(false)
                    }>
                      Retake Answer <RotateCcw size={18} />
                    </button>

                    <button className="flex-1 bg-[#FF6652] text-white py-3 rounded-xl flex items-center justify-center gap-2 font-medium">
                      Next Question <ArrowRight size={18} />
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* ================= BOTTOM RECORD BUTTON ================= */}
          {!showAnswer && (
            <button
              onClick={() => setShowAnswer(true)}
              className="mt-auto mx-20 mb-10 bg-[#FF6652] text-white py-3 rounded-xl text-lg font-medium flex items-center justify-center gap-2"
            >
              <Mic size={25} />
              Tap To Record Answer
            </button>
          )}
        </div>
      </div>
    </div>
    // </div>
    // </div>
  );
}
