import React, { useCallback } from 'react';
import Link from 'next/link';
import Icon from 'antd/lib/icon';

import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { useIntl } from 'react-intl';
import Router from 'next/router';
import dynamic from 'next/dynamic';
import CartWishlistConteiner from '../CartWishlistConteiner';
import { menuItemWithSubmenu as mi, onlyClickable as onC } from '../handleFunctions';
import { selectMenuList } from '../../../store/menu-list/reducer';
import SearchComponent from '../../common/main-search/MainSearch';
import useHoverHeader from '../useHoverHeader';
import { selectAuthorized } from '../../../store/user/reducer';


const ProductCategoryInfo = dynamic(() => import('../product-category-list/ProductCategoryInfo'));


function HeaderFixed({
  isVisible,
  fixedSearchVisible,
  handleToggleSearchVisibility,
  setLoginVisible,
  searchProductAction,
}) {
  const { messages } = useIntl();
  const menuList = useSelector(selectMenuList);
  const isAuth = useSelector(selectAuthorized);
  const userIconClick = useCallback(() => {
    if (isAuth) {
      Router.push('/profile');
    } else {
      setLoginVisible();
    }
  }, [isAuth, setLoginVisible, Router]);

  const {
    mainHref, onMouseEnter, showMenu, onMouseLeave,
  } = useHoverHeader();

  const onlyClickable = onC({ messages });
  const menuItemWithSubmenu = mi({ messages });


  return (
    <div className={`header_fixed ${isVisible ? 'is_scroll' : ''}`}>
      <div
        className="container"
        onMouseLeave={onMouseLeave}
      >
        <div>
          <div className="category_list">
            {menuItemWithSubmenu.map((menuItem, index) => (
              <div
                className="category_list_item"
            // eslint-disable-next-line react/no-array-index-key
                key={`bigSizeMenuItem${index}`}
                onMouseEnter={() => {
                  onMouseEnter(menuList, menuItem);
                }}
              >
                <Link href={menuItem.href}>
                  <a>
                    {' '}
                    {menuItem.text}
                  </a>
                </Link>
              </div>
            ))}
            {showMenu

          && (
          <ProductCategoryInfo
            className={showMenu ? 'show' : ''}
            mainHref={mainHref}
            style={{ top: '50px' }}
          />
          )}
            {onlyClickable.map((menuItem, index) => (
              <div
                className="category_list_item"
                key={`bigSizeMenuItem${index + 5}`}
              >
                <Link href={menuItem.href} as={menuItem.as}>
                  <a>
                    {menuItem.text}
                  </a>
                </Link>
              </div>
            ))}

          </div>

          <div className="d-felx">
            <div className="login_container">
              <span
                className="login"
                onClick={userIconClick}
              >
                <img className="profile_icon" src="images/icons/profile_icon.png" alt="" />
              </span>
            </div>
            <CartWishlistConteiner />
            <div className={`search_container ${fixedSearchVisible ? 'open' : ''}`}>
              <Icon type="search" onClick={handleToggleSearchVisibility} />
              <div className={`fixed_search ${fixedSearchVisible ? 'is_open' : ''}`}>
                <SearchComponent
                  placeholder="input search text"
                  onSearch={searchProductAction}
                  className=""
                  style={{ width: 300 }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

HeaderFixed.propTypes = {
  isVisible: PropTypes.bool,
  fixedSearchVisible: PropTypes.bool,
  handleToggleSearchVisibility: PropTypes.func,
  setLoginVisible: PropTypes.func,
  searchProductAction: PropTypes.func,

};

export default HeaderFixed;
