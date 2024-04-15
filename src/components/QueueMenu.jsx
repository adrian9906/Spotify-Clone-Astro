import { playlists } from "@/lib/data";
import { useMenuStore } from "@/store/menuStore";
import { usePlayerStore } from "@/store/playerStore";

export default function QueueMenu() {
  const { isOpenQueue, setOpenQueue } = useMenuStore((state) => state);
  const { currentMusic } = usePlayerStore((state) => state);
  const { song, songs, playlist } = currentMusic;
  const playListSongs = songs.filter(
  (song) => song.albumId === playlist?.albumId)
  const index = playListSongs.indexOf(song)
  if (index > -1){
      playListSongs.splice(0,index+1)
  }

  if (!isOpenQueue) return <div></div>;

  if (playListSongs.length === 0){
    return (
    <div className="flex flex-col gap-6 p-4">
        <span>
        Esta sonando
      </span>
      <div className=" flex flex-row bg-[#242424] p-3 rounded-md hover:bg-zinc-800">
        <picture className="w-20 h-auto block mb-2 justify-start">
          <img className="rounded-full" src={song.image} alt="" />
        </picture>
        <div className="flex flex-col px-3">
            <span>{song.title}</span>
  
            <p className="text-zinc-300 font-normal">
            {song.artists.join(", ")}
            </p>
          </div>
      </div>
        <br />
        <h1 className="mt-10">¡No hay más canciones en {playlist.title}!</h1>
    </div>
    )
    } 

  if (!song)
    return (
      <div className="flex items-center flex-col p-4">
        <div className="self-end">
          <button onClick={() => setOpenQueue(!isOpenQueue)}>X</button>
        </div>

        <h1 className="mt-10">¡Inicia reproduciendo alguna canción!</h1>
      </div>
    );

  return (
    <div className="flex flex-col gap-6 p-4 w-full h-full">
      <span>
        Esta sonando
      </span>
      <div className=" flex flex-row bg-[#242424] p-3 rounded-md hover:bg-zinc-800">
        <picture className="w-20 h-auto block mb-2 justify-start">
          <img className="rounded-full" src={song.image} alt="" />
        </picture>
        <div className="flex flex-col px-3">
            <span>{song.title}</span>
  
            <p className="text-zinc-300 font-normal">
            {song.artists.join(", ")}
            </p>
          </div>
      </div>
      <br />
      <span>
        Siguiente de: {playlist.title}
        </span>
      {playListSongs.map((songMusic,index)=>(
        <div key={index} className=" flex flex-row bg-[#242424] p-3 rounded-md hover:bg-zinc-800">
          <picture className="w-20 h-auto block mb-2 justify-start">
            <img className="rounded-full" src={songMusic.image} alt="" />
          </picture>
          <div className="flex flex-col px-3">
            <span>{songMusic.title}</span>
  
            <p className="text-zinc-300 font-normal">
            {songMusic.artists.join(", ")}
            </p>
          </div>
        </div>
      ))}
      
    </div>
  );
}


