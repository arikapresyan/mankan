import React from 'react';

import Row from 'antd/lib/row';
import Col from 'antd/lib/col';

import Link from 'next/link';
import { useIntl } from 'react-intl';
import { useSelector, useDispatch } from 'react-redux';

import ChooseGiftModal from '../../modals/choose-gift-modal/ChooseGiftModal';
import { toggleVisibility } from '../../../store/userEventListeners/action';

function CategoryList() {
  const { messages } = useIntl();
  const filterModalVisible = useSelector(({
    userEventListeners: { isVisible },
  }) => isVisible.filterModalVisible);
  const dispatch = useDispatch();
  const toggleVisibilityAction = () => {
    dispatch(toggleVisibility({ name: 'filterModalVisible' }));
  };
  return (
    <div className="category_list_mobile">
      <Row gutter={16}>
        <Col xs={12} md={6}>
          <div className="category_list_item">
            <Link href="/catalog?gender=BOY">
              <a className="category_icon">
                <img src="/images/category/boy.png" alt="" className="icon_hover" />
              </a>
            </Link>
            <Link href="/catalog?gender=BOY">
              <a className="category_name">

                {messages['local.to_boys']}
              </a>
            </Link>
          </div>
        </Col>
        <Col xs={12} md={6}>
          <div className="category_list_item">
            <Link href="/catalog?gender=GIRL">
              <a className="category_icon">

                <img src="/images/category/girl.png" alt="" className="icon_hover" />
              </a>
            </Link>
            <Link href="/catalog?gender=GIRL">
              <a className="category_name">

                {messages['local.to_girls']}
              </a>
            </Link>
          </div>
        </Col>
        <Col xs={12} md={6}>
          <div className="category_list_item">
            <Link href="/catalog?age=1">
              <a className="category_icon">
                <img src="/images/category/baby.png" alt="" className="icon_hover" />

              </a>
            </Link>
            <Link href="/catalog?age=1">
              <a className="category_name">
                {messages['local.to_infants']}
              </a>
            </Link>
          </div>
        </Col>
        <Col xs={12} md={6}>
          <div className="category_list_item">
            <Link href="/catalog?brand=1">
              <a className="category_icon">

                <img src="/images/category/own_product.png" alt="" className="icon_hover" />
              </a>
            </Link>
            <Link href="/catalog?brand=1">
              <a className="category_name">


                {messages['local.own_products']}
              </a>
            </Link>
          </div>
        </Col>

        <Col xs={12} md={6}>
          <div className="category_list_item">
            <Link href="/catalog?classification=isNew">
              <a className="category_icon">

                <img src="/images/category/new.png" alt="" className="icon_hover" />
              </a>
            </Link>
            <Link href="/catalog?classification=isNew">
              <a className="category_name">{messages['local.news']}</a>
            </Link>
          </div>
        </Col>
        <Col xs={12} md={6}>
          <div className="category_list_item">
            <Link href="/catalog?classification=bestSeller">
              <a className="category_icon">

                <img src="/images/category/bestsaller.png" alt="" className="icon_hover" />
              </a>
            </Link>
            <Link href="/catalog?classification=bestSeller">
              <a className="category_name">
                {messages['local.best_selling']}
              </a>
            </Link>
          </div>
        </Col>

        <Col xs={12} md={6}>
          <div className="category_list_item">
            <Link href="/catalog?classification=percent">
              <a className="category_icon">

                <img src="/images/category/discount.png" alt="" className="icon_hover" />
              </a>
            </Link>
            <Link href="/catalog?classification=isNew">
              <a className="category_name">{messages['local.discounted_assortment']}</a>
            </Link>
          </div>
        </Col>


        <Col xs={12} md={6}>
          <div className="category_list_item" onClick={toggleVisibilityAction}>
            <span className="category_icon">
              <img src="/images/category/gift.png" alt="" className="icon_hover" />
            </span>
            <span href="/catalog?classification=percent">
              <a className="category_name">

                {messages['local.choose_gift']}
              </a>
            </span>
          </div>
          <ChooseGiftModal
            handleClose={toggleVisibilityAction}
            isVisible={filterModalVisible}
          />

        </Col>


        <Col xs={24} md={6}>
          <div className="category_list_item">
            <Link href="/catalog?classification=percent">
              <a className="category_icon">

                <img src="/images/category/all_hover.png" alt="" className="icon_hover" />
              </a>
            </Link>
            <Link href="/catalog?classification=percent">
              <a className="category_name">

                {messages['local.all_of']}
              </a>
            </Link>
          </div>
        </Col>


      </Row>
    </div>
  );
}

export default CategoryList;
