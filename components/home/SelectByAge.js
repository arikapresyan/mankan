import React from 'react';
import { useIntl } from 'react-intl';
import ChooseAge from './ChooseAge';


function SelectByAge() {
  const { messages } = useIntl();

  return (
    <div id="select_by_age_section">
      <div className="container">
        <h2 className="section_title">
          {messages['local.select_by_age']}
        </h2>
      </div>
      <div className="filter_by_age">
        <div className="container">
          <ChooseAge />
        </div>
      </div>
    </div>
  );
}

export default SelectByAge;
