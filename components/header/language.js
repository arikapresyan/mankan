/* eslint-disable no-mixed-operators */
import React from 'react';

import Dropdown from 'antd/lib/dropdown';
import Icon from 'antd/lib/icon';
import Menu from 'antd/lib/menu';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setLang } from '../../store/user/action';
import { getPageData } from '../../store/pages-data/action';


function LangSwitcher({
  getPageDataAction,
  setLangAction,
  lang,
}) {
  return (
    <div className="lang_list">
      <Dropdown
        overlay={(
          <Menu
            className="lang_dropdown"
            onClick={(e) => {
              setLangAction({ lang: e.key });
              getPageDataAction({});
            }}
          >
            <Menu.Item value="ARM" key="ARM">Arm</Menu.Item>
            {/* <Menu.Item value="RU" key="RU">Ru</Menu.Item> */}
            <Menu.Item value="ENG" key="ENG">Eng</Menu.Item>
          </Menu>
        )}
        trigger={['click']}
      >
        <a className="ant-dropdown-link" href="/">
          {lang === 'ARM' && 'Arm' || lang === 'RU' && 'Ru' || lang === 'ENG' && 'Eng'}
          <Icon type="caret-down" />
        </a>
      </Dropdown>
    </div>
  );
}

const mapStateToProps = ({ user: { lang } }) => ({ lang });

LangSwitcher.propTypes = {
  setLangAction: PropTypes.func.isRequired,
  lang: PropTypes.string.isRequired,
  getPageDataAction: PropTypes.func.isRequired,
};


export default connect(mapStateToProps, {
  setLangAction: setLang,
  getPageDataAction: getPageData,
})(LangSwitcher);
