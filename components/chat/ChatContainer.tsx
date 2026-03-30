"use client";

import { useChatStore } from "@/store/useChatStore";
import ChatWindow from "./ChatWindow";

const ChatContainer = () => {
  const { activeConversationId } = useChatStore();

  if (!activeConversationId) {
    return (
      <div className="flex-1 h-full flex items-center justify-center bg-black text-gray-500">
        <p>Select a conversation to start chatting</p>
      </div>
    );
  }
  return <ChatWindow />;
};
export default ChatContainer;
