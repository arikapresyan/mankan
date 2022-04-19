import React from 'react';
import { useIntl } from 'react-intl';

const EmptyData = () => {
  const { messages } = useIntl();
  return (
    <div style={{
      marginTop: '21px', display: 'flex', alignItems: 'flex-start', minHeight: '469px', maxHeight: '100vh',
    }}
    >
      <p style={{ marginBottom: '0', marginTop: '22px' }}>{messages['local.no_vacancy_text']}</p>
    </div>
  );
};
export default EmptyData;
