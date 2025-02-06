import { create } from "zustand";

export const useThemeStore = create((set) => ({
  theme: localStorage.getItem("retro") || "coffee",
  setTheme: (theme) => {
    localStorage.setItem("retro", theme);
    set({ theme });
  },
}));