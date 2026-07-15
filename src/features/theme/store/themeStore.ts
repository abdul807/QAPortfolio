import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type Theme = 'light' | 'dark';

interface ThemeStore {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

export const useThemeStore = create<ThemeStore>()(
  persist(
    (set) => ({
      theme: 'light',
      toggleTheme: () =>
        set((state) => ({
          theme: state.theme === 'light' ? 'dark' : 'light',
        })),
      setTheme: (theme) => set({ theme }),
    }),
    {
      name: 'theme-storage',
    }
  )
);

// Apply theme to document
if (typeof window !== 'undefined') {
  const store = useThemeStore.getState();
  const theme = store.theme;
  document.documentElement.classList.toggle('dark', theme === 'dark');
}

// Subscribe to theme changes
useThemeStore.subscribe((state) => {
  document.documentElement.classList.toggle('dark', state.theme === 'dark');
});