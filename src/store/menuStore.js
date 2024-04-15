import { create } from "zustand";

export const useMenuStore = create((set) => ({
  isOpen: false,
  isOpenQueue: false,
  setOpenQueue: (isOpenQueue) => set({ isOpenQueue }),
  setIsOpen: (isOpen) => set({ isOpen }),
}));
