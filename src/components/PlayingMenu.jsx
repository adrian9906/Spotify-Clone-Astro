import { useMenuStore } from "@/store/menuStore";
import { usePlayerStore } from "@/store/playerStore";

function PlayingMenu() {
  const { isOpen, setIsOpen } = useMenuStore((state) => state);
  const { currentMusic } = usePlayerStore((state) => state);
  const { song } = currentMusic;

  if (!isOpen) return <div></div>;

  if (!song)
    return (
      <div className="flex items-center flex-col p-4">
        <div className="self-end">
          <button onClick={() => setIsOpen(!isOpen)}>X</button>
        </div>

        <h1 className="mt-10">¡Inicia reproduciendo alguna canción!</h1>
      </div>
    );

  return (
    <div className="flex flex-col gap-6 p-4">
      <div>
        <div className="flex justify-between mb-3">
          <h2>{song.title}</h2>
          <button onClick={() => setIsOpen(!isOpen)}>X</button>
        </div>
        <picture className="aspect-square w-full h-auto block">
          <img
            className="rounded-md"
            src={song.image}
            alt={`${song.title} cover image`}
          />
        </picture>
        <div>
          <h3 className="mt-2 text-4xl font-bold">{song.title}</h3>
          <span className="text-base text-zinc-300">
            {song.artists.join(", ")}
          </span>
        </div>
      </div>

      <div className="bg-[#242424] p-3 rounded-md">
        <h4 className="mb-3">Acerca del artista</h4>
        <picture className="aspect-square w-20 h-auto block mb-2">
          <img className="rounded-full" src={song.image} alt="" />
        </picture>
        <div className="flex flex-col">
          <span>{song.artists.join(", ")}</span>

          <p className="text-zinc-300 font-normal">
            {(Math.random() * 5).toFixed() + "000"} oyentes mensuales
          </p>
        </div>
      </div>
    </div>
  );
}

export default PlayingMenu;
