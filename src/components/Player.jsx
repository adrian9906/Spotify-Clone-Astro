import { usePlayerStore } from "@/store/playerStore";
import { useEffect, useRef, useState } from "react";
import { Slider } from "./Slider";
import { useMenuStore } from "@/store/menuStore";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ToolTip";

export const Lyrics = ({ classname }) => (

  <svg role="img"
    height="16"
    width="16"
    fill="currentColor"
    aria-hidden="true"
    aria-label="Vista estás escuchando"
    viewBox="0 0 16 16">
    <path d="M13.426 2.574a2.831 2.831 0 0 0-4.797 1.55l3.247 3.247a2.831 2.831 0 0 0 1.55-4.797zM10.5 8.118l-2.619-2.62A63303.13 63303.13 0 0 0 4.74 9.075L2.065 12.12a1.287 1.287 0 0 0 1.816 1.816l3.06-2.688 3.56-3.129zM7.12 4.094a4.331 4.331 0 1 1 4.786 4.786l-3.974 3.493-3.06 2.689a2.787 2.787 0 0 1-3.933-3.933l2.676-3.045 3.505-3.99z">
    </path>
  </svg>
)

export const Random = ({ classname }) => (

  <svg role="img"
    height="16"
    width="16"
    fill="currentColor"
    aria-hidden="true"
    aria-label="Aleatorio"
    viewBox="0 0 16 16">
    <path d="M13.151.922a.75.75 0 1 0-1.06 1.06L13.109 3H11.16a3.75 3.75 0 0 0-2.873 1.34l-6.173 7.356A2.25 2.25 0 0 1 .39 12.5H0V14h.391a3.75 3.75 0 0 0 2.873-1.34l6.173-7.356a2.25 2.25 0 0 1 1.724-.804h1.947l-1.017 1.018a.75.75 0 0 0 1.06 1.06L15.98 3.75 13.15.922zM.391 3.5H0V2h.391c1.109 0 2.16.49 2.873 1.34L4.89 5.277l-.979 1.167-1.796-2.14A2.25 2.25 0 0 0 .39 3.5z">
    </path>
    <path d="m7.5 10.723.98-1.167.957 1.14a2.25 2.25 0 0 0 1.724.804h1.947l-1.017-1.018a.75.75 0 1 1 1.06-1.06l2.829 2.828-2.829 2.828a.75.75 0 1 1-1.06-1.06L13.109 13H11.16a3.75 3.75 0 0 1-2.873-1.34l-.787-.938z">

    </path>
  </svg>
)


export const Repeat = ({ classname }) => (

  <svg role="img"
    height="16"
    width="16"
    fill="currentColor"
    aria-hidden="true"
    aria-label="Repetir la cancion"
    viewBox="0 0 16 16">
    <path d="M0 4.75A3.75 3.75 0 0 1 3.75 1h8.5A3.75 3.75 0 0 1 16 4.75v5a3.75 3.75 0 0 1-3.75 3.75H9.81l1.018 1.018a.75.75 0 1 1-1.06 1.06L6.939 12.75l2.829-2.828a.75.75 0 1 1 1.06 1.06L9.811 12h2.439a2.25 2.25 0 0 0 2.25-2.25v-5a2.25 2.25 0 0 0-2.25-2.25h-8.5A2.25 2.25 0 0 0 1.5 4.75v5A2.25 2.25 0 0 0 3.75 12H5v1.5H3.75A3.75 3.75 0 0 1 0 9.75v-5z">
    </path>
  </svg>
)

export const Queue = ({ className }) => (
  <svg role="img"
    height="16"
    width="16"
    fill="currentColor"
    aria-hidden="true"
    aria-label="Cola"
    viewBox="0 0 16 16">
    <path d="M15 15H1v-1.5h14V15zm0-4.5H1V9h14v1.5zm-14-7A2.5 2.5 0 0 1 3.5 1h9a2.5 2.5 0 0 1 0 5h-9A2.5 2.5 0 0 1 1 3.5zm2.5-1a1 1 0 0 0 0 2h9a1 1 0 1 0 0-2h-9z"></path>
  </svg>
)
export const Pause = ({ className }) => (
  <svg
    className={className}
    role="img"
    height="16"
    width="16"
    aria-hidden="true"
    viewBox="0 0 16 16"
  >
    <path d="M2.7 1a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7H2.7zm8 0a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7h-2.6z"></path>
  </svg>
);

