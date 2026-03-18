"use client";

import { Search, Bell } from "lucide-react";
import { Input } from "@/components/ui/input";

export default function Header() {
  return (
    <header className="h-16 border-b border-purple-800/30 bg-black flex items-center justify-between px-6">
      {/* Left - Title */}
      <div>
        <h2 className="text-lg font-semibold text-white">Dashboard</h2>
        <p className="text-xs text-gray-400">Welcome back 👋</p>
      </div>

      {/* Center - Search */}
      <div className="hidden md:flex items-center relative w-1/3">
        <Search size={16} className="absolute left-3 text-gray-400" />
        <Input
          placeholder="Search..."
          className="pl-9 bg-black border-gray-700 focus-visible:ring-purple-500 text-gray-100"
        />
      </div>

      {/* Right - Actions */}
      <div className="flex items-center gap-4">
        {/* Notification */}
        <div className="p-2 rounded-full hover:bg-purple-700/20 cursor-pointer">
          <Bell className="text-gray-300" size={20} />
        </div>
      </div>
    </header>
  );
}
