import { useDispatch } from 'react-redux';
import { useCallback, useEffect, useState } from 'react';
import { useIntl } from 'react-intl';
import { useRouter } from 'next/router';
import { getMenuListReset, getMenuList } from '../../store/menu-list/action';

export default () => {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  const [mainHref, setMainHref] = useState('');
  const [timerId, setTimerId] = useState(null);
  const router = useRouter();


  useEffect(() => {
    const handleLinkClick = () => {
      setShowMenu(false);
    };
    router.events.on('routeChangeStart', handleLinkClick);

    return () => {
      router.events.off('routeChangeStart', handleLinkClick);
    };
  }, []);

  const { messages } = useIntl();
  const onMouseEnter = useCallback((menuList, menuItem) => {
    clearTimeout(timerId);
    if (menuList.name !== menuItem.name) {
      setShowMenu(false);
      dispatch(getMenuListReset());
    }
    const tId = setTimeout(() => {
      if (menuList.name !== menuItem.name) {
        dispatch(getMenuList({ name: menuItem.name, messages }));
      }
      setMainHref(menuItem.href);
      setShowMenu(true);
    }, 500);
    setTimerId(tId);
  }, [timerId, messages]);

  const onMouseLeave = useCallback(
    () => {
      clearTimeout(timerId);
      if (showMenu) {
        setShowMenu(false);
        dispatch(getMenuListReset());
      }
    }, [showMenu, timerId],
  );

  return {
    showMenu, mainHref, onMouseEnter, onMouseLeave,
  };
};
