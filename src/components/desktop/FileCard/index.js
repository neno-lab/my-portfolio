import './style.scss';

import { ExitIcon } from '../../../resources/icons';
import jsLogo from '../../../resources/images/js-logo.png';
import React from 'react';

const FileCard = () => (
  <div className='file-card-holder'>
    <img src={jsLogo} />
    <span>Home</span>
    <ExitIcon />
  </div>
);

export default FileCard;
