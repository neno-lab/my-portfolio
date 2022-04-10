import './style.scss';

import { actionRemovePage } from '../../../redux/actions/ui';
import { connect } from 'react-redux';
import { ExitIcon } from '../../../resources/icons';
import { IoLogoJavascript } from 'react-icons/io5';
import PropTypes from 'prop-types';
import React from 'react';
import { withRouter } from 'react-router-dom';

const FileCard = ({ name, id, hasExitBtn, isActive, pathname, history, dispatch }) => {
  const onCloseCard = React.useMemo(() => (e) => {
    e.stopPropagation();
    dispatch(actionRemovePage(id));
    history.push('/home');
  }, []);

  return (
    <div className={`file-card-holder ${isActive ? 'active' : ''}`} onClick={() => history.push(pathname)}>
      <IoLogoJavascript className='file-card-js-icon' />
      <span>{name}</span>
      {hasExitBtn ? <ExitIcon className='file-card-exit-icon' onClick={onCloseCard}/> : null}
    </div>
  );
};

FileCard.propTypes = {
  name: PropTypes.string,
  id: PropTypes.string,
  hasExitBtn: PropTypes.bool,
  isActive: PropTypes.bool,
  pathname: PropTypes.string,
  history: PropTypes.object,
  dispatch: PropTypes.func
};

export default connect()(withRouter(FileCard));
