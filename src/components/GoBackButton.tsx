"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

export default function GoBackButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="flex items-center gap-2  
                 text-[#FF6652] 
                 text-lg
                 px-4 py-2 
                 rounded-lg 
                 transition"
    >
      <ArrowLeft size={25} />
      Go Back
    </button>
  );
}
