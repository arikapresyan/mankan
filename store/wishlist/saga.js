import {
  takeEvery, call, put, select, all,
} from '@redux-saga/core/effects';
import {
  wishlistGet,
  wishlistSet,
  wishlistChangeItem,
  wishlistChangeItemSuccess,
  wishlistItemLoading,
  wishlistPopulate,
  wishlistPopulateSuccess,
  wishlistPopulateLoading,
  wishlistPopulateError,
  wishlistError,
} from './action';
import { selectAuthorized, selectUser, selectLang } from '../user/reducer';
import {
  setLocalStorageObj,
  getLocalStorageObj,
} from '../../constants/utils';
import { selectWishlistIds } from './reducer';
import Axios from '../services/Axios';

function getProductsByIdsRequest({ ids, lang }) {
  return Axios.request({
    url: '/api/product/byIds',
    data: { ids, lang },
    method: 'post',
  });
}

function* changeWishlistRequest(productIds) {
  yield call(Axios.request, {
    method: 'post',
    url: '/api/user/addWish/byIds',
    data: {
      type: 'wish',
      productIds,
    },
  });
}
function* workWishlistGet() {
  // get products by ids
  try {
    const lang = yield select(selectLang);
    // get from local storage
    let productIds = getLocalStorageObj('products').wishlistIds;
    const ids = Object.keys(productIds);

    if (!ids.length) {
      yield put(wishlistSet({ products: [], productIds: {} }));
      return;
    }

    const { data: { result } } = yield call(getProductsByIdsRequest, { ids, lang });

    if (result.length !== ids.length) {
      const isAuth = yield select(selectAuthorized);
      productIds = {};
      result.forEach(({ id }) => { productIds[id] = true; });
      setLocalStorageObj('products', { wishlistIds: productIds });
      if (isAuth) {
        yield call(changeWishlistRequest, Object.keys(productIds));
      }
    }
    yield put(wishlistSet({ products: result, productIds }));
  } catch (error) {
    yield put(wishlistError());
  }
}


function* workWishlistPopulate() {
  try {
    yield put(wishlistPopulateLoading());
    const userWishListArray = (({ ...yield select(selectUser) }).wishList
    || []).map(({ productId }) => productId);
    const userWishlistObj = {};

    userWishListArray.forEach((i) => { userWishlistObj[i] = true; });


    const wishlistIds = (userWishListArray.length && userWishlistObj)
    || (getLocalStorageObj('products')
    && getLocalStorageObj('products').wishlistIds) || {};

    yield put(wishlistPopulateSuccess({ wishlistIds }));
    setLocalStorageObj('products', { wishlistIds });
  } catch (error) {
    yield put(wishlistPopulateError());
  }
}

function* watchWishlistPopulate() {
  yield takeEvery(wishlistPopulate, workWishlistPopulate);
}

function setToWishlistRequest(productId) {
  return Axios.request({
    method: 'post',
    url: '/api/user/addWish',
    data: {
      productId,
      type: 'wish',
    },
  });
}
function removeFromWishlistRequest(productId) {
  return Axios.request({
    method: 'delete',
    url: '/api/user/removeWish',
    data: {
      productId,
      type: 'wish',
    },
  });
}

function* workWishlistChangeItem({ payload: { productId } }) {
  const authorizedUser = yield select(selectAuthorized);
  yield put(wishlistItemLoading({ id: productId }));
  try {
    const wishlistIds = yield select(selectWishlistIds);
    const inWishlist = !!wishlistIds[productId];

    if (authorizedUser) {
      // axios add to send to server to add user wishlistIds
      if (inWishlist) {
        yield call(removeFromWishlistRequest, productId);
      } else {
        // add to wishlistIds
        yield call(setToWishlistRequest, productId);
        // remove from wishlistIds
      }
    }
    wishlistIds[productId] = inWishlist ? null : productId;
    if (inWishlist) {
      delete wishlistIds[productId];
    } else wishlistIds[productId] = true;


    yield put(wishlistChangeItemSuccess({
      wishlistIds: { ...wishlistIds },
      id: productId,
    }));
    setLocalStorageObj('products', { wishlistIds });
  } catch (error) {
  }
}

function* watchWishlistChangeItem() {
  yield takeEvery(wishlistChangeItem, workWishlistChangeItem);
}


function* watchWishlistGet() {
  yield takeEvery(wishlistGet, workWishlistGet);
}


export default function* () {
  yield all([
    watchWishlistGet(),
    watchWishlistChangeItem(),
    watchWishlistPopulate(),
  ]);
}
