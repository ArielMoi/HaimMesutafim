import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {

  return (
    <div className="nav-container">
      <nav className="nav">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/history">History</NavLink>
      </nav>
    </div>
  );
}

export default Nav;
