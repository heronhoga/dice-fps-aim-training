"use client";
import React from "react";

interface AudioPlayerProps {
  source: string;
}

import { useState } from "react";

const AudioPlayer = ({ source }: AudioPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
    const audio = document.getElementById("audioPlayer") as HTMLAudioElement;
    if (audio) {
      if (!isPlaying) {
        audio.play();
      } else {
        audio.pause();
      }
    }
  };

  return (
    <div>
      <button onClick={togglePlay} className="focus:outline-none">
        {isPlaying ? "Pause music" : "Play music"}
      </button>
      <audio id="audioPlayer" src={source} />
    </div>
  );
};

export default AudioPlayer;
