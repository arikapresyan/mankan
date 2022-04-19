/* eslint-disable no-return-assign */
// eslint-disable-next-line import/no-extraneous-dependencies
import { map, first } from 'lodash';
import React, { useEffect, useMemo, useState } from 'react';

import nextId from 'react-id-generator';
import PropTypes from 'prop-types';

const ArrowIcon = '/images/icons/arrow.png';

const ProductThumbnailSlider = ({ images: img, onPreviewImage }) => {
  const [state, setState] = useState({
    images: img.map((image) => ({
      ...image,
      id: nextId(),
    })),
    start: 0,
    finish: 3,
    selectedItem: null,
    index: 0,
  });
  const [changeInterval, setChangeInterval] = useState(null);

  const handleOnPreview = (item, userClick) => {
    const index = state.images.findIndex((i) => i === item);
    setState({
      ...state,
      start: index - 2 >= 0 ? index - 2 : 0,
      finish: index + 3,
      selectedItem: item,
      index,
    });
    onPreviewImage(item);
    if (userClick)clearInterval(changeInterval);
  };
  useEffect(() => {
    const { images } = state;
    setState({ ...state, selectedItem: first(images), index: 0 });
    onPreviewImage(first(images));
    // let counter = 0;
    const intervalId = setInterval(() => {
      // let item = state.images[0];
      //
      // if (counter + 1 < state.images.length) {
      //   counter += 1;
      //   item = state.images[counter];
      // } else {
      //   counter = 0;
      // }
      // handleOnPreview(item);
    }, 7000);
    setChangeInterval(intervalId);

    return () => {
      clearInterval(intervalId);
    };
  }, []);


  const handleOnUp = () => {
    setState((prevState) => ({
      ...prevState,
      start: prevState.start += 1,
      finish: prevState.finish += 1,
      index: prevState.index + 1,
      selectedItem: prevState.images[prevState.index + 1],
    }));
    handleOnPreview(state.images[state.index + 1], 1);
  };


  const handleOnDown = () => {
    setState((prevState) => ({
      ...prevState,
      start: prevState.start -= 1,
      finish: prevState.finish -= 1,
      index: prevState.index - 1,
      selectedItem: prevState.images[prevState.index - 1],
    }));
    handleOnPreview(state.images[state.index - 1], 1);
  };

  const renderImages = () => {
    const { start, finish } = state;
    const visibleImages = state.images.filter((item, index) => index >= start && index <= finish);
    return visibleImages;
  };

  const validationForUp = useMemo(() => (state.finish - 2) < state.images?.length,
    [state.finish, state.images]);

  const validationForDown = useMemo(() => state.index !== 0, [state]);

  return (
    <div className="thumbnail_slider">
      {
        validationForDown && (<span className="prev" onClick={handleOnDown}><img src={ArrowIcon} alt="" /></span>)
        }
      <div className="thumbnail_image_list">
        {state.images.length > 0 && map(renderImages(), (item, index) => (
          <div
            className="thumb_image"
            key={index}
            style={{
              ...(state.selectedItem && item.id === state.selectedItem.id) ? { border: '3px solid red' } : {},
              cursor: 'pointer',
            }}
          >
            <img
              src={item.url}
              alt={item.alt}
              title={item.title}
              onClick={() => handleOnPreview(item, 1)}
            />
          </div>
        ))}

      </div>
      {validationForUp && (
      <span className="next" style={{ zIndex: '9' }} onClick={handleOnUp}>
        <img src={ArrowIcon} alt="" />
      </span>
      )}
    </div>
  );
};


ProductThumbnailSlider.propTypes = {
  images: PropTypes.array,
  onPreviewImage: PropTypes.func,
};
export default ProductThumbnailSlider;
