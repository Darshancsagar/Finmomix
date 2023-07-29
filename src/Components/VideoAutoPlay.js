import React, { useRef, useEffect, useState } from "react";
import video from "../Assests/pexels-tima-miroshnichenko-7579959 (2160p).mp4";

const VideoAutoPlay = () => {
  const videoRef = useRef(null);
  const [canPlay, setCanPlay] = useState(false);

  useEffect(() => {
    const videoElement = videoRef.current;

    const handleCanPlayThrough = () => {
      setCanPlay(true);
    };

    videoElement.addEventListener("canplaythrough", handleCanPlayThrough);

    return () => {
      videoElement.removeEventListener("canplaythrough", handleCanPlayThrough);
    };
  }, []);

  useEffect(() => {
    if (canPlay) {
      videoRef.current.play().catch((error) => {
        // Autoplay is not allowed. Handle the error or provide a play button.
        console.error("Autoplay is not allowed:", error);
      });
    }
  }, [canPlay]);

  return (
    <div className="flex justify-center items-center min-h-screen px-4 md:px-8 lg:px-16">
      <video
        ref={videoRef}
        muted
        className="w-full md:w-2/3 lg:w-1/2 max-h-96 md:max-h-full"
      >
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoAutoPlay;
