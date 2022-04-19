import React, { useCallback } from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';
import { useDispatch } from 'react-redux';
import uesGetMenuList from '../../../store/menu-list/uesGetFromMenuList';
import { getProductSizeFromObj } from '../../../constants/utils';
import keys from '../../../constants/keys';
import Loader from '../loading/Loading';
import BuyProductComponent from '../../common/index-product-item/components/BuyProductComponent';
import { getProductToBuy } from '../../../store/buy-product/action';

const { IMAGE_POSTFIX } = keys;

function ProductCategoryInfo({ className, mainHref, style }) {
  const { list } = uesGetMenuList();
  const { messages } = useIntl();
  const dispatch = useDispatch();

  const getProductToBuyAction = (payload) => dispatch(getProductToBuy(payload));

  const handleBuy = useCallback(
    () => getProductToBuyAction({ id: list?.bestseller?.id }),
    [list?.bestseller?.id],
  );

  const CheckProductIs = () => {
    if (list?.bestseller?.percent) {
      return (
        <span className="icon">
          <span>{`${list?.bestseller?.percent}%`}</span>
        </span>
      );
    }
    if (list?.bestseller?.isNew) {
      return (
        <span className="icon">
          <img
            src="/images/icons/new.png"
            alt="status icon"
            title="status icon"
          />
        </span>
      );
    }

    return null;
  };

  const translationNames = {
    type: 'local.type',
    age: 'local.select_by_age',
    brand: 'local.select_by_brand',
    meaning: 'local.meaning',
  };

  const withoutBestSeller = !list.bestseller
    ? 'without-b-seller'
    : 'with-b-seller';
  return (
    <div className="parentMenuBlock">
      <div
        className="toTop"
        style={{
          position: 'absolute',
          height: '0',
          left: '0',
          width: '100%',
          zIndex: '999',
        }}
      >
        <div
          style={{
            marginLeft: '20%',
            width: '1px',
            height: '465px',
            background: '#d4d4d4',
            position: 'absolute',
          }}
        />
        <div
          style={{
            marginLeft: '38%',
            width: '1px',
            height: '465px',
            background: '#d4d4d4',
            position: 'absolute',
          }}
        />
        <div
          style={{
            marginLeft: '53%',
            width: '1px',
            height: '465px',
            background: '#d4d4d4',
            position: 'absolute',
          }}
        />
        <div
          style={{
            marginLeft: '73%',
            width: '1px',
            height: '465px',
            background: '#d4d4d4',
            position: 'absolute',
          }}
        />
      </div>

      <div
        className={`category_info_container ${className} ${withoutBestSeller}`}
        // style={{ ...(style || {}), minHeight: '514px' }}
      >
        <div className="d-flex">
          {list.loading ? (
            <Loader />
          ) : (
            <>
              {Object.keys(list.data).map((key, index) => (
                <div
                  className="category_info_box"
                  key={`bigSizeNanTypesContainer${index}`}
                >
                  <h2 className="category_info_caption">
                    {messages[translationNames[key]]}
                    {' '}
                  </h2>
                </div>
              ))}

              <div className="category_info_box">
                <h2 className="category_info_caption">
                  {messages['local.best_selling1']}
                </h2>
              </div>
            </>
          )}
        </div>

        {list.loading ? (
          <Loader />
        ) : (
          <div className="menuContainer">
            {Object.keys(list.data).map((key, index) => (
              <div
                className="category_info_box"
                key={`bigSizeNanTypesContainer${index}`}
              >
                {/* <h2 className="category_info_caption">
                    {messages[`local.${key}`]}
                    {' '}
                  </h2> */}

                <ul className="details">
                  {list.data[key].map(({ name, text, id }, childeIndex) => (
                    <li key={name + childeIndex + id}>
                      <Link href={`${mainHref}&${key}=${id}`}>
                        <a>{text || name}</a>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div className="category_info_box">
              {/* <h2 className="category_info_caption">
                  {messages['local.best_selling1']}
                </h2> */}
              {list.bestseller ? (
                <div className="prod_item">
                  {/* {list?.bestseller?.percent ? (
                      <IconComponent />
                    ) : null} */}
                  <CheckProductIs />
                  <Link
                    href="/product/[id]"
                    as={`/product/${list.bestseller.id}`}
                  >
                    <a className="prod_name">
                      <span className="prod_img">
                        <img
                          src={`${IMAGE_POSTFIX}${list.bestseller.id}/${list.bestseller.photos[0].url}`}
                          alt={list.bestseller.photos[0].alt}
                          title={list.bestseller.photos[0].title}
                        />
                      </span>
                    </a>
                  </Link>

                  <Link
                    href="/product/[id]"
                    as={`/product/${list.bestseller.id}`}
                  >
                    <a className="prod_name">{list.bestseller.name}</a>
                  </Link>

                  <div className="price">
                    {list.bestseller.price !== list.bestseller.xmlPrice && (
                      <span className="old_price">
                        {list.bestseller.xmlPrice}
                        {' '}
                        {messages['local.dr']}
                        ․
                      </span>
                    )}
                    {list.bestseller.price}
                    {' '}
                    {messages['local.dr']}
                    ․
                  </div>
                  <div className="prod_size">
                    {getProductSizeFromObj(list.bestseller.size)}
                  </div>

                  <div className="productItemFooter">
                    <BuyProductComponent
                      type="primary"
                      innerText={messages['local.buy']}
                      handleBuy={handleBuy}
                    />
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

ProductCategoryInfo.propTypes = {
  mainHref: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.objectOf(Object),
};

export default ProductCategoryInfo;
