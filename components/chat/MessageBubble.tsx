"use client";

import { cn } from "@/lib/utils";

type Props = {
  message: string;
  isOwn?: boolean;
};

export default function MessageBubble({ message, isOwn }: Props) {
  return (
    <div className={cn("flex", isOwn ? "justify-end" : "justify-start")}>
      <div
        className={cn(
          "px-4 py-2 rounded-2xl max-w-xs text-sm",
          isOwn
            ? "bg-purple-600 text-white"
            : "bg-gray-800 text-gray-100"
        )}
      >
        {message}
      </div>
    </div>
  );
}