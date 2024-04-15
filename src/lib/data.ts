import { colors } from "./colors";

export interface Playlist {
  id: string;
  albumId: number;
  title: string;
  color: (typeof colors)[keyof typeof colors];
  cover: string;
  artists: string[];
}

export const playlists: Playlist[] = [
  {
    id: "1",
    albumId: 1,
    title: "Rock",
    color: colors.yellow,
    cover:
      "/music/1/rock.jpg",
    artists: ["Varios"],
  },
  {
    id: "2",
    albumId: 2,
    title: "Lo-Fi Chill Session",
    color: colors.green,
    cover:
      "https://vinyl.lofirecords.com/cdn/shop/files/2amsynth-vinyl.png?v=1693312187",
    artists: ["Kupla", "Blue Fox"],
  },
  {
    id: "5",
    albumId: 5,
    title: "Chau Saura Session",
    color: colors.purple,
    cover: "https://f4.bcbits.com/img/a2793859494_16.jpg",
    artists: ["Chau Saura", "amies", "kyu"],
  },
  {
    id: "6",
    albumId: 6,
    title: "M.O.R Vol 1",
    color: colors.orange,
    cover: "/music/6/Ferxxo2.jpg",
    artists: ["Feid"],
  },
  {
    id: '7',
    albumId: 7,
    title: "Bubalu",
    color: colors.green,
    cover:
      "/music/7/FeidAlbum.jpg",
    artists: ["Feid", "Rema"],
  },
];

export const playlistTusMeGusta: Playlist[] = [
  {
    id: "7",
    albumId:7,
    title: "Tus me gusta",
    color: colors.purple,
    cover: "https://misc.scdn.co/liked-songs/liked-songs-300.png",
    artists: ["Feid","Rema"],
  },
];

export const morePlaylists = playlists.map((item) => ({
  ...item,
  id: item.id + "_more",
}));

export const sidebarPlaylists = playlists.map((item) => ({
  ...item,
  id: item.id + "_side",
}));

export const allPlaylists = [
  ...playlists,
  ...morePlaylists,
  ...sidebarPlaylists,
];

export interface Song {
  id: number;
  albumId: number;
  title: string;
  image: string;
  artists: string[];
  album: string;
  duration: string;
}

