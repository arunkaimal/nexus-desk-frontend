"use client";

import { cn } from "@/lib/utils";

type Props = {
  name: string;
  message: string;
  active?: boolean;
};

export default function ConversationItem({
  name,
  message,
  active,
}: Props) {
  return (
    <div
      className={cn(
        "flex items-center gap-3 p-3 rounded-xl cursor-pointer",
        active
          ? "bg-purple-700/20"
          : "hover:bg-purple-700/10"
      )}
    >
      <div className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center">
        {name[0]}
      </div>

      <div className="flex-1">
        <p className="text-sm text-white">{name}</p>
        <p className="text-xs text-gray-400 truncate">{message}</p>
      </div>
    </div>
  );
}