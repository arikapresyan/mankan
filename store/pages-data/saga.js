import {
  all, takeEvery, select, call, put,
} from 'redux-saga/effects';
import { getPageData, getPageDataSuccess, getPageDataError } from './action';
import { selectCurrentPage, selectPageId, selectHelperData } from './reducer';
// eslint-disable-next-line import/no-cycle
import Axios from '../services/Axios';
import { selectAuthorized, selectLang } from '../user/reducer';
import { cartSetAll } from '../cart/action';
import { setLocalStorageObj } from '../../constants/utils';


const getHomePageData = async (lang) => {
  try {
    const { data: { result: { rows: orders } } } = await Axios.request({
      url: '/api/product/sliders',
      method: 'get',
    });
    const { data: { result } } = await Axios.request({
      url: '/api/product/homePage',
      method: 'post',
      data: { lang },
    });
    const homePageData = [];
    const newHomePageData = [];

    const { ExtraProducts } = result;
    delete result.ExtraProducts;
    const resultKeys = Object.keys(result);

    orders.forEach((currentOrder, index) => {
      let data = {};
      resultKeys.forEach((key) => {
        if (result[key].sliderId === currentOrder.id) {
          data = result[key];
        }
      });

      ExtraProducts.forEach((extra) => {
        if (extra.sliderId === currentOrder.id) {
          data = extra;
        }
      });
      homePageData[currentOrder.order || 100 * index] = { ...currentOrder, ...data };
    });

    homePageData.forEach((dataItem) => {
      if (dataItem) newHomePageData.push(dataItem);
    });
    return newHomePageData;
  } catch (error) {
    return [];
  }
};

const getProfilePageData = async () => ({
  myOrders: [],
  viewedProducts: [],
  untilNextBonusPercent: 50000,
  nextBonusPercent: 3,
});

const getOneProductData = async (lang, id) => {
  const { data: { result } } = await Axios.request({
    method: 'post',
    url: `/api/product/${id}`,
    data: { id, lang },
  });

  return { result };
};

function* changeUserCart(products) {
  yield call(Axios.request, {
    method: 'post',
    url: '/api/user/addWish/byIds',
    data: {
      type: 'cart',
      products,
    },
  });
}

function* getCartPageData({ lang, cart }) {
  const ids = Object.keys(cart);

  const { data: { result: cartData } } = yield call(Axios.request, {
    url: '/api/product/byIds',
    data: { lang, ids },
    method: 'post',
  });
  if (ids.length !== cartData.length) {
    const isAuth = yield select(selectAuthorized);
    const newCart = {};
    cartData.forEach(({ id }) => {
      newCart[id] = { ...cart[id] };
    });
    yield put(cartSetAll({ cart: newCart }));
    setLocalStorageObj('cart', newCart);
    if (isAuth) {
      yield call(changeUserCart, Object.keys(newCart).map((key) => newCart[key]));
    }
  }

  const { data: { result: bugsData } } = yield call(Axios.request, {
    url: '/api/product/bugs',
    data: { lang },
    method: 'post',
  });
  return { cartData, bugsData };
}

const getVacancyPageData = async ({ lang }) => {
  const res = await Axios.request({
    url: '/api/vocation/',
    data: { lang },
    method: 'post',
  });
  return res;
};

function* getDataByPage({
  page, lang, id, data,
}) {
  if (page === 'home') {
    const res = yield call(getHomePageData, lang);
    return res;
  }
  if (page === 'profile') {
    const res = yield call(getProfilePageData, lang);
    return res;
  }
  if (page === 'oneProduct') {
    const res = yield call(getOneProductData, lang, id);

    return res;
  }
  if (page === 'cart') {
    const res = yield call(getCartPageData, { lang, cart: data.cart });

    return res;
  }

  if (page === 'vacancy') {
    const { data: { result } } = yield call(getVacancyPageData, { lang });

    return result;
  }

  return null;
}

function* workGetPageData(action) {
  try {
    const { payload: { page, id, data } } = action;

    const lang = yield select(selectLang);
    const currentId = id || (yield select(selectPageId));
    const currentPage = page || (yield select(selectCurrentPage));

    const helperData = data || (yield select(selectHelperData)) || null;
    const res = yield call(getDataByPage, {
      page: currentPage, lang, id: currentId, data: helperData,
    });

    yield put(getPageDataSuccess({
      data: res, page: currentPage, id: currentId, helperData,
    }));
  } catch (error) {
    yield put(getPageDataError());
  }
}

function* watchGetPageData() {
  yield takeEvery(getPageData, workGetPageData);
}

export default function* () {
  yield all([
    watchGetPageData(),
  ]);
}
