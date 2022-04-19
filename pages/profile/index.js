import React, { useEffect } from 'react';
import  Layout from 'antd/lib/layout';

import { useIntl } from 'react-intl';
import { connect, useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import {
  UserProfileTab, AccompanyingProductList, ProductSlider,
} from '../../components';
import { getPageData } from '../../store/pages-data/action';
import { selectViewedProducts } from '../../store/viewed-products/reducer';
import { selectAuthorized, selectLang } from '../../store/user/reducer';
import { getViewedProducts } from '../../store/viewed-products/action';
import { getDataListByPagination } from '../../store/data-by-pagination/action';
import PagesLoader from '../../components/pages-loader/PagesLoader';

const { Content } = Layout;

const getNextBonusPercent = (boughtSum) => {
  boughtSum += 0;
  if (boughtSum < 200000) {
    return 3;
  } if (boughtSum >= 200000 && boughtSum < 500000) {
    return 4;
  }
  return 4;
};

const untilNextPercent = (sum) => {
  if (sum < 200000) {
    return 200000 - sum;
  } if (sum >= 200000 && sum < 500000) {
    return 500000 - sum;
  }
  return 0;
};

function UserProfile({
  pageData, user, buyProductList, getDataListByPaginationAction,
}) {
  const { messages } = useIntl();


  const { data: viewedProducts, loading } = useSelector(selectViewedProducts);
  const dispatch = useDispatch();
  const isAuth = useSelector(selectAuthorized);
  const lang = useSelector(selectLang);

  useEffect(() => {
    dispatch(getViewedProducts({ limit: 12 }));
    getDataListByPaginationAction({
      page: buyProductList.page,
      name: 'buyProductList',
    });
  }, [lang]);

  if (!pageData.data || !isAuth) return <PagesLoader />;

  const nextPercent = getNextBonusPercent(user.boughtSum);
  return (
    <Content className="profile_page">
      <div className="profile_tab_section p_t_30">
        <div className="container">
          <h2 className="section_title">{messages['local.my_profile']}</h2>
          <UserProfileTab
            nextBonusPercent={nextPercent}
            untilNextBonusPercent={untilNextPercent(user.boughtSum)}
            bonusPercent={user.bonusPercent || 0}
            bonus={user.bonus || 0}
            buyProductList={buyProductList}
            getDataListByPaginationAction={getDataListByPaginationAction}
          />

        </div>
      </div>
      <div className="slider_wrapper">
        {!loading && (
          <div className="container">
            <h2 className="section_title">{messages['local.viewed_products']}</h2>
            <ProductSlider products={viewedProducts} />
            <AccompanyingProductList products={viewedProducts} />
          </div>
        )}
      </div>
    </Content>
  );
}
UserProfile.getInitialProps = async ({ store }) => {
  store.dispatch(getPageData({ page: 'profile' }));

  // store.dispatch(getDataListByPagination({ name: 'buyProductList' }));
  return {};
};


UserProfile.propTypes = {
  pageData: PropTypes.objectOf(Object).isRequired,
  user: PropTypes.objectOf(Object).isRequired,
  buyProductList: PropTypes.objectOf(Object).isRequired,
  getDataListByPaginationAction: PropTypes.func.isRequired,

};

function mapStateToProps({ pageData, user, dataByPagination: { buyProductList } }) {
  return { pageData, user, buyProductList };
}

export default connect(mapStateToProps, {
  getDataListByPaginationAction: getDataListByPagination,
})(UserProfile);
