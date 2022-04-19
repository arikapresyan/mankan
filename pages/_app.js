/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';

import { Provider } from 'react-redux';
import App from 'next/app';
import withRedux from 'next-redux-wrapper';
import withReduxSaga from 'next-redux-saga';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import reduxStore from '../store/configuredStore';

import 'font-awesome/css/font-awesome.min.css';

import 'swiper/css/swiper.css';
import '../index.less';

import { getUserData, setLang } from '../store/user/action';

const AppLayout = dynamic(() => import('../App'));


class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    const pageProps = Component.getInitialProps
      ? await Component.getInitialProps(ctx)
      : {};
    return { pageProps };
  }

  componentDidMount() {
    (function (w, d, s, l, i) {
      w[l] = w[l] || [];
      w[l].push({
        'gtm.start':
          new Date().getTime(),
        event: 'gtm.js',
      }); const f = d.getElementsByTagName(s)[0];
      const j = d.createElement(s); const dl = l != 'dataLayer' ? `&l=${l}` : ''; j.async = true; j.src = `https://www.googletagmanager.com/gtm.js?id=${i}${dl}`; f.parentNode.insertBefore(j, f);
    }(window, document, 'script', 'dataLayer', 'GTM-N6GSQL3'));


    window.fbAsyncInit = function () {
      FB.init({
        xfbml: true,
        version: 'v10.0',
      });
    };

    (function (d, s, id) {
      let js; const
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));

    let lang = localStorage.getItem('lang');
    if (lang !== 'ARM' && lang !== 'RU' && lang !== 'ENG') {
      lang = 'ARM';
      localStorage.setItem('lang', lang);
    }


    this.props.store.dispatch(setLang({ lang }));
    this.props.store.dispatch(getUserData());
  }


  render() {
    const {
      Component, pageProps, store, router: { pathname },
    } = this.props;
    return (
      <>

        <Head>

          <meta name="yandex-verification" content="2da434c5e87e666a" />
          <link rel="shortcut icon" href="/Favicon.png" />
        </Head>
        {pathname === '/_error' ? <Component />
          : (
            <Provider store={store} key="provider">
              <AppLayout pageProps={pageProps} Component={Component} key="appLayout" />
            </Provider>
          )}


        <noscript>

          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-N6GSQL3"
            height="0"
            width="0"

            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>

        <div id="fb-root" />

        <div
          className="fb-customerchat"
          attribution="page_inbox"
          page_id="291517670961152"
        />
      </>
    );
  }
}

// eslint-disable-next-line import/no-mutable-exports
let store;
export default withRedux((initialState, props) => {
  store = reduxStore(initialState, props);
  return store;
})(withReduxSaga(MyApp));

export { store };
