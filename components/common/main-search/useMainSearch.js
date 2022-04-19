import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchProductReset } from '../../../store/search/action';
import { selectSearchData, selectSearchDataLoading } from '../../../store/search/reducer';
import useOnClickOutside from '../../../hooks/useOnOutClick';
import { catalogMainSearch } from '../../../store/catalog-filter/action';
import { selectCatalogFilters } from '../../../store/catalog-filter/reducer';

// eslint-disable-next-line import/prefer-default-export
export const useMainSearch = ({ onSearch }) => {
  const [searchValue, setValue] = useState();
  const { searchWord } = useSelector(selectCatalogFilters);
  const dispatch = useDispatch();
  const resetSearch = () => dispatch(searchProductReset());


  const data = useSelector(selectSearchData);
  const loading = useSelector(selectSearchDataLoading);
  const [focused, setFocused] = useState(false);
  const ref = useRef(null);

  const handleSearch = (value) => {
    if (value?.trim()) dispatch(catalogMainSearch({ searchWord: value }));
    resetSearch();
    setFocused(false);
  };
  const handleSearchSuggested = (value) => {
    onSearch({ searchWord: value });
  };
  const handleFocus = ({ target: { value } }) => {
    resetSearch();
    if (value && value !== searchValue) {
      handleSearchSuggested(value);
    }
    if (value !== searchValue) setFocused(true);
  };
  const handleBlur = () => {
    setFocused(false);
  };

  const handleChange = ({ target: { value: eventValue } }) => {
    setValue(eventValue);
    handleSearchSuggested(eventValue);
    setFocused(true);
  };

  useOnClickOutside(ref, () => {
    setFocused(false);
  });

  useEffect(() => {
    setValue(searchWord);
  }, [searchWord]);


  return {
    searchValue,
    data,
    loading,
    focused,
    handleFocus,
    handleBlur,
    ref,
    setValue,
    handleChange,
    handleSearch,
  };
};
