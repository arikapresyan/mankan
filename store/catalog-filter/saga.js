
import {
  takeLatest, put, select, takeEvery,
} from '@redux-saga/core/effects';


import Router from 'next/router';
import {
  catalogFilterChange,
  catalogFilterChangeSuccess, catalogFilterSetValues, catalogMainSearch, catalogSetFilters,
  resetFilterView,
} from './action';
import { catalogGet } from '../catalog/action';
import { getCatalogFilterByName, selectCatalogFilters } from './reducer';


function* workCatalogFilterChange({ payload: { name, value } }) {
  try {
    if (name === 'classification' && value?.[0] === 'all') {
      yield put(resetFilterView());
    } else {
      const classificationAll = yield select(getCatalogFilterByName('classification'));
      if (classificationAll[0] === 'all') {
        yield put(catalogFilterChangeSuccess({ name: 'classification', value: [] }));
      }
    }
    yield put(catalogFilterChangeSuccess({ name, value }));
    yield put(catalogGet({ name, value }));
  } catch (error) {
  }
}


function* watchCatalogFilterChange() {
  yield takeLatest(catalogFilterChange, workCatalogFilterChange);
}

function* workCatalogFilterSetValues({ payload }) {
  try {
    const all = payload?.classification?.[0];

    if (all) {
      yield put(resetFilterView({ exception: 'classification' }));
    } else {
      const classificationAll = yield select(getCatalogFilterByName('classification'));
      if (classificationAll[0] === 'all') {
        yield put(catalogFilterChangeSuccess({ name: 'classification', value: [] }));
      }
    }
  } catch (e) {
    // todo handle
  }
}
function* watchCatalogFilterSetValues() {
  yield takeEvery(catalogFilterSetValues, workCatalogFilterSetValues);
}

function* watchCatalogMainSearch() {
  yield takeLatest(catalogMainSearch, function* workCatalogMainSearch({ payload: { searchWord } }) {
    try {
      Router.push(`/catalog?searchWord=${searchWord}`);
    } catch (e) {
      if (process.env.NODE_ENV === 'development') {
        yield;
        console.log(e);
      }
    }
  });
}
export {
  watchCatalogFilterChange,
  watchCatalogFilterSetValues,
  watchCatalogMainSearch,
};
