"use client";

import MessageList from "./MessageList";
import MessageBubble from "./MessageBubble";
import MessageInput from "./MessageInput";
import TypingIndicator from "./TypingIndicator";
import { useChatStore } from "@/store/useChatStore";

export default function ChatWindow() {
  const { activeConversationId, messages, conversations } = useChatStore();

  const currentMessages = messages[activeConversationId || ""] || [];

  const activeConversation = conversations.find(
    (c) => c.id === activeConversationId,
  );
  return (
    <div className="flex flex-col h-full bg-black">
      {/* Header */}
      <div className="h-16 border-b border-purple-800/30 flex items-center px-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center">
            {activeConversation?.name?.[0] || "?"}
          </div>
          <div>
            <p className="text-white text-sm font-medium">
              {activeConversation?.name || "Select Chat"}
            </p>
            <p className="text-xs text-gray-400">Online</p>
          </div>
        </div>
      </div>
      {/* Messages */}
      
      <MessageList>
        {currentMessages.map((msg) => (
          <MessageBubble
            key={msg.id}
            message={msg.text}
            isOwn={msg.sender === "me"}
          />
        ))}
      </MessageList>

      <TypingIndicator />

      <MessageInput />
    </div>
  );
}
