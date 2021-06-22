import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { elementType } from 'prop-types';
import { isAuthorizedSelector } from '../../selectors/auth';

export const PrivateRoute = ({component: Component, ...rest}) => {
  const isAuthorized = useSelector(isAuthorizedSelector);
  return (
    <Route {...rest} render={props => (
      isAuthorized ?
        <Component {...props} />
        : <Redirect to="/signin" />
    )} />
  );
};

PrivateRoute.propTypes = {
  component: elementType
}