export const songs: Song[] = [
  {
    id: 1,
    albumId: 1,
    title: "Zombie",
    image: `/music/1/rock.jpg`,
    artists: ["The Cranberries"],
    album: "Rock",
    duration: "5:08",
  },
  {
    id: 2,
    albumId: 1,
    title: "Highway To Hell",
    image: `/music/1/rock.jpg`,
    artists: ["AC-DC"],
    album: "Rock",
    duration: "3:30",
  },
  {
    id: 3,
    albumId: 1,
    title: "Nothing Else Matters",
    image: `/music/1/rock.jpg`,
    artists: ["Metallica"],
    album: "Rock",
    duration: "6:26",
  },
  {
    id: 4,
    albumId: 1,
    title: "I Was Made For Lovin' You",
    image: `/music/1/rock.jpg`,
    artists: ["Kiss"],
    album: "Rock",
    duration: "4:29",
  },
  {
    id: 5,
    albumId: 1,
    title: "Numb",
    image: `/music/1/rock.jpg`,
    artists: ["Linkin Park"],
    album: "Rock",
    duration: "3:08",
  },
  {
    id: 6,
    albumId: 1,
    title: "Hotel California",
    image: `/music/1/rock.jpg`,
    artists: ["The Eagles"],
    album: "Rock",
    duration: "6:31",
  },
  {
    id: 7,
    albumId: 1,
    title: "Creep",
    image: `/music/1/rock.jpg`,
    artists: ["Radiohead"],
    album: "Rock",
    duration: "3:57",
  },
  {
    id: 8,
    albumId: 1,
    title: "Wonderwall",
    image: `/music/1/rock.jpg`,
    artists: ["Oasis"],
    album: "Rock",
    duration: "4:20",
  },
  {
    id: 9,
    albumId: 1,
    title: "Sweet Child O' Mine",
    image: `/music/1/rock.jpg`,
    artists: ["Guns N' Roses"],
    album: "Rock",
    duration: "5:56",
  },
  {
    id: 10,
    albumId: 1,
    title: "Queen - Bohemian Rhapsody",
    image: `/music/1/rock.jpg`,
    artists: ["Queen"],
    album: "Rock",
    duration: "6:06",
  },
  {
    id: 1,
    albumId: 2,
    title: "Silent Rain",
    image: `https://vinyl.lofirecords.com/cdn/shop/files/2amsynth-vinyl.png?v=1693312187`,
    artists: ["Urban Nocturne"],
    album: "Midnight Tales",
    duration: "3:40",
  },
  {
    id: 2,
    albumId: 2,
    title: "Lost Pages",
    image: `https://vinyl.lofirecords.com/cdn/shop/files/2amsynth-vinyl.png?v=1693312187`,
    artists: ["Urban Nocturne"],
    album: "Midnight Tales",
    duration: "3:20",
  },
  {
    id: 3,
    albumId: 2,
    title: "Midnight Tales",
    image: `https://vinyl.lofirecords.com/cdn/shop/files/2amsynth-vinyl.png?v=1693312187`,
    artists: ["Urban Nocturne"],
    album: "Midnight Tales",
    duration: "3:50",
  },
  {
    id: 4,
    albumId: 2,
    title: "City Lights",
    image: `https://vinyl.lofirecords.com/cdn/shop/files/2amsynth-vinyl.png?v=1693312187`,
    artists: ["Urban Nocturne"],
    album: "Midnight Tales",
    duration: "3:30",
  },
  {
    id: 5,
    albumId: 2,
    title: "Night Drive",
    image: `https://vinyl.lofirecords.com/cdn/shop/files/2amsynth-vinyl.png?v=1693312187`,
    artists: ["Urban Nocturne"],
    album: "Midnight Tales",
    duration: "4:20",
  },
  {
    id: 1,
    albumId: 5,
    title: "Moonlit Walk",
    image: "https://f4.bcbits.com/img/a2793859494_16.jpg",
    artists: ["LoFi Dreamer"],
    album: "Chau Saura Session",
    duration: "3:12",
  },
  {
    id: 2,
    albumId: 5,
    title: "Coffee Daze",
    image: "https://f4.bcbits.com/img/a2793859494_16.jpg",
    artists: ["LoFi Dreamer"],
    album: "Chau Saura Session",
    duration: "4:07",
  },
  {
    id: 3,
    albumId: 5,
    title: "Skyline Serenade",
    image: "https://f4.bcbits.com/img/a2793859494_16.jpg",
    artists: ["LoFi Dreamer"],
    album: "Chau Saura Session",
    duration: "3:50",
  },
  {
    id: 4,
    albumId: 5,
    title: "Urban Echoes",
    image: "https://f4.bcbits.com/img/a2793859494_16.jpg",
    artists: ["LoFi Dreamer"],
    album: "Chau Saura Session",
    duration: "3:30",
  },
  {
    id: 5,
    albumId: 5,
    title: "Night's End",
    image: "https://f4.bcbits.com/img/a2793859494_16.jpg",
    artists: ["LoFi Dreamer"],
    album: "Chau Saura Session",
    duration: "4:20",
  },
  {
    id: 1,
    albumId: 6,
    title: "Ferxxo x Ñejo",
    image: `/music/6/Nea.jpg`,
    artists: ["Feid,Ñejo"],
    album: "Ferxxo",
    duration: "3:35"
  },
  {
    id: 2,
    albumId: 6,
    title: "Porfa (Remix)",
    image: `/music/6/Nea.jpg`,
    artists: ["Feid, J Balvin, Sech, Maluma, Nicky Jam, Justin Quiles"],
    album: "Ferxxo",
    duration: "5:33"
  },
  {
    id: 3,
    albumId: 6,
    title: "X19X",
    image: `/music/6/Ferxxo2.jpg`,
    artists: ["Feid"],
    album: "Ferxxo",
    duration: "2:41"
  },
  {
    id: 4,
    albumId: 6,
    title: "Ateo",
    image: `/music/6/Ferxxo2.jpg`,
    artists: ["Feid"],
    album: "Ferxxo",
    duration: "2:18"
  },
  {
    id: 1,
    albumId: 7,
    title: "Bubalu",
    image: `/music/7/FeidAlbum.jpg`,
    artists: ["Feid,Rema"],
    album: "Ferxxo",
    duration: "3:48"
  },
  {
    id: 2,
    albumId: 7,
    title: "Tengo Fe.",
    image: `/music/7/FeidAlbum.jpg`,
    artists: ["Feid"],
    album: "Ferxxo",
    duration: "2:26"
  },
  {
    id: 3,
    albumId: 7,
    title: "JORDAN IV",
    image: `/music/7/FeidAlbum.jpg`,
    artists: ["Feid"],
    album: "Ferxxo",
    duration: "2:42"
  },
  {
    id: 4,
    albumId: 7,
    title: "XXXX",
    image: `/music/7/FeidAlbum.jpg`,
    artists: ["Feid"],
    album: "Ferxxo",
    duration: "1:57"
  },
  {
    id: 5,
    albumId: 7,
    title: "Ferxxo VI",
    image: `/music/7/FeidAlbum.jpg`,
    artists: ["Feid"],
    album: "Ferxxo",
    duration: "1:42"
  },
  {
    id: 6,
    albumId: 7,
    title: "Hectol",
    image: `/music/7/FeidAlbum.jpg`,
    artists: ["Feid"],
    album: "Ferxxo",
    duration: "2:40"
  },
  {
    id: 7,
    albumId: 7,
    title: "El padrino",
    image: `/music/7/FeidAlbum.jpg`,
    artists: ["Feid"],
    album: "Ferxxo",
    duration: "2:49"
  },
  {
    id: 8,
    albumId: 7,
    title: "Te mata",
    image: `/music/7/FeidAlbum.jpg`,
    artists: ["Feid"],
    album: "Ferxxo",
    duration: "1:53"
  },
  {
    id: 9,
    albumId: 7,
    title: "Si tú Supieras",
    image: `/music/7/FeidAlbum.jpg`,
    artists: ["Feid"],
    album: "Ferxxo",
    duration: "3:16"
  },
  {
    id: 10,
    albumId: 7,
    title: "Vacaxiones",
    image: `/music/7/FeidVacaciones.jpg`,
    artists: ["Feid"],
    album: "Ferxxo",
    duration: "3:06"
  },
  {
    id: 11,
    albumId: 7,
    title: "14 De Febrero",
    image: `/music/7/14Febrero.jpg`,
    artists: ["Feid"],
    album: "Ferxxo",
    duration: "2:38"
  },
];
