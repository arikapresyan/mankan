import React from 'react';


import Collapse from 'antd/lib/collapse';
import Icon from 'antd/lib/icon';
import Button from 'antd/lib/button';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';
import { useRouter } from 'next/router';
import ClassificationFilter from './filter-items/ClassificationFilter';
import PriceFilter from './filter-items/PriceFilter';
import GenderFilter from './filter-items/GenderFilter';
import AgeFilter from './filter-items/AgeFilter';
import TypeFilter from './filter-items/TypeFilter';
import MeaningFilter from './filter-items/MeaningFilter';
import BrandFilter from './filter-items/BrandFilter';


import { hide } from '../../store/userEventListeners/action';
import { catalogFilterSetValues } from '../../store/catalog-filter/action';
import { catalogGet } from '../../store/catalog/action';


const { Panel } = Collapse;


function FilterListMobile({ hideAction, catalogFilterSetValuesAction, catalogGetAction }) {
  const { messages } = useIntl();
  const router = useRouter();
  function hideFilter() {
    hideAction({ name: 'isFilterListOpen' });
  }
  // const { toggleFilterMobile } = useContext(Context);
  function onSaveFilter() {
    hideFilter();
    catalogGetAction({ loading: 1 });
    if (!router.asPath.includes('catalog')) {
      catalogFilterSetValuesAction({ isUserFilter: true });
      router.push('/catalog');
    }
  }


  return (
    <div id="filter_list" className="filter_list_mobile">
      <Collapse>
        <Panel
          header={messages['local.specification']}
          key="1"
          showArrow={false}
          extra={<Icon type="right" />}
        >
          <ClassificationFilter

            onChange={(value) => {
              catalogFilterSetValuesAction({ classification: value });
            }}
          />
        </Panel>
        <Panel
          header={messages['local.price']}
          key="2"
          showArrow={false}
          extra={<Icon type="right" />}
        >
          <PriceFilter
            onChange={(inputsValue) => {
              catalogFilterSetValuesAction({ price: inputsValue });
            }}
          />
        </Panel>
        <Panel
          header={messages['local.gender']}
          key="3"
          showArrow={false}
          extra={<Icon type="right" />}
        >
          <GenderFilter

            onChange={(value) => catalogFilterSetValuesAction({
              gender: [value[value.length - 1] || []],

            })}
          />
        </Panel>
        <Panel
          header={messages['local.age']}
          key="4"
          showArrow={false}
          extra={<Icon type="right" />}
        >
          <AgeFilter onChange={(value) => catalogFilterSetValuesAction({ age: value })} />
        </Panel>
        <Panel
          header={messages['local.type']}
          key="5"
          showArrow={false}
          extra={<Icon type="right" />}
        >
          <TypeFilter onChange={(value) => catalogFilterSetValuesAction({ type: value })} />
        </Panel>
        <Panel
          header={messages['local.meaning']}
          key="6"
          showArrow={false}
          extra={<Icon type="right" />}
        >
          <MeaningFilter onChange={(value) => catalogFilterSetValuesAction({ meaning: value })} />
        </Panel>
        <Panel
          header={messages['local.brand']}
          key="7"
          showArrow={false}
          extra={<Icon type="right" />}
        >
          <BrandFilter onChange={(value) => catalogFilterSetValuesAction({ brand: value })} />
        </Panel>
      </Collapse>
      <Button type="primary" className="save_btn" onClick={onSaveFilter}>Պահպանել</Button>
      <Button type="default" shape="circle" icon="close" className="close_btn" onClick={() => { hideFilter(); }} />
    </div>
  );
}

FilterListMobile.propTypes = {
  hideAction: PropTypes.func,
  catalogFilterSetValuesAction: PropTypes.func,
  catalogGetAction: PropTypes.func,
};

export default connect(null, {
  hideAction: hide,
  catalogFilterSetValuesAction: catalogFilterSetValues,
  catalogGetAction: catalogGet,

})(FilterListMobile);
