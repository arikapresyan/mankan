import React, { useEffect, useState, useMemo } from 'react';


import Layout from 'antd/lib/layout';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import { useIntl } from 'react-intl';
import PropTypes from 'prop-types';
import { connect, useSelector } from 'react-redux';


import Breadcrumb from '../../components/common/Breadcrumb';
import Total from '../../components/cart/Total';
import { getPageData, resetPageData } from '../../store/pages-data/action';
import AccompanyingProducts from '../../components/accompanying-products/AccompanyingProducts';
import PagesLoader from '../../components/pages-loader/PagesLoader';
import Empty from '../../components/empty/Empty';
import CartList from '../../components/cart/CartList';
import RecommendedList from '../../components/cart/RecommendedProductList';
import { selectRedirectRoute } from '../../store/change-page/reducer';

const { Content } = Layout;


function Cart({
  cart, getPageDataAction, pageData, bonusPercent,
}) {
  const [localLoading, setLocalLoading] = useState(true);
  const cartsLength = useMemo(() => Object.keys(cart.data).length, [cart.data]);
  const { messages } = useIntl();
  const redirectRoute = useSelector(selectRedirectRoute);

  useEffect(() => {
    setLocalLoading(true);
    getPageDataAction({ page: 'cart', data: { cart: (cart?.data || {}) } });
  }, [getPageDataAction, !!cartsLength, cart.cartSetCounter, redirectRoute.route]);

  useEffect(() => {
    if (pageData.data && !pageData.loading) {
      setLocalLoading(false);
    }
  }, [pageData.data, pageData.loading]);

  useEffect(() => () => {
    setLocalLoading(true);
  }, []);
  if (localLoading) return <PagesLoader />;
  if (!cartsLength) {
    return (
      <Empty cart={1} text={messages['locale.no_items_in_the_cart']} />
    );
  }

  const fullCartInfo = [];
  pageData?.data?.cartData?.forEach((cartItem) => {
    if (!cart.data[cartItem.id]) return null;
    fullCartInfo.push({
      ...cartItem,
      count: cart.data[cartItem.id].count,
    });
    return true;
  });


  return (
    <Content className="cart_page">
      {cartsLength}
      <div className="cart_wrapper clearfix pt_29">
        <div className="container">
          <Breadcrumb />
        </div>
        <div className="container">
          <h2 className="section_title">
            {' '}
            {messages['local.my_basket']}
          </h2>
          <Row gutter={[32, {
            xs: 32, sm: 32, md: 32, lg: 32,
          }]}
          >
            <Col md={24} lg={24} xl={16} xxl={17}>
              <CartList cart={fullCartInfo} />
            </Col>
            <Col md={24} lg={24} xl={8} xxl={7}>
              <Total cartData={fullCartInfo} bonusPercent={bonusPercent} />
            </Col>
          </Row>
        </div>
      </div>

      {pageData?.data?.bugsData && !!pageData.data.bugsData.length && (
      <div className="recommended_product_section clearfix">
        <div className="container">
          <h2 className="section_title">{messages['local.branded_paper_bags']}</h2>
        </div>
        <div className="recommended_product_wrapper">
          <div className="container">
            <RecommendedList recommendedList={pageData?.data?.bugsData} />
          </div>
        </div>
      </div>
      )}
      <AccompanyingProducts />
    </Content>
  );
}
const mapStateToProps = ({
  cart, pageData, user: { bonusPercent },
}) => ({ cart, pageData, bonusPercent });

Cart.propTypes = {
  cart: PropTypes.objectOf(Object),
  getPageDataAction: PropTypes.func.isRequired,
  pageData: PropTypes.objectOf(Object).isRequired,
  bonusPercent: PropTypes.any,
};

export default connect(mapStateToProps, {
  getPageDataAction: getPageData,
  resetPageDataAction: resetPageData,
})(Cart);
