import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Welcome from 'views/Welcome';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Welcome} name="Welcome" />
    </Switch>
  </BrowserRouter>
);

export default Routes;
