import { useState } from "react";
import AudioFiles from "./AudioFiles";
import { audios } from "./audioData";
import "./musicPlayer.css";
import Player from "./Player";

const MusicPlayer = () => {
  const [songs, setSongs] = useState(audios);
  const [currentIndex, setCurrentIndex] = useState(null);
  const [currentSong, setCurrentSong] = useState({});
  const getSongData = (song, index) => {
    setCurrentIndex(index)
    setCurrentSong(song);
  };
  return (
    <section id="musicPlayer">
      <>
        <div className="player-main">
          <Player currentSong={currentSong} currentIndex={currentIndex}/>
        </div>
        <div className="app-main" data-aos="fade-up">
          {songs.map((song, index) => {
            return <AudioFiles song={song} getSongData={getSongData} index={index}/>;
          })}
        </div>
      </>
    </section>
  );
};

export default MusicPlayer;
