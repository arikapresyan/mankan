import React, { useEffect, useMemo } from 'react';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import Layout from 'antd/lib/layout';
import { useIntl } from 'react-intl';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Head from 'next/head';
import Router from 'next/router';
import Link from 'next/link';
import keys from '../../../constants/keys';
import {
  ProductInfo,
  ProductDescription,
  ProductCharacteristics,
  ProductUsefulness,
  ProductSlider,
  AccompanyingProductList,
  ProductImageView,
  Breadcrumb,
} from '../../../components';


import { getPageData } from '../../../store/pages-data/action';
import { wishlistChangeItem } from '../../../store/wishlist/action';
// import AccompanyingProducts from '../../../components/accompanying-products/AccompanyingProducts';
import { setViewedProducts } from '../../../store/viewed-products/action';
import PagesLoader from '../../../components/pages-loader/PagesLoader';

const { IMAGE_POSTFIX } = keys;

const { Content } = Layout;

function Product({
  pageData,
  user,
  wishlistChangeItemAction,
  wishlistIds,
  setViewedProductsAction,
  // getPageDataAction,
  // id,
}) {
  // useEffect(() => {
  //   getPageDataAction({ page: 'oneProduct', id });
  // }, []);
  const escortingProducts = useMemo(() => pageData?.data?.result?.escortingProducts || [], [pageData]);

  useEffect(() => {
    if (pageData.error) {
      Router.push('/error');
    }
  }, [pageData]);

  const thisProduct = useMemo(
    () => (pageData.data && pageData.data.result?.productById) || null,
    [pageData.data],
  );
  const similarProducts = useMemo(
    () => (pageData.data && pageData.data.result?.similarProducts?.rows) || [],
    [pageData.data],
  );

  const images = useMemo(() => {
    if (!thisProduct?.photos) return [];
    const sorted = thisProduct.photos.sort((a, b) => a.order - b.order);
    return sorted.map((photo) => ({
      url: `${IMAGE_POSTFIX}${thisProduct.id}/${photo.url}`,
      title: photo.title,
      alt: photo.alt,
    }));
  }, [IMAGE_POSTFIX, thisProduct?.id, thisProduct?.photos]);

  const { messages } = useIntl();
  useEffect(() => {
    if (thisProduct?.id) {
      setViewedProductsAction({ id: thisProduct.id });
    }
  }, [thisProduct?.id]);
  const name = useMemo(() => thisProduct && thisProduct.langs[0].name, [
    thisProduct,
  ]);
  const metaTitle = useMemo(
    () => thisProduct && thisProduct.langs[0].metaTitle,
    [thisProduct],
  );
  const metaDescription = useMemo(
    () => thisProduct && thisProduct.langs[0].metaDescription,
    [thisProduct],
  );
  if (pageData.loading) return <PagesLoader />;
  if (!pageData?.data) return null;

  return (
    <Content className="product_page">
      <Head>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta
          property="og:description"
          content={metaDescription || ''}
        />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:image" content={images?.[0]?.url} />
      </Head>
      <div className="container">
        <Breadcrumb prodName={name} />
      </div>
      <div className="product_main_wrap">
        <div className="container">
          <Row
            gutter={[
              32,
              {
                xs: 32,
                sm: 32,
                md: 32,
                lg: 32,
                xl: 32,
                xxl: 32,
              },
            ]}
          >
            <Col md={14} lg={14} xl={13} xxl={13} className="img_view_col">
              <ProductImageView images={images} />
            </Col>
            <Col md={10} lg={10} xl={11} xxl={11}>
              <ProductInfo
                oneProduct={thisProduct}
                user={user}
                wishlistChangeItemAction={wishlistChangeItemAction}
                inWishlist={!!wishlistIds[thisProduct.id]}
              />
            </Col>
          </Row>
        </div>
        <div className="container" style={{ marginTop: '-25px' }}>
          <Row
            gutter={[
              32,
              {
                xs: 32,
                sm: 32,
                md: 32,
                lg: 32,
                xl: 32,
                xxl: 32,
              },
            ]}
          >
            <Col xl={10} className="characteristic_col">
              <ProductCharacteristics product={thisProduct} />
            </Col>
            <Col xl={14}>
              <ProductDescription product={thisProduct} />
            </Col>
          </Row>
        </div>

        {!!thisProduct.productUsage.length && (
          <div className="container">
            <ProductUsefulness usefulness={thisProduct.productUsage} />
          </div>
        )}
      </div>
      {!!escortingProducts?.length
      && (
      <div className="slider_wrapper">
        <div className="container">
          <h2 className="section_title"><Link href="/catalog"><a>{messages['local.accompanying_products']}</a></Link></h2>
          <ProductSlider products={escortingProducts} />
          <AccompanyingProductList products={escortingProducts} />
        </div>
      </div>
)}

      {similarProducts.length ? (
        <div className="slider_wrapper">
          <div className="container">
            <h2 className="section_title">
              {messages['local.similar_products']}
            </h2>

            <ProductSlider products={similarProducts} />
            <AccompanyingProductList products={similarProducts} />
          </div>
        </div>
      ) : null}
    </Content>
  );
}

Product.getInitialProps = ({ query, store }) => {
  const { id } = query;
  store.dispatch(getPageData({ page: 'oneProduct', id }));


  return { id };
};
Product.propTypes = {
  pageData: PropTypes.objectOf(Object),
  user: PropTypes.objectOf(Object),
  wishlistChangeItemAction: PropTypes.func.isRequired,
  wishlistIds: PropTypes.objectOf(Object).isRequired,
  setViewedProductsAction: PropTypes.func.isRequired,
  // getPageDataAction: PropTypes.func,
  // id: PropTypes.number,
};

function mapStateToProps({
  oneProduct, pageData, user, wishlist,
}) {
  return {
    oneProduct,
    pageData,
    user,
    wishlistIds: wishlist.productIds,
  };
}

export default connect(mapStateToProps, {
  wishlistChangeItemAction: wishlistChangeItem,
  setViewedProductsAction: setViewedProducts,
  getPageDataAction: getPageData,
})(Product);
