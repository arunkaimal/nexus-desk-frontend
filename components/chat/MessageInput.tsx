"use client";

import { Smile, Paperclip, Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useChatStore } from "@/store/useChatStore";
import { useState } from "react";

export default function MessageInput() {
  const [text, setText] = useState("");
  const { sendMessage } = useChatStore();

  const handleSend = () => {
    if (!text.trim()) return;
    sendMessage(text);
    setText("");
  };
  return (
    <div className="border-t border-purple-800/30 p-4 flex items-center gap-3">
      <Smile className="text-gray-400 cursor-pointer" size={20} />

      <Input
        placeholder="Type a message..."
        className="bg-black border-gray-700 focus-visible:ring-purple-500 text-gray-100"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <Paperclip className="text-gray-400 cursor-pointer" size={20} />

      <Button
        className="bg-purple-600 hover:bg-purple-700 cursor-pointer"
        onClick={handleSend}
      >
        <Send size={16} />
      </Button>
    </div>
  );
}
