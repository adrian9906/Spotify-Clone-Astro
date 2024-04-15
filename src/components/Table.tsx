import React, { useState } from 'react';
import { Pause, Play } from "./Player";
import { type Song, type Playlist } from '../lib/data';
import PlayTable from './PlayTable';
import { usePlayerStore } from '@/store/playerStore';
interface Props {
 songs: Song[];
 playlist: Playlist | undefined
}

export const Time2 = () =>(
  <svg
  role="img"
  height="16"
  width="16"
  aria-hidden="true"
  viewBox="0 0 16 16"
  fill="currentColor"
  ><path
    d="M8 1.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z"
  ></path><path
    d="M8 3.25a.75.75 0 0 1 .75.75v3.25H11a.75.75 0 0 1 0 1.5H7.25V4A.75.75 0 0 1 8 3.25z"
  ></path></svg
>
)

const TablaConBotonPlay: React.FC<Props> = ({ songs, playlist }) => {
  const { isPlaying } =
  usePlayerStore((state) => state);
  const [isBoton, setBoton] = useState<number | null>(null);

 return (
    <table className="table-auto text-left min-w-full divide-y divide-gray-500/20">
      <thead>
        <tr className="text-zinc-400 text-sm">
          <th className="px-4 py-2 font-light">#</th>
          <th className="px-4 py-2 font-light">Título</th>
          <th className="px-4 py-2 font-light">Álbum</th>
          <th className="px-4 py-2 font-light"><Time2 /></th>
        </tr>
      </thead>
      <tbody>
      {songs.map((song, index) => (
          <tr  key={index} onMouseEnter={() => setBoton(index)} onMouseLeave={() => setBoton(null)} className={`rounded-lg overflow-hidden transition duration-300 text-sm font-light ${isPlaying ? "text-green-500": "text-gray-300 hover:bg-white/10"}`}>
            
            <td className="px-4 py-2 rounded-tl-lg rounded-bl-lg w-5">
              {isBoton === index ? (
                <PlayTable id={playlist?.id} idSong={song.id} songName={song.title}/>
              ):(index + 1) }
              </td>
            <td className="px-4 py-2 flex gap-3">
              <picture>
                <img 
                 src={song.image} 
                 alt={song.title}
                 className="w-11 h-11 rounded-md"
                />
              </picture>  
              <div className="flex flex-col">
                <h3 className="text-white text-base font-normal">{song.title}</h3>
                <span>{song.artists.join(", ")}</span>
              </div>
            </td>
            <td className="px-4 py-2">{song.album}</td>
            <td className="px-4 py-2 rounded-tr-lg rounded-br-lg">{song.duration}</td>
          </tr>
        ))}
      </tbody>
    </table>
 );
};

export default TablaConBotonPlay;
