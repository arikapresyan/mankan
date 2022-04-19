import * as Yup from 'yup';
import { regex } from '../../../../constants/utils';

function educationValidation(value) {
  const parentClone = { ...this.parent };
  delete parentClone.id;
  delete parentClone.stillInProcess;
  let isRequired;
  Object.keys(parentClone).forEach((key) => {
    if (parentClone[key]) {
      isRequired = true;
    }
  });

  if (isRequired && !value) {
    return false;
  } return true;
}

export const getValidationSchema = (msg) => (
  Yup.object().shape({
    fullName: Yup.string().required(msg['local.enter_your_fullname']).min(3, msg['local.min_3_symbols'])
      .test('str', msg['local.invalid_field'], (value) => !regex.string.test(value))
      .trim(),
    phone: Yup.string().required(msg['local.enter_your_number'])
      .test('phone', msg['local.invalid_field'], (value) => (
        regex.phone.test(value)
      )).min(6, msg['local.invalid_field']),
    email: Yup.string()
      .email(msg['local.invalid_email'])
      .required(msg['local.enter_your_email']),
    languages: Yup.array(
      Yup.object({
        value: Yup.string().min(3, msg['local.min_3_symbols']).trim(),
        point: Yup.string().min(3, msg['local.min_3_symbols']).trim(),
      }),
    ).min(1),
    softwareSkills: Yup.array(
      Yup.object({
        value: Yup.string().min(3, msg['local.min_3_symbols']).trim(),
        point: Yup.string().min(3, msg['local.min_3_symbols']).trim(),
      }),
    ).min(1),
    favorite: Yup.array(
      Yup.object({
        value: Yup.string().min(3, msg['local.min_3_symbols']).trim(),
      }),
    ).min(1),
    socialNetwork: Yup.array(
      Yup.object({
        value: Yup.string().min(3, msg['local.min_3_symbols']).trim(),
      }),
    ).min(1),
    description1: Yup.string().min(6, msg['local.password_min_length']).trim(),
    description2: Yup.string().min(6, msg['local.password_min_length']).trim(),
    education: Yup.array(
      Yup.object({
        degreeOfEducation: Yup.string().min(3, msg['local.min_3_symbols']).required(msg['local.required']).trim(),
        educationalComplex: Yup.string().min(3, msg['local.min_3_symbols']).trim().required(msg['local.required']),
        faculty: Yup.string().min(3, msg['local.min_3_symbols']).trim().required(msg['local.required']),
        startDate: Yup.object().nullable().required(msg['local.required']),
        endDate: Yup.object().nullable().test('test endDate 1', msg['local.required'], function (value) {
          if (!this.parent.stillInProcess && !value) {
            return false;
          }
          return true;
        }),
        stillInProcess: Yup.boolean(),
      }).required(),
    ).required().min(1),
    professionalExperience: Yup.array(
      Yup.object({
        company: Yup.string().min(3, msg['local.min_3_symbols']).trim().test('test company', msg['local.required'], educationValidation),
        position: Yup.string().min(3, msg['local.min_3_symbols']).trim().test('test position', msg['local.required'], educationValidation),
        startDate: Yup.object().nullable().test('test startDate', msg['local.required'], educationValidation),
        endDate: Yup.object().nullable().test('test endDate', msg['local.required'], function (value) {
          const formIsRequired = educationValidation.apply(this, value);
          if (!formIsRequired && !this.parent.stillInProcess && !value) {
            return false;
          }
          return true;
        }),
        stillInProcess: Yup.boolean(),
      }),
    ),
    imgList: Yup.array().required(msg['local.upload_img']),
  }));


export function formatDateFromValues({
  fullName: firstLastNames,
  email,
  phone,
  description1,
  description2,
  languages,
  softwareSkills,
  favorite,
  socialNetwork,
  education,
  professionalExperience,
  imgList,
}) {
  const langs = [];
  const programAbilities = [];
  const hobbies = [];
  const socialNets = [];
  const practices = [];
  const educations = [];
  languages.forEach(({ value, points }) => {
    if (points && value) langs.push({ lang: value, level: points });
  });
  softwareSkills.forEach(({ value, points }) => {
    if (points && value) programAbilities.push({ name: value, level: points });
  });
  favorite.forEach(({ value }) => {
    if (value) hobbies.push(value);
  });
  socialNetwork.forEach(({ value }) => {
    if (value) socialNets.push(value);
  });

  professionalExperience.forEach(({
    company,
    position,
    startDate,
    endDate,
    stillInProcess,
  }) => {
    if (company && position && startDate && (endDate || stillInProcess)) {
      practices.push({
        company,
        specialist: position,
        beginningDate: startDate._d.toLocaleDateString(),
        finishingDate: !stillInProcess && endDate._d.toLocaleDateString(),
        stillWorking: stillInProcess,
      });
    }
  });

  education.forEach(({
    degreeOfEducation,
    educationalComplex,
    faculty,
    startDate,
    endDate,
    stillInProcess,
  }) => {
    if (
      degreeOfEducation
        && educationalComplex
        && faculty
        && startDate && (endDate || stillInProcess)
    ) {
      educations.push({
        level: degreeOfEducation,
        university: educationalComplex,
        department: faculty,
        beginningDate: startDate._d.toLocaleDateString(),
        finishingDate: !stillInProcess && endDate._d.toLocaleDateString(),
        stillStudying: stillInProcess,
      });
    }
  });

  const requestObject = {
    firstLastNames,
    email,
    phone,
    description1,
    description2,
    langs,
    programAbilities,
    hobbies,
    socialNets,
    practices,
    educations,
    image: imgList[0] && imgList[0].originFileObj,
  };
  return requestObject;
}


export const initialEducationObj = {
  degreeOfEducation: '',
  educationalComplex: '',
  faculty: '',
  startDate: '',
  endDate: '',
  stillInProcess: '',
};
