"use client";
import React from "react";

interface AudioPlayerProps {
    source: string;
}

const AudioPlayer = ({source}: AudioPlayerProps) => {
  return (
    <>
      <audio controls autoPlay>
        <source src={source} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </>
  );
};

export default AudioPlayer;
