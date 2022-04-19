import React from 'react';

import Layout from 'antd/lib/layout';
import { useIntl } from 'react-intl';
import Head from 'next/head';
import { About, Breadcrumb } from '../../components';

const { Content } = Layout;

function AboutUs() {
  const { messages } = useIntl();
  return (
    <>
      <Head>
        <title>Մեր մասին</title>
        <meta name="description" content="1992 թվականին հիմնված «Մանկան» ընկերությունը այժմ հանդիսանում է տարածաշրջանում փափուկ եւ ինտերակտիվ խաղալիքներ արտադրող առաջատար կազմակերպություն..." />
      </Head>
      <Content className="about_us_page">
        <div className="container">
          <Breadcrumb />
        </div>
        <div className="container">
          <h1>{messages['local.about_us']}</h1>
        </div>
        <About />
      </Content>
    </>
  );
}

export default AboutUs;
