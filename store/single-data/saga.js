import {
  all, put, call, takeEvery, select,
} from 'redux-saga/effects';
import Axios from '../services/Axios';
import {
  getSingleData,
  getSingleDataError,
  getSingleDataSuccess,
  resetSingleData,
} from './action';
import { selectLang } from '../user/reducer';

async function getPaymentDeliveryRequest() {
  try {
    const { data: { result } } = await Axios.request({ method: 'get', url: '/api/user/deliveryWeekTimeNew' });
    // const { data: { result: { week: days, time } } } = await Axios.request({ method: 'get', url: '/api/user/deliveryWeekTime' });
    //
    //
    //   const res = {
    //     time: time.filter((day) => day).map((tameStr) => {
    //       const [hour, min] = tameStr.split(':');
    //       const start = new Date(new Date().setHours(hour, min));
    //       const end = new Date(new Date().setHours(+hour === 24 ? 1 : +hour + 1, min));
    //       return {
    //         start,
    //         end,
    //       };
    //     }),
    //     days,
    //   };


    return result;
  } catch (e) {
    return null;
  }
}

async function getPromoCode(promoCode) {
  const { data: { result } } = await Axios({
    method: 'get',
    url: `/api/user/promoCode/${promoCode}`,
  });
  return result;
}
async function getUsages(data) {
  const response = await Axios({
    method: 'post',
    url: '/api/product/usage',
    data: {
      lang: data.lang,
    },
  });
  return response.data.result;
}

async function getRequest(data) {
  let res;
  switch (data.name) {
    case 'paymentDelivery':
      res = await getPaymentDeliveryRequest();
      return res;
    case 'promoCode':
      res = await getPromoCode(data.promoCode);
      return res;
    case 'usage':
      res = await getUsages(data);
      return res;
    default:
      return null;
  }
}


function* workGetSingleData({ payload: { data } }) {
  try {
    const lang = yield select(selectLang);
    const result = yield call(getRequest, { ...data, lang });
    yield put(getSingleDataSuccess({ data: result, name: data.name }));
  } catch (error) {
    yield put(getSingleDataError({ name: data.name }));
  } finally {
    yield put(resetSingleData({ name: data.name }));
  }
}
function* watchGetSingleData() {
  yield takeEvery(getSingleData, workGetSingleData);
}


export default function* () {
  yield all([
    watchGetSingleData(),
  ]);
}
