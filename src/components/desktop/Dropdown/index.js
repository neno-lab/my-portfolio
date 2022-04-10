import './style.scss';

import { ArrowIcon } from '../../../resources/icons';
import PropTypes from 'prop-types';
import React from 'react';

const Dropdown = ({ className, iconOnActive, iconOffActive, title, component, defaultState }) => {
  const [isActive, setActive] = React.useState(defaultState || false);
  const isFirstTime = React.useRef(true);
  const contentHolder = React.useRef();
  const componentRef = React.useRef();

  React.useEffect(() => {
    contentHolder.current.style.height = '0px';
    isFirstTime.current = false;
  }, []);

  React.useEffect(() => {
    if (isActive && !isFirstTime.current) {
      const componentHeight = componentRef.current.clientHeight;
      contentHolder.current.style.height = `${componentHeight}px`;
      setTimeout(() => {
        contentHolder.current.classList.add('active');
      }, 250);
    } else if (!isActive && !isFirstTime.current) {
      contentHolder.current.style.height = '0px';
      contentHolder.current.classList.remove('active');
    }
  }, [isActive]);

  return (
    <div className={`dropdown-big-holder ${className || ''}`}>
      <div className='dropdown-title-holder' onClick={() => setActive(!isActive)}>
        <ArrowIcon className={`dropdown-arrow-icon ${isActive ? 'active' : ''}`}/>
        {iconOnActive && iconOffActive && isActive ? iconOnActive
          : iconOnActive && iconOffActive && !isActive ? iconOffActive
            : null
        }
        <h5>{title}</h5>
      </div>
      <div className='dropdown-content-holder' ref={contentHolder}>
        <div ref={componentRef}>
          {component}
        </div>
      </div>
    </div>
  );
};

Dropdown.propTypes = {
  className: PropTypes.string,
  defaultState: PropTypes.bool,
  iconOnActive: PropTypes.object,
  iconOffActive: PropTypes.object,
  title: PropTypes.string,
  component: PropTypes.object,
  reference: PropTypes.object,
  componentRef: PropTypes.object
};

export default Dropdown;
