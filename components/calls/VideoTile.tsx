import { Card } from "@/components/ui/card";
import React from "react";

interface Props {
  label: string;
  isLocal?: boolean;
}

function VideoTile({ label }: Props) {
  return (
    <Card className="relative bg-gray-900 rounded-2xl overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center text-white">
        {label}
      </div>
    </Card>
  );
}

export default React.memo(VideoTile);
