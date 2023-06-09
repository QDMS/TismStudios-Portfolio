import React from "react";
import "./musicPlayer.css";

export default function AudioFiles({
    song,
    getSongData,
    index
}) {
  return (
    <div className="player-container" onClick={() => getSongData(song, index)}>
      <h4 className="song-name">{song.name}</h4>
    </div>
  );
}
