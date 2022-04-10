import './style.scss';

import PropTypes from 'prop-types';
import React from 'react';
import SimpleListItem from './pieces/SimpleListItem';

const SimpleList = ({ mainTitle, items }) => (
  <div className='simple-list-holder'>
    <h3>{mainTitle}</h3>
    <div className='simple-list-content'>
      {items && items.length ? items.map(item => (
        <React.Fragment key={item.id}>
          <div>
            <h3>{item.title}</h3>
            <h5>{item.subtitle}</h5>
            <span>{item.date}</span>
          </div>
          <ul>
            {item.bullets && item.bullets.length ? item.bullets.map(bullet => (
              <SimpleListItem key={bullet.id} text={bullet.text}/>
            ))
              : null}
          </ul>
        </React.Fragment>
      )) : null}
    </div>
  </div>
);

SimpleList.propTypes = {
  mainTitle: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  date: PropTypes.string,
  items: PropTypes.array
};

export default SimpleList;
