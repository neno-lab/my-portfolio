import PropTypes from 'prop-types';
import React from 'react';

const Main = ({ children, className }) => (
  <main className={className || ''}>{children}</main>
);

Main.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

export default Main;
