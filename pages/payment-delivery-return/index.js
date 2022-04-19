import React from 'react';

import  Layout from 'antd/lib/layout';
import { useIntl } from 'react-intl';
import { Payment, Breadcrumb } from '../../components';

const { Content } = Layout;

function PaymentDeliveryReturn() {
  const { messages } = useIntl();
  return (
    <Content className="payment_page">
      <div className="container">
        <Breadcrumb />
      </div>
      <div className="container">
        <h2 className="section_title">{messages['local.payment_delivery_return']}</h2>
      </div>
      <Payment />
    </Content>
  );
}

export default PaymentDeliveryReturn;
