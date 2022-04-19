import React from 'react';
import PropTypes from 'prop-types';
import keys from '../../../constants/keys';

function SlideItem({ item, ...rest }) {
  const { image, url, link } = item;
  let imgSrc;
  if (image) {
    imgSrc = `${keys.HOST}/MainSlider/${item.image}`;
    return (
      <div {...rest}>
        <a href={link} target="_blank" rel="noopener noreferrer">
          <img src={imgSrc} alt="main Slide" />
        </a>
      </div>
    );
  }
  return link ? (
    <div>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img src={imgSrc} alt="main Slide" />
      </a>
    </div>
  ) : (
    <div {...rest}>
      {/* <a href={link} target="_blank" rel="noopener noreferrer"> */}
      {/*  <img src={imgSrc} alt="main Slide" /> */}
      {/* </a> */}
      {/* <video src="https://www.youtube.com/watch?v=fEErySYqItI" width="320" height="240" autoPlay muted /> */}

      <iframe
        title={item.id}
        width="1280"
        height="720"
        src="https://www.youtube.com/embed/fEErySYqItI?autoplay=1&controls=0&mute=1"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      />
    </div>
  );
}

SlideItem.propTypes = {
  item: PropTypes.objectOf(PropTypes.any),
};

export default SlideItem;
