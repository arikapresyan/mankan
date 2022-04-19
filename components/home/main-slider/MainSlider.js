import React, { useEffect, useState } from 'react';
import Swiper from 'react-id-swiper';
import useMainSlider from './useMainSlider';
import ImageSlide from './components/ImageSlide';
import VideoSlide from './components/VideoSlide';

const params = {
  speed: 700,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 7000,
    disableOnInteraction: true,
  },
  pagination: false,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
};
let key = 1;

function MainSlider() {
  const { items } = useMainSlider();
  const [localItems, setLocalItems] = useState(null);

  useEffect(() => {
    if (items.length) {
      setLocalItems([...items]);
      key++;
    }
    return () => {
      setLocalItems(null);
    };
  }, [items]);


  return (
    <div className="mainSlider">


      <Swiper
        {...params}

        key={`${key} swiper`}
      >
        {(localItems || []).map(
          (item, index) => {
            if (item.image) {
              return <ImageSlide item={item} key={index} />;
            }
            return (
              <div key={index}>
                <VideoSlide item={item} />
              </div>
            );
          },
        )}

      </Swiper>
    </div>
  );
}

export default MainSlider;
