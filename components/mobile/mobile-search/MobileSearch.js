import React from 'react';
import { useIntl } from 'react-intl';
import { useDispatch } from 'react-redux';
import SearchComponent from '../../common/main-search/MainSearch';
import { searchProduct } from '../../../store/search/action';


function MobileSearch() {
  const { messages } = useIntl();
  const dispatch = useDispatch();
  const searchProductAction = (params) => {
    dispatch(searchProduct(params));
  };
  return (
    <div className="mobile_search">
      <SearchComponent
        enterButton={false}
        className="header_search"
        placeholder={messages['local.search']}
        onSearch={searchProductAction}
      />
    </div>
  );
}

export default MobileSearch;
