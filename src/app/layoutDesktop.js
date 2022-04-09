import About from '../pages/About';
import DivContentComponent from '../containers/DivContent';
import HeaderComponent from '../components/desktop/Header';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import React from 'react';
import SidebarComponent from '../components/desktop/Sidebar';

import { Redirect, Route, BrowserRouter as Router, Switch } from 'react-router-dom';

const Sidebar = React.memo(SidebarComponent);
const DivContent = React.memo(DivContentComponent);
const Header = React.memo(HeaderComponent);

const LayoutDesktop = () => {
  console.log('tu sam');

  return (
    <Router>
      <DivContent className='layout-desktop-holder'>
        <Sidebar excludedRoutes={['not-found']} />
        <DivContent>
          <Header />
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
        </DivContent>
      </DivContent>
    </Router>
  );
};

export default LayoutDesktop;
