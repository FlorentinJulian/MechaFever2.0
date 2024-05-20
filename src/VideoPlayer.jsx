import { useEffect, useRef, useState } from "react";
import videos from "./Openings";

function VideoPlayer() {
  const videoRef = useRef(null);
  const [shuffledVideos, setShuffledVideos] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const videoElement = videoRef.current;

    const shuffleVideos = () => {
      const shuffled = [...videos].sort(() => Math.random() - 0.5);
      setShuffledVideos(shuffled);
    };

    const handleEnded = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % shuffledVideos.length);
    };

    videoElement.addEventListener("ended", handleEnded);

    shuffleVideos();
    setCurrentIndex(Math.floor(Math.random() * videos.length));

    return () => {
      videoElement.removeEventListener("ended", handleEnded);
    };
  }, [shuffledVideos.length]);

  const preventRightClick = (event) => {
    event.preventDefault();
  };

  return (
    <div className="flex justify-center items-center w-auto h-auto">
      <video
        className="w-[50%] h-[50%] max-[768px]:h-3/4: max-[768px]:w-3/4"
        ref={videoRef}
        controls
        autoPlay
        controlsList="nodownload"
        onContextMenu={preventRightClick}
        src={shuffledVideos[currentIndex]}
      ></video>
    </div>
  );
}

export default VideoPlayer;
