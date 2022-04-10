import './style.scss';

import { actionAddPage } from '../../../redux/actions/ui';
import { connect } from 'react-redux';
import Dropdown from '../Dropdown';
import DropdownItemComponent from '../Dropdown/pieces/DropdownItem';
import DropdownList from '../Dropdown/pieces/DropdownList';
import { IoLogoJavascript } from 'react-icons/io5';
import { pages } from '../../../helpers/constants';
import PropTypes from 'prop-types';
import React from 'react';

import { AiFillFolder, AiFillFolderOpen } from 'react-icons/ai';
import { useLocation, withRouter } from 'react-router-dom';

const DropdownItem = React.memo(DropdownItemComponent);

const Sidebar = ({ excludedRoutes, history, dispatch }) => {
  const { pathname } = useLocation();

  if (excludedRoutes && excludedRoutes.length) {
    let isExcluded = false;
    let pattern = null;
    excludedRoutes.forEach((excludedRoute) => {
      if (excludedRoute === '/') {
        pattern = `^${excludedRoute}$`;
      } else {
        pattern = `${excludedRoute}(.*)`;
      }
      const regex = new RegExp(pattern);

      if (regex.test(pathname)) {
        isExcluded = true;
      }
    });

    if (isExcluded) return null;
  }

  const handleOnClickPageItem = React.useMemo(() => (page) => {
    dispatch(actionAddPage(page));
    history.push(page.pathname);
  }, []);

  return (
    <div className='sidebar-holder'>
      <Dropdown
        component={
          <Dropdown
            className='sidebar-dropdown-child'
            component={
              <DropdownList className='sidebar-dropdown-list-child-child'>
                {pages && pages.length ? pages.map(page => (
                  <DropdownItem
                    icon={<IoLogoJavascript className='sidebar-js-icon'/>}
                    isActive={pathname === page.pathname}
                    key={page.id}
                    title={page.name}
                    onClick={() => handleOnClickPageItem(page)}
                  />))
                  : null}
              </DropdownList>
            }
            defaultState={true}
            iconOffActive={<AiFillFolder className='sidebar-closed-folder-icon'/>}
            iconOnActive={<AiFillFolderOpen className='sidebar-opened-folder-icon'/>}
            title='client'
          />
        }
        defaultState={true}
        title='MY PORTFOLIO'
      />
    </div>
  );
};

Sidebar.propTypes = {
  excludedRoutes: PropTypes.array,
  history: PropTypes.object,
  dispatch: PropTypes.func
};

export default connect()(withRouter(Sidebar));
