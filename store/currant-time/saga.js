import {
  all, put, call, takeEvery,
} from 'redux-saga/effects';
import Axios from 'axios';
import { getCurrantTime, setCurrantTime } from './action';

function* workGetCurrantTime() {
  for (let i = 0; i < 3; i++) {
    try {
      const { data: { datetime } } = yield call(Axios.request, {
        url: 'https://worldtimeapi.org/api/timezone/Asia/Yerevan',
        method: 'get',
      });

      const newTime = datetime.split('.')[0];
      yield put(setCurrantTime({ currantTime: new Date(newTime) }));
      return true;
    } catch (e) {
      console.log(e);
    }
  }
  return true;
}

function* watchGetCurrantTime() {
  yield takeEvery(getCurrantTime, workGetCurrantTime);
}

export default function* () {
  yield all([watchGetCurrantTime()]);
}
