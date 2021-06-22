import React from 'react';

import LogoNtu from '../../assets/img/logoNTU.png';

import './header.scss';

export const Header = () => {
  return (
    <div className="header">
      <div className="header-item">
        <div className="header-logo">
          <img src={LogoNtu} alt="logo NTU" className="header-logo-img" />
        </div>
        <div className="header-title">Admin Panel</div>
      </div>
    </div>
  );
};
