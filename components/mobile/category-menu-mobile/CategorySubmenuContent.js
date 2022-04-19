import React from 'react';

import Icon from 'antd/lib/icon';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';
import MobileSearch from '../mobile-search/MobileSearch';
import CategorySubmenuMobile from './CategorySubmenuMobile';

// import Context from '../../../Context';

import { hide } from '../../../store/userEventListeners/action';


function CategorysubmenuContent({ isCategorySubMenuOpen, hideAction }) {
  const { messages } = useIntl();
  return (
    <div className={`category_submenu_content ${isCategorySubMenuOpen ? 'is_open' : ''}`}>
      <MobileSearch />
      <div className="go_back" onClick={() => hideAction({ name: 'isCategorySubMenuOpen' })}>
        <Icon type="left" />
        <span>{messages['local.back']}</span>
      </div>
      <CategorySubmenuMobile />
    </div>
  );
}

CategorysubmenuContent.propTypes = {
  isCategorySubMenuOpen: PropTypes.bool,
  hideAction: PropTypes.func,
};
function mapStateToProps({ userEventListeners: { isVisible: { isCategorySubMenuOpen } } }) {
  return {
    isCategorySubMenuOpen,
  };
}

export default connect(mapStateToProps, { hideAction: hide })(CategorysubmenuContent);
