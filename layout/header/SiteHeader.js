import React from 'react';

import Layout from 'antd/lib/layout';
import Menu from 'antd/lib/menu';
import Icon from 'antd/lib/icon';

import Link from 'next/link';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import dynamic from 'next/dynamic';
import { useMediaQuery } from 'react-responsive';
import LangSwitcher from '../../components/header/language';
import { toggleVisibility, hide } from '../../store/userEventListeners/action';


import CartWishlistConteiner from '../../components/header/CartWishlistConteiner';
import useHeader from './useHeader';
import HeaderModals from './components/modals/HeaderModals';
import { searchProduct } from '../../store/search/action';
import SearchComponent from '../../components/common/main-search/MainSearch';

const { Header } = Layout;

const HeaderFixed = dynamic(() => import('../../components/header/fixed-header/HeaderFixed'));

const ProductCategoryList = dynamic(() => import('../../components/header/product-category-list/ProductCategoryList'));


function SiteHeader({
  toggleVisibilityAction,
  hideAction,
  suggestionVisible,
  callbackVisible,
  registrationVisible,
  loginVisible,
  forgotVisible,
  user,
  fixedSearchVisible,
  searchProductAction,
}) {
  const idDesktop = useMediaQuery({ minWidth: 992 });
  const {
    headerRef,
    handleMenuToggle,
    handleToggleSearchVisibility,
    handleMoveToRegistration,
    handleOnLoginOpen,
    fixedNavVisible,
    messages,
    setRegistrationVisible,
    hideLogin,
    handleOnHideModal,
    handleOnOpenModals,
    handleOnForgotPassword,
    state,
  } = useHeader({ toggleVisibilityAction, hideAction, fixedSearchVisible });

  return (
    <div ref={headerRef}>

      <Header>
        <HeaderModals
          handleMoveToRegistration={handleMoveToRegistration}
          handleOnHideModal={handleOnHideModal}
          forgotVisible={forgotVisible}
          suggestionVisible={suggestionVisible}
          loginVisible={loginVisible}
          handleOnOpenModals={handleOnOpenModals}
          handleOnForgotPassword={handleOnForgotPassword}
          hideLogin={hideLogin}
          setRegistrationVisible={setRegistrationVisible}
          callbackVisible={callbackVisible}
          registrationVisible={registrationVisible}
        />

        <div className="header_top clearfix">
          <div className="container">
            <div className="header_logo_container">
              <Link href="/">
                <a id="logo">
                  <img src="/images/logo.png" alt="" />
                </a>
              </Link>

            </div>
            <div className={`menu ${state.isMenuOpen ? 'is_open' : ''}`}>
              <span className="close_menu" onClick={() => handleMenuToggle()}><Icon type="close" /></span>
              <Menu mode="vertical">
                <Menu.Item key="1">
                  <Link href="/about-us">
                    <a>
                      {messages['local.about_us']}
                    </a>
                  </Link>
                </Menu.Item>
                <Menu.Item key="2">
                  <Link href="/using-rules">
                    <a>
                      {' '}
                      {messages['local.using-rules']}
                    </a>
                  </Link>
                </Menu.Item>
                <Menu.Item key="21">
                  <Link href="/bonus-promo-code">
                    <a>
                      {' '}
                      {messages['local.bonus-and-promo-code']}
                    </a>
                  </Link>
                </Menu.Item>

                <Menu.Item key="suggestion" onClick={() => handleOnOpenModals('suggestionVisible')}>
                  {messages['local.complain_suggestion']}
                </Menu.Item>
                <Menu.Item key="callback" onClick={() => handleOnOpenModals('callbackVisible')}>
                  {messages['local.feedback']}
                </Menu.Item>
              </Menu>
            </div>

            <LangSwitcher />
            <span className="open_menu" onClick={() => handleMenuToggle()}><Icon type="menu" /></span>
          </div>
        </div>
        <div className="header_bottom clearfix">
          <div className="container">
            <div className="header_container">
              <Link href="/shops">
                <a className="our_addresses">

                  <Icon type="environment" />
                  {messages['local.our_addresses']}
                </a>
              </Link>
              <SearchComponent
                className="header_search"
                placeholder={messages['local.search']}
                onSearch={searchProductAction}
              />

              <CartWishlistConteiner />
              <div className="login_container">
                {!user.fetchingInitialUserData
                  ? (
                    <>


                      {user.id
                        ? <Link href="/profile"><a>{`${user.firstName} ${user.lastName}`}</a></Link>
                        : (
                          <>
                            <span
                              className="login"
                              onClick={() => handleOnOpenModals('loginVisible')}
                            >
                              {messages['local.login']}
                              {' '}
                              /
                            </span>
                            <span
                              className="registration"
                              onClick={() => handleOnOpenModals('registrationVisible')}
                            >
                              {' '}
                              {messages['local.registration']}
                            </span>

                          </>
                        )}
                    </>
                  )

                  : null}
              </div>
            </div>
          </div>
        </div>
        {idDesktop && (
        <>
          <ProductCategoryList />
          <HeaderFixed
            isVisible={fixedNavVisible}
            setLoginVisible={handleOnLoginOpen}
            fixedSearchVisible={fixedSearchVisible}
            handleToggleSearchVisibility={handleToggleSearchVisibility}
            searchProductAction={searchProductAction}
          />
        </>
        )}


      </Header>
    </div>
  );
}
function mapStateToProps({
  userEventListeners: {
    isVisible: {
      suggestionVisible,
      callbackVisible,
      registrationVisible,
      loginVisible,
      forgotVisible,
      fixedSearchVisible,
    },
  },
  globalAPIS,
  user,

}) {
  return {
    suggestionVisible,
    callbackVisible,
    registrationVisible,
    fixedSearchVisible,
    globalAPIS,
    loginVisible,
    forgotVisible,
    user,
  };
}
SiteHeader.propTypes = {
  suggestionVisible: PropTypes.bool,
  callbackVisible: PropTypes.bool,
  registrationVisible: PropTypes.bool,
  loginVisible: PropTypes.bool,
  forgotVisible: PropTypes.bool,
  toggleVisibilityAction: PropTypes.func,
  hideAction: PropTypes.func,
  user: PropTypes.object,
  fetchingInitialUserData: PropTypes.bool,
  fixedSearchVisible: PropTypes.bool,
  searchProductAction: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, {
  toggleVisibilityAction: toggleVisibility,
  hideAction: hide,
  searchProductAction: searchProduct,
})(SiteHeader);
