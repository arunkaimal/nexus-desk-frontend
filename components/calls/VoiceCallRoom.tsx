import CallControls from "./CallControls";

export default function VoiceCallRoom() {
  return (
    <div className="h-screen w-full bg-black flex flex-col items-center justify-center text-white">
      <div className="text-lg mb-4">Voice Call</div>
      <CallControls />
    </div>
  );
}
