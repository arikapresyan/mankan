import React from 'react';
import PropTypes from 'prop-types';

import Input from 'antd/lib/input';
import Spin from 'antd/lib/spin';

import Link from 'next/link';
import { useMainSearch } from './useMainSearch';

const { Search: MainSearch } = Input;

function SearchComponent({
  placeholder,
  className,
  onSearch,
  style,
  enterButton,
}) {
  const {
    data, loading, focused, handleBlur, handleFocus, searchValue, ref, handleSearch, handleChange,
  } = useMainSearch({ onSearch });


  return (
    <div
      className="myHeaderSearch"
      style={{
        display: 'inline-block', position: 'relative', zIndex: '99',
      }}
      ref={ref}
    >
      <Input.Group>
        <MainSearch
          value={searchValue}
          onChange={handleChange}
          enterButton={enterButton}
          className={className}
          placeholder={placeholder}
          onSearch={handleSearch}
          onFocus={handleFocus}
          style={style}
        />
      </Input.Group>
      <div
        style={{
          maxHeight: '300px',
          overflow: 'auto',
          background: '#fff',
          padding: '5px 10px',
          width: '100%',
        }}
      >
        {loading && searchValue?.trim?.() && <Spin />}
        {focused
          && (data || []).map((item) => (
            <div key={`search${item.id}`}>
              <Link href="/product/[id]" as={`/product/${item.id}`}>
                <a onClick={handleBlur}>{item.name}</a>
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
}

SearchComponent.propTypes = {
  placeholder: PropTypes.string,
  className: PropTypes.string,
  onSearch: PropTypes.func,
  style: PropTypes.objectOf(Object),
  enterButton: PropTypes.bool,
};
SearchComponent.defaultProps = {
  enterButton: undefined,
  style: {},
};

export default SearchComponent;
