import React, { useCallback, useMemo } from 'react';

import  Icon  from 'antd/lib/icon';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';
import Router from 'next/router';
import MobileSearch from '../mobile-search/MobileSearch';
import { show } from '../../../store/userEventListeners/action';

import CategoryMenuMobile from './CategoryMenuMobile';

function CategoryMenuContent({ isCategoryMenuOpen, authSuccess, showAction }) {
  const { messages } = useIntl();

  const isOpen = useMemo(() => (isCategoryMenuOpen ? 'is_open' : ''), [isCategoryMenuOpen]);

  const handleClick = useCallback(
    () => (
      authSuccess
        ? Router.push('/profile')
        : showAction({ name: 'loginVisible' })),
    [authSuccess],
  );

  return (
    <div className={`category_menu_content ${isOpen}`}>

      <MobileSearch />
      <div className="go_to_profile" onClick={handleClick}>
        <span>{messages['local.my_page']}</span>
        <Icon type="right" />
      </div>

      <CategoryMenuMobile />
    </div>
  );
}

CategoryMenuContent.propTypes = {
  isCategoryMenuOpen: PropTypes.bool,
  authSuccess: PropTypes.bool,
  showAction: PropTypes.func,
};
function mapStateToProps({
  userEventListeners: { isVisible: { isCategoryMenuOpen } },
  user: { authSuccess },
}) {
  return { isCategoryMenuOpen, authSuccess };
}

export default connect(mapStateToProps, { showAction: show })(CategoryMenuContent);
