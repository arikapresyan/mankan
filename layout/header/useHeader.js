import { useEffect, useRef, useState } from 'react';
import { useIntl } from 'react-intl';
import { useSelector } from 'react-redux';
import Router from 'next/router';
import { selectRedirectRoute } from '../../store/change-page/reducer';

export default function useHeader({ toggleVisibilityAction, hideAction, fixedSearchVisible }) {
  const headerRef = useRef(null);
  const [fixedNavVisible, setFixedNavVisible] = useState(false);
  const { messages } = useIntl();

  const redirectRoute = useSelector(selectRedirectRoute);
  const [state, setState] = useState(
    {
      isMenuOpen: false,
    },
  );

  useEffect(() => {
    if (redirectRoute.route) {
      Router.push(redirectRoute.route);
    }
  }, [redirectRoute]);

  useEffect(() => {
    if (!fixedNavVisible && fixedSearchVisible) {
      hideAction({ name: 'fixedSearchVisible' });
    }
  }, [fixedNavVisible]);
  useEffect(() => {
    const header = headerRef.current;

    const detectMenuVisibility = () => {
      const { bottom } = header.getBoundingClientRect();
      if (bottom < 30) {
        setFixedNavVisible(true);
      } else {
        setFixedNavVisible(false);
      }
    };
    detectMenuVisibility();
    const scrollEventHandler = (e) => {
      e.preventDefault();
      detectMenuVisibility();
    };
    const clickEventHandler = (e) => {
      if (!e.target.closest('.search_container.open') && fixedSearchVisible) {
        hideAction({ name: 'fixedSearchVisible' });
      }
    };
    window.addEventListener('scroll', scrollEventHandler);
    window.addEventListener('click', clickEventHandler);
    return () => {
      window.removeEventListener('scroll', scrollEventHandler);
      window.removeEventListener('click', clickEventHandler);
    };
  }, []);


  const setRegistrationVisible = () => {
    toggleVisibilityAction({ name: 'registrationVisible' });
  };

  const hideLogin = () => {
    toggleVisibilityAction({ name: 'loginVisible' });
  };


  const handleOnHideModal = (name) => {
    hideAction({ name });
  };
  const handleOnOpenModals = (name) => {
    toggleVisibilityAction({ name });
  };


  const handleOnForgotPassword = () => {
    hideAction({ name: 'loginVisible' });
    toggleVisibilityAction({ name: 'forgotVisible' });
  };

  const handleOnLoginOpen = () => {
    toggleVisibilityAction({ name: 'loginVisible' });
  };
  const handleMoveToRegistration = (callBack) => {
    hideAction({ name: 'loginVisible' });
    callBack();
  };


  const handleMenuToggle = () => {
    setState({ isMenuOpen: !state.isMenuOpen });
  };

  const handleToggleSearchVisibility = () => {
    toggleVisibilityAction({ name: 'fixedSearchVisible' });
  };
  return {
    headerRef,
    handleMenuToggle,
    handleToggleSearchVisibility,
    handleMoveToRegistration,
    handleOnLoginOpen,
    fixedNavVisible,
    messages,
    setRegistrationVisible,
    hideLogin,
    handleOnHideModal,
    handleOnOpenModals,
    handleOnForgotPassword,
    state,
  };
}
