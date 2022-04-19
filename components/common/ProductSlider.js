/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState, useEffect, useCallback } from 'react';

import Swiper from 'react-id-swiper/lib/';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { wishlistChangeItem } from '../../store/wishlist/action';
import IndexProductItem from './index-product-item/IndexProductItem';


const getSwiperParams = (setSwiper) => ({
  lazy: true,
  spaceBetween: 15,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    renderBullet: () => '',
  },
  autoplay: {
    delay: 7000,
    disableOnInteraction: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {


    0: {
      slidesPerView: 1,
    },
    600: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 25,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 30,
    },


  },
  getSwiper: (s) => {
    setSwiper(s);
  },

});

function ProductSlider({
  products,
}) {
  const [swiper, setSwiper] = useState(null);
  const [status, setStatus] = useState({});
  const items = (products);


  const params = getSwiperParams(setSwiper);

  const cb = useCallback(
    () => {
      const { isBeginning, isEnd } = swiper;
      setStatus({ isBeginning, isEnd });
    },
    [swiper],
  );
  useEffect(() => {
    if (swiper !== null) {
      swiper.on('slideChange', cb);
      const { isBeginning, isEnd } = swiper;
      setStatus({ isBeginning, isEnd });
    }

    return () => {
      if (swiper !== null) {
        swiper.off('slideChange', cb);
      }
    };
  }, [swiper]);

  return (
    <div className="product_slider">
      <Swiper {...params}>
        {
          items.length && items.map((product) => (
            <div key={product.id || product.key}>
              <IndexProductItem
                product={product}
                isSlider={true}
              />
            </div>
          ))
        }

      </Swiper>
      <button
        className={`next-slide${status.isEnd ? ' disabled' : ''}`}
        type="button"
        onClick={() => { swiper && swiper.slideNext(); }}
      />
      <button
        className={`prev-slide${status.isBeginning ? ' disabled' : ''}`}
        type="button"
        onClick={() => { swiper && swiper.slidePrev(); }}
      />
    </div>
  );
}

ProductSlider.propTypes = {
  products: PropTypes.array,
  wishlistChangeItemAction: PropTypes.func,
  wishlist: PropTypes.object,
};

function mapStateToProps({ wishlist }) {
  return {
    wishlist,
  };
}


export default connect(mapStateToProps, {
  wishlistChangeItemAction: wishlistChangeItem,
})(ProductSlider);
