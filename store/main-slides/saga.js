import {
  takeEvery, call, all, put,
} from 'redux-saga/effects';
import Axios from '../services/Axios';
import { getSlides, getSlidesSuccess, getSlidesError } from './actions';

const getSlidesRequest = () => Axios.get('/api/product/mainSlider');

function* workGetSlides() {
  try {
    const { data: { result: { rows } } } = yield call(getSlidesRequest);
    const data = rows.sort(() => Math.random() - 0.5);
    yield put(getSlidesSuccess({ data }));
  } catch (e) {
    yield put(getSlidesError());
  }
}

function* watchGetSlides() {
  yield takeEvery(getSlides, workGetSlides);
}
export default function* () {
  yield all([watchGetSlides()]);
}
