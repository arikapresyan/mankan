import React from 'react';
import PropTypes from 'prop-types';
import keys from '../../../../constants/keys';

function ImageSlide({ item, ...rest }) {
  const { image, link } = item;
  const imgSrc = `${keys.HOST}/mainSlider/${image}`;
  return (
    <div {...rest}>
      <a href={link} rel="noopener noreferrer">
        <img src={imgSrc} alt="main Slide" />
      </a>
    </div>
  );
}

ImageSlide.propTypes = {
  item: PropTypes.object,
  image: PropTypes.string,
  link: PropTypes.string,
};

export default ImageSlide;
