import React, { useState } from 'react';
import Button from 'antd/lib/button';

import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';


function VacancyItem({ setModalInfo, vacancyData }) {
  const {
    id, langs,
  } = vacancyData;

  const { title, description, shortDesc } = langs[0];
  const { messages } = useIntl();

  const [isOpenCollapse, setIsOpenCollapse] = useState(false);


  const handleOnOpenCollapse = () => {
    setIsOpenCollapse(true);
  };

  const handleOnCloseCollapse = () => {
    setIsOpenCollapse(false);
  };


  const showModalCv = () => {
    setModalInfo({
      vacancyId: id,
      modalId: 1,
    });
  };

  const showModalApply = () => {
    setModalInfo({
      vacancyId: id,
      modalId: 2,
    });
  };
  return (
    <div className={isOpenCollapse ? 'vacancy_item is_open' : 'vacancy_item'}>
      <div className="vacancy_description">
        <div className="info_title">{title}</div>
        {!isOpenCollapse ? (
          <div className="block-ellipsis">
            {shortDesc}
          </div>
        )
          : (
            <div className="info_description">
              <p dangerouslySetInnerHTML={{
                __html: description,
              }}
              />
            </div>
          )}
      </div>
      <div className="vacancy_info_container">
        <div className="btn_group">
          <Button
            className="attach_cv_btn"
            ype="primary"
            shape="round"
            data-modal="cvModalVisible"
            onClick={showModalCv}
          >
            {messages['local.attach']}
            {' '}
            CV
          </Button>
          <Button
            className="apply_online"
            type="primary"
            shape="round"
            onClick={showModalApply}
            data-modal="applyModalVisible"
          >
            {messages['local.apply_online']}
          </Button>
          <Button
            className="close_btn"
            icon="close"
            type="primary"
            shape="circle"
            onClick={handleOnCloseCollapse}
          />
          <Button
            className="mobile_close_btn"
            icon="up"
            type="link"
            shape="circle"
            onClick={handleOnCloseCollapse}
          />
        </div>
      </div>

      <Button className="more_info" onClick={handleOnOpenCollapse}>
        {messages['local.see_more']}
      </Button>
      <div className="more_info_mobile">
        <Button
          icon="down"
          type="link"
          shape="circle"
          onClick={handleOnOpenCollapse}
        />
      </div>

    </div>
  );
}

VacancyItem.propTypes = {
  setModalInfo: PropTypes.func.isRequired,
  vacancyData: PropTypes.objectOf(Object).isRequired,
};

export default VacancyItem;
