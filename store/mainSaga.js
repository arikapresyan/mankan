import { all } from '@redux-saga/core/effects';
// eslint-disable-next-line import/no-cycle
import {
  watchLogin,
  watchRegistration,
  watchLogout,
  watchGetUserData,
  watchSetLang,
} from './user/saga';

import { watchAPISend } from './global-APIS/saga';
import { watchCatalogFilterChange, watchCatalogFilterSetValues,watchCatalogMainSearch } from './catalog-filter/saga';
import { watchCatalogGet } from './catalog/saga';
import dataByPagination from './data-by-pagination/saga';
import { watchMenuList } from './menu-list/saga';
import accompanying from './accompanying-product/saga';
import wishlist from './wishlist/saga';
import pagesData from './pages-data/saga';
import buyProduct from './buy-product/saga';
import search from './search/saga';
import cart from './cart/saga';
import singleDate from './single-data/saga';
import viewedProducts from './viewed-products/saga';
import mainSlides from './main-slides/saga';
import currantTime from './currant-time/saga';

export default function* rootSaga() {
  yield all([
    mainSlides(),
    viewedProducts(),
    watchLogin(),
    watchRegistration(),
    watchAPISend(),
    watchLogout(),
    watchCatalogFilterChange(),
    watchCatalogFilterSetValues(),
    watchCatalogGet(),
    dataByPagination(),
    watchMenuList(),
    watchGetUserData(),
    accompanying(),
    pagesData(),
    buyProduct(),
    singleDate(),
    wishlist(),
    search(),
    cart(),
    watchSetLang(),
    currantTime(),
    watchCatalogMainSearch()
  ]);
}
