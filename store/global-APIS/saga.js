import {
  takeEvery, call, put,
} from '@redux-saga/core/effects';
import  message  from 'antd/lib/message';
import Axios from '../services/Axios';
import {
  APISuccess, APIError, APILoading, APISend, APIClear,
} from './action';

const LOADER_KEY = 'loaderKey';

function sendAPIRequest(data) {
  return Axios.request({
    ...data,
  });
}

export function* workAPISend(action) {
  const {
    method,
    url,
    data,
    headers,
    successText = 'Success',
    errorText = 'Something went wrong',
    loadingText = 'Loading...',
  } = action.payload;
  yield put(APILoading());
  try {
    message.loading({ content: loadingText, key: LOADER_KEY, duration: 0 });
    const res = yield call(sendAPIRequest, {
      method,
      url,
      headers: headers || {},
      data: data || null,
    });
    const { status } = res;
    message.success({ content: successText, key: LOADER_KEY, duration: 5 });
    yield put(APISuccess({ responseText: successText, status }));
  } catch (error) {
    message.error({ content: errorText, key: LOADER_KEY, duration: 5 });
    yield put(
      APIError({
        responseText: errorText,
      }),
    );
  } finally {
    yield put(APIClear());
  }
}


export function* watchAPISend() {
  yield takeEvery(APISend, workAPISend);
}
