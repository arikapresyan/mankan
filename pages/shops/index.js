import React from 'react';
import { useIntl } from 'react-intl';
import  Layout from 'antd/lib/layout';
import { ShopsMap, ShopsList, Breadcrumb } from '../../components';
import Head from 'next/head';

const { Content } = Layout;
function Shops() {
  const { messages } = useIntl();
  return (<>
      <Head>
        <title>Մասնաճյուղեր</title>
        <meta name="description" content="«Մանկան»-ը օրեցօր ընդլայնվում եւ Ձեզ ավելի մոտ է դառնում..." />
      </Head>
    <Content className="shop_page">
      <div className="container">
        <Breadcrumb />
      </div>
      <div className="container">
        <h1>{messages['local.our_addresses']}</h1>
        <ShopsList />
      </div>
      <ShopsMap />
    </Content>
    </>
  );
}

export default Shops;
