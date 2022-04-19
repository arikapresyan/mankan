import React, { useMemo } from 'react';


import Form from 'antd/lib/form';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import Button from 'antd/lib/button';
import Divider from 'antd/lib/divider';
import message from 'antd/lib/message';

import { useIntl } from 'react-intl';
import nextId from 'react-id-generator';
import PropTypes from 'prop-types';
import InputFieldWidthLocalState from '../../../common/InputFieldWidthLocalState';
import useApplyOnlineForm from './useApplyOnlineForm';
import SkillsFields from './components/skills-fields/SkillsFields';
import Experience from './components/experiance/Experience';
import ImageUpload from '../../../vacancy/components/ImageUpload';
import { initialEducationObj } from './constants';

function ApplyOnlineForm({ handleClose, id }) {
  const { messages } = useIntl();
  const { changeField, formik, loading } = useApplyOnlineForm(handleClose, id);
  const {
    setFieldTouched,
    setFieldValue,
    handleSubmit,
    touched,
    values,
    errors,
    isValid,
    submitCount,

  } = formik;
  const educationFields = useMemo(() => (
    [
      {
        title: `${messages['local.degree_of_education']} *`,
        placeholder: messages['local.ex.bachelor'],
        name: 'degreeOfEducation',
      },
      {
        title: messages['local.educational_complex'],
        placeholder: messages['local.ex.YSU'],
        name: 'educationalComplex',
      },
      {
        title: messages['local.faculty'],
        placeholder: messages['local.ex.economics'],
        name: 'faculty',
      },
    ]
  ), [messages]);
  const professionalExperience = useMemo(() => ([
    {
      title: messages['local.company'],
      placeholder: messages['local.ex․Mankan'],
      name: 'company',
    },
    {
      title: messages['local.position'],
      placeholder: messages['local.ex․cashier'],
      name: 'position',

    },
  ]), [messages]);

  const setSkillValue = (index, event, name) => {
    setFieldValue(`${name}[${index}].value`, event.target.value);
  };
  const setSkillPoints = (index, val, name) => {
    setFieldValue(`${name}[${index}].points`, val[val.length - 1]);
  };
  const addMorSkills = (name) => {
    const cloneValues = [...values[name]];
    cloneValues.push({ name: '', points: null, id: nextId() });
    setFieldValue(name, cloneValues);
  };
  const removeFromSkills = (name, index) => {
    const cloneValues = [...values[name]];
    cloneValues.splice(index, 1);
    setFieldValue(name, cloneValues);
  };


  const changeSubFormValue = (value, formName, name, index) => {
    setFieldValue(`${formName}[${index}]${name}`, value);
    setTimeout(() => {
      setFieldTouched(`${formName}[${index}]${name}`, true);
    }, 0);
  };
  const addSubForm = (formName) => {
    const cloneSubForm = [...values[formName]];
    cloneSubForm.push({ id: nextId(), ...(formName === 'education' ? { ...initialEducationObj } : {}) });
    setFieldValue(formName, cloneSubForm);
  };

  const removeSubForm = (formName, index) => {
    const cloneValues = [...values[formName]];
    cloneValues.splice(index, 1);
    setFieldValue(formName, cloneValues);
  };

  const handleUploadChange = (info) => {
    const isJpgOrPng = info.file.type === 'image/jpeg' || info.file.type === 'image/png';
    if (!isJpgOrPng) {
      message.error('You can only upload JPG/PNG file!');
    } else setFieldValue('imgList', [...info.fileList]);
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
      setFieldValue('imgList', []);
    }
  };
  return (
    <Form onSubmit={handleSubmit}>
      <div className="form_info_box">
        <Row gutter={32}>

          <ImageUpload
            onChange={handleUploadChange}
            listType="picture"
            name="imgList"
            fileList={values.imgList}
            error={touched.imgList && errors.imgList}
          />

          <Col xs={24}>
            <Form.Item
              label={`${messages['local.name_surname']} *`}
              validateStatus={errors.fullName && touched.fullName && 'error'}
              help={touched.fullName && errors.fullName}
            >
              <InputFieldWidthLocalState
                placeholder={messages['local.not_listed']}
                name="fullName"
                defaultValue={values.fullName}
                type="text"
                onBlur={changeField}
              />
            </Form.Item>
          </Col>

          <Col xs={24}>
            <Form.Item
              label={`${messages['local.tel']} *`}
              validateStatus={errors.phone && touched.phone && 'error'}
              help={touched.phone && errors.phone}
            >
              <InputFieldWidthLocalState
                placeholder={messages['local.not_listed']}
                name="phone"
                defaultValue={values.phone}
                type="text"
                onBlur={changeField}
              />
            </Form.Item>
          </Col>
          <Col xs={24}>
            <Form.Item
              label={`${messages['local.email']}*`}
              validateStatus={errors.email && touched.email && 'error'}
              help={touched.email && errors.email}
            >
              <InputFieldWidthLocalState
                placeholder={messages['local.not_listed']}
                name="email"
                defaultValue={values.email}
                type="email"
                onBlur={changeField}
              />
            </Form.Item>
          </Col>
          <SkillsFields
            name="languages"
            hasPoints={true}
            items={values.languages}
            label={messages['local.knowledge_of_languages']}
            onBlur={setSkillValue}
            onChangePoints={setSkillPoints}
            addMorSkills={addMorSkills}
            removeFromSkills={removeFromSkills}
            addText={messages['local.add_another_language']}
            placeholder={messages['local.Armenian']}
          />
        </Row>
      </div>
      <Divider />
      <div className="form_info_box">
        <h3>{messages['local.education']}</h3>
        <Row gutter={32}>
          <Experience
            formName="education"
            fields={educationFields}
            inProcessText={messages['local.still_learning']}
            addText={messages['local.add_another_educational_complex']}
            data={values.education}
            changeValue={changeSubFormValue}
            addSubForm={addSubForm}
            removeSubForm={removeSubForm}
            errors={errors.education || []}
            touched={touched.education || []}
          />
        </Row>
      </div>
      <Divider />
      <div className="form_info_box">
        <h3>{messages['local.professional_experience']}</h3>
        <Row gutter={32}>
          <Experience
            formName="professionalExperience"
            fields={professionalExperience}
            inProcessText={messages['local.still_working']}
            addText={messages['local.add_other_business_exp']}
            data={values.professionalExperience}
            changeValue={changeSubFormValue}
            addSubForm={addSubForm}
            removeSubForm={removeSubForm}
            errors={errors.professionalExperience || []}
            touched={touched.professionalExperience || []}
          />
        </Row>
      </div>
      <Divider />
      <div className="form_info_box">
        <h3>{messages['local.software_skills']}</h3>
        <Row gutter={32}>
          <SkillsFields
            name="softwareSkills"
            hasPoints={true}
            items={values.softwareSkills}
            label={messages['local.project_name']}
            onBlur={setSkillValue}
            onChangePoints={setSkillPoints}
            addMorSkills={addMorSkills}
            removeFromSkills={removeFromSkills}
            placeholder={messages['local.ex.word']}
            addText={messages['local.add_another_social']}
          />
        </Row>
      </div>
      <Divider />
      <div className="form_info_box">
        <h3>{messages['local.preferences']}</h3>
        <Row gutter={32}>

          <SkillsFields
            name="favorite"
            hasPoints={false}
            items={values.favorite}
            label={messages['local.project_name']}
            onBlur={setSkillValue}
            onChangePoints={setSkillPoints}
            addMorSkills={addMorSkills}
            removeFromSkills={removeFromSkills}
            placeholder={messages['local.ex.reading']}
            addText={messages['local.add_another_favorite']}
          />
        </Row>
      </div>
      <Divider />
      <div className="form_info_box">
        <h3>{messages['local.social_networks']}</h3>
        <Row gutter={32}>


          <SkillsFields
            name="socialNetwork"
            hasPoints={false}
            fullWidth={true}
            items={values.socialNetwork}
            label={messages['local.project_name']}
            onBlur={setSkillValue}
            onChangePoints={setSkillPoints}
            addMorSkills={addMorSkills}
            removeFromSkills={removeFromSkills}
            placeholder={messages['local.ex․facebook']}
            addText={messages['local.add_another_social']}
          />
        </Row>
      </div>
      <Divider />
      <div className="form_info_box">
        <Row gutter={32}>
          <Col xs={24}>
            <Form.Item label={messages['local.expect_from_our_team']}>

              <InputFieldWidthLocalState
                placeholder={messages['locaol.write_a_review']}
                name="description1"
                defaultValue={values.description1}
                type="description1"
                onBlur={changeField}
              />
            </Form.Item>
          </Col>
          <Col xs={24}>
            <Form.Item label={messages['local.future_position']}>
              <InputFieldWidthLocalState
                placeholder={messages['locaol.write_a_review']}
                name="description2"
                defaultValue={values.description2}
                type="description2"
                onBlur={changeField}
              />
            </Form.Item>
          </Col>
        </Row>
      </div>
      <Form.Item>
        {submitCount > 0 && !isValid && messages['local.errorText']}
        <Button type="primary" htmlType="submit" disabled={loading} className="send_btn">
          {messages['local.send']}
        </Button>
      </Form.Item>
    </Form>
  );
}


ApplyOnlineForm.propTypes = {
  handleClose: PropTypes.func.isRequired,
  id: PropTypes.any,
};
export default ApplyOnlineForm;
