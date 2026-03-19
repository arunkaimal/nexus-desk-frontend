"use client";

import { useChatStore } from "@/store/useChatStore";
import ConversationItem from "./ConversationItem";

export default function ConversationSidebar() {
  const { conversations, activeConversationId, setActiveConversation } =
    useChatStore();

  return (
    <aside className="w-72 border-r border-purple-800/30 bg-black">
      <div className="p-3 space-y-2">
        {conversations.map((conv) => (
          <div key={conv.id} onClick={() => setActiveConversation(conv.id)}>
            <ConversationItem
              name={conv.name}
              message={conv.lastMessage}
              active={activeConversationId === conv.id}
            />
          </div>
        ))}
      </div>
    </aside>
  );
}
