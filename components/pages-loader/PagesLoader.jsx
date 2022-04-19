import React from 'react';
import Spin from 'antd/lib/spin';
import './pagesLoader.less';

const PagesLoader = () => (
  <div className="page_load_container">
    <div>
      <Spin />
    </div>
  </div>
);
export default PagesLoader;
