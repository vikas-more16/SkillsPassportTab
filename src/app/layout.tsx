import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/SideNavbar"
import { AppHeader } from "@/components/AppHeader"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "TruScholar",
  description: "Dashboard",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen w-full`}>
        <SidebarProvider className="w-full">
          <div className="flex w-full min-h-screen">

            {/* Sidebar */}
            <AppSidebar />

            {/* Right Section */}
            <div className="flex flex-col flex-1 w-full">
              <AppHeader />
              <main className="flex-1 bg-white w-full">
                {children}
              </main>
            </div>

          </div>
        </SidebarProvider>
      </body>
    </html>
  )
}
