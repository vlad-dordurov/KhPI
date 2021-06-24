import React from 'react';
import { Switch } from 'react-router-dom';

import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import { Signin, Shedule } from '../components';

const MockPage = () => {
  return <div>1</div>;
};

export const AppRouter = () => {
  return (
    <Switch>
      <PublicRoute component={Signin} path="/signin" exact />
      <PrivateRoute component={Shedule} path="/schedule" exact />
      <PrivateRoute component={MockPage} path="/news" exact />
      <PrivateRoute component={MockPage} path="/notifications" exact />
      <PrivateRoute component={MockPage} path="/dvv" exact />
      <PrivateRoute component={MockPage} path="/dualeducation" exact />
      <PrivateRoute component={MockPage} path="/project" exact />
      <PrivateRoute component={MockPage} path="/documentation" exact />
    </Switch>
  );
};
