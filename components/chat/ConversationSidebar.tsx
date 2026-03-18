"use client";

import ConversationItem from "./ConversationItem";

export default function ConversationSidebar() {
  return (
    <div className="w-72 border-r border-purple-800/30 bg-black p-3 space-y-2">
      <ConversationItem name="John" message="Hey bro!" active />
      <ConversationItem name="Alice" message="Meeting at 5?" />
      <ConversationItem name="David" message="Check this out 🔥" />
    </div>
  );
}