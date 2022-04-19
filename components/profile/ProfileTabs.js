import React from 'react';

import Tabs from 'antd/lib/tabs';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import Button from 'antd/lib/button';
import Icon from 'antd/lib/icon';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';
import PersonalInfo from './personal-info/PersonalInfo';
import { logout } from '../../store/user/action';
import OldOrdersList from './old-orders-list/OldOrdersList';

const InfoIcon = '/images/icons/info.png';

const { TabPane } = Tabs;

function UserProfileTab({
  untilNextBonusPercent,
  nextBonusPercent,
  buyProductList,
  bonusPercent,
  logoutAction,
  bonus,
  getDataListByPaginationAction,
}) {
  const { messages, formatMessage } = useIntl();
  return (
    <div className="profile_tab_content">
      <Tabs type="card" tabPosition="left">
        <TabPane
          tab={(
            <div>
              <div className="icon">
                <Icon type="shopping" />
              </div>
              <span>{messages['local.my_orders']}</span>
            </div>
          )}
          key="1"
        >
          <Row
            gutter={[15, {
              xs: 12, sm: 12, md: 12, lg: 24, xl: 24, xxl: 24,
            }]}
            className="order_info"
          >
            <Col lg={12}>
              <div className="discount">
                {messages['local.discount_size']}
                <span>
                  {bonusPercent}
                  %
                </span>
              </div>
            </Col>
            <Col lg={12}>
              <div className="money_saved">
                {messages['local.money_accumulated']}
                <span>{bonus}</span>
              </div>
            </Col>
            <Col lg={24}>
              <div className="bonus_info">

                <span>
                  <img style={{ marginRight: '16px' }} src={InfoIcon} alt="" />
                </span>

                {bonusPercent !== nextBonusPercent ? formatMessage({ id: 'local.more_percents_message' }, {
                  price: `${untilNextBonusPercent}`,
                  last_percent: bonusPercent,
                  new_percent: nextBonusPercent,
                }) : `${nextBonusPercent}% bonus for every order`}
              </div>
            </Col>
          </Row>
          {buyProductList.pages > 0
            ? (
              <div className="orders_list">
                <h3>{messages['local.my_orders']}</h3>
                <OldOrdersList
                  data={buyProductList.data}
                  loading={buyProductList.loading}
                  error={buyProductList.error}
                  page={buyProductList.page}
                  pagesCount={buyProductList.pages}
                  handleChange={(page) => getDataListByPaginationAction({ page, name: 'buyProductList' })}
                />
              </div>
            ) : null}
        </TabPane>
        <TabPane
          tab={(
            <div>
              <div className="icon">
                <Icon type="setting" />
              </div>
              <span>{messages['local.personal_info']}</span>
            </div>
          )}
          key="2"
        >
          <PersonalInfo />
        </TabPane>
        <TabPane
          disabled
          tab={(
            <Button type="link" onClick={logoutAction}>
              <a>
                <div className="icon">
                  <Icon type="export" />
                </div>
                {messages['local.exit']}
              </a>
            </Button>
          )}
          key="3"
        />
      </Tabs>

    </div>
  );
}

UserProfileTab.propTypes = {
  logoutAction: PropTypes.func,
  bonus: PropTypes.number.isRequired,
  bonusPercent: PropTypes.number.isRequired,
  untilNextBonusPercent: PropTypes.number.isRequired,
  nextBonusPercent: PropTypes.number.isRequired,
  buyProductList: PropTypes.objectOf(Object).isRequired,
  getDataListByPaginationAction: PropTypes.func.isRequired,
};
export default connect(null, { logoutAction: logout })(UserProfileTab);
