import React, { useMemo } from 'react';
import Button from 'antd/lib/button';
import InputNumber from 'antd/lib/input-number';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';

function ProductQuantity({ value, onChange, xmlCount }) {
  const { messages } = useIntl();
  const maxCount = useMemo(
    () => (xmlCount > 10 ? 10 : xmlCount),
    [xmlCount],
  );
  return !xmlCount ? <div className="product_quantity">{messages['local.out_of_stock']}</div>
    : (
      <div className="product_quantity">
        <Button
          type="primary"
          className="decrement"
          onClick={() => {
            if (value !== 1) { onChange(value - 1); }
          }}
        >
          -

        </Button>
        <InputNumber
          value={value}
          type="number"
          onChange={(newValue) => {
            if (newValue <= maxCount && newValue > 0) {
              onChange(newValue);
            } else if (newValue > maxCount) {
              onChange(maxCount);
            } else onChange(1);
          }}
        />
        <Button
          type="primary"
          className="increment"

          onClick={() => {
            if (value < maxCount) {
              onChange(value + 1);
            }
          }}
        >
          +
        </Button>
      </div>
    );
}
ProductQuantity.propTypes = {
  value: PropTypes.number,
  onChange: PropTypes.func,
  xmlCount: PropTypes.number,
};
ProductQuantity.defaultProps = {
  onChange: () => { },
};

export default ProductQuantity;
