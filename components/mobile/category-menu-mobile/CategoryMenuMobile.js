/* eslint-disable react/no-array-index-key */
import React, { useMemo } from 'react';


import Menu from 'antd/lib/menu';
import Icon from 'antd/lib/icon';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';
import { useRouter } from 'next/router';

import { show, toggleVisibility } from '../../../store/userEventListeners/action';
import { changeGlobalInformationRouter } from '../../../store/global-Information-Router/action';
import { getMenuList } from '../../../store/menu-list/action';
import { getMobileMenuLinks } from '../constants';
import { getFooterContent } from '../../../constants/footerConstants';

const { SubMenu } = Menu;

function CategoryMenuMobileContent({
  showAction,
  changeGlobalInformationRouterAction,
  toggleVisibilityAction,
  getMenuListAction,
}) {
  const { messages } = useIntl();
  const router = useRouter();

  const setCategorySubMenuVisibility = ({ name, subType, href }) => {
    showAction({ name: 'isCategorySubMenuOpen' });
    changeGlobalInformationRouterAction({ mobyle_submenu_info: { name, subType, href } });
    getMenuListAction({ name });
  };

  const subMenusArray = useMemo(() => getMobileMenuLinks(),
    []);

  const subTypesArray = useMemo(() => ['type', 'age', 'brand', 'meaning'], []);

  const translationNames = {
    type: 'local.type',
    age: 'local.select_by_age',
    brand: 'local.select_by_brand',
    meaning: 'local.meaning',
  };

  const menuFooter = useMemo(() => getFooterContent(messages, {
    openSuggestionsModal: () => toggleVisibilityAction({ name: 'suggestionVisible' }),
    openFidBackModal: () => toggleVisibilityAction({ name: 'callbackVisible' }),
  }));
  return (
    <div className="category_menu_mobile">
      <Menu
        mode="inline"
        selectedKeys={[]}
      >
        {subMenusArray.map((subMenu, index) => (
          <SubMenu
            key={`__sub1${index}`}
            // onTitleClick={
            //   () => {
            //     router.push(`/catalog/${subMenu.href}`);
            //   }
            // }
            title={(

              <span>
                <span className="menu_icon"><img src={subMenu.icon} alt="" /></span>
                <span className="cat_name">{messages[subMenu.title]}</span>
                <Icon className="arrow_icon" type="right" />
              </span>

            )}
          >

            {subTypesArray.map((subType, childeIndex) => (
              <Menu.Item
                key={`1.${childeIndex}`}
                onClick={() => {
                  setCategorySubMenuVisibility({
                    name: subMenu.name,
                    subType,
                    href: subMenusArray[index].href,
                  });
                }}
              >
                {messages[`${translationNames[subType]}`]}

              </Menu.Item>
            ))}

          </SubMenu>
        ))}


        <SubMenu
          key="__sub6"
          onTitleClick={
            () => {
              router.push('/catalog?classification=isNew');
            }
          }
          title={(
            <span>
              <span className="menu_icon"><img src="/images/category/mobile/icon7.png" alt="" /></span>
              {messages['local.news']}
              <Icon className="arrow_icon" type="right" />
            </span>
          )}
        />
        <SubMenu
          key="__sub7"
          onTitleClick={
            () => {
              router.push('/catalog?classification=percent');
            }
          }
          title={(
            <span>
              <span className="menu_icon"><img src="/images/category/mobile/icon6.png" alt="" /></span>
              {messages['local.discounts']}

              <Icon className="arrow_icon" type="right" />
            </span>
          )}
        />
        <SubMenu
          key="__sub8"
          onTitleClick={
            () => {
              router.push('/catalog?classification=bestSeller');
            }
          }
          title={(
            <span>
              <span className="menu_icon"><img src="/images/category/mobile/icon9.png" alt="" /></span>
              {messages['local.best_selling']}
              <Icon className="arrow_icon" type="right" />
            </span>
          )}
        />
        {/* <SubMenu */}
        {/*  key="__sub9" */}
        {/*  title={( */}
        {/*    <span> */}
        {/*      <span className="menu_icon"><img src={MenuIcon8} alt="" /></span> */}
        {/*      <Link href="/catalog?brand=1"> */}
        {/*        <a className="cat_name">{messages['local.brand']}</a> */}
        {/*      </Link> */}
        {/*      <Icon className="arrow_icon" type="right" /> */}
        {/*    </span> */}
        {/*  )} */}
        {/* /> */}

      </Menu>
      <Menu
        mode="inline"
        selectedKeys={[]}
      >
        {menuFooter.map(({
          text, handleClick, link, icon,
        }, index) => (
          <SubMenu
            className={index === 0 && 'menu_divider'}
            key={`__sub10${index}`}
            onTitleClick={
              (handleClick || (() => { router.push(link); }))
            }
            title={(
              <span>
                <span className="menu_icon"><img src={icon} alt="" /></span>
                <a className="cat_name">{text}</a>
                <Icon className="arrow_icon" type="right" />
              </span>
            )}
          />
        ))}
      </Menu>
    </div>
  );
}

CategoryMenuMobileContent.propTypes = {
  showAction: PropTypes.func,
  changeGlobalInformationRouterAction: PropTypes.func,
  toggleVisibilityAction: PropTypes.func.isRequired,
  getMenuListAction: PropTypes.func.isRequired,
};

export default connect(null, {
  showAction: show,
  changeGlobalInformationRouterAction: changeGlobalInformationRouter,
  toggleVisibilityAction: toggleVisibility,
  getMenuListAction: getMenuList,
})(CategoryMenuMobileContent);
