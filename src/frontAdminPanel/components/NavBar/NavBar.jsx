import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import classnames from 'classnames';
import { navConfig } from './config';

import './navBar.scss';

export const NavBar = () => {
  const [isHover, setIsHover] = useState(false);

  const classNavBar = classnames('navBar', {
    'navBar--active': isHover,
    'navBar--inactive': !isHover,
  });

  const classTextLink = classnames('navLink-text', {
    'navLink-text--active': isHover,
    'navLink-text--inactive': !isHover,
  });

  return (
    <nav
      className={classNavBar}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <ul className="navList">
        {navConfig.map(({ name, Icon, route, iconWidth }) => (
          <li className="navItem" key={name}>
            <NavLink
              className="navLink"
              activeClassName="navLink--selected"
              to={route}
              exact
            >
              <span className="navLink-icon">
                <Icon height="40" />
              </span>
              <span className={classTextLink}>{name}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
