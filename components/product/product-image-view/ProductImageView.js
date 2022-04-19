import React, { useState } from 'react';

import PropTypes from 'prop-types';
import ProductThumbnailSlider from './ProductThumbnailSlider';
import ProductImagePreview from './ProductImagePreview';

function ProductImageView({ images }) {
  const [selectedImage, setSelectedImage] = useState(null);


  const handlePreviewImage = (selectedImg) => {
    setSelectedImage(selectedImg);
  };

  return (
    <div className="product_view_container">
      <ProductThumbnailSlider onPreviewImage={handlePreviewImage} images={images} />
      <ProductImagePreview selectedImage={selectedImage} />
    </div>
  );
}

ProductImageView.propTypes = {
  images: PropTypes.array,
};

export default ProductImageView;
