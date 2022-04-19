import React, { memo } from 'react';
import PropTypes from 'prop-types';
import './VideoSlide.less';
import keys from '../../../../constants/keys';

function VideoSlide({ item }) {
  const { url, link } = item;
  const videoSrc = `${keys.HOST}/mainSlider/${url}`;
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <video className="myVideo" autoPlay={true} controls={false} name="media" muted={true} loop={true}>
        <source src={videoSrc} type="video/mp4" />
      </video>
    </a>
  );
}

VideoSlide.propTypes = {
  item: PropTypes.objectOf(PropTypes.any),
};

export default memo(VideoSlide);
