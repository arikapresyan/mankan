import {
  all, put, call, select, takeEvery,
} from 'redux-saga/effects';
import Axios from '../services/Axios';
import {
  getViewedProducts, getViewedProductsError, getViewedProductsSuccess, setViewedProducts,
} from './action';
import { getLocalStorageObj, setLocalStorageObj } from '../../constants/utils';
import { selectLang, selectAuthorized } from '../user/reducer';


const getProductsByIds = async ({ lang, ids }) => {
  const { data: { result } } = await Axios.request({
    url: '/api/product/byIds',
    data: { lang, ids },
    method: 'post',
  });

  const newIds = ids.filter((id) => result.find(({ id: prodId }) => prodId === id));

  const r = [];

  result.forEach((a) => {
    r[newIds.indexOf(a.id)] = a;
  });

  return r.reverse();
};
function* workGetViewedProducts(action) {
  const { payload: { limit } } = action;
  try {
    let viewedProductIds = getLocalStorageObj('viewed') || [];
    if (!limit && viewedProductIds.length > 6) {
      viewedProductIds = viewedProductIds.splice(viewedProductIds.length - 6, 6);
    } else if (limit && viewedProductIds.length > limit) {
      viewedProductIds = viewedProductIds.splice(viewedProductIds.length - limit, limit);
    }

    const lang = yield select(selectLang);
    const res = yield call(getProductsByIds, { ids: viewedProductIds, lang });

    yield put(getViewedProductsSuccess({ data: res }));
  } catch (error) {
    yield put(getViewedProductsError());
  }
}

function* watchGetViewedProducts() {
  yield takeEvery(getViewedProducts, workGetViewedProducts);
}

function* workSetViewedProducts({ payload: { id } }) {
  const authorizedUser = yield select(selectAuthorized);
  try {
    if (authorizedUser) {
      // send api to watched products
    }
    const lastViewed = getLocalStorageObj('viewed') || [];
    if (lastViewed.indexOf(id) === -1) {
      lastViewed.push(id);
      setLocalStorageObj('viewed', lastViewed);
    }
  } catch (error) {
    console.log('error', error);
  }
}

function* watchSetViewedProducts() {
  yield takeEvery(setViewedProducts, workSetViewedProducts);
}


export default function* () {
  yield all([
    watchGetViewedProducts(),
    watchSetViewedProducts(),
  ]);
}
