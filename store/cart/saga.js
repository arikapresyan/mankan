import {
  all, takeEvery, put, select, call, delay,
} from 'redux-saga/effects';
import message from 'antd/lib/message';
import {
  changeCart,
  changeCartSuccess,
  changeCartError,
  cartSetAll,
  populateCart,
  sendOrder,
  sendOrderError,
  sendOrderSuccess,
} from './action';
import { selectCart } from './reducer';
import { changePage, resetChangePage } from '../change-page/action';

import { selectAuthorized, selectLang, selectUser } from '../user/reducer';
import { setLocalStorageObj, getLocalStorageObj, removeLocalStorageObj } from '../../constants/utils';
import Axios from '../services/Axios';
import { paymentTypes } from '../../components/modals/confirm-order-modal/components/constants';


function* workPopulateCart() {
  try {
    const userCart = (({ ...yield select(selectUser) }).cartList
    || []).map(({ productId, count, battery }) => ({
      id: productId, count, battery,
    }));
    const userCartObj = {};
    userCart.forEach((cart) => {
      userCartObj[cart.id] = {
        count: cart.count || 1, id: cart.id, status: true, battery: cart.battery,
      };
    });
    const cartData = (Object.keys(userCartObj).length && userCartObj) || getLocalStorageObj('cart') || {};

    setLocalStorageObj('cart', cartData);
    yield put(cartSetAll({ cart: cartData }));
  } catch (error) {
  }
}

function* watchPopulateCart() {
  yield takeEvery(populateCart, workPopulateCart);
}


function setToWishlistRequest(products) {
  return Axios.request({
    method: 'post',
    url: '/api/user/addWish',
    data: {
      products,
      type: 'cart',
    },
  });
}
function removeFromWishlistRequest({ toRemove: products, clearBatteryOwners }) {
  const data = {
    productId: products[0],
    type: 'cart',
    ...(clearBatteryOwners ? { removeBatteryId: products[0] } : {}),
  };

  return Axios.request({
    method: 'delete',
    url: '/api/user/removeWish',
    data,
  });
}

function* workChangeCart({ payload: { ids, status, redirect } }) {
  const authorized = yield select(selectAuthorized);
  try {
    const cart = { ...(yield select(selectCart) || {}) };

    const idsKeys = Object.keys(ids);
    const toRemove = [];
    const toAdd = [];
    let clearBatteryOwners = null;
    idsKeys.forEach((key) => {
      if (ids[key].status && status) {
        if (cart[key] && !ids[key].batteryId) {
          delete cart[key].batteryId;
        }
        const count = cart[key] && cart[key].count;
        cart[key] = { ...(cart[key] || {}), ...ids[key] };
        if (cart[key] && cart[key].type === 'battery' && count) {
          cart[key].count += count;
        }
        toAdd.push(cart[key]);
      } else {
        const cartKeys = Object.keys(cart);
        const batteryOwners = [];

        cartKeys.forEach((cartKey) => {
          if (cart[cartKey].batteryId === ids[key]) {
            batteryOwners.push(cart[cartKey].batteryId);
            delete cart[cartKey].batteryId;
          }
        });

        if (batteryOwners.length) {
          clearBatteryOwners = {
            ids: batteryOwners,
            id: ids[key],
          };
        }
        delete cart[ids[key]];
        toRemove.push(ids[key]);
      }
    });

    if (authorized) {
      if (toRemove.length) {
        yield call(removeFromWishlistRequest, { toRemove, clearBatteryOwners });
      } else {
        yield call(setToWishlistRequest, toAdd);
      }
    }
    setLocalStorageObj('cart', cart);
    yield put(changeCartSuccess({ data: cart, ids }));
    if (redirect === true) {
      yield put(changePage({ route: '/cart' }));
      yield delay(200);
      yield put(resetChangePage());
    }
  } catch (error) {
    yield put(changeCartError({ ids }));
  }
}

function* watchChangeCart() {
  yield takeEvery(changeCart, workChangeCart);
}

function* sendOrderRequest(data, auth) {
  return yield call(Axios.request, {
    method: 'post',
    url: auth ? '/api/user/orders' : '/api/product/createOrder',
    data,
  });
}

const isoLangs = {
  ARM: 'hy',
  RU: 'ru',
  ENG: 'en',
};

function* workSendOrder({ payload: { values, messageTexts, promo } }) {
  const { errorText, successText } = messageTexts;
  const cart = yield select(selectCart);
  const auth = yield select(selectAuthorized);

  const lang = yield select(selectLang);


  const data = {
    productIds: Object.keys(cart).map((item) => cart[item]),
    deliveryAddress: {
      street: values.street,
      building: values.house,
      entry: values.entry,
    },
    firstName: values.firstName,
    lastName: values.lastName,
    paymentType: paymentTypes[values.method],
    deliveryTime: values.deliveryPeriodString,
    phone: values.phone,
    email: values.email,
    promoCode: promo,
    isoLang: isoLangs[lang],
  };

  try {
    const res = yield call(sendOrderRequest, data, auth);


    if (paymentTypes[values.method] === paymentTypes[2]
      || paymentTypes[values.method] === paymentTypes[3]) {
      removeLocalStorageObj('cart');
      yield put(sendOrderSuccess());
      message.success(successText);
      yield put(changePage({ route: '/' }));
      yield delay(200);
      yield put(resetChangePage());
    } else {
      const { data: { response: { formUrl } } } = res;
      window.location.href = formUrl;
    }
  } catch (e) {
    message.error(errorText);
    yield put(sendOrderError());
  }
}
function* watchSendOrder() {
  yield takeEvery(sendOrder, workSendOrder);
}

export default function* () {
  yield all([
    watchChangeCart(),
    watchPopulateCart(),
    watchSendOrder(),
  ]);
}
