import React, { useState } from 'react';
import Row from 'antd/lib/row';
import Checkbox from 'antd/lib/checkbox';


import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';
import { createObjectArrayFromObject } from '../../../constants/utils';
import ShowMoreItems from './ShowMoreItems';

function TypeFilter({ type, onChange, types }) {
  const { messages } = useIntl();
  const itemsCount = Object.keys(types).length;
  const [limit, setLimit] = useState(10);

  const showMore = () => {
    setLimit(limit + 10);
  };
  return (
    <div className="sidebar_info_box">
      <h2 className="sidebar_info_title">{messages['local.type']}</h2>
      <div className="option_list">
        <Checkbox.Group value={type} onChange={onChange} className="toy_type">
          <Row>
            {types.map(({ id, name }, index) => (index > limit ? null : <Checkbox key={`${id} types`} value={`${id}`}>{name}</Checkbox>))}
            <Checkbox value="all">
              {messages['local.all']}
            </Checkbox>
          </Row>
        </Checkbox.Group>
      </div>
      <ShowMoreItems handleClick={showMore} moreItems={itemsCount - limit} />
    </div>
  );
}


function pamStateToProps({ catalogFilter: { type } }) {
  return {
    type,
  };
}

TypeFilter.propTypes = {
  type: PropTypes.arrayOf(Array),
  onChange: PropTypes.func,
  types: PropTypes.array,
};

export default connect(pamStateToProps)(TypeFilter);
