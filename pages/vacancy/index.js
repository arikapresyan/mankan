import React, { useEffect } from 'react';
import Layout from 'antd/lib/layout';

import { useDispatch } from 'react-redux';
import Head from 'next/head';
import { Breadcrumb, VacancyList } from '../../components';
import { getPageData } from '../../store/pages-data/action';

const { Content } = Layout;

function Vacancy() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPageData({ page: 'vacancy' }));
  }, []);
  return (
    <>
      <Head>
        <title>Աշխատատեղեր</title>
        <meta name="description" content="Բաժնում կարող եք ծանոթանալ թափուր հաստիքներին եւ օնլայն լրացնել ինքնակենսագրություն..." />
      </Head>
      <Content className="vacancy_page">
        <div className="container">
          <Breadcrumb />
        </div>
        <div className="container">
          <VacancyList />
        </div>
      </Content>
    </>
  );
}
Vacancy.getInitialProps = ({ query }) => {
  const { token } = query;


  return { token };
};
export default Vacancy;
