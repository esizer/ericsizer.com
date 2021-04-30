import React from 'react';
import 'twin.macro';

import Logo from '~components/Logo';

const PageWrapper: React.FC = ({ children }) => (
  <div tw="my-48">
    <div tw="relative flex flex-col items-center justify-start rounded-3xl shadow-2xl p-12 pt-0 bg-gray-100 text-gray-900 dark:(bg-gray-900 text-gray-50)">
      <Logo tw="w-72 h-72 shadow-2xl top-0 transform -translate-y-1/2 -mb-24 rounded-full border-24 border-gray-50 dark:(border-gray-900)" />
      <div tw="w-full">{children}</div>
    </div>
  </div>
);

export default PageWrapper;
