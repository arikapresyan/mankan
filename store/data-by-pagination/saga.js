/* eslint-disable no-unused-vars */

import {
  takeEvery, call, put, select, all,
} from '@redux-saga/core/effects';
import Axios from '../services/Axios';


import {
  getDataListByPagination,
  getDataListByPaginationError,
  getDataListByPaginationSuccess,
} from './action';
import { selectLang } from '../user/reducer';

const dataByName = {
  buyProductList: {
    url: '/api/user/orders/all',
    method: 'post',
  },
};

async function getDataListByPaginationRequest({ name, page, lang }) {
  const { data: { pages, result: { rows } } } = await Axios.request({
    ...dataByName[name],
    data: {
      page,
      offset: 12 * (page - 1),
      limit: 12,
      lang,
    },
  });

  return { pages, data: rows };
}

function* workGetDataListByPagination({ payload: { name, page } }) {
  try {
    const lang = yield select(selectLang);
    const res = yield call(getDataListByPaginationRequest, { name, page: page || 1, lang });
    yield put(getDataListByPaginationSuccess({
      ...res, name, page,
    }));
  } catch (error) {
    yield put(getDataListByPaginationError({ name }));
  }
}


function* watchGetDataListByPagination() {
  yield takeEvery(getDataListByPagination, workGetDataListByPagination);
}

export default function* () {
  yield all([
    watchGetDataListByPagination(),
  ]);
}
