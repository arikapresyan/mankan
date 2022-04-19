import React, { useMemo } from 'react';
import { useIntl } from 'react-intl';
import PropTypes from 'prop-types';
import {
  getProductSizeFromObj, getProductBrand, getProductAge, getProductBattery, getProductBoxSize,
} from '../../../constants/utils';

function ProductCharacteristics({ product }) {
  const {
    size, maxAge, minAge, brand, accessories, boxSize, xmlBarCode,
  } = product;
  const productSize = useMemo(() => getProductSizeFromObj(size).trim(),
    [size, getProductSizeFromObj]);
  const boxSizeText = useMemo(() => getProductBoxSize(boxSize), [boxSize, getProductBoxSize]);
  const productBrand = useMemo(() => getProductBrand(brand), [getProductBrand, brand]);
  const productAge = useMemo(() => getProductAge(minAge, maxAge), [minAge, maxAge, getProductAge]);
  const { messages } = useIntl();
  const productBattery = useMemo(() => getProductBattery(accessories),
    [getProductBattery, accessories]);
  const batteryCount = product?.accessories?.[0]?.ProductAccessoriesMap?.count;


  return (
    <div className="product_characteristics">
      <h2>{messages['local.technical_specifications']}</h2>
      <div className="characteristics_list">
        {(boxSizeText || productSize) && (
        <div className="characteristics_list_item">
          <div className="characteristic_name">{boxSizeText ? messages['local.box_size'] : messages['local.size']}</div>
          <div className="characteristic_description">
            {`${boxSizeText || productSize} ${messages['local.sm']}`}
          </div>
        </div>
        )}

        {productAge && (
        <div className="characteristics_list_item">
          <div className="characteristic_name">{messages['local.age']}</div>
          <div className="characteristic_description">
            {productAge}
            {' '}
            {messages['local.year_short']}
          </div>
        </div>
        )}

        {productBrand && (
        <div className="characteristics_list_item">
          <div className="characteristic_name">{messages['local.brand']}</div>
          <div className="characteristic_description">{productBrand}</div>
        </div>
        )}

        {productBattery && (
        <div className="characteristics_list_item">
          <div className="characteristic_name">{messages['local.battery']}</div>
          <div className="characteristic_description">
            {batteryCount}
            {' '}
            {messages['local.item(s)']}
            {' '}
            {productBattery.name}
          </div>
        </div>
        )}
        <div className="characteristics_list_item">
          <div className="characteristic_name">{messages['local.barcode']}</div>
          <div className="characteristic_description">{xmlBarCode}</div>
        </div>
      </div>
    </div>
  );
}

ProductCharacteristics.propTypes = {
  product: PropTypes.object,
};

export default ProductCharacteristics;
