import React from 'react';
import { useSelector } from 'react-redux';
import { node } from 'prop-types';

import { Header, NavBar } from '../../components';
import { isAuthorizedSelector } from '../../selectors/auth';

import './layout.scss';

export const Layout = ({ children }) => {
  const isAuthorized = useSelector(isAuthorizedSelector);

  return (
    <>
      {isAuthorized && <Header />}
      <div className="layout">
        {isAuthorized && <NavBar />}
        <div className="layout-content">
          {children}
        </div>
      </div>
    </>
  );
};

Layout.propTypes = {
  children: node
};
