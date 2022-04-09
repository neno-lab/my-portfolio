import './style.scss';

import PropTypes from 'prop-types';
import React from 'react';

const DivContent = ({ children, className }) => (
  <div className={`div-content ${className || ''}`}>{children}</div>
);

DivContent.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

export default DivContent;
