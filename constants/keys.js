
const keys = {
  isDevelopment: (process.env.NODE_ENV === 'development'),
  HOST: process.env.REACT_APP_URL,
  LOCAL_STORAGE_HEADER: 'authorization',
  LOCAL_STORAGE_USER_INFO: 'user_info',
  IMAGE_POSTFIX: `${process.env.REACT_APP_URL}/products/`,
  DEFAULT_PRICE: [1, 300000],
};


export default keys;
