import './style.scss';

import PropTypes from 'prop-types';
import React from 'react';

const SimpleListItem = ({ text }) => (
  <li className='simple-list-item-holder'>{text}</li>
);

SimpleListItem.propTypes = {
  text: PropTypes.string
};

export default SimpleListItem;
