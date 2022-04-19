/* eslint-disable no-nested-ternary */
import React, { useEffect } from 'react';

import Layout from 'antd/lib/layout';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';
import { Breadcrumb, WishlistItems, AccompanyingProductList } from '../../components';
import { wishlistGet, wishlistProductsReset, wishlistChangeItem } from '../../store/wishlist/action';
import { getProductToBuy } from '../../store/buy-product/action';
import PagesLoader from '../../components/pages-loader/PagesLoader';
import Empty from '../../components/empty/Empty';


const { Content } = Layout;

function Wishlist({
  wishlistProductsResetAction,
  wishlistGetAction,
  products,
  loadWishlist,
  wishlistError,
  productIds,
  lang,
}) {
  const { formatMessage, messages } = useIntl();

  useEffect(() => {
    wishlistGetAction();
    return () => {
      wishlistProductsResetAction();
    };
  }, []);

  useEffect(() => {
    wishlistGetAction();
  }, [lang]);

  if (wishlistError) return <div>{messages['local.errorText']}</div>;
  if (loadWishlist) return <PagesLoader />;
  if (!Object.keys(productIds).length) return <Empty text={messages['locale.no_items_in_wish-list']} />;
  const filteredProducts = products.filter(({ id }) => !!productIds[id]);

  return (

    <Content className="wishlist_page">
      <div className="container">
        <div className="top_content">
          <Breadcrumb />
          <div className="delivery_terms">
            {formatMessage({ id: 'local.free_shipping_message' }, {
              price: <span className="toChangePrice">
                20000
                {' '}
                {messages['local.dr']}
                {'.'}
              </span>,
            })}
          </div>
        </div>
      </div>
      <div className="container">
        <h2 className="section_title">{messages['local.Wish_list']}</h2>

        <Row gutter={[32, {
          xs: 32, sm: 32, md: 32, lg: 32,
        }]}
        >
          <Col md={24} lg={24} xl={24} xxl={24}>
            <WishlistItems
              products={filteredProducts}
            />
          </Col>
        </Row>
      </div>
      <div className="container">
        <Row gutter={[32, {
          xs: 32, sm: 32, md: 32, lg: 32,
        }]}
        >
          <Col md={24} lg={24} xl={24} xxl={24}>
            <AccompanyingProductList
              products={filteredProducts}
            />
          </Col>
        </Row>
      </div>
    </Content>
  );
}

Wishlist.propTypes = {
  wishlistGetAction: PropTypes.func.isRequired,
  products: PropTypes.arrayOf(Array),
  wishlistProductsResetAction: PropTypes.func.isRequired,
  loadWishlist: PropTypes.bool,
  wishlistError: PropTypes.bool,
  productIds: PropTypes.objectOf(Object),
  lang: PropTypes.string.isRequired,
};
function mapStateToProps({
  wishlist: {
    products,
    productIds,
    loadWishlist,
    wishlistError,
  },
  user: {
    lang,
  },
}) {
  return {
    products,
    productIds,
    loadWishlist,
    wishlistError,
    lang,
  };
}

export default connect(mapStateToProps, {
  wishlistGetAction: wishlistGet,
  wishlistProductsResetAction: wishlistProductsReset,
  getProductToBuyAction: getProductToBuy,
  wishlistChangeItemAction: wishlistChangeItem,
})(Wishlist);
