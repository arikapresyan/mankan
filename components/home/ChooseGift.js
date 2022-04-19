/* eslint-disable no-param-reassign */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';


import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import Button from 'antd/lib/button';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { useRouter } from 'next/router';
import { useIntl } from 'react-intl';
import PriceSlider from '../common/PriceSlider';
import ChooseAge from './ChooseAge';
import ChooseMeaning from './ChooseMeaning';


import { catalogFilterChange, catalogFilterSetValues } from '../../store/catalog-filter/action';


import ChooseGender from './ChooseGender';


function ChooseGift({
  catalogFilterSetValuesAction,
  price,
  getEvent,
}) {
  const { messages } = useIntl();
  const [values, setValues] = useState({
    price: [...price],
    gender: [],
    age: [],
    meaning: [],
    isUserFilter: true,

  });
  const router = useRouter();

  function goToCatalogWithFilterdValues() {
    catalogFilterSetValuesAction(values);

    router.push('/catalog');
  }
  useEffect(() => {
    if (getEvent) { getEvent.onClick = goToCatalogWithFilterdValues; }
  }, [values]);

  function choseAge({ target }) {
    const { value } = target.closest('button');
    const newValue = [];
    if (value !== values.age[0]) newValue.push(value);
    setValues({ ...values, age: newValue });
  }
  function choseGender({ target: { value } }) {
    const newValue = [];
    if (value !== values.gender[0]) newValue.push(value);
    setValues({ ...values, gender: newValue });
  }

  function choseMeaning(value) {
    setValues({ ...values, meaning: [value] });
  }

  function changePrice(value) {
    setValues({ ...values, price: value });
  }


  return (
    <div id="choose_gift_section">
      <div className="heading">
        <div className="container">
          <h2 className="section_title">{messages['local.choose_gift']}</h2>
        </div>
      </div>
      <div className="choose_gift_wrapper">
        <div className="container">
          <Row gutter={15}>
            <Col xs={24} sm={24} md={12} lg={8} xxl={9} className="choose_age clearfix">
              <h3>{messages['local.select_age']}</h3>
              <ChooseAge onClick={choseAge} selected={values.age[0]} />
            </Col>
            <Col xs={24} sm={24} md={12} lg={4} xxl={5} className="choose_gender clearfix">

              <h3>{messages['local.select_gender']}</h3>
              <ChooseGender handelChange={choseGender} selected={values.gender[0]} />
            </Col>

            <PriceSlider
              price={price}
              handleChange={changePrice}
              messages={messages}
              mod="Home"
            />

            <Col xs={24} sm={24} md={12} lg={6} xxl={5} className="meaning clearfix">
              <h3>{messages['local.meaning']}</h3>
              <ChooseMeaning handleChange={choseMeaning} />
              <a onClick={goToCatalogWithFilterdValues}>
                <Button type="primary">{messages['local.search']}</Button>
              </a>
            </Col>
          </Row>
        </div>
      </div>
    </div>

  );
}

function pamStateToProps({ catalogFilter: { price, gender } }) {
  return {
    price,
    gender,
  };
}

ChooseGift.propTypes = {
  price: PropTypes.array,
  catalogFilterSetValuesAction: PropTypes.func,
  getEvent: PropTypes.objectOf(Object),
};

export default connect(pamStateToProps, {
  catalogFilterChangeAction: catalogFilterChange,
  catalogFilterSetValuesAction: catalogFilterSetValues,

})(ChooseGift);
