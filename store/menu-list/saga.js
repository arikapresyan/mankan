import {
  takeLatest, put, select, call,
} from '@redux-saga/core/effects';

import { getMenuList, getMenuListSuccess } from './action';
// eslint-disable-next-line import/no-cycle
import Axios from '../services/Axios';
import { selectLang } from '../user/reducer';
import { getProductAge } from '../../constants/utils';

function getRequestBody(name) {
  switch (name) {
    case 'own':
      return {
        ownBrand: true,
        urlPostfix: 'mankan',
      };
    case 'infant':
    case 'infants':
      return {
        infant: true,
        urlPostfix: 'infant',
      };
    case 'boy':
    case 'boys':
      return {
        sex: 'BOY',
        urlPostfix: 'boy',
      };
    case 'girl':
    case 'girls':
      return {
        sex: 'GIRL',
        urlPostfix: 'girl',
      };
    default:
      return {
        urlPostfix: 'all',
      };
  }
}

function getMenuListRequest({ urlPostfix, lang }) {
  return Axios.request({
    url: `/api/product/hoverFilters/${urlPostfix}/?lang=${lang}`,
    method: 'get',
  });
}
function getBestSellerRequest(data) {
  return Axios.request({
    url: '/api/product/navFiltersBestSeller',
    method: 'post',
    data,
  });
}


function getNavFilteredDataToView({
  brand, usage: meaning, age, type, messages,
}) {
  const ageToSend = (age || []).map(({ id, minAge, maxAge }) => ({
    id,
    name: getProductAge(minAge, maxAge, messages),
    text: getProductAge(minAge, maxAge, messages),
  }));


  return {
    type,
    age: ageToSend,
    brand,
    meaning,
  };
}

function* workMenuList({ payload: { name, messages } }) {
  const lang = yield select(selectLang);
  try {
    const filterData = { ...getRequestBody(name), lang };


    const res = yield call(getMenuListRequest, filterData);


    const { data: { result: { rows } } } = yield call(getBestSellerRequest, filterData);


    yield put(
      getMenuListSuccess({
        data: getNavFilteredDataToView({
          ...res.data,
          messages,
        }),
        name,
        bestseller: rows[0],
      }),
    );
  } catch (error) {
    console.log(error);
  }
}


function* watchMenuList() {
  yield takeLatest(getMenuList, workMenuList);
}

export {
  // eslint-disable-next-line import/prefer-default-export
  watchMenuList,
};
