import axios from 'axios';
import  message  from 'antd/lib/message';
import Router from 'next/router';
import { store } from '../../pages/_app';
import { logout } from '../user/action';
import { getCookie } from '../../utils/cookies';
import { C_TOKEN } from '../../constants/utils';

const appAxios = axios.create({
  baseURL: process.env.REACT_APP_URL,
});

appAxios.interceptors.request.use(
  (config) => {
    const newConfig = { ...config };
    newConfig.url = newConfig.baseURL + newConfig.url;
    if (typeof window !== 'undefined') {
      newConfig.headers.Authorization = `Bearer ${(getCookie(C_TOKEN)) || ''}`;
    }

    return newConfig;
  },
  (error) => Promise.reject(error),
);

appAxios.interceptors.response.use(
  (response) => response,
  (error) => {
    const {
      status,
      config: { url },
    } = error.response;
    if (status === 401 && !url.includes('/api/user/signIn')) {
      Router.push('/');
      store.dispatch(logout());
      message.error({ content: 'Unauthorized', duration: 2 });
    }
    return Promise.reject(error);
  },
);

export default appAxios;
