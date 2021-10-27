import React from 'react';
import { NavLink } from 'react-router-dom';

export const Navbar = () => {
  return (
    <div className="container">
      <nav>
        <NavLink to="/" className="header__logo">
          Country Flags
        </NavLink>
      </nav>
    </div>
  );
};
