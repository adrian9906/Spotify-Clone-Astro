import { Pause, Play } from "./Player";
import { usePlayerStore } from "@/store/playerStore";

export default function CardPlayButton({ id, sizeIcon = "small", size = "medium" }) {
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
        setCurrentMusic({ songs, playlist, song: songs[0] });
      });
  }

  const iconClassName = sizeIcon === "small" ? "w-4 h-4" : "w-5 h-5";

  const buttonClassName = size === "small" ? "p-2" : "p-4";

  return (
    <button
      onClick={handleClick}
      className={`card-play-button rounded-full bg-green-500 ${buttonClassName} hover:scale-105 transition hover:bg-green-400`}
    >
      {isPlayingPlaylist ? (
        <Pause className={iconClassName} />
      ) : (
        <Play className={iconClassName} />
      )}
    </button>
  );
}

