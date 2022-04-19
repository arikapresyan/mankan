import React from 'react';
import  Icon from 'antd/lib/icon';

import Link from 'next/link';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import { toggleVisibility, hide } from '../../store/userEventListeners/action';
import CartWishlistConteiner from '../../components/header/CartWishlistConteiner';
import { catalogGet } from '../../store/catalog/action';


function MobileMenuBar({
  toggleVisibilityAction, hideAction, isVisible, catalogGetAction,
  pagesCount,
}) {
  const router = useRouter();
  const isPageActive = (path) => router.pathname === path && !isVisible.isFilterListOpen && !isVisible.isCategoryMenuOpen;

  return (
    <div className="mobile_menu_bar">
      <div className={`menu_bar_item ${isPageActive('/') ? 'is_active' : ''}`}>
        <Link href="/">
          <a>
            <Icon type="home" />
          </a>
        </Link>
      </div>
      <div
        className={`menu_bar_item ${isVisible.isFilterListOpen ? 'is_active' : ''}`}
        onClick={() => {
          !pagesCount && catalogGetAction();
          hideAction({ name: 'isCategoryMenuOpen' });
          hideAction({ name: 'isCategorySubMenuOpen' });
          toggleVisibilityAction({ name: 'isFilterListOpen' });
        }}
      >
        <Icon type="search" />
      </div>
      <div
        className={`menu_bar_item ${isVisible.isCategoryMenuOpen ? 'is_active' : ''}`}
        onClick={
          () => {
            hideAction({ name: 'isFilterListOpen' });
            hideAction({ name: 'isCategorySubMenuOpen' });
            toggleVisibilityAction({ name: 'isCategoryMenuOpen' });
          }
        }
      >
        <Icon type="menu" />
      </div>
      <CartWishlistConteiner mode="mobil" isPageActive={isPageActive} />
    </div>
  );
}
MobileMenuBar.propTypes = {
  toggleVisibilityAction: PropTypes.func,
  hideAction: PropTypes.func,
  isVisible: PropTypes.object,
  catalogGetAction: PropTypes.func,
  pagesCount: PropTypes.number,
};

const mapStateToProps = ({ userEventListeners: { isVisible }, catalog: { pagesCount } }) => ({
  isVisible,
  pagesCount,
});


export default connect(mapStateToProps, {
  toggleVisibilityAction: toggleVisibility,
  hideAction: hide,

  catalogGetAction: catalogGet,
})(MobileMenuBar);
