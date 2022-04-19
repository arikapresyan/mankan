import React, { useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import Col from 'antd/lib/col';
import Row from 'antd/lib/row';
import dynamic from 'next/dynamic';


import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';

import Link from 'next/link';
import Layout from 'antd/lib/layout';
import message from 'antd/lib/message';

import Head from 'next/head';
import Axios from '../store/services/Axios';
import { show } from '../store/userEventListeners/action';
import { getPageData } from '../store/pages-data/action';
import { removeLocalStorageObj } from '../constants/utils';
import { sendOrderSuccess } from '../store/cart/action';
import { catalogGet } from '../store/catalog/action';


const { Content } = Layout;

const ProductSlider = dynamic(() => import('../components/common/ProductSlider'), { ssr: false });
const MobileProductList = dynamic(() => import('../components/mobile/mobile-product-list/MobileProductList'), { ssr: false });
const SelectByAge = dynamic(() => import('../components/home/SelectByAge'), { ssr: false });
const ChooseGift = dynamic(() => import('../components/home/ChooseGift'), { ssr: false });
const MainSlider = dynamic(() => import('../components/home/main-slider/MainSlider'), { ssr: false });
const MobileCategoryList = dynamic(() => import('../components/mobile/category-list-mobile/CategoryListMobile'), { ssr: false });
const LazyLoad = dynamic(() => import('react-lazyload'), { ssr: false });

async function sendGetRequest(token) {
  await Axios.get(`/api/user/verifyEmail/${token}`);
}

async function changeEmailRequest(token) {
  await Axios.get(`/api/user/changeEmail/${token}`);
}
async function confirmBankOrder(orderId) {
  await Axios.get(`/api/user/checkOrder?orderId=${orderId}`);
}
function Home({
  token,
  orderId,
  showAction,
  sendOrderSuccessAction,
  pageData,
  lang,
  confirmEmailChange,
}) {
  const idDesktop = useMediaQuery({ minWidth: 992 });
  const isTablet = useMediaQuery({ minWidth: 766 });

  const { messages } = useIntl();
  useEffect(() => {
    if (token) {
      sendGetRequest(token).then(() => {
        showAction({ name: 'loginVisible' });
      });
    } else if (orderId) {
      confirmBankOrder(orderId).then(() => {
        message.success(messages['local.successText']);
        removeLocalStorageObj('cart');
        sendOrderSuccessAction();
      }).catch(() => {
        message.error(messages['local.errorText']);
      });
    }
  }, [token, orderId]);

  useEffect(() => {
    if (confirmEmailChange) {
      changeEmailRequest(confirmEmailChange).then(() => {
        message.success(messages['local.successText']);
      });
    }
  }, [confirmEmailChange]);


  return (
    <>
      <Head>
        <title>Mankan Toys ● Խաղալիքների օնլայն խանութ</title>
        <meta name="description" content="Խաղալիքների օնլայն վաճառք եւ արագ առաքում, մասնագիտացված խանութ-սրահներ, փափուկ եւ ինտերակտիվ խաղալիքների արտադրություն..." />
      </Head>
      {(
      pageData.loading
        ? (
          <Content className="home_page">
            <MainSlider />
          </Content>
        )
        : (
          <Content className="home_page">
            <MainSlider />
            {!idDesktop && <MobileCategoryList />}

            {(Array.isArray(pageData?.data) ? pageData?.data : []).map((data) => {
              if (data.status !== 'off') {
                if (data.id === 2) {
                  return <SelectByAge key={`home_page${data.id}`} />;
                } if (data.id === 5) {
                  return <ChooseGift key={`home_page${data.id}`} />;
                }
              }

              const products = data?.products?.products;
              if (!products || products.rows.length === 0 || data.status === 'off') return null;


              let link = '/catalog?classification=';
              if (data.id === 1) {
                link += 'isNew';
              } else if (data.id === 3) {
                link += 'percent';
              } else if (data.id === 6) {
                link += 'bestSeller';
              } else if (data.id === 4) {
                link = '/catalog?brand=1';
              } else link += data.products.products.rows[0]?.extraFilter?.[0]?.id;
              return (
                <div className="new_products_slider_section slider_wrapper" key={`home_page${data.id}`}>
                  <div className="container">
                    <h2 className="section_title">
                      <Link href={link}>
                        <a>
                          {data.names.find(({ lang: thisLang }) => thisLang === lang).name}
                        </a>
                      </Link>
                    </h2>
                  </div>
                  { !isTablet ? (
                    <>
                      {' '}

                      <div className="container">
                        <Row>
                          <Col md={24} lg={8} xl={8} xxl={7} />
                          <Col md={24} lg={16} xl={16} xxl={17}>
                            <MobileProductList products={products.rows} />
                          </Col>
                        </Row>
                        {' '}
                        <div className="view_more">
                          <Link href={link}>
                            <a>
                              {messages['local.view_more']}
                              <img src="/images/icons/next.png" alt=" " />
                            </a>
                          </Link>
                        </div>
                      </div>

                    </>
                  )
                    : (
                      <LazyLoad height={375}>
                        <div className="container">
                          <ProductSlider products={products.rows} />
                          <div className="view_more">
                            <Link href={link}>
                              <a>
                                {messages['local.view_more']}
                                <img src="/images/icons/next.png" alt=" " />
                              </a>
                            </Link>
                          </div>
                        </div>
                      </LazyLoad>
                    ) }

                </div>
              );
            })}
          </Content>
        )

      )}
    </>
  );
}


function mapStateToProps({ productsList, pageData, user: { lang } }) {
  return {
    productsList,
    pageData,
    lang,
  };
}


Home.getInitialProps = async function ({ query, store }) {
  const { token, confirmEmailChange, orderId } = query;
  await store.dispatch(getPageData({ page: 'home' }));

  return { token, confirmEmailChange, orderId };
};
Home.propTypes = {
  showAction: PropTypes.func.isRequired,
  token: PropTypes.string,
  confirmEmailChange: PropTypes.string,
  pageData: PropTypes.objectOf(Object).isRequired,
  lang: PropTypes.string.isRequired,
  orderId: PropTypes.string,
  sendOrderSuccessAction: PropTypes.func,

};
export default connect(mapStateToProps, {
  showAction: show,
  sendOrderSuccessAction: sendOrderSuccess,
  catalogGetAction: catalogGet,
})(Home);
