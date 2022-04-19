import React, {
  useState, useMemo, useCallback,
} from 'react';
import Col from 'antd/lib/col';
import InputNumber from 'antd/lib/input-number';
import Slider from 'antd/lib/slider';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';
import keys from '../../constants/keys';

function sortNumber(a, b) {
  return a - b;
}

function closerTimer() {
  let timerId = null;
  return (callback, time) => {
    clearTimeout(timerId);
    timerId = setTimeout(callback, time);
  };
}

function PriceSlider({ handleChange, price, mod }) {
  const { messages } = useIntl();
  const [inputsValue, setInputsValue] = useState(price);
  const timerFunction = useMemo(() => closerTimer(), []);


  // useEffect(() => {
  //   if (price[0] === inputsValue[0] && price[1] === inputsValue[1]) return;
  //   setInputsValue([...inputsValue].sort(sortNumber));
  // }, [price]);


  const timerChange = useCallback((values) => {
    const undefinedIndex = values.findIndex((val) => val === '');
    if (undefinedIndex !== -1) values[undefinedIndex] = undefined;

    setInputsValue(values);
    timerFunction(() => {
      handleChange(values);
    }, 500);
  }, []);
  const handleChangeSlider = (values) => {
    const cloneValues = [...values];
    if (!cloneValues[0] || !cloneValues[1]) {
      // eslint-disable-next-line prefer-destructuring
      cloneValues[0] ? cloneValues[1] = cloneValues[0] : cloneValues[0] = cloneValues[1];
    }
    timerChange(values);
  };

  const sortValues = () => {
    if (inputsValue[0] && inputsValue[1]) {
      setInputsValue([...inputsValue].sort(sortNumber));
    }
  };

  const numberInputs = () => (
    <>
      <InputNumber
        min={1}
        max={keys.DEFAULT_PRICE[1]}
        value={inputsValue[0]}
        onChange={(value) => {
          timerChange([value, inputsValue[1]]);
        }}
        onBlur={sortValues}
        placeholder={messages['local.min-price']}
      />
      <span className="line" />
      <InputNumber
        min={1}
        max={keys.DEFAULT_PRICE[1]}
        value={inputsValue[1]}
        onChange={(value) => {
          timerChange([inputsValue[0], value]);
        }}
        onBlur={sortValues}
        placeholder={messages['local.max-price']}
      />
    </>
  );

  const slider = () => (
    <>
      <Slider
        range
        onChange={(values) => {
          if (!values[0]) {
            values[0] = inputsValue[0] || inputsValue[1] || values[1];
          } else if (!values[1]) {
            values[1] = inputsValue[1] || inputsValue[0] || values[0];
          }
          handleChangeSlider(values);
        }}
        value={[
          ...(inputsValue[0] || inputsValue[1]
            ? [Number.isInteger(inputsValue[0]) ? inputsValue[0] : inputsValue[1],
              inputsValue[1] || inputsValue[0]] : []
          )].sort(sortNumber)}
        max={keys.DEFAULT_PRICE[1]}
        min={1}

      />
    </>
  );


  switch (mod) {
    case 'Home':
      return (
        <>
          <Col xs={24} sm={24} md={12} lg={6} xxl={5} className="choose_price clearfix">
            <h3>{messages['local.specify_price']}</h3>

            <div className="price_slider">
              <Col>
                {numberInputs()}
              </Col>
              <Col>
                {slider()}
              </Col>
            </div>
          </Col>

          <Col xs={24} className="choose_price_mobile">
            <Col>
              {numberInputs()}
            </Col>
            <Col>
              {slider()}
            </Col>
          </Col>
        </>
      );

    default:
      return (
        <div className="price_slider">
          <Col>
            {numberInputs()}
          </Col>
          <Col>
            {slider()}
          </Col>
        </div>
      );
  }
}
PriceSlider.propTypes = {
  handleChange: PropTypes.func,
  price: PropTypes.array,
  mod: PropTypes.string,
};

export default PriceSlider;
