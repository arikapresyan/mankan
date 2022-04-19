// eslint-disable-next-line import/no-extraneous-dependencies
import {
  put, takeLatest, select, call, all,
} from '@redux-saga/core/effects';


import { CancelToken } from 'axios';
import Axios from '../services/Axios';
import {
  catalogGet,
  catalogGetSuccess,
  catalogGetError,

} from './action';
import { clearFilters, selectCatalogFilters } from '../catalog-filter/reducer';
import { selectLang } from '../user/reducer';
import { catalogSetFilters } from '../catalog-filter/action';
import { CATALOG_PRODUCTS_LIMIT } from './constants';


let cancel;


// eslint-disable-next-line require-yield
function getFilteredDataRequest(data) {
  return Axios.request({
    url: '/api/product/fast',
    method: 'post',
    data,
    cancelToken: new CancelToken(((c) => {
      cancel = c;
    })),
  });
}

function getKey(name) {
  // brand productSex extraFilter productAge productType productUsage
  switch (name) {
    case 'age':
      return 'productAge';
    case 'gender':
      return 'productSex';
    case 'type':
      return 'productType';
    case 'brand':
      return 'brand';
    case 'meaning':
      return 'productUsage';
    case 'classification':
      return 'extraFilter';

    default:
      return null;
  }
}

function getBackKey(name) {
  switch (name) {
    case 'productAge':
      return 'age';
    case 'productSex':
      return 'gender';
    case 'productType':
      return 'type';
    case 'brand':
      return 'brand';
    case 'productUsage':
      return 'meaning';
    case 'extraFilter':
      return 'classification';

    default:
      return null;
  }
}
function* workCatalogGet({ payload }) {
  try {
    const { page, name, changedNames } = (payload || {}); // TODO: remove is triggered
    const selectedPage = page || 1;

    const filters = yield select(clearFilters);


    const catalogFilters = yield select(selectCatalogFilters);


    let lastFilters = {};
    const filterName = getKey(name);
    if (filterName) {
      if (filterName && catalogFilters[filterName]) {
        lastFilters = {
          [filterName]: catalogFilters[filterName],
        };
      }
    }

    if (changedNames) {
      changedNames.forEach((n) => {
        const fName = getKey(n);
        if (fName) {
          if (fName && catalogFilters[fName]) {
            lastFilters[fName] = catalogFilters[fName];
          }
        }
      });
    }
    // brand productSex extraFilter productAge productType productUsage

    filters.classification = filters.classification || [];
    // eslint-disable-next-line no-restricted-globals
    const extraFilterIds = !isNaN(+filters.classification[0]) && filters.classification[0];

    const filterClone = JSON.parse(JSON.stringify(filters));

    const lastFilterKeys = [];
    Object.keys(filterClone).forEach((key) => {
      const indexOfAll = filterClone[key].indexOf('all');
      lastFilterKeys.push(getKey(key));
      if (indexOfAll !== -1 || !filterClone[key].length) {
        delete filterClone[key];
        delete lastFilters[getKey(key)];
      }
    });

    Object.keys(lastFilters).forEach((key) => {
      if (!filterClone[getBackKey(key)]) {
        delete lastFilters[key];
      }
    });

    const filterToSend = {
      lang: yield select(selectLang),
      limit: CATALOG_PRODUCTS_LIMIT,
      offset: (selectedPage - 1) * CATALOG_PRODUCTS_LIMIT,
      extraFilterIds,
      typeIds: filterClone.type,
      usageIds: filterClone.meaning,
      ageIds: filterClone.age,
      brandIds: filterClone.brand,
      sex: filterClone.gender?.[0] !== 'ALL' ? filterClone?.gender?.[0] : undefined,
      minPrice: filterClone?.price?.[0] || undefined,
      maxPrice: filterClone?.price?.[1] || undefined,
      percent: filterClone?.classification?.[0] === 'percent',
      bestSeller: filterClone?.classification?.[0] === 'bestSeller',
      isNew: filterClone?.classification?.[0] === 'isNew',
      priceByAsc: filterClone?.classification?.[0] === 'priceByAsc',
      searchWord: catalogFilters.searchWord,
    };
    if (Array.isArray(filterClone.gender?.[0])) {
      delete filterToSend.sex;
    }

    if (cancel !== undefined) {
      cancel();
    }


    const { data: { filters: newFilters, ...restData } } = yield call(getFilteredDataRequest, filterToSend);


    yield all([
      put(catalogGetSuccess({
        products: restData.result.rows,
        pagesCount: restData.pages,
        page: selectedPage,
      })),
    ]);


    if (restData.result.rows.length > 0) {
      yield put(catalogSetFilters({
        filters: {
          productAge: newFilters.age,
          productType: newFilters.type,
          productSex: newFilters.productSex,
          extraFilter: newFilters.extraFilter,
          productUsage: newFilters.usage,
          brand: newFilters.brand,
          searchWord: catalogFilters.searchWord,
          ...lastFilters,
        },
      }));
    }
  } catch (error) {
    yield put(catalogGetError());
  }
}

function* watchCatalogGet() {
  yield takeLatest(catalogGet, workCatalogGet);
}

export { watchCatalogGet, workCatalogGet };
