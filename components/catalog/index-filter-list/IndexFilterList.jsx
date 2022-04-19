import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';
import { useRouter } from 'next/router';
import  Collapse from 'antd/lib/collapse';
import  Icon from 'antd/lib/icon';
import  Button from 'antd/lib/button';
import { connect } from 'react-redux';
import ClassificationFilter from '../filter-items/ClassificationFilter';
import PriceFilter from '../filter-items/PriceFilter';
import GenderFilter from '../filter-items/GenderFilter';
import AgeFilter from '../filter-items/AgeFilter';
import TypeFilter from '../filter-items/TypeFilter';
import MeaningFilter from '../filter-items/MeaningFilter';
import BrandFilter from '../filter-items/BrandFilter';
import { catalogFilterSetValues, catalogFilterChange } from '../../../store/catalog-filter/action';
import { hide } from '../../../store/userEventListeners/action';
import { catalogGet } from '../../../store/catalog/action';

const { Panel } = Collapse;


const WrapperSimple = ({ children }) => children;

const gatData = (name, value, mode) => {
  if (mode === 'mobile') return ({ [name]: value });
  return ({ name, value });
};

function IndexFilterList({
  catalogFilterSetValuesAction,
  catalogFilterChangeAction,
  catalogGetAction,
  hideAction,
  filters,
  mode,
}) {
  const { messages } = useIntl();
  const router = useRouter();
  function hideFilter() {
    hideAction({ name: 'isFilterListOpen' });
  }
  const [changedNames, setChangedNames] = useState([]);
  // const { toggleFilterMobile } = useContext(Context);
  function onSaveFilter() {
    hideFilter();
    catalogGetAction({ loading: 1, changedNames });
    if (!router.asPath.includes('catalog')) {
      catalogFilterSetValuesAction({ isUserFilter: true });
      router.push('/catalog');
    }
    setChangedNames([]);
  }
  const isMobile = mode === 'mobile';
  const actionByMode = isMobile ? catalogFilterSetValuesAction : catalogFilterChangeAction;
  const Wrapper = isMobile ? Collapse : WrapperSimple;
  const PanelIf = isMobile ? Panel : WrapperSimple;

  const setChangedNamesAction = (name) => {
    if (changedNames.indexOf(name) === -1 && isMobile) {
      setChangedNames([...changedNames, name]);
    }
  };

  const changeValue = (name) => (value) => {
    if (value[value.length - 1] === 'all') {
      value = ['all'];
    } else {
      const indexOfAll = value.indexOf('all');
      if (indexOfAll !== -1) value.splice(indexOfAll, 1);
    }
    actionByMode(gatData(name, value, mode));
    setChangedNamesAction(name);
  };
  return (
    <>
      <div id="filter_list" className={isMobile ? 'filter_list_mobile' : ''}>
        <Wrapper mode={mode}>
          <PanelIf
            mode={mode}
            header={messages['local.specification']}
            key="1"
            showArrow={false}
            extra={<Icon type="right" />}
          >
            <ClassificationFilter
              onChange={changeValue('classification')}
              extraFilters={filters.extraFilter}
            />
          </PanelIf>
          <PanelIf
            mode={mode}
            header={messages['local.price']}
            key="2"
            showArrow={false}
            extra={<Icon type="right" />}
          >
            <PriceFilter
              onChange={changeValue('price')}
            />
          </PanelIf>

          <PanelIf
            mode={mode}
            header={messages['local.gender']}
            key="3"
            showArrow={false}
            extra={<Icon type="right" />}
          >
            <GenderFilter
              onChange={(value) => {
                actionByMode(
                  gatData('gender', [value[value.length - 1] || []], mode),
                );
                setChangedNamesAction('gender');
              }}
              genderFilter={filters.productSex}
            />
          </PanelIf>
          <PanelIf
            mode={mode}
            header={messages['local.age']}
            key="4"
            showArrow={false}
            extra={<Icon type="right" />}
          >
            <AgeFilter
              onChange={changeValue('age')}
              ages={filters.productAge || {}}
            />
          </PanelIf>
          <PanelIf
            mode={mode}
            header={messages['local.type']}
            key="5"
            showArrow={false}
            extra={<Icon type="right" />}
          >
            <TypeFilter
              onChange={changeValue('type')}
              types={filters.productType || {}}
            />
          </PanelIf>
          <PanelIf
            mode={mode}
            header={messages['local.meaning']}
            key="6"
            showArrow={false}
            extra={<Icon type="right" />}
          >
            <MeaningFilter
              onChange={changeValue('meaning')}
              meanings={filters.productUsage}
            />
          </PanelIf>
          <PanelIf
            mode={mode}
            header={messages['local.brand']}
            key="7"
            showArrow={false}
            extra={<Icon type="right" />}
          >
            <BrandFilter
              onChange={changeValue('brand')}
              brands={filters.brand}
            />
          </PanelIf>

        </Wrapper>

      </div>
      {mode === 'mobile'
        ? (
          <>
            <Button type="primary" className="save_btn" onClick={onSaveFilter}>Պահպանել</Button>
            <Button type="default" shape="circle" icon="close" className="close_btn" onClick={() => { hideFilter(); }} />
          </>
        )
        : null}

    </>

  );
}

IndexFilterList.propTypes = {
  catalogFilterChangeAction: PropTypes.func,
  catalogFilterSetValuesAction: PropTypes.func,
  catalogGetAction: PropTypes.func,
  hideAction: PropTypes.func,
  mode: PropTypes.string,
  filters: PropTypes.objectOf(Object),
};

IndexFilterList.defaultProps = {
  mode: '',
  filters: {},
};

const mapStateToProps = ({ catalogFilter: { filters } }) => ({ filters });

export default connect(mapStateToProps, {
  catalogFilterSetValuesAction: catalogFilterSetValues,
  catalogFilterChangeAction: catalogFilterChange,
  catalogGetAction: catalogGet,
  hideAction: hide,
})(IndexFilterList);
