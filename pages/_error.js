import React from 'react';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import Layout from 'antd/lib/layout';

import Link from 'next/link';

const notFound1 = '/images/icons/404.png';

const { Content } = Layout;

export default () => (
  <Content className="notFound_container">
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

          <div className="my_404">
            <img src={notFound1} alt=" " />
            <h2>Ooops! Something went wrong .Go back to the Earth.</h2>
            <Link href="/">
              <a>
                <button>TAKE ME HOME</button>
              </a>
            </Link>
          </div>

        </Col>
      </Row>
    </div>
  </Content>
);
