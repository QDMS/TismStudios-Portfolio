import React, { useState, useRef, useEffect } from "react";
import {
  BsFillPlayCircleFill,
  BsFillPauseCircleFill,
  BsFillSkipBackwardCircleFill,
  BsFillSkipForwardCircleFill,
} from "react-icons/bs";
import Speaker from "../../assets/speaker.gif";

export default function Player({
  currentSong,
  currentIndex,
  nextSong,
  prevSong,
}) {
  const [isPlaying, setIsplaying] = useState(false);
  const audioRef = useRef(null);
  const togglePlay = () => {
    setIsplaying(!isPlaying);
  };
  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying, currentIndex]);

  return (
    <div>
      <audio ref={audioRef} src={currentSong.music}></audio>
      <h1 style={{ textAlign: "center", marginBottom: 10 }}>
        TismStudio Music Player
      </h1>
      <div className="player-card">
        <div className="image-container">
        <img className="speaker-image" src={Speaker} alt='Speaker'/>
        </div>
        <h2 className="activeSong-name">{currentSong.name}</h2>
        <h4 className="activeArtist-name">{currentSong.creator}</h4>

        <div className="control-icons">
          <BsFillSkipBackwardCircleFill
            color="white"
            className="icons"
            size={50}
            onClick={prevSong}
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
            onClick={nextSong}
          />
        </div>
      </div>
    </div>
  );
}
