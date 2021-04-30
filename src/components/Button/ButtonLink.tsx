import React from 'react';
import { Link } from 'gatsby';
import type { GatsbyLinkProps } from 'gatsby';
import 'twin.macro';

interface ButtonLinkProps {
  tw?: string;
}

const ButtonLink: React.FC<GatsbyLinkProps<ButtonLinkProps>> = ({ children, to }) => (
  <Link
    to={to}
    tw="flex w-auto rounded-full py-3 px-4 bg-gradient-to-bl from-purple-600 to-indigo-600 shadow-2xl transition-all duration-200 ease-in-out-expo transform scale-100 rotate-0 focus:(outline-none ring-4 ring-purple-600 ring-opacity-30) hover:(shadow-lg scale-95 rotate-1)"
  >
    <span tw="flex w-full items-center rounded-full font-medium tracking-wide space-x-3 py-4 px-6 bg-gray-100 text-gray-900 dark:(bg-gray-900 text-gray-50)">
      {children}
    </span>
  </Link>
);

export default ButtonLink;
