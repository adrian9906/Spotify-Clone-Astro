import { create } from "zustand";

export const usePlayerStore = create((set) => ({
  isPlaying: false,
  currentMusic: { playlist: null, song: null, songs: [] },
  volume: 1,
  currentPlayingIndex: null,
  setVolume: (volume) => set({ volume }),
  setCurrentPlayingIndex: (currentPlayingIndex) => set({ currentPlayingIndex }),
  setIsPlaying: (isPlaying) => set({ isPlaying }),
  setCurrentMusic: (currentMusic) => set({ currentMusic }),
}));
