import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'antd/lib/icon';
import { useIntl } from 'react-intl';

function ShowMoreItems({ moreItems, handleClick }) {
  const { messages } = useIntl();
  return (
    moreItems >= 1
    && (
    <div className="open_more" onClick={handleClick}>
      <span>
        {messages['local.see_more']}
        {' '}
        {`(${moreItems})`}
        <Icon type="down" />
      </span>
    </div>
    )
  );
}

ShowMoreItems.propTypes = {
  moreItems: PropTypes.number,
  handleClick: PropTypes.func,
};

export default ShowMoreItems;
