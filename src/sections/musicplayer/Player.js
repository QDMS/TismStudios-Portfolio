import React, { useState, useRef, useEffect } from "react";
import {
  BsFillPlayCircleFill,
  BsFillPauseCircleFill,
  BsFillSkipBackwardCircleFill,
  BsFillSkipForwardCircleFill,
} from "react-icons/bs";

export default function Player({ currentSong, currentIndex }) {
  const [isPlaying, setIsplaying] = useState(false);
  const audioRef = useRef(null);
  const togglePlay = () => {
    setIsplaying(!isPlaying);
  };
  useEffect(() => {
  if (isPlaying) {
    audioRef.current.play();
  }
  else {
    audioRef.current.pause();
  }
  }, [isPlaying])
  
  return (
    <div>
      <audio ref={audioRef}
      src={currentSong.music}
      >

      </audio>
      <h1 style={{ textAlign: "center", marginBottom: 10 }}>
        TismStudio Music Player
      </h1>
      <div className="player-card">
        {currentSong ? (
          <div>
            <h3 className="activeSong-name">{currentSong.name}</h3>
            <h5 className="activeArtist-name">{currentSong.creator}</h5>
          </div>
        ) : (
          ""
        )}

        <div className="control-icons">
          <BsFillSkipBackwardCircleFill
            color="white"
            className="icons"
            size={50}
          />

          {isPlaying ? (
            <BsFillPauseCircleFill
              color="#614923"
              className="icons"
              size={70}
              onClick={togglePlay}
            />
          ) : (
            <BsFillPlayCircleFill
              color="#614923"
              className="icons"
              size={70}
              onClick={togglePlay}
            />
          )}

          <BsFillSkipForwardCircleFill
            color="white"
            className="icons"
            size={50}
          />
        </div>
      </div>
    </div>
  );
}
