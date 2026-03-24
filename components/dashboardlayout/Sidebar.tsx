"use client";

import { cn } from "@/lib/utils";
import { MessageSquare, Phone, Video, Settings, Users } from "lucide-react";

const menuItems = [
  { label: "Chats", icon: MessageSquare },
  { label: "Voice Calls", icon: Phone },
  { label: "Video Calls", icon: Video },
  { label: "Users", icon: Users },
  { label: "Settings", icon: Settings },
];

export default function Sidebar() {
  return (
    <aside className="group w-20 hover:w-64 bg-black border-r border-purple-800/30 flex flex-col transition-all duration-300">
      {/* Logo */}
      <div className="h-16 flex items-center justify-center border-b border-purple-800/30">
        <h1 className="text-xl font-bold">
          <span className="text-purple-500 group-hover:hidden text-3xl">N</span>
          <span className="text-purple-500 hidden group-hover:inline text-3xl">
            Nexus
          </span>
        </h1>
      </div>

      {/* Menu */}
      <nav className="flex-1 px-2 py-4 space-y-2">
        {menuItems.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={index}
              className={cn(
                "flex items-center rounded-xl cursor-pointer",
                "text-gray-400 hover:text-white",
                "hover:bg-purple-700/20 transition-all",
                "justify-center group-hover:justify-start px-2 group-hover:px-4 py-3",
              )}
            >
              {/* Icon (always visible) */}
              <Icon size={20} />

              {/* Text */}
              <span className="ml-3 text-sm font-medium hidden group-hover:inline whitespace-nowrap">
                {item.label}
              </span>
            </div>
          );
        })}
      </nav>

      {/* Profile */}
      <div className="p-3 border-t border-purple-800/30">
        <div className="flex items-center justify-center group-hover:justify-start gap-3">
          {/* Avatar */}
          <div className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center font-bold">
            A
          </div>

          {/* Info */}
          <div className="hidden group-hover:block">
            <p className="text-sm font-medium text-white">Arun</p>
            <p className="text-xs text-gray-400">Online</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
