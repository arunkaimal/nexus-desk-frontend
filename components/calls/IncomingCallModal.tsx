"use client";

import { Button } from "@/components/ui/button";

export default function IncomingCallModal() {
  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center">
      <div className="bg-gray-900 p-6 rounded-2xl text-white text-center space-y-4">
        <h2 className="text-lg font-semibold">Incoming Call</h2>
        <p className="text-sm text-gray-400">Arun is calling...</p>

        <div className="flex gap-4 justify-center">
          <Button className="bg-green-600">Accept</Button>
          <Button variant="destructive">Reject</Button>
        </div>
      </div>
    </div>
  );
}