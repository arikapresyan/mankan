import React from 'react';
import Spin from 'antd/lib/spin';
import './catalog-loader.less';

const CatalogLoader = () => (
  <div className="catalog_loader">
    <Spin />
  </div>
);
export default CatalogLoader;
