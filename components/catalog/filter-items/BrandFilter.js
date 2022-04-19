import React, { useState } from 'react';
import Row from 'antd/lib/row';
import Checkbox from 'antd/lib/checkbox';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';
import ShowMoreItems from './ShowMoreItems';

function BrandFilter({ brand, onChange, brands }) {
  const { messages } = useIntl();

  const itemsCount = Object.keys(brands).length;
  const [limit, setLimit] = useState(10);
  const showMore = () => {
    setLimit(limit + 10);
  };
  return (
    <div className="sidebar_info_box">
      <h2 className="sidebar_info_title">{messages['local.brand']}</h2>
      <div className="option_list">
        <Checkbox.Group
          value={brand}
          onChange={onChange}
          className="brands"
        >
          <Row>
            {brands.map(({ id, name }, index) => (index < limit ? <Checkbox key={`${id} brands`} value={`${id}`}>{name}</Checkbox> : null))}
            <Checkbox value="all">
              {messages['local.all']}
            </Checkbox>
          </Row>
        </Checkbox.Group>
        <ShowMoreItems handleClick={showMore} moreItems={itemsCount - limit} />
      </div>
    </div>
  );
}

function pamStateToProps({ catalogFilter: { brand } }) {
  return {
    brand,
  };
}

BrandFilter.propTypes = {
  brand: PropTypes.array,
  onChange: PropTypes.func,
  brands: PropTypes.array.isRequired,
};

export default connect(pamStateToProps)(BrandFilter);
