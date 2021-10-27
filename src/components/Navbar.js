import React from 'react';
import { NavLink } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav>
      <div className="container">
        <NavLink to="/">Country Flags</NavLink>
      </div>
    </nav>
  );
};
