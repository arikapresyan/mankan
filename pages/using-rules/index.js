import React from 'react';
import Row from 'antd/lib/row';
import Layout from 'antd/lib/layout';
import Col from 'antd/lib/col';
import { useIntl } from 'react-intl';
import { Breadcrumb } from '../../components';
import Head from 'next/head';

const { Content } = Layout;

export default () => {
  const { messages } = useIntl();


  return (
    <>
      <Head>
        <title>Օգտագործման կանոններ</title>
        <meta name="description" content="Ծանոթացեք կայքի օգտագործման կանոններին եւ կատարեք օնլայն գնումներ..." />
      </Head>
    <Content className="rules_container">
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

            <h1>{messages['local.using-rules']}</h1>
          </Col>
        </Row>
      </div>
      <div className="usingRulesContainer">

        <div className="container">
          {messages['local.using_rules'].map(({ title, description }, index) => (
            <div key={`${index}using rules`}>
              <h3>{title}</h3>
              <div className="info_text">
                <ul>
                  {description.map(({ desc }, index) => {
                    const emailIndex = desc[0].indexOf('{email}');
                    const emailLength = 7;

                    return (
                      <li key={index}>
                        {
                    emailIndex === -1 ? desc : (
                      <>

                        {desc[0].slice(0, emailIndex)}

                        <a href="mailto:contact@mankan.am">contact@mankan.am</a>
                        {desc[0].slice(emailIndex + emailLength, desc[0].length)}

                      </>
                    )
                }
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          ))}
          <h3>{messages['local.infoAboutYou']}</h3>
          <p>{messages['local.updated']}</p>
        </div>

      </div>


    </Content>
    </>
  );
};
