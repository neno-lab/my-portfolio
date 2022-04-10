import './style.scss';

import { connect } from 'react-redux';
import FileCardComponent from '../FileCard';
import PropTypes from 'prop-types';
import React from 'react';
import { useLocation } from 'react-router-dom';

const FileCard = React.memo(FileCardComponent);

const Header = ({ pages }) => {
  const { pathname } = useLocation();
  return (
    <header>
      {pages && pages.length ? pages.map(page => (
        <FileCard
          hasExitBtn={page.id !== 'home'}
          id={page.id}
          isActive={pathname === page.pathname}
          key={page.id}
          name={page.name}
          pathname={page.pathname}
        />
      ))
        : null
      }
    </header>
  );
};

const mapStateToProps = state => ({
  pages: state.ui.pages
});

Header.propTypes = {
  pages: PropTypes.array
};

export default connect(mapStateToProps)(Header);
