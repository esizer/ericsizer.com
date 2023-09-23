import type { ParentComponent } from "solid-js";

type ButtonProps = {
  href: string;
};

const Button: ParentComponent<ButtonProps> = ({ href, children }) => (
  <a
    href={href}
    class="flex w-auto rounded-full py-3 px-4 bg-gradient-to-bl from-purple-600 to-indigo-600 shadow-2xl transition-all duration-200 ease-in-out-expo transform scale-100 rotate-0 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-purple-600 focus-visible:ring-opacity-30 hover:shadow-lg hover:scale-95 hover:rotate-1"
  >
    <span class="flex w-full items-center rounded-full font-medium tracking-wide space-x-3 py-4 px-6 bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-gray-50">
      {children}
    </span>
  </a>
);

export default Button;
