import './style.scss';

import PropTypes from 'prop-types';
import React from 'react';
import { useLocation } from 'react-router-dom';

const Sidebar = ({ excludedRoutes }) => {
  const location = useLocation();

  if (excludedRoutes && excludedRoutes.length) {
    let isExcluded = false;
    let pattern = null;
    excludedRoutes.forEach((excludedRoute) => {
      if (excludedRoute === '/') {
        pattern = `^${excludedRoute}$`;
      } else {
        pattern = `${excludedRoute}(.*)`;
      }
      const regex = new RegExp(pattern);

      if (regex.test(location.pathname)) {
        isExcluded = true;
      }
    });

    if (isExcluded) return null;
  }

  return (
    <div className='sidebar-holder'>
    Sidebar
    </div>
  );
};

Sidebar.propTypes = {
  excludedRoutes: PropTypes.array
};

export default Sidebar;
