import { useMemo, useState } from 'react';
import { useIntl } from 'react-intl';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import useGlobalAPI from '../../../hooks/useGlobalAPI';
import userAPI from '../../../API_Paths/userAPI';
import { getUserDataSuccess } from '../../../store/user/action';
import { getChangeInfoSchema } from '../../../utils/validationSchemas';


export default function usePersonalInfo({ APISendAction, user }) {
  const { messages } = useIntl();
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const validationSchema = useMemo(() => getChangeInfoSchema(messages), [messages]);

  const formik = useFormik({
    initialValues: {
      firstName: user.firstName,
      lastName: user.lastName,
      changePassMode: false,
      retryPassword: '',
      password: '',
      phone: user.phone,
      email: user.email,
    },
    validationSchema,
    onSubmit(values, { setSubmitting }) {
      const confirmMessage = values.email === user.email ? 'success' : messages['local.confirmEmail'];
      const data = { ...values };
      if (!values.password || !values.password.trim()) {
        delete data.password;
        delete data.retryPassword;
      }
      setLoading(true);
      APISendAction({
        method: 'put',
        url: userAPI.change_userInfo,
        successText: confirmMessage,
        data: {
          ...data,
        },
      });
      setSubmitting(false);
    },
  });
  const {
    setFieldValue,
    values,
    handleChange,
    handleBlur,
    handleSubmit,
    errors,
    touched,
  } = formik;
  useGlobalAPI({
    onCancel: () => setLoading(false),
    onSuccess: () => {
      // setIsChangedEmail(values.email !== user.email);
      // if (values.email !== user.email) message.success(messages['local.confirmEmail']);
      dispatch(getUserDataSuccess({
        firstName: values.firstName,
        lastName: values.lastName,
        phone: values.phone,
      }));
      setLoading(false);
    },
  });

  const openChangePass = () => {
    setFieldValue('changePassMode', !values.changePassMode);
  };


  return {
    openChangePass,
    handleChange,
    handleBlur,
    handleSubmit,
    errors,
    touched,
    messages,
    values,
    loading,
  };
}
