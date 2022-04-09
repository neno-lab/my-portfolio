import './style.scss';

import { connect } from 'react-redux';
import FileCard from '../FileCard';
import React from 'react';

const Header = () => (
  <header>
    <FileCard />
    <FileCard />
    <FileCard />
    <FileCard />
  </header>
);

export default connect()(Header);
