import React, { useState, useEffect, useMemo } from 'react';

import Menu from 'antd/lib/menu';
import Icon from 'antd/lib/icon';

import Link from 'next/link';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';
import { hideAll } from '../../../store/userEventListeners/action';


const { SubMenu } = Menu;
function CategorySubmenu({
  hideAllAction,
  globalInformationRouter:
  {
    mobyle_submenu_info:
    mobyleSubmenuInfo,
  },
  menuList,
}) {
  const { subType, href } = (mobyleSubmenuInfo || {});
  const [openKeys, setOpenKeys] = useState([]);

  const subKey = `mobile_sub_filters${subType}`;

  useEffect(() => {
    setOpenKeys([subKey]);
  }, [subType]);

  const { messages } = useIntl();

  const productsObject = menuList.data;

  // type age brand meaning
  const subMenuArray = useMemo(() => (productsObject ? [
    {
      headingName: messages['local.type'],
      products: productsObject.type,
      linkPart: 'type',
    },
    {
      headingName: messages['local.select_by_age'],
      products: productsObject.age.map(({ name, text, id }) => ({
        id,
        name: `${name} ${messages['local.years']}`,
        text: `${text} ${messages['local.years']}`,
      })),
      linkPart: 'age',
    },
    {
      headingName: messages['local.select_by_brand'],
      products: productsObject.brand,
      linkPart: 'brand',
    },
    {
      headingName: messages['local.meaning'],
      products: productsObject.meaning,
      linkPart: 'meaning',
    },
  ] : []), [productsObject, messages]);


  const closeAllSideBars = () => {
    hideAllAction();
  };
  return (
    <div className="subcategory_menu">
      {menuList.loading ? 'loading'
        : (
          <Menu
            onOpenChange={setOpenKeys}
            mode="inline"
            openKeys={openKeys}
          >
            <Menu.Item key="1" onClick={closeAllSideBars}>
              <Link href={`/catalog${href || ''}`}>
                <a>
                  {messages['local.all_of']}
                </a>
              </Link>
            </Menu.Item>

            {subMenuArray.map(({ products, headingName, linkPart }, parentIndex) => (
              <SubMenu
                key={`mobile_sub_filters${linkPart}`}
                title={(
                  <span>
                    <span className="cat_name">{headingName}</span>
                    <Icon className="arrow_icon" type="right" />
                  </span>
                )}
              >
                {subType && products.map((product, index) => (
                  <Menu.Item key={`mobile_sub_filters${linkPart}${parentIndex}.${index}`}>
                    <Link
                      href={
                          `catalog${href ? `${href}&` : '?'}${linkPart}=${product.id}`
                      }
                    >
                      <a onClick={hideAllAction}>
                        {product.name}
                      </a>
                    </Link>
                  </Menu.Item>
                ))}

              </SubMenu>
            ))}

          </Menu>
        )}

    </div>
  );
}


CategorySubmenu.propTypes = {
  hideAllAction: PropTypes.func,
  globalInformationRouter: PropTypes.object,
  menuList: PropTypes.object,
};

function mapStateToProps({ globalInformationRouter, menuList }) {
  return {
    globalInformationRouter,
    menuList,
  };
}


export default connect(mapStateToProps, { hideAllAction: hideAll })(CategorySubmenu);
