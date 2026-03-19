import { create } from "zustand";
import { ChatState,Message } from "@/types/chat.types";

export const useChatStore = create<ChatState>((set, get) => ({
  //Dummy Datas

  conversations: [
    { id: "1", name: "Arun Unnikrishnan", lastMessage: "Hey man how are you" },
    { id: "2", name: "Vaishak", lastMessage: "Iam Fine" },
    { id: "3", name: "Sidharth", lastMessage: "Podaaa" },
  ],

  activeConversationId: "1",

  messages: {
    "1": [
      { id: "m1", text: "Hai", sender: "other" },
      { id: "m2", text: "Hello", sender: "me" },
    ],
    "2": [],
  },

  setActiveConversation: (id) => set({ activeConversationId: id }),
  sendMessage: (text) => {
    const { activeConversationId, messages } = get();
    if (!activeConversationId) return;

    const newMessage: Message = {
      id: Date.now().toString(),
      text,
      sender: "me",
    };
    set({
      messages: {
        ...messages,
        [activeConversationId]: [
          ...(messages[activeConversationId] || []),
          newMessage,
        ],
      },
    });
  },
}));
