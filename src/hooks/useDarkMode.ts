import { useState, useEffect } from 'react';

export function useDarkMode() {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('tesseract_theme');
    return saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches);
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      localStorage.setItem('tesseract_theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('tesseract_theme', 'light');
    }
  }, [isDark]);

  return { isDark, toggleDarkMode: () => setIsDark(!isDark) };
}
