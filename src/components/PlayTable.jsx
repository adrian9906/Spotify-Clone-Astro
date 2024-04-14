import React from 'react'
import { Pause, Play } from "./Player";
import { usePlayerStore } from "@/store/playerStore";

const PlayTable = ({id, idSong}) => {
    const { currentMusic, isPlaying, setIsPlaying, setCurrentMusic } =
    usePlayerStore((state) => state);
  const isPlayingPlaylist = isPlaying && currentMusic?.playlist.id === id;

  function handleClick() {
    if (isPlayingPlaylist) {
      setIsPlaying(false);
      return;
    }

    fetch(`/api/get-info-playlist.json?id=${id}`)
      .then((res) => res.json())
      .then((data) => {
        const { songs, playlist } = data;

        setIsPlaying(true);
        setCurrentMusic({ songs, playlist, song: songs[idSong-1] });
      });
  }
    return (
        <button onClick={handleClick} className="play-button">
            {isPlayingPlaylist ? (
        <Pause />
      ) : (
        <Play />
      )}
        </button>
    )
}

export default PlayTable