import {
  takeEvery, put, all, call, select,
} from '@redux-saga/core/effects';
import Router from 'next/router';
import  message  from 'antd/lib/message';
import Axios from '../services/Axios';
import {
  registration,
  loginSuccess,
  logoutSuccess,
  login,
  setLang,
  authorizationError,
  resetUserReducer,
  logout,
  authorizationLoading,
  getUserData,
  getUserDataSuccess,
  getUserDataError,
} from './action';
import { hideAll } from '../userEventListeners/action';
import { wishlistPopulate } from '../wishlist/action';
import { C_TOKEN, removeLocalStorageObj } from '../../constants/utils';
import { populateCart } from '../cart/action';
import { selectAuthorized, selectLang, selectUser } from './reducer';
import { getPageData } from '../pages-data/action';
import { deleteCookie, getCookie, setCookie } from '../../utils/cookies';


function loginRequest(params) {
  return Axios.request({
    method: 'post',
    url: '/api/user/signIn',
    data: params,
  });
}

function* workLogin({
  payload: {
    emailOrPhone,
    password,
    rememberMe,
  },
}) {
  try {
    const lang = yield select(selectLang);
    yield put(authorizationLoading());
    const { data: { token, result } } = yield call(loginRequest,
      {
        userName: emailOrPhone,
        password,
        rememberMe,
        lang,
      });
    if (rememberMe) {
      setCookie(C_TOKEN, token, { 'max-age': 100 * 24 * 60 * 60 });
    } else {
      setCookie(C_TOKEN, token);
    }

    yield put(
      loginSuccess({
        ...result,
      }),
    );

    removeLocalStorageObj('cart');
    removeLocalStorageObj('products');
    yield put(getPageData({}));
    yield put(wishlistPopulate());
    yield put(populateCart());
  } catch (error) {
    const errorMessage = error?.response?.data?.message || 'Something went wrong';
    yield all([
      put(
        authorizationError({
          errorText: errorMessage,
        }),
      ),
      put(
        resetUserReducer(),
      ),
    ]);
  }
}

function* watchLogin() {
  yield takeEvery(login, workLogin);
}

function registrationRequest(params) {
  return Axios.request({
    method: 'post',
    url: '/api/user/signUp',
    data: params,
  });
}

function* workRegistration({
  payload: {
    email,
    password,
    phone,
    agreeTerms,
    name,
    surname,
    successText = 'Please, confirm email',
  },
}) {
  yield put(authorizationLoading());

  try {
    yield call(registrationRequest, {
      email,
      password,
      retryPassword: password,
      phone,
      agreeTerms,
      firstName: name,
      lastName: surname,
      isAcceptedRules: agreeTerms,
    });
    message.success({ content: successText, duration: 5 });

    yield all([
      put(hideAll()),
      put(resetUserReducer()),
    ]);
  } catch (error) {
    yield all([
      put(
        authorizationError({
          errorText: error?.response?.data?.message || 'No server response',
        }),
      ),
      put(
        resetUserReducer(),
      ),
    ]);
  }
}
function* watchRegistration() {
  yield takeEvery(registration, workRegistration);
}

function getUserDataRequest(token) {
  return Axios.request({
    method: 'get',
    url: `/api/user/info/${token}`,
  });
}

function* workGetUserData() {
  const token = getCookie(C_TOKEN);

  try {
    if (!token) throw new Error();
    const { data: { result } } = yield call(getUserDataRequest, token);

    yield put(getUserDataSuccess());
    yield put(loginSuccess({ ...result }));
    localStorage.setItem('lang', result.lang);
  } catch (error) {
    if (error.response) {
      localStorage.removeItem('cart');
      sessionStorage.removeItem('cart');
      localStorage.removeItem('products');
      sessionStorage.removeItem('products');
    }
    deleteCookie(C_TOKEN);
    yield put(getUserDataError());
  }

  try {
    yield all([
      put(wishlistPopulate()),
      put(populateCart()),
    ]);
  } catch (error) {
  }
}


function* watchGetUserData() {
  yield takeEvery(getUserData, workGetUserData);
}


function* workLogout() {
  try {
    const user = yield select(selectUser);
    if (!user.id) return;
    deleteCookie(C_TOKEN);
    localStorage.removeItem('products');
    localStorage.removeItem('cart');
    Router.push('/');
    yield put(logoutSuccess());
    yield put(wishlistPopulate());
    yield put(populateCart());
  } catch (error) {
    yield put(authorizationError({ errorText: 'logout error' }));
  }
}
function changeLangRequest(data) {
  return Axios.request({
    url: '/api/user/changeLang',
    method: 'put',
    data,
  });
}

function* workSetLang({ payload }) {
  try {
    const isAuth = yield select(selectAuthorized);
    if (isAuth) {
      yield call(changeLangRequest, payload);
    }
    localStorage.setItem('lang', payload.lang);
  } catch (e) {
  }
}
function* watchSetLang() {
  yield takeEvery(setLang, workSetLang);
}
function* watchLogout() {
  yield takeEvery(logout, workLogout);
}
export {
  watchLogin,
  watchRegistration,
  watchLogout,
  watchGetUserData,
  watchSetLang,
};
