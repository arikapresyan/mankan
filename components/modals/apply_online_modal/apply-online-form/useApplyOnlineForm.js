import { useCallback, useMemo, useState } from 'react';
import { useFormik } from 'formik';
import nextId from 'react-id-generator';
import { useDispatch } from 'react-redux';
import { useIntl } from 'react-intl';
import { getValidationSchema, formatDateFromValues, initialEducationObj } from './constants';
import useGlobalAPI from '../../../../hooks/useGlobalAPI';
import { APISend } from '../../../../store/global-APIS/action';

import userAPI from '../../../../API_Paths/userAPI';

function useApplyOnlineForm(handleClose, id) {
  const dispatch = useDispatch();
  const { messages } = useIntl();
  const [loading, setLoading] = useState(false);
  useGlobalAPI({
    onCancel: () => {
      setLoading(false);
    },
    onSuccess: handleClose,
  });

  const validationSchema = useMemo(() => getValidationSchema(messages), [messages]);

  const formik = useFormik({
    initialValues: {
      fullName: '',
      phone: '',
      email: '',
      languages: [
        {
          value: '',
          points: null,
          id: nextId(),
        },
      ],
      softwareSkills: [{ id: nextId() }],
      favorite: [{ id: nextId() }],
      socialNetwork: [{ id: nextId() }],
      education: [{ id: nextId(), ...initialEducationObj }],
      professionalExperience: [{ id: nextId() }],
      imgList: [],
      description1: '',
      description2: '',

    },
    validationSchema,
    onSubmit(values) {
      const { image, ...rest } = formatDateFromValues(values);
      rest.id = id;
      const FD = new FormData();
      FD.set('image', image);
      FD.set('data', JSON.stringify(rest));
      setLoading(true);
      dispatch(APISend({
        method: 'post',
        url: userAPI.vacancy,
        data: FD,
      }));
    },
  });
  const changeField = useCallback(
    ({ target: { value, name } }) => {
      formik.setFieldValue(name, value);
      setTimeout(() => {
        formik.setFieldTouched(name, true);
      }, 0);
    },
    [],
  );
  return ({ formik, changeField, loading });
}


export default useApplyOnlineForm;
