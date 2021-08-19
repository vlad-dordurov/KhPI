import React from 'react';
import { Switch } from 'react-router-dom';

import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import { Signin, ShedulePage, NewsPage, NotificationPage } from '../components';
import { DocumentPage } from '../components/DocumentPage';
import { PracticePage } from '../components/PracticePage';

const MockPage = () => {
  return <div>1</div>;
};

export const AppRouter = () => {
  return (
    <Switch>
      <PublicRoute component={Signin} path="/signin" exact />
      <PrivateRoute component={ShedulePage} path="/schedule" exact />
      <PrivateRoute component={NewsPage} path="/news" exact />
      <PrivateRoute component={NotificationPage} path="/notifications" exact />
      <PrivateRoute component={MockPage} path="/dvv" exact />
      <PrivateRoute component={MockPage} path="/dualeducation" exact />
      <PrivateRoute component={PracticePage} path="/project" exact />
      <PrivateRoute component={DocumentPage} path="/documentation" exact />
    </Switch>
  );
};
