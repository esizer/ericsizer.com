import React from 'react';
import 'twin.macro';

import ThemeToggle from '~components/ThemeToggle';

const Header: React.FC = () => (
  <div tw="fixed top-6 right-6">
    <ThemeToggle />
  </div>
);

export default Header;
