import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ReactImageMagnify from 'react-image-magnify';

function getPercentageChange(oldNumber, newNumber) {
  const decreaseValue = oldNumber - newNumber;

  return Math.abs((decreaseValue / oldNumber) * 100);
}

function per(num, amount) {
  return num * amount / 100;
}

function ProductImagePreview(props) {
  const { selectedImage } = props;
  const [widthHeight, setWidthHeight] = useState({ width: 500, height: 430 });
  const [currantImage, setCurrantImage] = useState(null);

  useEffect(() => {
    if (selectedImage) {
      const img = new Image();
      img.src = selectedImage.url;

      img.onload = () => {
        const bigSize = img.height > img.width ? 'height' : 'width';
        let newWidthHeight = {};
        if (img[bigSize] > 500) {
          const percentToChangeSize = getPercentageChange(img[bigSize], 500);
          newWidthHeight.width = (img.width - per(img.width, percentToChangeSize)) * 2;
          newWidthHeight.height = (img.height - per(img.height, percentToChangeSize)) * 2;
        } else {
          newWidthHeight = {
            width: (img.width) * 2,
            height: (img.height) * 2,
          };
        }

        setWidthHeight(newWidthHeight);
        setCurrantImage(selectedImage);
      };
    }
  }, [selectedImage]);
  const wh = {
    width: `${(widthHeight.width) / 2}px`,
    height: `${(widthHeight.height) / 2}px`,
  };

  return (
    <div className="product_big_image">
      {selectedImage && (
        <div
          className="product_img_preview"
          style={wh}
        >

          {currantImage && (
          <ReactImageMagnify
            {...{

              smallImage: {
                alt: currantImage.alt,
                isFluidWidth: true,
                src: currantImage.url,
                title: currantImage.title,
                ...wh,
              },
              largeImage: {
                alt: currantImage.alt,
                title: currantImage.title,
                src: currantImage.url,
                ...widthHeight,
              },
              enlargedImagePosition: 'over',

            }}
          />
          )}
          {/* <Zoom */}
          {/*  img={selectedImage.url} */}
          {/*  zoomScale={1} */}
          {/*  width={400} */}
          {/*  height={400} */}
          {/* /> */}
          {/* <img src={selectedImage.url} alt="" /> */}
        </div>
      )}

    </div>
  );
}

ProductImagePreview.propTypes = {

  selectedImage: PropTypes.instanceOf(Object),
};

export default ProductImagePreview;
