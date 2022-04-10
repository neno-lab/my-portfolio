import './style.scss';

import PropTypes from 'prop-types';
import React from 'react';

const DropdownList = ({ className, children }) => (
  <ul className={`dropdown-list-holder ${className || ''}`}>
    {children}
  </ul>
);

DropdownList.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
};

export default DropdownList;
