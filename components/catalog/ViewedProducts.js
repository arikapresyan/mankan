import React, { useEffect } from 'react';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import Link from 'next/link';
import { useIntl } from 'react-intl';
import { useSelector, useDispatch } from 'react-redux';
import { selectViewedProducts } from '../../store/viewed-products/reducer';
import { getViewedProducts } from '../../store/viewed-products/action';
import { selectLang } from '../../store/user/reducer';

import keys from '../../constants/keys';

const { IMAGE_POSTFIX } = keys;
let lastLang = null;

function ViewedProductsList() {
  const { messages } = useIntl();
  const { data, loading, error } = useSelector(selectViewedProducts);
  const dispatch = useDispatch();
  const lang = useSelector(selectLang);

  useEffect(() => {
    if (!data?.length || lastLang !== lang) {
      lastLang = lang;
      dispatch(getViewedProducts({ limit: 10 }));
    }
  }, [lang]);


  if (error) return null;
  if (loading) return null;
  return data?.length ? (
    <div className="viewed_products_list">
      <div className="heading">
        {messages['local.viewed_products']}
      </div>
      <Row gutter={[15, {
        xs: 15, sm: 15, md: 15, lg: 15,
      }]}
      >
        {data.map((product) => {
          const { name } = product.langs[0];
          const { url, alt, title } = product.photos[0];
          const photoUrl = `${IMAGE_POSTFIX + product.id}/${url}`;
          return (
            <Col xs={12} lg={24} xl={12} key={`view_${product.id}`}>
              <Link href="/product/[id]" as={`/product/${product.id}`}>
                <a className="viewed_products_list_item">
                  <span className="prod_image">
                    <img src={photoUrl} alt={alt} title={title} />
                  </span>
                  <span className="prod_name">
                    {name}
                  </span>
                </a>
              </Link>
            </Col>
          );
        })}

      </Row>
    </div>
  ) : null;
}

export default ViewedProductsList;
