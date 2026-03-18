"use client";

import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function MessageList({ children }: Props) {
  return (
    <div className="flex-1 overflow-y-auto px-4 py-6 space-y-4">
      {children}
    </div>
  );
}