import React from 'react';
import logo from './logo.svg';


const Header = () => (
  <header className="w-full bg-white shadow-md">
    <a href="/">
      <img
        className="w-48 px-2 py-2"
        alt="Skyscanner"
        src={logo}
      />
    </a>
  </header>
);

export default Header;
