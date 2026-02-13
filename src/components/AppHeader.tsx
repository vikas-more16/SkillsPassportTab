"use client"

import Image from "next/image"
import Profile from "@/assets/profile.png" 
import { Bell } from "lucide-react"

export function AppHeader() {
  return (
    <header className="w-full bg-[#FFFFFF] px-12 py-4 flex items-center justify-between border-b">
      
      {/* LEFT SIDE */}
      <div className="text-sm md:text-base font-medium text-gray-700">
        Good afternoon 🥂 Invest time in your resume today, reap success tomorrow. 🏆
      </div>

      {/* RIGHT SIDE */}
      <div className="flex items-center gap-6">

        {/* Notification Icon */}
        <div className="relative cursor-pointer bg-gray-100 p-2 rounded-full">
          <Bell className="w-6 h-6 text-gray-600" />
        </div>

        {/* Profile Image */}
        <div className="w-10 h-10 rounded-full overflow-hidden border">
          <Image
            src={Profile}
            alt="Profile"
            className="object-cover"
          />
        </div>

      </div>
    </header>
  )
}
