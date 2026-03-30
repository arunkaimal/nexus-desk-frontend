import CallControls from "./CallControls";
import CallStatusBar from "./CallStatusBar";
import VideoTile from "./VideoTile";


export default function VideoCallRoom() {
  return (
    <div className="h-screen w-full bg-black flex flex-col">
      <CallStatusBar />

      {/* Video Grid */}
      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-2 p-2">
        <VideoTile label="Remote User" />
        <VideoTile label="You" isLocal />
      </div>

      <CallControls />
    </div>
  );
}