export const Play = ({ className }) => (
  <svg
    className={className}
    role="img"
    height="16"
    width="16"
    aria-hidden="true"
    viewBox="0 0 16 16"
  >
    <path d="M3 1.713a.7.7 0 0 1 1.05-.607l10.89 6.288a.7.7 0 0 1 0 1.212L4.05 14.894A.7.7 0 0 1 3 14.288V1.713z"></path>
  </svg>
);

export const VolumeSilence = () => (
  <svg
    fill="currentColor"
    role="presentation"
    height="16"
    width="16"
    aria-hidden="true"
    aria-label="Volumen apagado"
    viewBox="0 0 16 16"
  >
    <path d="M13.86 5.47a.75.75 0 0 0-1.061 0l-1.47 1.47-1.47-1.47A.75.75 0 0 0 8.8 6.53L10.269 8l-1.47 1.47a.75.75 0 1 0 1.06 1.06l1.47-1.47 1.47 1.47a.75.75 0 0 0 1.06-1.06L12.39 8l1.47-1.47a.75.75 0 0 0 0-1.06z"></path>
    <path d="M10.116 1.5A.75.75 0 0 0 8.991.85l-6.925 4a3.642 3.642 0 0 0-1.33 4.967 3.639 3.639 0 0 0 1.33 1.332l6.925 4a.75.75 0 0 0 1.125-.649v-1.906a4.73 4.73 0 0 1-1.5-.694v1.3L2.817 9.852a2.141 2.141 0 0 1-.781-2.92c.187-.324.456-.594.78-.782l5.8-3.35v1.3c.45-.313.956-.55 1.5-.694V1.5z"></path>
  </svg>
);

export const Volume = () => (
  <svg
    fill="currentColor"
    role="presentation"
    height="16"
    width="16"
    aria-hidden="true"
    aria-label="Volumen alto"
    id="volume-icon"
    viewBox="0 0 16 16"
  >
    <path d="M9.741.85a.75.75 0 0 1 .375.65v13a.75.75 0 0 1-1.125.65l-6.925-4a3.642 3.642 0 0 1-1.33-4.967 3.639 3.639 0 0 1 1.33-1.332l6.925-4a.75.75 0 0 1 .75 0zm-6.924 5.3a2.139 2.139 0 0 0 0 3.7l5.8 3.35V2.8l-5.8 3.35zm8.683 4.29V5.56a2.75 2.75 0 0 1 0 4.88z"></path>
    <path d="M11.5 13.614a5.752 5.752 0 0 0 0-11.228v1.55a4.252 4.252 0 0 1 0 8.127v1.55z"></path>
  </svg>
);

export const Next = () => (
  <svg
    role="img"
    height="16"
    width="16"
    fill="currentColor"
    aria-hidden="true"
    aria-label="Siguiente"
    viewBox="0 0 16 16"
  >
    <path d="M12.7 1a.7.7 0 0 0-.7.7v5.15L2.05 1.107A.7.7 0 0 0 1 1.712v12.575a.7.7 0 0 0 1.05.607L12 9.149V14.3a.7.7 0 0 0 .7.7h1.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7h-1.6z"></path>
  </svg>
);

export const Previous = () => (
  <svg
    role="img"
    height="16"
    width="16"
    fill="currentColor"
    aria-hidden="true"
    aria-label="Anterior"
    viewBox="0 0 16 16"
  >
    <path d="M3.3 1a.7.7 0 0 1 .7.7v5.15l9.95-5.744a.7.7 0 0 1 1.05.606v12.575a.7.7 0 0 1-1.05.607L4 9.149V14.3a.7.7 0 0 1-.7.7H1.7a.7.7 0 0 1-.7-.7V1.7a.7.7 0 0 1 .7-.7h1.6z"></path>
  </svg>
);

export const Listening = () => (
  <svg
    role="img"
    height="16"
    width="16"
    fill="currentColor"
    aria-hidden="true"
    aria-label="Vista estás escuchando"
    viewBox="0 0 16 16"
  >
    <path d="M11.196 8 6 5v6l5.196-3z"></path>
    <path d="M15.002 1.75A1.75 1.75 0 0 0 13.252 0h-10.5a1.75 1.75 0 0 0-1.75 1.75v12.5c0 .966.783 1.75 1.75 1.75h10.5a1.75 1.75 0 0 0 1.75-1.75V1.75zm-1.75-.25a.25.25 0 0 1 .25.25v12.5a.25.25 0 0 1-.25.25h-10.5a.25.25 0 0 1-.25-.25V1.75a.25.25 0 0 1 .25-.25h10.5z"></path>
  </svg>
);

