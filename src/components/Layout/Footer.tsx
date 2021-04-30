import React from 'react';
import 'twin.macro';

const Footer: React.FC = () => (
  <footer tw="py-6 mt-auto text-center flex justify-center">
    <p tw="text-sm rounded-2xl font-medium tracking-wide py-2 px-3 bg-gray-100 bg-opacity-90 text-gray-900 dark:(text-gray-100 bg-gray-900 bg-opacity-90) my-0">
      &copy;{new Date().getFullYear()} Eric Sizer
    </p>
  </footer>
);

export default Footer;
