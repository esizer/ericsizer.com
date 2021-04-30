import React, { useContext } from 'react';
import { MoonIcon, SunIcon } from '@heroicons/react/outline';
import 'twin.macro';

import { ThemeContext } from '~theme';
import type { ThemeContextInterface } from '~theme';

const ThemeToggle = () => {
  const { theme, setTheme } = useContext<ThemeContextInterface>(ThemeContext);
  return (
    <button
      tw="rounded-full p-2 bg-transparent opacity-60 transition-colors duration-100 ease-in-out-expo text-gray-100 dark:(text-gray-900) focus:(outline-none ring-4 ring-purple-600 ring-opacity-30) hover:(bg-gray-200 opacity-80) dark:hover:(bg-gray-600)"
      type="button"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      <span tw="sr-only">Toggle Dark Mode</span>
      {theme === 'dark' ? <SunIcon tw="w-12 h-12" /> : <MoonIcon tw="w-12 h-12" />}
    </button>
  );
};

export default ThemeToggle;
