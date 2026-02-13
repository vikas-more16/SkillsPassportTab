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
  MicOff,
  Video,
} from "lucide-react";
import Image from "next/image";
import BotLogoImage from "@/assets/botlogo.png";
import PlaceHolderImage from "@/assets/PlaceHolder.png";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";

export default function InterviewPage() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const mediaStreamRef = useRef<MediaStream | null>(null);

  const [cameraOn, setCameraOn] = useState(false);
  const [micOn, setMicOn] = useState(false);
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [permissionError, setPermissionError] = useState("");

  const [showAnswer, setShowAnswer] = useState(false);
  const [showIntro, setShowIntro] = useState(true);
  const startMedia = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true,
      });

      mediaStreamRef.current = stream;

      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        await videoRef.current.play();
      }

      setCameraOn(true);
      setMicOn(true);
      setHasPermission(true);
      setPermissionError("");
    } catch (error: any) {
      console.error("Media error:", error);

      setHasPermission(false);

      if (error.name === "NotAllowedError") {
        setPermissionError("Camera and Microphone permission denied.");
      } else if (error.name === "NotFoundError") {
        setPermissionError("No camera or microphone device found.");
      } else {
        setPermissionError("Unable to access camera or microphone.");
      }
    }
  };

  const stopCamera = () => {
    if (!mediaStreamRef.current || !hasPermission) return;

    mediaStreamRef.current.getVideoTracks().forEach((track) => {
      track.enabled = !cameraOn;
    });

    setCameraOn(!cameraOn);
  };

  const stopMic = () => {
    if (!mediaStreamRef.current || !hasPermission) return;

    mediaStreamRef.current.getAudioTracks().forEach((track) => {
      track.enabled = !micOn;
    });

    setMicOn(!micOn);
  };

  useEffect(() => {
    if (!showIntro) {
      startMedia();
    }

    return () => {
      if (mediaStreamRef.current) {
        mediaStreamRef.current.getTracks().forEach((track) => track.stop());
      }
    };
  }, [showIntro]);

  return (
    <div className="p-10 space-y-8">
      {showIntro && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
          <div className="bg-white w-[830px] max-w-[95%] rounded-2xl overflow-hidden shadow-xl flex">
            <div className="px-8 flex items-center justify-center">
              <Image src={PlaceHolderImage} alt="Interview Preview" priority />
            </div>

            <div className="flex-1 py-8 pr-10 relative">
              <button
                onClick={() => setShowIntro(false)}
                className="absolute top-5 right-5 text-gray-400 text-2xl hover:text-gray-600"
              >
                ✕
              </button>

              <h2 className="text-2xl font-semibold mb-2">Before We Begin</h2>

              <p className="text-gray-500 mb-4">
                Here’s how this interview will work.
              </p>

              <div className="bg-gray-100 rounded-xl p-6 space-y-4 text-gray-700">
                <ul className="list-disc pl-5 space-y-2">
                  <li>This is a speech-to-speech interview</li>
                  <li>Answer each question by recording your voice</li>
                  <li>You’ll receive quick feedback after every answer</li>
                  <li>A detailed report will be available at the end</li>
                </ul>

                <button
                  onClick={() => setShowIntro(false)}
                  className="bg-[#FF6652] text-white px-8 py-2 rounded-lg font-medium hover:opacity-90 transition"
                >
                  I’m Ready – Start Interview
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

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

      {hasPermission === false && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg">
          ⚠ {permissionError}
        </div>
      )}

      {/* ================= MAIN CONTENT ================= */}
      <div className="grid grid-cols-[30%_70%] gap-8 h-[75vh]">
        {/* ============ LEFT SIDE ============ */}
        <div className="space-y-6 border border-[#E8E8E8] rounded-xl bg-white p-6 ">
          <div className="relative rounded-2xl overflow-hidden h-[350px] bg-black">
            {/*  Video as Background */}
            <video
              ref={videoRef}
              autoPlay
              playsInline
              muted
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Dark overlay when camera off */}
            {!cameraOn && (
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black/80 z-10">
                <VideoOff size={48} className="mb-2 opacity-80" />
                <p>Camera is off</p>
              </div>
            )}

            {/* "You" label */}
            <span className="absolute top-4 left-4 bg-black/60 px-4 py-1 rounded-full text-sm text-white z-20">
              You
            </span>

            {/* Controls */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-4 z-20">
              <button
                disabled={!hasPermission}
                onClick={stopCamera}
                className={`w-12 h-12 rounded-full flex items-center justify-center ${
                  cameraOn ? "bg-gray-500" : "bg-red-600"
                } ${!hasPermission ? "opacity-50 cursor-not-allowed" : ""}`}
              >
                {cameraOn ? (
                  <Video size={25} color="white" />
                ) : (
                  <VideoOff size={25} color="white" />
                )}
              </button>

              <button
                disabled={!hasPermission}
                onClick={stopMic}
                className={`w-12 h-12 rounded-full flex items-center justify-center ${
                  micOn ? "bg-gray-500" : "bg-red-600"
                } ${!hasPermission ? "opacity-50 cursor-not-allowed" : ""}`}
              >
                {micOn ? (
                  <Mic size={25} color="white" />
                ) : (
                  <MicOff size={25} color="white" />
                )}
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
                    <button
                      className="flex-1 border-2 border-[#FF6652] text-[#FF6652] py-3 rounded-xl flex items-center justify-center gap-2 font-medium"
                      onClick={() => setShowAnswer(false)}
                    >
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
