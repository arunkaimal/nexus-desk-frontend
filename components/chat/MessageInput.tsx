"use client";

import { Smile, Paperclip, Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function MessageInput() {
  return (
    <div className="border-t border-purple-800/30 p-4 flex items-center gap-3">
      <Smile className="text-gray-400 cursor-pointer" size={20} />

      <Input
        placeholder="Type a message..."
        className="bg-black border-gray-700 focus-visible:ring-purple-500 text-gray-100"
      />

      <Paperclip className="text-gray-400 cursor-pointer" size={20} />

      <Button className="bg-purple-600 hover:bg-purple-700">
        <Send size={16} />
      </Button>
    </div>
  );
}