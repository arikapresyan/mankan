import React, { useState, useCallback, useEffect } from 'react';

import { useSelector } from 'react-redux';
import { useIntl } from 'react-intl';
import VacancyItem from './VacancyItem';
import ApplyOnlineModal from '../modals/apply_online_modal/ApplyOnlineModal';
import AttachCvModal from '../modals/attach-cv-modal/AttachCvModal';
import { selectFullPageData, selectPageData } from '../../store/pages-data/reducer';
import PagesLoader from '../pages-loader/PagesLoader';
import EmptyData from './components/EmptyData';


function VacancyList() {
  const { messages } = useIntl();
  const [localeLoading, setLocaleLoading] = useState(true);
  const { rows: pageData } = useSelector(selectPageData) || {};
  const { loading: pageLoading } = useSelector(selectFullPageData);
  const [modalInfo, setModalInfo] = useState({
    vacancyId: null,
    modalId: null,
  });

  const hideModal = useCallback(
    () => {
      setModalInfo({
        vacancyId: null,
        modalId: null,
      });
    },
    [],
  );
  useEffect(() => {
    if (Array.isArray(pageData)) {
      setLocaleLoading(false);
    }
  }, [pageData]);

  const newPageData = pageData && !!pageData.length && pageData?.filter(({ langs }) => !!langs[0].title?.trim?.()) ||[]
  if (pageLoading) return <PagesLoader />;
  if (!pageData?.length || !newPageData.length) return <EmptyData />;
  return (
    <>
      <h1>{messages['local.job_announcements']}</h1>
      <div className="vacancy_list">
        {newPageData.map((vacancyData) => (
          <VacancyItem
            key={`${vacancyData.id}vacancy`}
            vacancyData={vacancyData}
            setModalInfo={setModalInfo}
          />
        ))
      }
        <ApplyOnlineModal
          visible={modalInfo.modalId === 2}
          handleHideModal={hideModal}
          vacancyId={modalInfo.vacancyId}
        />
        <AttachCvModal
          visible={modalInfo.modalId === 1}
          vacancyId={modalInfo.vacancyId}
          handleHideModal={hideModal}
        />
      </div>
    </>
  );
}


export default VacancyList;
