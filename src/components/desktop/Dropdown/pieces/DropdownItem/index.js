import './style.scss';

import PropTypes from 'prop-types';
import React from 'react';

const DropdownItem = ({ onClick, isActive, title, icon }) => (
  <li className={`dropdown-item-holder ${isActive ? 'active' : ''}`} onClick={onClick}>
    {icon}
    {title}
  </li>
);

DropdownItem.propTypes = {
  onClick: PropTypes.func,
  isActive: PropTypes.bool,
  title: PropTypes.string,
  icon: PropTypes.object
};

export default DropdownItem;
