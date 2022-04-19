import React, { useEffect, useMemo, useState } from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';


import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useRouter } from 'next/router';
import { IntlProvider } from 'react-intl';

import CategoryMenuMobile from './components/mobile/category-menu-mobile/CategoryMenuContent';
import CategorySubmenuMobile from './components/mobile/category-menu-mobile/CategorySubmenuContent';
import FilterListSidebar from './components/mobile/filter-list-sidebar/FilterListWrapper';
import messages from './staticText/messages';
import PagesLoader from './components/pages-loader/PagesLoader';

import { resetCatalogFilterReducer } from './store/catalog-filter/action';
import { hideAll } from './store/userEventListeners/action';
import { resetPageData } from './store/pages-data/action';
import { getTextFromPath } from './components/common/constants';


const BuyProductModal = dynamic(() => import('./components/modals/buy-product-modal/BuyProductModal'));
const SiteHeader = dynamic(() => import('./layout/header/SiteHeader'));
const MobileMenuBar = dynamic(() => import('./layout/mobile-menu/MobileMenuBar'));
const SiteFooter = dynamic(() => import('./layout/footer/SiteFooter'));

function App({
  Component,
  pageProps,
  lang,
  hideAllAction,
  resetPageDataAction,
}) {
  const router = useRouter();

  const { pathname } = router;
  const title = useMemo(() => getTextFromPath(pathname, messages[lang]) || 'Mankan', [lang, pathname]);

  const [isPageLoading, setIsPageLoading] = useState(false);

  useEffect(() => {
    router.events.on('routeChangeStart', (route) => {
      if (route !== '/cart') resetPageDataAction();
      window.scrollTo(0, 0);
      setIsPageLoading(true);
      hideAllAction();
    });
    router.events.on('routeChangeComplete', () => {
      setIsPageLoading(false);
    });
  }, []);


  return (
    <IntlProvider locale="en" defaultLocale="ARM" messages={messages[lang]}>
      <Head>
        <title>{title}</title>
      </Head>
      <div className="App">
        <BuyProductModal />

        <SiteHeader />

        <MobileMenuBar />
        <FilterListSidebar />
        <CategorySubmenuMobile />
        <CategoryMenuMobile />


        {isPageLoading ? <PagesLoader />
          : null}

        <div style={isPageLoading ? { display: 'none' } : {}}>
          <Component {...pageProps} />
        </div>

        <SiteFooter />
      </div>
    </IntlProvider>

  );
}

App.propTypes = {
  Component: PropTypes.any,
  pageProps: PropTypes.object,
  lang: PropTypes.string,
  hideAllAction: PropTypes.func,
  resetPageDataAction: PropTypes.func.isRequired,
};


function mapStateToProps({
  user: { lang },
}) {
  return {
    lang,
  };
}

export default connect(mapStateToProps, {
  resetCatalogFilterReducerAction: resetCatalogFilterReducer,
  hideAllAction: hideAll,
  resetPageDataAction: resetPageData,
})(App);
