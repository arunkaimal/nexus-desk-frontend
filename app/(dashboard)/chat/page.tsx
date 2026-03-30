import ChatContainer from "@/components/chat/ChatContainer";
// import ChatWindow from "@/components/chat/ChatWindow";
import ConversationSidebar from "@/components/chat/ConversationSidebar";
import React from "react";

const ChatPage = () => {
  return (
    <div className="flex h-full">
      {/* LEFT - Conversations */}
      <ConversationSidebar />

      {/* RIGHT - Chat */}
      <div className="flex-1">
        <ChatContainer />
      </div>
    </div>
  );
};

export default ChatPage;
