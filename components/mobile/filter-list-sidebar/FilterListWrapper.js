import React from 'react';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import MobileSearch from '../mobile-search/MobileSearch';
import IndexFilterList from '../../catalog/index-filter-list/IndexFilterList';
// import Context from '../../../Context';


function FilterListWrapper({ isFilterListOpen }) {
  return (
    <div className={`filter_wrapper_mobile ${isFilterListOpen ? 'is_open' : ''}`}>
      <MobileSearch />
      <IndexFilterList mode="mobile" />
    </div>
  );
}

FilterListWrapper.propTypes = {
  isFilterListOpen: PropTypes.bool,
};
function mapStateToProps({ userEventListeners: { isVisible: { isFilterListOpen } } }) {
  return {
    isFilterListOpen,
  };
}

export default connect(mapStateToProps)(FilterListWrapper);
