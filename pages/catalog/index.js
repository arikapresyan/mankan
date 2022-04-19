import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';


import Layout from 'antd/lib/layout';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import Button from 'antd/lib/button';


import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';
import Head from 'next/head';
import { useRouter } from 'next/router';
import {
  Breadcrumb, ViewedProductsList,
} from '../../components';
import FilterWrapper from '../../components/mobile/filter-list-sidebar/FilterListWrapper';


import { toggleVisibility } from '../../store/userEventListeners/action';
import { resetCatalogFilterReducer, catalogFilterSetValues } from '../../store/catalog-filter/action';
import { catalogGet } from '../../store/catalog/action';
import { getIsUserFilter, clearFilters, selectCatalogFilters } from '../../store/catalog-filter/reducer';
import IndexFilterList from '../../components/catalog/index-filter-list/IndexFilterList';
import CatalogLoader from '../../components/catalog/catalog-loader/CatalogLoader';
import ProductList from '../../components/catalog/ProductList';

const Pagination = dynamic(() => import('antd/lib/pagination/index'));


const AccompanyingProductList = dynamic(() => import('../../components/common/AccompanyingProductList'));
const CatalogEmpty = dynamic(() => import('../../components/catalog/catalog-empty/CatalogEmpty'));

function itemRender(current, type, originalBattery) {
  if (type === 'prev') {
    return <a>Previous</a>;
  }
  if (type === 'next') {
    return <a>Next</a>;
  }
  return originalBattery;
}


function Catalog({
  toggleVisibilityAction,
  products,
  pagesCount,
  page,
  catalogGetAction,
  loading,
  resetCatalogFilterReducerAction,
  lang,
  titleDescription,
}) {
  const { formatMessage, messages } = useIntl();
  const [count, setCount] = useState(0);
  const router = useRouter();

  useEffect(() => () => {
    resetCatalogFilterReducerAction({ resetSearchWord: true });
    catalogGetAction();
  }, []);

  useEffect(() => {
    const changeHandler = (route) => {
      if (route !== '/catalog') {
        resetCatalogFilterReducerAction({ resetSearchWord: true });
      }
    };
    router.events.on('routeChangeStart', changeHandler);
    return () => router.events.off('routeChangeStart', changeHandler);
  }, []);


  function changePage(clickedPage) {
    window.scrollTo(0, 0);
    catalogGetAction({ page: clickedPage });
  }
  useEffect(() => {
    if (count === 1) {
      catalogGetAction({ page });
    }
    setCount(1);
  }, [lang]);


  console.log({ pagesCount });
  return (
    <>
      <Head>
        <title>{titleDescription.title}</title>
        <meta name="description" content={titleDescription.description} />
      </Head>
      <Layout.Content className="catalog_page" key="content">
        <div className="container">
          <div className="top_content">
            <Breadcrumb />
            <div className="delivery_terms">
              {formatMessage({ id: 'local.free_shipping_message' }, {
                price: (
                  <span className="toChangePrice">
                    20000
                    {' '}
                    {formatMessage({ id: 'local.dr' })}
                    {'.'}

                  </span>
                ),
              })}
            </div>
          </div>

          <Row gutter={[32, {
            xs: 32, sm: 32, md: 32, lg: 32,
          }]}
          >
            <Col className="filter_col" md={24} lg={8} xl={8} xxl={7}>
              <div className="filter_wrapper">
                <IndexFilterList />
              </div>
              <FilterWrapper />
              <ViewedProductsList key="ViewedProductsList" />
            </Col>
            <Col className="prod_list_col" md={24} lg={16} xl={16} xxl={17}>
              {loading ? <CatalogLoader />
                : (
                  <>
                    {pagesCount === 0 && <CatalogEmpty />}
                    <ProductList products={products} />
                    <AccompanyingProductList products={products} />

                    { pagesCount > 1 && (
                      <Pagination
                        total={pagesCount * 10}
                        current={page}
                        itemRender={itemRender}
                        onChange={changePage}
                      />
                    ) }
                  </>
                )}
            </Col>
          </Row>
          <Button
            type="primary"
            className="filter_btn"
            onClick={() => toggleVisibilityAction({ name: 'isFilterListOpen' })}
          >
            <img src="/images/icons/controls.png" alt="" />
            {messages['local.filter']}

          </Button>
        </div>
      </Layout.Content>
    </>
  );
}


