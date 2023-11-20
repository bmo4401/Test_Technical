import { useEffect, useState } from 'react';
export type Theme = 'dark' | 'light';
const useThemeSwitcher = () => {
  const preferDarkQuery = '(prefer-color-scheme:dark)';
  const [mode, setMode] = useState<Theme>();
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setMode((window?.localStorage.getItem('theme') as Theme) ?? 'dark');
    }
  }, []);
  useEffect(() => {
    const mediaQuery = window.matchMedia(preferDarkQuery);

    const userPref = window.localStorage.getItem('theme');
    let check: Theme;
    const handleChange = () => {
      check = (userPref ?? mediaQuery.matches) === 'dark' ? 'dark' : 'light';

      setMode(check);
      isDark(check);
    };
    const isDark = (check: Theme) => {
      if (check === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    };
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);
  useEffect(() => {
    if (mode) {
      window.localStorage.setItem('theme', mode);
      mode === 'dark'
        ? document.documentElement.classList.add('dark')
        : document.documentElement.classList.remove('dark');
    }
  }, [mode]);
  return { mode, setMode };
};
export default useThemeSwitcher;
