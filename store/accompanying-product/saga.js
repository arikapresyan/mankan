import {
  put, takeLatest, select, call, all,
} from '@redux-saga/core/effects';
import {
  getAccompanyingProduct,
  getAccompanyingProductSuccess,
  getAccompanyingProductError,
} from './action';
import { selectCart } from '../cart/reducer';
import Axios from '../services/Axios';
import { selectLang } from '../user/reducer';

function getAccompanyingProductRequest({ ids, lang }) {
  return Axios.request({
    method: 'post',
    url: '/api/product/escorting',
    data: { ids, lang },
  });
}

function* workAccompanying() {
  const ids = Object.keys(yield select(selectCart));
  const lang = yield select(selectLang);
  try {
    if (!ids.length) throw new Error();

    const {
      data: { escortingProducts },
    } = yield call(getAccompanyingProductRequest, {
      ids,
      lang,
    });
    yield put(getAccompanyingProductSuccess({ data: escortingProducts }));
  } catch (error) {
    yield put(getAccompanyingProductError());
  }
}

function* watchAccompanying() {
  yield takeLatest(getAccompanyingProduct, workAccompanying);
}
export default function* () {
  yield all([
    watchAccompanying(),
  ]);
}
