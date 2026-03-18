"use client";

import { cn } from "@/lib/utils";
import {
  MessageSquare,
  Phone,
  Video,
  Settings,
  Users,
} from "lucide-react";

const menuItems = [
  { label: "Chats", icon: MessageSquare },
  { label: "Voice Calls", icon: Phone },
  { label: "Video Calls", icon: Video },
  { label: "Users", icon: Users },
  { label: "Settings", icon: Settings },
];

export default function Sidebar() {
  return (
    <aside className="w-64 bg-black border-r border-purple-800/30 flex flex-col">
      {/* Logo */}
      <div className="h-16 flex items-center justify-center border-b border-purple-800/30">
        <h1 className="text-xl font-bold">
          <span className="text-purple-500">Nexus</span>
        </h1>
      </div>

      {/* Menu */}
      <nav className="flex-1 px-3 py-4 space-y-2">
        {menuItems.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={index}
              className={cn(
                "flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer",
                "text-gray-400 hover:text-white",
                "hover:bg-purple-700/20 transition-all"
              )}
            >
              <Icon size={20} />
              <span className="text-sm font-medium">{item.label}</span>
            </div>
          );
        })}
      </nav>

      {/* Bottom Profile Section */}
      <div className="p-4 border-t border-purple-800/30">
        <div className="flex items-center gap-3">
          {/* Avatar */}
          <div className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center font-bold">
            A
          </div>

          {/* User Info */}
          <div>
            <p className="text-sm font-medium text-white">Arun</p>
            <p className="text-xs text-gray-400">Online</p>
          </div>
        </div>
      </div>
    </aside>
  );
}