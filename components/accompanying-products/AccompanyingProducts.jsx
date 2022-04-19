import React, { useEffect } from 'react';
import Link from 'next/link';
import { useIntl } from 'react-intl';
import { useDispatch, useSelector } from 'react-redux';
import { ProductSlider } from '..';
import AccompanyingProductList from '../common/AccompanyingProductList';
import { getAccompanyingProduct, resetAccompanyingProductReducer } from '../../store/accompanying-product/action';
import { selectAccompanyingProducts } from '../../store/accompanying-product/reducer';

import { selectCart } from '../../store/cart/reducer';

function AccompanyingProducts() {
  const { messages } = useIntl();
  const dispatch = useDispatch();
  const accompanying = useSelector(selectAccompanyingProducts) || [];
  const cart = useSelector(selectCart);
  const getAccompanyingProductAction = () => {
    dispatch(getAccompanyingProduct());
  };
  const resetAccompanyingProductReducerAction = () => {
    dispatch(resetAccompanyingProductReducer());
  };
  useEffect(() => {
    getAccompanyingProductAction();
    return () => resetAccompanyingProductReducerAction();
  }, [cart.length]);


  return accompanying.length > 0
    ? (
      <div className="slider_wrapper">
        <div className="container">
          <h2 className="section_title"><Link href="/catalog"><a>{messages['local.accompanying_products']}</a></Link></h2>
          <ProductSlider products={accompanying} />
          <AccompanyingProductList products={accompanying} />
          {/* <div className="view_more"> */}
          {/*  <Link href="/catalog"> */}
          {/*    <a> */}
          {/*      {messages['local.view_more']} */}
          {/*    </a> */}
          {/*  </Link> */}
          {/* </div> */}
        </div>
      </div>
    )
    : null;
}


export default AccompanyingProducts;
