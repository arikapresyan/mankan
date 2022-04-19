import React from 'react';
import { useIntl } from 'react-intl';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import Layout from 'antd/lib/layout';
import Head from 'next/head';
import { Breadcrumb } from '../../components';

const { Content } = Layout;

export default () => {
  const { messages } = useIntl();
  return (
    <>
      <Head>
        <title>Բոնուս եւ պրոմո կոդ</title>
        <meta name="description" content="Գրանցվե՛ք, կուտակե՛ք բոնուսներ եւ կատարեք գնումներ կուտակված միավորներով, ինչպես նաեւ հետեւեք մեր ակցիաներին, ստացեք պրոմո կոդեր եւ կատարեք գնումներ զեղչված գներով..." />
      </Head>
      <Content className="promoCode_container">
        <div className="container">
          <Breadcrumb />
        </div>
        <div className="container">
          <Row
            gutter={[
              32,
              {
                xs: 32,
                sm: 32,
                md: 32,
                lg: 32,
                xl: 32,
                xxl: 32,
              },
            ]}
          >
            <Col md={24} lg={24} xl={24}>

              <h1>{messages['local.bonus_and_promo_code1']}</h1>
            </Col>
          </Row>
        </div>
        <div className="bonusPromoContainer">
          <div className="container">
            {messages['local.bonus_and_promo_code'].map(({ title, description }, index) => (
              <div key={`${index}bonus`}>
                <h3>{title}</h3>
                <div className="info_text">
                  <ul>{description.map(({ desc }, index) => <li key={index}>{desc}</li>)}</ul>
                </div>
              </div>
            ))}
            <p>{messages['local.updated']}</p>
          </div>
        </div>

      </Content>
    </>
  );
};
