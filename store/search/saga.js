import {
  all, takeLatest, call, put, select,delay
} from 'redux-saga/effects';

import {
  searchProduct,
  searchProductError,
  searchProductSuccess,
} from './action';
import Axios from '../services/Axios';
import { selectLang } from '../user/reducer';

function getSearchedProductsRequest({ searchWord, lang }) {
  return Axios.request({
    method: 'post',
    url: '/api/product/homePage/search',
    data: { searchWord, lang },
  });
}

function* workSearchProduct({ payload: { searchWord } }) {
  yield delay(200);
  const lang = yield select(selectLang);
  try {
    const { data: { result } } = yield call(getSearchedProductsRequest, { searchWord, lang });
    yield put(searchProductSuccess({ data: result }));
  } catch (error) {
    yield put(searchProductError());
  }
}


function* watchSearchProduct() {
  yield takeLatest(searchProduct, workSearchProduct);
}
export default function* () {
  yield all([watchSearchProduct()]);
}
