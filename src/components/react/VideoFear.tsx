import { useRef, useEffect } from "react";
import video from "@/assets/videos/miedo.mp4";
import "plyr/dist/plyr.css";

export function VideoFear() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      import("plyr").then(({ default: Plyr }) => {
        const player = new Plyr(videoRef.current!);
        player.on("ready", () => {
          player.play();
        });
      });
    }
  }, []);

  return (
    <div className="flex items-center justify-center pt-12 pb-4 w-full" style={{ maxHeight: "100vh" }}>
      <video ref={videoRef} playsInline controls src={video} style={{ maxHeight: "85vh", borderRadius: "var(--radius-m)", "--plyr-color-main": "var(--secondary)", "--plyr-video-control-background-hover": "var(--secondary)", "--plyr-range-fill-background": "var(--secondary)" } as React.CSSProperties} />
    </div>
  );
}
