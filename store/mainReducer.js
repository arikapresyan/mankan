import { combineReducers } from 'redux';
import user from './user/reducer';
import userEventListeners from './userEventListeners';
import globalAPIS from './global-APIS/reducer';
import catalogFilter from './catalog-filter/reducer';
import catalog from './catalog/reducer';
import cart from './cart/reducer';
import menuList from './menu-list/reducer';

import dataByPagination from './data-by-pagination/reducer';

import globalInformationRouter from './global-Information-Router/reducer';
import accompanying from './accompanying-product/reducer';
import wishlist from './wishlist/reducer';
import pageData from './pages-data/reducer';
import buyProduct from './buy-product/reducer';
import search from './search/reducer';
import singleData from './single-data/reducer';
import viewedProducts from './viewed-products/reducer';
import mainSlides from './main-slides/reducer';
import currantTime from './currant-time/reducer';

import redirectRoute from './change-page/reducer';

export default combineReducers({
  user,
  viewedProducts,
  userEventListeners,
  globalAPIS,
  pageData,
  catalogFilter,
  catalog,
  cart,
  dataByPagination,
  menuList,
  globalInformationRouter,
  accompanying,
  wishlist,
  buyProduct,
  search,
  singleData,
  mainSlides,
  currantTime,
  redirectRoute,
});
