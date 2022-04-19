import { useEffect, useMemo } from 'react';
import { useIntl } from 'react-intl';
import { useFormik } from 'formik';
import { getRegistrationSchema } from '../../../utils/validationSchemas';


export default function useRegistration({
  registrationAction,
  hideAllAction,
  authSuccess,
  errorText,
}) {
  const { messages, formatMessage } = useIntl();
  const validationSchema = useMemo(() => getRegistrationSchema(messages), [messages]);

  const formik = useFormik({
    initialValues: {
      name: '',
      surname: '',
      email: '',
      phone: '',
      password: '',
      repeatPassword: '',
      agreeTerms: false,
    },
    onSubmit: (values) => {
      registrationAction({ ...values, successText: messages['locale.confirm_email'] });
    },
    validationSchema,
  });

  useEffect(() => {
    if (authSuccess) {
      hideAllAction();
    }
  }, [authSuccess]);

  useEffect(() => {
    if (errorText) {
      if (errorText.includes('email')) {
        formik.setErrors({ email: messages['local.email_already_exist'] });
      } else formik.setErrors({ globalError: errorText });
    }
  }, [errorText]);

  return { formik, messages, formatMessage };
}
