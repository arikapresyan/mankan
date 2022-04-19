import * as Yup from 'yup';
import { regex } from '../constants/utils';

export const getEmailSchema = (msg) => Yup.object().shape({
  email: Yup.string()
    .required(msg['local.enter_your_email'])
    .test('str', msg['local.invalid_email'], (value) => regex.email.test(value)),
});

export const getLoginSchema = (msg) => Yup.object().shape({
  emailOrPhone: Yup.string()
    .required(msg['local.enter_your_email']),
  password: Yup.string()
    .required(msg['local.enter_your_password']),
});

export const getRecoverySchema = (msg) => Yup.object().shape({
  email: Yup.string()
    .required(msg['local.enter_your_email'])
    .test('str', msg['local.invalid_email'], (value) => regex.email.test(value)),
});

export const getRegistrationSchema = (msg) => Yup.object().shape({
  name: Yup.string().required(msg['local.enter_your_name']).min(3, msg['local.invalid_field'])
    .test('str', msg['local.invalid_field'], (value) => regex.name.test(value)),
  surname: Yup.string().required(msg['local.enter_your_surname']).min(3, msg['local.invalid_field'])
    .test('str', msg['local.invalid_field'], (value) => regex.name.test(value)),
  phone: Yup.string().required(msg['local.enter_your_number'])
    .test('phone', msg['local.invalid_field'], (value) => (
      regex.phone.test(value)
    )).min(9, msg['local.invalid_field'])
    .max(12, msg['local.invalid_field']),
  email: Yup.string()
    .required(msg['local.enter_your_email'])
    .test('str', msg['local.invalid_email'], (value) => regex.email.test(value)),
  password: Yup.string()
    .required(msg['local.enter_your_password'])
    .min(6, msg['local.password_min_length']),
  repeatPassword: Yup.string().required(msg['local.repeat_password'])
    .oneOf([Yup.ref('password'), null], msg['local.passwords_must_match']),
  agreeTerms: Yup.boolean().oneOf([true], msg['local.must_accept_terms_and_conditions']),
});


export const getFeedbackSchema = (msg) => (Yup.object().shape({
  phone: Yup.string().required(msg['local.enter_your_number'])
    .test('phone', msg['local.invalid_field'], (value) => (
      regex.phone.test(value)
    ))
    .min(9, msg['local.invalid_field'])
    .max(12, msg['local.invalid_field']),
  email: Yup.string()
    .required(msg['local.enter_your_email'])
    .test('str', msg['local.invalid_email'], (value) => regex.email.test(value)),
  fullName: Yup.string().required(msg['local.enter_your_fullname'])
    .trim()
    .test('str', msg['local.invalid_field'], (value) => !regex.string.test(value)),
  message: Yup.string().required(msg['local.required']).trim(),
}));

export const getSuggestionSchema = (msg, type) => (
  // type: 'Offer' || 'Complaint'
  Yup.object().shape({
    email: Yup.string()
      .required(msg['local.enter_your_email'])
      .test('str', msg['local.invalid_email'], (value) => regex.email.test(value)),
    [type]: Yup.string().required(msg['local.required']).trim(),
  }));

export const getOrderSchema = (msg) => (Yup.object().shape({
  firstName: Yup.string().required(msg['local.enter_your_name']).min(3, msg['local.invalid_field'])
    .test('str', msg['local.invalid_field'], (value) => regex.name.test(value)),
  lastName: Yup.string().required(msg['local.enter_your_surname']).min(3, msg['local.invalid_field'])
    .test('str', msg['local.invalid_field'], (value) => regex.name.test(value)),
  phone: Yup.string().required(msg['local.enter_your_number'])
    .test('phone', msg['local.invalid_field'], (value) => (
      regex.phone.test(value)
    ))
    .min(9, msg['local.invalid_field'])
    .max(12, msg['local.invalid_field']),
  email: Yup.string()
    .required(msg['local.enter_your_email'])
    .test('str', msg['local.invalid_email'], (value) => regex.email.test(value)),
  street: Yup.string().required(msg['local.required']).min(3, msg['local.invalid_field']).trim(),
  house: Yup.string().required(msg['local.required']).trim(),
  entry: Yup.string().trim(),
  deliveryPeriodString: Yup.string().required(msg['local.required']).trim(),
}));

export const getNewPasswordSchema = (msg) => Yup.object().shape({
  password: Yup.string()
    .required(msg['local.enter_your_password'])
    .min(6, msg['local.password_min_length']),
  retryPassword: Yup.string().required(msg['local.repeat_password'])
    .oneOf([Yup.ref('password'), null], msg['local.passwords_must_match']),
});


export const getChangeInfoSchema = (msg) => Yup.object().shape({
  firstName: Yup.string().required(msg['local.enter_your_name']).min(3, msg['local.invalid_field'])
    .test('str', msg['local.invalid_field'], (value) => regex.name.test(value)),
  lastName: Yup.string().required(msg['local.enter_your_surname']).min(3, msg['local.invalid_field'])
    .test('str', msg['local.invalid_field'], (value) => regex.name.test(value)),
  phone: Yup.string().required(msg['local.enter_your_number'])
    .test('phone', msg['local.invalid_field'], (value) => (
      regex.phone.test(value)
    )).min(9, msg['local.invalid_field'])
    .max(12, msg['local.invalid_field']),
  email: Yup.string()
    .required(msg['local.enter_your_email'])
    .test('str', msg['local.invalid_email'], (value) => regex.email.test(value)),
  changePassMode: Yup.bool(),
  password: Yup.string()
    .min(6, msg['local.password_min_length'])
    .test('changePassMode', msg['local.enter_your_password'], function (value) {
      if (this.parent.changePassMode) {
        if ((!value || !value.trim())) {
          return false;
        }
      }
      return true;
    }),
  retryPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], msg['local.passwords_must_match'])
    .test('changePassMode', msg['local.repeat_password'], function (value) {
      if (this.parent.changePassMode) {
        if ((!value || !value.trim())) {
          return false;
        }
      }
      return true;
    }),
});