Catalog.getInitialProps = async ({ store, query }) => {
  const {
    age,
    gender,
    classification,
    type,
    brand,
    meaning,
    searchWord = '',
  } = query;
  const filter = {};
  const titleDescription = {
    age: {
      title: 'Նորածիններին',
      description: 'Chicco, Fisher Price, Polesie ապրանքանիշերի մոբիլներ, քայլասայլակներ, խաղագորգեր, երաժշտական խաղալիքներ եւ այլ հանրաճանաչ բրենդների լայն տեսականի նորածինների համար...',
    },
    BOY: {
      title: 'Տղաներին',
      description: 'Մեքենաներ, զենքեր, հերոսներ եւ այլ հետաքրքիր ու ժամանցային խաղեր տղաների համար...',
    },
    GIRL: {
      title: 'Աղջիկներին',
      description: 'Տիկնիկներ, զարդասեղաններ, մանկական կոսմետիկա, ստեղծագործական եւ այլ հետաքրքիր ու զարգացնող խաղալիքներ աղջիկների համար...',
    },
    ownProduct: {
      title: 'Սեփական արտադրանք',
      description: 'Միջազգային չափանիշերին համապատասխան, բարձրորակ փափուկ եւ ինտերակտիվ խաղալիքներ...',
    },
    isNew: {
      title: 'Նորույթներ',
      description: 'Պարբերաբար թարմացվող տեսականուն կարող եք ծանոթանալ ինչպես խանութ-սրահներում, այնպես էլ առցանց...',
    },
    all: {
      title: 'Տեսականի',
      description: 'Ցանկացած տարիքի երեխաների համար նախատեսված բազմատեսակ խաղեր եւ խաղալիքներ...',
    },
    percent: {
      title: 'Զեղչեր',
      description: 'Զեղչված տեսականուն կարող եք ծանոթանալ ինչպես խանութ սրահներում, այնպես էլ առցանց...',
    },
    bestSeller: {
      title: 'Լավագույն վաճառք',
      description: 'Լայն պահանջարկ ունեցող տեսականուն կարող եք ծանոթանալ ինչպես խանութ-սրահներում, այնպես էլ առցանց...',
    },
  };

  let titleDescriptionKey = 'all';

  filter.searchWord = searchWord;

  if (age) { filter.age = age; titleDescriptionKey = 'age'; }
  if (gender) { filter.gender = [gender]; titleDescriptionKey = gender; }
  if (brand) { filter.brand = [brand]; titleDescriptionKey = 'ownProduct'; }
  if (classification) {
    filter.classification = [classification];
    if (titleDescription[classification]) titleDescriptionKey = classification;
  }
  if (type) { filter.type = [type]; }
  if (meaning) { filter.meaning = [meaning]; }
  // filter.price = [...keys.DEFAULT_PRICE];
  const state = store.getState();
  const isUserFilter = getIsUserFilter(state);
  const filters = selectCatalogFilters(state);
  if (!isUserFilter) {
    store.dispatch(resetCatalogFilterReducer());
    store.dispatch(catalogFilterSetValues({ ...filter, filters: { ...filters, searchWord } }));
  } else {
    store.dispatch(
      catalogFilterSetValues({
        ...clearFilters(store.getState()),
        isUserFilter: false,
        filters: { ...filters, searchWord },
      }),
    );
  }

  await store.dispatch(catalogGet());
  return {
    titleDescription: titleDescription[titleDescriptionKey],
  };
};


function mapStateToProps({
  catalog: {
    products,
    pagesCount,
    page,
    loading,
  },
  user: {
    lang,
  },
}) {
  return {
    products,
    pagesCount,
    page,
    loading,
    lang,
  };
}

Catalog.propTypes = {
  toggleVisibilityAction: PropTypes.func,
  products: PropTypes.array,
  pagesCount: PropTypes.number,
  page: PropTypes.number,
  catalogGetAction: PropTypes.func,
  loading: PropTypes.bool,
  resetCatalogFilterReducerAction: PropTypes.func,
  lang: PropTypes.string.isRequired,
  titleDescription: PropTypes.object,
};


export default connect(mapStateToProps, {
  toggleVisibilityAction: toggleVisibility,
  resetCatalogFilterReducerAction: resetCatalogFilterReducer,
  catalogGetAction: catalogGet,
})(Catalog);
