import React from 'react';
import PropTypes from 'prop-types';
import  Pagination  from 'antd/lib/pagination';
import OrderListItem from '../order-info/OrderListItem';

function itemRender(current, type, originalBattery) {
  if (type === 'prev') {
    return <a>Previous</a>;
  }
  if (type === 'next') {
    return <a>Next</a>;
  }
  return originalBattery;
}


function OldOrdersList({
  data, loading, error, page, pagesCount, handleChange,
}) {
  if (error) return 'error';
  return (
    <>
      {
      loading ? '...loading'
        : data.map((product) => (
          <OrderListItem
            key={`order_list_item${product.id}`}
            product={product}
            reloadPageData={handleChange}
            page={page}
            data={data}
          />
        ))
      }
      {pagesCount > 1

        ? (
          <Pagination
            total={pagesCount * 10}
            current={page}
            itemRender={itemRender}
            onChange={handleChange}
          />
        )
        : null}
    </>
  );
}

OldOrdersList.propTypes = {
  data: PropTypes.arrayOf(Array),
  loading: PropTypes.bool,
  error: PropTypes.bool,
  page: PropTypes.number,
  pagesCount: PropTypes.number,
  handleChange: PropTypes.func,
};


export default OldOrdersList;
