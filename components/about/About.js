import React, { useState } from 'react';

import Button from 'antd/lib/button';
import Col from 'antd/lib/col';
import Row from 'antd/lib/row';
import Icon from 'antd/lib/icon';

import Popup from 'reactjs-popup';
import { useIntl } from 'react-intl';
import Swiper from 'react-id-swiper';
import LazyLoad, { forceCheck } from 'react-lazyload';
import ShopItem from '../common/ShopItem';
import ImageItem from './ImageItem';
import { galleryImages } from './constants';


const ShopImage1 = '/images/shop/ulnetsi.png';
const ShopImage2 = '/images/shop/mashtots.png';
const ShopImage3 = '/images/shop/abovyan.png';
const ShopImage4 = '/images/shop/dalma.png';

const shopImages = [ShopImage1, ShopImage2, ShopImage3, ShopImage4];

function AboutInfo() {
  const { messages } = useIntl();
  const [modalIndex, setModalIndex] = useState(-1);
  const [limit, setLimit] = useState(8);
  const [show, setShow] = useState(false);
  const showMore = () => {
    setLimit(limit + 8);
    setTimeout(() => {
      forceCheck();
    }, 0);
  };
  const cloneGalleryImages = [...galleryImages];
  cloneGalleryImages.length = limit;


  const onOpen = (index) => {
    // setImageVisible(false);
    setModalIndex(index);
    setTimeout(() => {
      setShow(true);
    }, 100);
  };

  const onClose = () => { setModalIndex(-1); setShow(false); };
  return (
    <div className="about_wrapper">
      <div className="about_info_container">
        <div className="container">
          <div className="info_text">
            <p>{messages['local.about-us']?.text1?.p1}</p>
            <p>{messages['local.about-us']?.text1?.p2}</p>
            <p>{messages['local.about-us']?.text1?.p3}</p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="shop_list">
          <Row gutter={[15, {
            xs: 15, sm: 15, md: 15, lg: 15, xl: 15, xxl: 15,
          }]}
          >

            {messages['local.shop_adresses'].map((shopInfo, index) => (
              <Col key={index} sm={12} md={12} lg={6} xl={6}>
                <LazyLoad height={375}>
                  <ShopItem {...shopInfo} src={shopImages[index]} />
                </LazyLoad>
              </Col>
            ))}

          </Row>
        </div>
      </div>
      <div className="about_info_container gallery_info">
        <div className="container">
          <div className="info_text">
            <p>{messages['local.about-us']?.text2?.p1}</p>
            <p>{messages['local.about-us']?.text2?.p2}</p>
            <p>{messages['local.about-us']?.text2?.p3}</p>
            <p>{messages['local.about-us']?.text2?.p4}</p>
            <p>{messages['local.about-us']?.text2?.p5}</p>
            <p>{messages['local.about-us']?.text2?.p6}</p>
            <p>{messages['local.about-us']?.text2?.p7}</p>
            <p>{messages['local.about-us']?.text2?.p8}</p>
            <p>{messages['local.about-us']?.text2?.p9}</p>
            <p>{messages['local.about-us']?.text2?.p10}</p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="gallery">
          <Row gutter={[15, {
            xs: 15, sm: 15, md: 15, lg: 15, xl: 15, xxl: 15,
          }]}
          >
            {
              cloneGalleryImages.map((item, index) => (
                <LazyLoad key={index} height={200} once>
                  <ImageItem url={item} key={index} onClick={() => onOpen(index)} />
                </LazyLoad>
              ))
            }

          </Row>
        </div>
        {galleryImages.length > limit && (
          <div className="see_more">
            <Button onClick={showMore}>{messages['local.see_more']}</Button>
          </div>
        )}
      </div>

      <Popup modal position="right center" onClose={onClose} open={modalIndex !== -1} animate={{ openDuration: 1 }}>
        <div className="about_popup">
          <div>
            {modalIndex !== -1 && show && (
            <Swiper
              key="mainSwiper"
              {...({
                breakpoints: {
                  0: {
                    slidesPerView: 1,
                  },
                },
                navigation: {
                  nextEl: '.swiper-button-next',
                  prevEl: '.swiper-button-prev',
                },
                initialSlide: modalIndex,
              })}
              activeSlideKey={galleryImages[modalIndex]}
            >
              {
                 galleryImages.map((src) => (
                   <div
                     key={src}
                     style={{
                       width: '100vw',
                       height: '90vh',
                       maxHeight: '90vw',
                       backgroundImage: `url("${src}")`,
                       backgroundSize: 'cover',
                       backgroundRepeat: 'no-repeat',
                       backgroundPosition: 'center',
                     }}
                   />
                 ))
                }
            </Swiper>
            )}
          </div>
          <span onClick={onClose} className="close_button"><Icon type="close" /></span>
        </div>
      </Popup>
    </div>
  );
}

export default AboutInfo;
