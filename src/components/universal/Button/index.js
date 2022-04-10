import './style.scss';

import PropTypes from 'prop-types';
import React from 'react';

const Button = ({ className, onClick, children }) => (
  <button className={`button ${className || ''}`} onClick={onClick}>{children}</button>
);

Button.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node
};

export default Button;
