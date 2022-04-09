import './style.scss';

import PropTypes from 'prop-types';
import React from 'react';

const Section = ({ children, className }) => (
  <section className={className || ''}>{children}</section>
);

Section.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

export default Section;
