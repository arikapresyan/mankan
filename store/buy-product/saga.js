import {
  all, takeEvery, select, call, put,
} from 'redux-saga/effects';
import  message  from 'antd/lib/message';

import Axios from '../services/Axios';
import {
  getProductToBuy,
  getProductToBuySuccess,
  getProductToBuyError,
  getProductToBuyReset,
} from './action';

import { selectLang } from '../user/reducer';

function getBuyProductById({ id, lang }) {
  return Axios.request({
    method: 'post',
    url: `/api/product/${id}`,
    body: { lang },
    data: { lang },
  });
}

function* workGetProductToBuy({ payload: { id, notShowModal, errorMessage } }) {
  const lang = yield select(selectLang);
  try {
    if (notShowModal) {
      yield put(getProductToBuyReset());
    }
    const { data } = yield call(getBuyProductById, { id, lang });
    yield put(getProductToBuySuccess({ data: data.result }));
  } catch (error) {
    message.error(errorMessage || 'oops!!!');
    yield put(getProductToBuyError());
  }
}

function* watchGetProductToBuy() {
  yield takeEvery(getProductToBuy, workGetProductToBuy);
}

export default function* () {
  yield all([
    watchGetProductToBuy(),
  ]);
}
