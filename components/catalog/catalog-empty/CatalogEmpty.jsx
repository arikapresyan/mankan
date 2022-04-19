import React from 'react';
import { useIntl } from 'react-intl';

const CatalogEmpty = () => {
  const { messages } = useIntl();
  return (
    <div style={{
      marginTop: '20px', marginBottom: '20px', color: '#333', fontSize: '16px',
    }}
    >
      {/* products not fount */}
      {messages['local.product_not_found']}
    </div>
  );
};
export default CatalogEmpty;
