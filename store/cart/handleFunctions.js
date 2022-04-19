// eslint-disable-next-line import/prefer-default-export
export const addLoadingItems = (state, ids, loadingStatus = true) => {
  const { loading } = state;
  const cloneLoading = { ...loading };
  const idsKeys = Object.keys(ids);

  idsKeys.forEach((key) => {
    cloneLoading[key] = loadingStatus;
  });
  return cloneLoading;
};
