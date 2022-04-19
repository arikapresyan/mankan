// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useSelector } from 'react-redux';
import { selectMenuList } from './reducer';

function uesGetMenuList() {
  const list = useSelector(selectMenuList);

  return { list };
}

export default uesGetMenuList;
