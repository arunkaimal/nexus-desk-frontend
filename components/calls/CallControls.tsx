"use client";

import React, { useState } from "react";
import { Mic, MicOff, Video, VideoOff, PhoneOff } from "lucide-react";
import { Button } from "@/components/ui/button";
function CallControls() {
  const [micOn, setMicOn] = useState(true);
  const [videoOn, setVideoOn] = useState(true);

  return (
    <div className="h-20 flex items-center justify-center gap-6 bg-gray-900 fixed bottom-0 left-0 w-full z-50">
      <Button
        onClick={() => setMicOn(!micOn)}
        className="rounded-full w-14 h-14"
        variant={micOn ? "default" : "destructive"}
      >
        {micOn ? <Mic /> : <MicOff />}
      </Button>

      <Button
        onClick={() => setVideoOn(!videoOn)}
        className="rounded-full w-14 h-14"
        variant={videoOn ? "default" : "destructive"}
      >
        {videoOn ? <Video /> : <VideoOff />}
      </Button>

      <Button className="rounded-full w-16 h-16 bg-red-600 hover:bg-red-700">
        <PhoneOff />
      </Button>
    </div>
  );
}

export default React.memo(CallControls)