import { useFormik } from 'formik';
import { useSelector, useDispatch } from 'react-redux';
import {
  useCallback, useEffect, useMemo, useState,
} from 'react';
import { useIntl } from 'react-intl';
import message from 'antd/lib/message';
import { selectUser } from '../../../../store/user/reducer';
import { getSingleData } from '../../../../store/single-data/action';
import { selectSingleData } from '../../../../store/single-data/reducer';
import { getInitialValues } from './constants';
import { sendOrder } from '../../../../store/cart/action';
import { getOrderSchema } from '../../../../utils/validationSchemas';
import { getBonus } from '../../../../constants/utils';
import useCartPrices from '../../../../hooks/useCartPrices';


export default function useConfirmOrder(handleHideModal, data) {
  const { messages } = useIntl();
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const { paymentDelivery: singleData } = useSelector(selectSingleData);

  const orderStatus = useSelector(({ cart }) => cart.order);
  const initialValues = useMemo(() => getInitialValues(user), []);
  const sendOrderAction = useCallback((payload) => {
    dispatch(sendOrder(payload));
  }, []);

  const { cartData, promoCodeData, bonusPercent } = data;

  const {
    deliveryPrice, fullNewPrice, fullPrice, total,
  } = useCartPrices(cartData, promoCodeData);

  const bonus = useMemo(
    () => getBonus(fullNewPrice || fullPrice, bonusPercent || 2, 1),
    [bonusPercent, fullNewPrice, fullPrice],
  );

  const [dateInfo, setDateInfo] = useState([]);
  useEffect(() => {
    dispatch(
      getSingleData({
        data: { name: 'paymentDelivery' },
      }),
    );
  }, [getSingleData, dispatch]);

  useEffect(() => {
    if (singleData.data && !dateInfo.length) {
      setDateInfo(singleData.data);
    }
  }, [singleData]);

  const validationSchema = useMemo(() => getOrderSchema(messages), [messages]);

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit(values) {
      if (values.method === 3 && user.bonus < total) {
        message.warning(messages['local.not_enough_bonus']);
        return;
      }
      const messageTexts = { errorText: messages['local.errorText'], successText: messages['local.successText'] };
      sendOrderAction({ values, messageTexts, promo: promoCodeData?.code });
    },
  });
  useEffect(() => {
    if (!orderStatus.loading && !orderStatus.error && formik.isSubmitting) handleHideModal();
  }, [orderStatus]);


  return {
    formik,
    dateInfo,
    loading: orderStatus.loading,
    other: {
      bonus,
      total,
      deliveryPrice,
      fullNewPrice,
      fullPrice,
    },
  };
}
