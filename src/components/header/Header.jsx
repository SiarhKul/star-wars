import React from 'react';
import { NavLink } from 'react-router-dom';

export const Header = () => {
  return (
    <header className="header">
      <div className="logo"> Star Wars</div>
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-list__item">
            <NavLink
              className="nav-list__link"
              activeClassName="selected"
              to="/"
              exact
            >
              People
            </NavLink>
          </li>
          <li className="nav-list__item">
            <NavLink
              activeClassName="selected"
              className="nav-list__link"
              to="/planets"
            >
              Planets
            </NavLink>
          </li>
          <li className="nav-list__item">
            <NavLink
              activeClassName="selected"
              className="nav-list__link"
              to="/starships"
            >
              Starship
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};