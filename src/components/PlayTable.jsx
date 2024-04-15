import React from 'react'
import { usePlayerStore } from "@/store/playerStore";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ToolTip";

export const PlaySongTable = ()=>(
    <svg 
    role="img"
    height="24"
    width="24"
    aria-hidden="true"
    viewBox="0 0 24 24"
    fill="currentColor">
      <path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z"></path>
    </svg>
  )
export const PauseSongTable = ()=>(
    <svg
    role="img"
    height="24"
    width="24"
    aria-hidden="true"
    viewBox="0 0 24 24"
    fill="currentColor">
        <path d='M5.7 3a.7.7 0 0 0-.7.7v16.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V3.7a.7.7 0 0 0-.7-.7H5.7zm10 0a.7.7 0 0 0-.7.7v16.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V3.7a.7.7 0 0 0-.7-.7h-2.6z'>

        </path>
    </svg>
)


const PlayTable = ({id, idSong, songName}) => {
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
         <TooltipProvider delayDuration={300}>
          <Tooltip>
            <TooltipTrigger>
            <PauseSongTable />
            </TooltipTrigger>
            <TooltipContent className="bg-gray-900">
              Pausa
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
       
      ) : (
        <TooltipProvider delayDuration={300}>
          <Tooltip>
            <TooltipTrigger>
            <PlaySongTable />
            </TooltipTrigger>
            <TooltipContent className="bg-gray-900">
            Reproducir {songName}
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      )}
        </button>
    )
}

export default PlayTable