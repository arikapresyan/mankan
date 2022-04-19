import React from 'react';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ClassificationFilter from './filter-items/ClassificationFilter';
import PriceFilter from './filter-items/PriceFilter';
import GenderFilter from './filter-items/GenderFilter';
import AgeFilter from './filter-items/AgeFilter';
import TypeFilter from './filter-items/TypeFilter';
import MeaningFilter from './filter-items/MeaningFilter';
import BrandFilter from './filter-items/BrandFilter';
import { catalogFilterChange } from '../../store/catalog-filter/action';

function FilterList({ catalogFilterChangeAction }) {
  // "brand": {},
  // "productSex": {},
  // "extraFilter": {},
  // "productAge": {},
  // "productType": {},
  // "productUsage": {}
  return (
    <div id="filter_list">
      <ClassificationFilter
        onChange={(value) => catalogFilterChangeAction({ name: 'classification', value })}
      />
      <PriceFilter
        onChange={(inputsValue) => catalogFilterChangeAction({ name: 'price', value: inputsValue })}
      />
      <GenderFilter onChange={(value) => catalogFilterChangeAction({
        name: 'gender',
        value: [value[value.length - 1] || []],

      })}
      />
      <AgeFilter
        onChange={(value) => catalogFilterChangeAction({ name: 'age', value })}
      />
      <TypeFilter
        onChange={(value) => catalogFilterChangeAction({ name: 'type', value })}
      />
      <MeaningFilter onChange={(value) => catalogFilterChangeAction({ name: 'meaning', value })} />
      <BrandFilter onChange={(value) => catalogFilterChangeAction({ name: 'brand', value })} />
    </div>
  );
}

FilterList.propTypes = {
  catalogFilterChangeAction: PropTypes.func,
};

export default connect(null, { catalogFilterChangeAction: catalogFilterChange })(FilterList);
