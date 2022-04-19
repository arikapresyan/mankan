import React, { useCallback, useMemo } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { useIntl } from 'react-intl';
// import LazyLoad, { forceCheck } from 'react-lazyload';
import { wishlistChangeItem } from '../../../store/wishlist/action';
import { getProductToBuy } from '../../../store/buy-product/action';

import { getProductBoxSize, getProductSizeFromObj } from '../../../constants/utils';

import keys from '../../../constants/keys';
import AddToWishlistButton from './components/AddToWishlistButton';
import BuyProductComponent from './components/BuyProductComponent';
import ProductImageComponent from './components/ProductImageComponent';
import CheckProductIs from './components/StatusIcon';
import { isProductBestSeller, isProductNew } from './handleFunctions';
import useGetProductPrice from '../../../hooks/useGetProductPrice';

const { IMAGE_POSTFIX } = keys;


function IndexProductItem({
  product,
  wishlistProductIds,
  wishlistChangeItemAction,
  getProductToBuyAction,
  isSlider,
  mode,
}) {

  const inWishlist = wishlistProductIds[product.id];
  const { messages } = useIntl();
  const {
    size,
    percent,
    boxSize,
  } = product;


  const isNew = isProductNew(product);
  const bestSeller = isProductBestSeller(product);
  const name = product?.langs[0]?.name;
  const { url } = product.photos[0];
  const imageURL = useMemo(() => `${IMAGE_POSTFIX}${product.id}/${url}`, [url, product.id]);


  const { newPrice, oldPrice } = useGetProductPrice(product);
  const ProductNameComponent = useCallback(() => (
    <Link href="/product/[id]" as={`/product/${product.id}`}>
      <a className="prod_name">
        {name || ''}
      </a>
    </Link>
  ), [product.id]);


  const PriceComponent = useCallback(() => (
    <div className="prod_price">
      {newPrice || ''}
      {' '}
      {messages['local.dr']}
      .
      <span className="old_price">
        {oldPrice !== newPrice ? `${oldPrice}  ${messages['local.dr']}` : ''}

      </span>
    </div>
  ), [messages, newPrice, oldPrice]);

  const handleBuy = useCallback(() => getProductToBuyAction({ id: product.id }), [product.id]);


  switch (mode) {
    case 'mobil':
      return (

        // <LazyLoad height={340} offset={[50, 50]}>
          <div className="productItemMobile ">
            <CheckProductIs isNew={isNew} bestSeller={bestSeller} percent={percent} />

            {/* <IconComponent /> */}


            <ProductImageComponent imageURL={imageURL} id={product.id} />
            <div className="prod_info">
              <ProductNameComponent />
              <PriceComponent />
            </div>

            <AddToWishlistButton
              inWishlist={!!inWishlist}
              wishlistChangeItemAction={wishlistChangeItemAction}
              product={product}
            />

            <BuyProductComponent type="link" handleBuy={handleBuy} />


          </div>
        // </LazyLoad>
      );
    case 'accompanying':
      return (
        <div className="accompanying_product_item">
          <CheckProductIs isNew={isNew} bestSeller={bestSeller} percent={percent} />
          {/* <IconComponent /> */}
          <ProductImageComponent imageURL={imageURL} id={product.id} />
          <div className="prod_info">
            <ProductNameComponent />
            <PriceComponent />
          </div>
          <AddToWishlistButton
            inWishlist={!!inWishlist}
            wishlistChangeItemAction={wishlistChangeItemAction}
            product={product}
          />
          <BuyProductComponent type="link" innerText="" handleBuy={handleBuy} />

        </div>
      );
    default:
      return (
        <div className="productItem">


          <Link href="/product/[id]" as={`/product/${product.id}`}>
            <a>
              <CheckProductIs isNew={isNew} bestSeller={bestSeller} percent={percent} />
              <span className="prod_image">
                {isSlider
                  ? <img data-src={imageURL} className="swiper-lazy" alt="" />
                  : <img src={imageURL} className="swiper-lazy" alt="" />}
              </span>


              {isSlider && <div className="swiper-lazy-preloader" style={{ borderColor: 'red' }} />}
              <span className="prod_name">
                {name }
              </span>

              <PriceComponent />
            </a>
          </Link>
          <div className="prod_size">
            {getProductBoxSize(boxSize) || getProductSizeFromObj(size)}
          </div>

          <div className="productItemFooter">
            <BuyProductComponent type="primary" innerText={messages['local.buy']} handleBuy={handleBuy} />
            <AddToWishlistButton
              inWishlist={!!inWishlist}
              wishlistChangeItemAction={wishlistChangeItemAction}
              product={product}
            />
          </div>
        </div>
      );
  }
}
const mapStateToProps = ({ wishlist }) => ({ wishlistProductIds: wishlist.productIds });

IndexProductItem.propTypes = {
  mode: PropTypes.string,
  product: PropTypes.objectOf(Object),
  wishlistProductIds: PropTypes.objectOf(Object),
  wishlistChangeItemAction: PropTypes.func.isRequired,
  getProductToBuyAction: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, {
  wishlistChangeItemAction: wishlistChangeItem,
  getProductToBuyAction: getProductToBuy,
})(IndexProductItem);
