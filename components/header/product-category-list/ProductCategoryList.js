import React from 'react';

import Link from 'next/link';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';


import dynamic from 'next/dynamic';
import { getMenuList, getMenuListReset } from '../../../store/menu-list/action';
import { menuItemWithSubmenu as mi, onlyClickable as onC } from '../handleFunctions';
import useHoverHeader from '../useHoverHeader';

const ProductCategoryInfo = dynamic(() => import('./ProductCategoryInfo'), { ssr: false });


function ProductCategoryList({ menuList }) {
  const { messages } = useIntl();

  const {
    mainHref, onMouseEnter, showMenu, onMouseLeave,
  } = useHoverHeader();


  const menuItemWithSubmenu = mi({ messages });
  const onlyClickable = onC({ messages });
  return (
    <div className="product_categories_container clearfix">
      <div
        className="container "
        onMouseLeave={onMouseLeave}
      >
        <div className="category_menu clearfix">


          {menuItemWithSubmenu.map((menuItem, index) => (
            <div
              className="category_menu_item"
            // eslint-disable-next-line react/no-array-index-key
              key={`bigSizeMenuItem${index}`}
              onMouseEnter={() => {
                onMouseEnter(menuList, menuItem);
              }}

            >
              <Link href={menuItem.href}>
                <a>
                  <span className="category_icon">
                    <img src={menuItem.icon} alt="" className="icon" />
                    <img src={menuItem.hoverIcon} alt="" className="icon_hover" />
                  </span>
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
          />
          )}
          {onlyClickable.map((menuItem, index) => (
            <div
              className="category_menu_item"
              key={`bigSizeMenuItem${index + 5}`}
              onMouseEnter={onMouseLeave}
            >
              <Link href={menuItem.href} as={menuItem.as}>
                <a>
                  <span className="category_icon">
                    <img src={menuItem.icon} alt="" className="icon" />
                    <img src={menuItem.hoverIcon} alt="" className="icon_hover" />
                  </span>
                  {menuItem.text}
                </a>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function mapStateToProps({ menuList }) {
  return {
    menuList,
  };
}
ProductCategoryList.propTypes = {
  menuList: PropTypes.object,
};

export default connect(mapStateToProps, {
  getMenuListAction: getMenuList,
  getMenuListResetAction: getMenuListReset,
})(ProductCategoryList);