function CurrentSong({ image, title, artists, albumId }) {
  return (
    <div className="flex items-center gap-5 relative overflow-hidden">
      <picture className="w-[3.8rem] h-[3.8rem] bg-zinc-900 rounded-md shadow-lg overflow-hidden">
        <img className="w-full h-full" src={image} alt={title} />
      </picture>

      <div className="flex flex-col">
        <a href={`/playlist/${albumId}`} className="hover:underline text-white">
          <h3 className="font-semibold text-sm block ">{title}</h3>
        </a>
        <span className="text-sm opacity-80">{artists?.join(", ")}</span>
      </div>
    </div>
  );
}

function SongControl({ audio }) {
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(function () {
    audio.current.addEventListener("timeupdate", handleTimeUpdate);
    return () => {
      audio.current.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, []);

  const handleTimeUpdate = () => {
    setCurrentTime(audio.current.currentTime);
  };

  const formatTime = (time) => {
    if (time === null) return "00:00";

    const seconds = Math.floor(time % 60);
    const minutes = Math.floor(time / 60);

    return `${minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
  };

  const duration = audio?.current?.duration ?? 0;

  return (
    <div className="flex gap-x-2 text-xs pt-2">
      <span className="opacity-50 w-12 text-right">
        {formatTime(currentTime)}
      </span>

      <Slider
        defaultValue={[0]}
        value={[currentTime]}
        max={audio?.current?.duration ?? 0}
        min={0}
        className="w-[400px]"
        onValueChange={(value) => {
          audio.current.currentTime = value;
        }}
      />

      <span className="opacity-50 w-12">
        {duration ? formatTime(duration) : "0:00"}
      </span>
    </div>
  );
}

function VolumeControl() {
  const volume = usePlayerStore((state) => state.volume);
  const setVolume = usePlayerStore((state) => state.setVolume);
  const previousVolumeRef = useRef(volume);

  const isVolumeSilenced = volume < 0.1;

  function handleClickVolume() {
    if (isVolumeSilenced) {
      setVolume(previousVolumeRef.current);
    } else {
      previousVolumeRef.current = volume;
      setVolume(0);
    }
  }

  return (
    <div className="flex items-center justify-center gap-x-3">
      <div className="group transition-all duration-500 flex relative">
        <div
          className={`absolute ${volume < 0.1 ? "right-[-3.5rem]" : " right-[-1.8rem]"
            } hidden bottom-8 bg-[#282828] px-2 py-1 rounded-md text-sm opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:block text-nowrap z-10`}
        >
          <span>{volume < 0.1 ? "Desactivar silenciar" : "Silenciar"}</span>
        </div>

        <button
          className="opacity-70 hover:opacity-100 transition"
          onClick={handleClickVolume}
        >
          {volume < 0.1 ? <VolumeSilence /> : <Volume />}
        </button>
      </div>
      <Slider
        defaultValue={[100]}
        max={100}
        min={0}
        className="w-[95px]"
        value={[volume * 100]}
        onValueChange={(value) => {
          const [newVolume] = value;
          const volumeValue = newVolume / 100;
          setVolume(volumeValue);
        }}
      />
    </div>
  );
}

export function Player() {
  const { currentMusic, isPlaying, setIsPlaying, volume, setCurrentMusic } =
    usePlayerStore((state) => state);
  const audioRef = useRef(null);
  const volumeRef = useRef(null);
  const [isActivateRandom, setActivateRandom] = useState(false)

  const { isOpen,isOpenQueue ,setOpenQueue, setIsOpen } = useMenuStore((state) => state);

  console.log(isOpenQueue)
  useEffect(
    function () {
      isPlaying ? audioRef.current.play() : audioRef.current.pause();
    },
    [isPlaying]
  );

  useEffect(
    function () {
      audioRef.current.volume = volume;
    },
    [volume]
  );

  useEffect(
    function () {
      const { song, playlist, songs } = currentMusic;
      if (song) {
        const src = `/music/${playlist.id}/0${song.id}.mp3`;
        audioRef.current.src = src;
        audioRef.current.volume = volume;
        audioRef.current.play();
      }
    },
    [currentMusic]
  );

  const handlePlay = () => {
    setIsPlaying(!isPlaying);
  };

  function handlePrevious() {
    const { song, playlist, songs } = currentMusic;
    const index = songs.findIndex((s) => s.id === song.id);
    const previousSong = songs[index - 1];

    if (previousSong) {
      const src = `/music/${playlist.id}/0${previousSong.id}.mp3`;
      audioRef.current.src = src;
      audioRef.current.play();
      setCurrentMusic({ ...currentMusic, song: previousSong });
    }
  }

  function handleNext() {
    const { song, playlist, songs } = currentMusic;
    let nextSong = null
    const index = songs.findIndex((s) => s.id === song.id);
    if(isActivateRandom){
      let indexRandom = Math.floor(Math.random() * (songs.length))
      while (indexRandom === index) {
        indexRandom = Math.floor(Math.random() * (songs.length))
      }
      nextSong = songs[indexRandom + 1];
    }else{
      nextSong = songs[index + 1]
    }

    if (nextSong) {
      const src = `/music/${playlist.id}/0${nextSong.id}.mp3`;
      audioRef.current.src = src;
      audioRef.current.play();
      setCurrentMusic({ ...currentMusic, song: nextSong });
    }
  }

  return (
    // <div className="flex justify-between flex-row w-full px-1 z-50">
    <div className="grid grid-cols-3">
      <div className=" w-[200px]">
        <CurrentSong {...currentMusic.song} />
      </div>

      <div className="grid place-content-center gap-4 flex-1">
        <div className="flex justify-center flex-col items-center">
          <div className="flex items-center gap-8">
            <TooltipProvider delayDuration={300}>
              <Tooltip>
                <TooltipTrigger>
                  <button
                    className={`${isActivateRandom? "text-green-500" : "text-[#b3b3b3] hover:text-white"}`}
                    onClick={()=>setActivateRandom(!isActivateRandom)}
                  >
                    <Random />
                  </button>

                </TooltipTrigger>
                <TooltipContent className="bg-gray-900">
                  <p>Random music</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>


            <TooltipProvider delayDuration={300}>
              <Tooltip>
                <TooltipTrigger>
                  <button
                    onClick={handlePrevious}
                    className="text-[#b3b3b3] hover:text-white"
                  >
                    <Previous />
                  </button>

                </TooltipTrigger>
                <TooltipContent className="bg-gray-900">
                  <p>Previus</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <TooltipProvider delayDuration={300}>
              <Tooltip>
                <TooltipTrigger>
                  <button onClick={handlePlay} className="bg-white rounded-full p-2">
                    {isPlaying ? <Pause /> : <Play />}
                  </button>
                </TooltipTrigger>
                <TooltipContent className="bg-gray-900">
                  <p>
                    {isPlaying ? 'Pause' : 'Play'}
                  </p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <TooltipProvider delayDuration={300}>
              <Tooltip>
                <TooltipTrigger>
                  <button
                    onClick={handleNext}
                    className="text-[#b3b3b3] hover:text-white"
                  >
                    <Next />
                  </button>
                </TooltipTrigger>
                <TooltipContent className="bg-gray-900">
                  Next
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>


            <TooltipProvider delayDuration={300}>
              <Tooltip>
                <TooltipTrigger>
                  <button
                    className="text-[#b3b3b3] hover:text-white"
                  >
                    <Repeat />
                  </button>
                </TooltipTrigger>
                <TooltipContent className="bg-gray-900">
                  Repeat
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
          <SongControl audio={audioRef} />
        </div>
      </div>

      <div className="flex gap-3 items-center justify-end">
        <TooltipProvider delayDuration={300}>
          <Tooltip>
            <TooltipTrigger>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`transition-all hover:scale-105 ${isOpen ? "text-green-500" : "text-[#b3b3b3] hover:text-white"
                  }`}
              >
                <span>
                  <Listening />
                </span>
              </button>

            </TooltipTrigger>
            <TooltipContent className="bg-gray-900">
              Listening
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <TooltipProvider delayDuration={300}>
          <Tooltip>
            <TooltipTrigger>
              <button
              >
                <span>
                  <Lyrics />
                </span>
              </button>

            </TooltipTrigger>
            <TooltipContent className="bg-gray-900">
              Lyrics
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <TooltipProvider delayDuration={300}>
          <Tooltip>
            <TooltipTrigger>
              <button
              onClick={() => setOpenQueue(!isOpenQueue)}
              className={`transition-all hover:scale-105 ${isOpenQueue ? "text-green-500" : "text-[#b3b3b3] hover:text-white"
                }`}>
                <span>
                  <Queue />
                </span>
              </button>

            </TooltipTrigger>
            <TooltipContent className="bg-gray-900">
              Queue
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <VolumeControl />
      </div>

      <audio ref={audioRef} />
    </div>
  );
}
