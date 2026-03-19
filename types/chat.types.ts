export type Message = {
  id: string;
  text: string;
  sender: "me" | "other";
};
export type Conversation = {
  id: string;
  name: string;
  lastMessage: string;
};

export type ChatState = {
  conversations: Conversation[];
  activeConversationId: string | null;
  messages: Record<string, Message[]>;

  setActiveConversation: (id: string) => void;
  sendMessage: (text: string) => void;
};