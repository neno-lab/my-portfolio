import About from '../pages/About';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import React from 'react';
import SidebarComponent from '../components/desktop/Sidebar';

import { Redirect, Route, BrowserRouter as Router, Switch } from 'react-router-dom';

const Sidebar = React.memo(SidebarComponent);

const LayoutDesktop = () => (
  <Router>
    <Sidebar excludedRoutes={['not-found']} />
    <Switch>
      <Route
        exact
        component={Home}
        path='/home'
      />
      <Route
        exact
        component={About}
        path='/about'
      />
      <Route
        exact
        component={NotFound}
        path='/not-found'
      />
      <Route
        exact
        path='*'
      >
        <Redirect to='/not-found' />
      </Route>
    </Switch>
  </Router>
);

export default LayoutDesktop;
