import React from 'react';
import Swiper from 'react-id-swiper';
import PropTypes from 'prop-types';
import nextId from 'react-id-generator';
import keys from '../../constants/keys';
import CheckProductIs from '../common/index-product-item/components/StatusIcon';

const { IMAGE_POSTFIX } = keys;
const params = {
  lazy: true,
  speed: 1000,
  centeredSlides: true,
  slidesPerView: 1,
  autoplay: {
    delay: 7000,
    disableOnInteraction: true,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    renderBullet: () => '',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
};


function OneProductSlider({ oneProduct }) {
  return (
    <div className="product_view_slider">
      <Swiper {...params}>

        {oneProduct.photos && oneProduct.photos.map(({ url }) => (
          <div className="item" key={url}>

            <span>
              <CheckProductIs
                percent={oneProduct.percent}
                isNew={oneProduct.isNew}
                bestSeller={oneProduct?.statistic?.[0]?.bestSeller}
              />
            </span>
            <img data-src={`${IMAGE_POSTFIX}${oneProduct.id}/${url}`} className="swiper-lazy" />
            <div className="swiper-lazy-preloader" />
          </div>
        ))}
      </Swiper>
    </div>
  );
}

OneProductSlider.propTypes = {
  oneProduct: PropTypes.object,
};

export default OneProductSlider;
