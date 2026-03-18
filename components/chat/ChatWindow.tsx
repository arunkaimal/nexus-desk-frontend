"use client";

import MessageList from "./MessageList";
import MessageBubble from "./MessageBubble";
import MessageInput from "./MessageInput";
import TypingIndicator from "./TypingIndicator";

export default function ChatWindow() {
  return (
    <div className="flex flex-col h-full bg-black">
      {/* Header */}
      <div className="h-16 border-b border-purple-800/30 flex items-center px-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center">
            J
          </div>
          <div>
            <p className="text-white text-sm font-medium">John</p>
            <p className="text-xs text-gray-400">Online</p>
          </div>
        </div>
      </div>

      <MessageList>
        <MessageBubble message="Hey!" />
        <MessageBubble message="Working on chat app 😄" isOwn />
      </MessageList>

      <TypingIndicator />

      <MessageInput />
    </div>
  );
}