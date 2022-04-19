/* eslint-disable no-shadow */
// eslint-disable-next-line no-unused-vars
import { useDispatch } from 'react-redux';
import  message  from 'antd/lib/message';
import { useIntl } from 'react-intl';
import {
  resetCartReducer,
  cartChangeProduct,
  changeCart,
} from './action';

const timersId = {};

function useCartActions() {
  const dispatch = useDispatch();
  const { messages } = useIntl();

  function cartAddProductAction(ids, redirect) {
    dispatch(changeCart({ ids, status: true, redirect }));
    if (redirect !== true) {
      message.success(messages['local.cart_added_success']);
    }
  }
  function cartRemoveProductAction(ids) {
    dispatch(changeCart({ ids, status: false }));
  }
  function cartChangeProductAction(payload) {
    dispatch(cartChangeProduct({ ...payload }));

    clearTimeout(timersId[payload.id]);
    timersId[payload.id] = (setTimeout(() => {
      const { id, changes: { count } } = payload;
      dispatch(changeCart({
        ids: {
          [id]: {
            id,
            count,
            status: true,
          },
        },
        status: true,
      }));
    }, 400));
  }
  function resetCartReducerAction() {
    dispatch(resetCartReducer());
  }
  return {
    cartAddProductAction,
    cartChangeProductAction,
    cartRemoveProductAction,
    resetCartReducerAction,
  };
}


export default useCartActions;
