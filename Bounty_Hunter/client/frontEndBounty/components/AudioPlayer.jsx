import React, { useEffect, useRef } from "react";
import Imperial_March from './Imperial_March.mp3'


export default function AudioPlayer() {
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.1; // Set the volume to 0.3 (30%)
    }
  }, []);

  const handleKeyDown = (event) => {
    if (event.code === "Space" && !isInputFocused()) {
      event.preventDefault(); // Prevent the space bar from scrolling the page
      toggleAudio();
    }
  };

  const isInputFocused = () => {
    const activeElement = document.activeElement;
    return activeElement && activeElement.tagName === "INPUT";
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const toggleAudio = () => {
    if (audioRef.current.paused) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  };

  return (
    <div>
      {/* <h2>Audio Player</h2> */}
      <audio ref={audioRef} src={Imperial_March} autoPlay loop controls />
    </div>
  );
}


