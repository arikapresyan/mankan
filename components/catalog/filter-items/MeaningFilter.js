import React, { useState } from 'react';
import Row from 'antd/lib/row';
import Checkbox from 'antd/lib/checkbox';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';
import ShowMoreItems from './ShowMoreItems';

function MeaningFilter({ meaning, onChange, meanings }) {
  const { messages } = useIntl();

  const itemsCount = Object.keys(meanings).length;
  const [limit, setLimit] = useState(10);
  const showMore = () => {
    setLimit(limit + 10);
  };
  return (
    <div className="sidebar_info_box">
      <h2 className="sidebar_info_title">{messages['local.meaning']}</h2>
      <div className="option_list">
        <Checkbox.Group
          value={meaning.map((a) => `${a}`)}
          onChange={onChange}
          className="toy_meaning"
        >
          <Row>
            {meanings.map(({ id, name }, index) => (index < limit ? <Checkbox key={`${id} meaning`} value={`${id}`}>{name}</Checkbox> : null))}
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


function pamStateToProps({ catalogFilter: { meaning } }) {
  return {
    meaning,
  };
}

MeaningFilter.propTypes = {
  meaning: PropTypes.array,
  onChange: PropTypes.func,
  meanings: PropTypes.array.isRequired,
};

export default connect(pamStateToProps)(MeaningFilter);
