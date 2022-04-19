import React from 'react';
import PropTypes from 'prop-types';



import Form from 'antd/lib/form';
import Col from 'antd/lib/col';
import DatePicker from 'antd/lib/date-picker';
import Checkbox from 'antd/lib/checkbox';
import Button from 'antd/lib/button';
import Icon from 'antd/lib/icon';
import { useIntl } from 'react-intl';
import InputFieldWidthLocalState from '../../../../../common/InputFieldWidthLocalState';

function Experience({
  fields,
  changeValue,
  inProcessText,
  addText,
  formName,
  data,
  addSubForm,
  removeSubForm,
  errors,
  touched,
}) {
  const { messages } = useIntl();


  return (
    <>
      {
        data.map((dataItem, index) => (
          <div key={`${dataItem.id}experience`}>
            {fields.map(({ title, placeholder, name }, childeIndex) => (
              <Col xs={24} key={`${`${dataItem.id}experience`}${childeIndex}`}>
                <Form.Item
                  label={title}
                  validateStatus={touched && touched[index] && touched[index][name]
                  && errors && errors[index] && errors[index][name] && 'error'}
                  help={touched && touched[index] && touched[index][name]
                  && errors && errors[index] && errors[index][name]}
                >
                  <InputFieldWidthLocalState
                    placeholder={placeholder}
                    name={name}
                    onBlur={({ target: { value } }) => changeValue(value, formName, name, index)}
                    defaultValue={dataItem[name]}
                  />
                  {/* {touched && touched[index] && touched[index][name] */}
                  {/* && errors && errors[index] && errors[index][name]} */}
                </Form.Item>
              </Col>
            ))}
            <Col xs={24} md={12}>
              <Form.Item
                label={messages['local.startpoint']}
                validateStatus={touched && touched[index] && touched[index].startDate
                && errors && errors[index] && errors[index].startDate && 'error'}
                help={touched && touched[index] && touched[index].startDate
                && errors && errors[index] && errors[index].startDate}
              >
                <DatePicker
                  value={dataItem.startDate || undefined}
                  onChange={(value) => changeValue(value, formName, 'startDate', index)}
                />
                {/* {touched && touched[index] && touched[index].startDate */}
                {/*  && errors && errors[index] && errors[index].startDate} */}
              </Form.Item>
            </Col>

            <Col xs={24} md={12}>
              {!dataItem.stillInProcess
                ? (
                  <Form.Item
                    label={messages['local.endpoint']}
                    validateStatus={touched && touched[index] && touched[index].endDate
                    && errors && errors[index] && errors[index].endDate && 'error'}
                    help={touched && touched[index] && touched[index].endDate
                    && errors && errors[index] && errors[index].endDate}
                  >
                    <DatePicker
                      onChange={(value) => changeValue(value, formName, 'endDate', index)}
                      value={dataItem.endDate || undefined}
                    />
                    {/*  {touched && touched[index] && touched[index].endDate */}
                    {/* && errors && errors[index] && errors[index].endDate} */}
                  </Form.Item>
                )
                : null}
            </Col>


            <Col xs={24}>
              <Form.Item>
                <Checkbox
                  onChange={({ target: { checked } }) => changeValue(checked, formName, 'stillInProcess', index)}
                  checked={!!dataItem.stillInProcess}
                >
                  {inProcessText}
                </Checkbox>
              </Form.Item>
              {index > 0 && (
                // <button
                //   className="removeButton "
                //   type="button"
                //   onClick={() => removeSubForm(formName, index)}
                // >
                //   remove
                // </button>
                <Icon className="removeButton" type="delete" onClick={() => removeSubForm(formName, index)} />
              )}
            </Col>

          </div>
        ))
      }
      <Col xs={24}>
        <Form.Item>
          <Button
            type="dashed"
            onClick={() => addSubForm(formName)}
          >
            <Icon type="plus" />
            {' '}
            {addText}
          </Button>
        </Form.Item>
      </Col>
    </>

  );
}

Experience.propTypes = {
  fields: PropTypes.arrayOf(Array).isRequired,
  changeValue: PropTypes.func.isRequired,
  inProcessText: PropTypes.string,
  addText: PropTypes.string,
  data: PropTypes.arrayOf(Array).isRequired,
  addSubForm: PropTypes.func.isRequired,
  removeSubForm: PropTypes.func.isRequired,
  formName: PropTypes.string.isRequired,
  errors: PropTypes.arrayOf(Array).isRequired,
  touched: PropTypes.arrayOf(Array).isRequired,


};

export default Experience;
