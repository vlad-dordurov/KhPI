import React from 'react';
import { Route } from 'react-router-dom';
import { elementType } from 'prop-types';

export const PublicRoute = ({ component: Component, ...rest }) => {
  return <Route {...rest} render={(props) => <Component {...props} />} />;
};

PublicRoute.propTypes = {
  component: elementType,
};
