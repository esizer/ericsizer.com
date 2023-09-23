import { createSignal, createContext, useContext, onMount } from "solid-js";

type Theme = "dark" | "light";

const isValidThemeMode = (value: string | null): value is Theme => {
  return ["light", "dark"].includes(value as Theme);
};

export default function Theme() {
  const [theme, setTheme] = createSignal<Theme>("light");

  onMount(() => {
    let initialTheme: Theme = "light";

    const userPrefersDark = window.matchMedia("(prefers-color-scheme: dark)");

    if (userPrefersDark.matches) {
      initialTheme = "dark";
    }

    const storedTheme = window?.localStorage.getItem("color-theme");

    if (isValidThemeMode(storedTheme)) {
      initialTheme = storedTheme;
    }

    setTheme(initialTheme);
  });

  const toggle = () => {
    const isDark = theme() === ("dark" as Theme);
    let newMode: Theme = isDark ? "light" : "dark";
    const root = document.documentElement;

    root.classList.remove(isDark ? "dark" : "light");
    root.classList.add(newMode);
    localStorage.setItem("color-theme", newMode);
    setTheme(newMode);
  };

  return (
    <button
      class="rounded-full p-2 bg-transparent opacity-60 transition-colors duration-100 ease-in-out-expo text-gray-100 dark:text-gray-900 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-purple-600 focus-visible:ring-opacity-30 hover:bg-gray-200 hover:opacity-80 dark:hover:bg-gray-600"
      type="button"
      onClick={toggle}
    >
      <span class="sr-only">Toggle Dark Mode</span>
      {theme() === "dark" ? (
        <svg
          fill="none"
          stroke-width="0"
          xmlns="http://www.w3.org/2000/svg"
          stroke="currentColor"
          viewBox="0 0 24 24"
          class="w-12 h-12"
        >
          <path
            fill="currentColor"
            d="M12 2.25a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75ZM7.5 12a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM18.894 6.166a.75.75 0 0 0-1.06-1.06l-1.591 1.59a.75.75 0 1 0 1.06 1.061l1.591-1.59ZM21.75 12a.75.75 0 0 1-.75.75h-2.25a.75.75 0 0 1 0-1.5H21a.75.75 0 0 1 .75.75ZM17.834 18.894a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 1 0-1.061 1.06l1.59 1.591ZM12 18a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-1.5 0v-2.25A.75.75 0 0 1 12 18ZM7.758 17.303a.75.75 0 0 0-1.061-1.06l-1.591 1.59a.75.75 0 0 0 1.06 1.061l1.591-1.59ZM6 12a.75.75 0 0 1-.75.75H3a.75.75 0 0 1 0-1.5h2.25A.75.75 0 0 1 6 12ZM6.697 7.757a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 0 0-1.061 1.06l1.59 1.591Z"
          ></path>
        </svg>
      ) : (
        <svg
          fill="none"
          stroke-width="0"
          xmlns="http://www.w3.org/2000/svg"
          stroke="currentColor"
          viewBox="0 0 24 24"
          class="w-12 h-12"
        >
          <path
            fill="currentColor"
            fill-rule="evenodd"
            d="M9.528 1.718a.75.75 0 0 1 .162.819A8.97 8.97 0 0 0 9 6a9 9 0 0 0 9 9 8.97 8.97 0 0 0 3.463-.69.75.75 0 0 1 .981.98 10.503 10.503 0 0 1-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 0 1 .818.162Z"
            clip-rule="evenodd"
          ></path>
        </svg>
      )}
    </button>
  );
}
