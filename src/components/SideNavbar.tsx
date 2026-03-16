"use client";

import Image from "next/image";
import Logo from "@/assets/logo.png";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "@/components/ui/sidebar";

import {
  LayoutDashboard,
  IdCard,
  FileText,
  Search,
  Bot,
  HelpCircle,
  Settings,
} from "lucide-react";

export function AppSidebar() {
  return (
    <Sidebar className=" border-r ">
      {/* HEADER */}
      <SidebarHeader className="p-6">
        <div className="flex items-center gap-2 justify-center">
          <Image src={Logo} alt="Logo" width={140} />
        </div>
      </SidebarHeader>

      {/* CONTENT */}
      <SidebarContent className="px-4 mt-8 ">
        <SidebarGroup>
          <NavItem
            icon={LayoutDashboard}
            label="Dashboard"
            className="text-lg"
          />
          <NavItem icon={IdCard} label="My Credentials" className="text-lg" />
          <NavItem icon={FileText} label="Truresume" className="text-lg" />
          <NavItem icon={Search} label="Find Jobs" className="text-lg" />

          {/* Active Item */}
          <NavItem
            icon={Bot}
            label="Skills Passport"
            active
            className="text-lg"
          />
        </SidebarGroup>
      </SidebarContent>

      {/* FOOTER */}
      <SidebarFooter className="p-4 space-y-4 mb-8">
        <div className="space-y-2">
          <NavItem icon={HelpCircle} label="Help" className="text-lg" />
          <NavItem icon={Settings} label="Settings" className="text-lg" />
        </div>

        {/* Upgrade Card */}
        <div className="bg-white border rounded-lg p-4 shadow-sm">
          <h4 className="font-semibold text-xl">Upgrade to Pro</h4>
          <p className="text-base text-muted-foreground mt-2">
            Unlock all features and get unlimited access to our support team.
          </p>
          <button className="w-full mt-4 bg-[#6652FF] text-white rounded-lg py-3 font-medium text-lg hover:bg-indigo-700 transition">
            Try Premium
          </button>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}

/* ---------------- NAV ITEM COMPONENT ---------------- */

function NavItem({
  icon: Icon,
  label,
  active = false,
  className = "",
}: {
  icon: any;
  label: string;
  active?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`flex items-center gap-3 px-4 py-2 rounded-lg cursor-pointer transition
        ${
          active
            ? "bg-[#FFEFED] text-[#FF6652] font-medium"
            : "text-[#666666] hover:bg-gray-100"
        }`}
    >
      <Icon size={25} />
      <span className={className}>{label}</span>
    </div>
  );
}
