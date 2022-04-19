import React from 'react';

import Form from 'antd/lib/form';
import Input from 'antd/lib/input';
import Button from 'antd/lib/button';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { APISend } from '../../../store/global-APIS/action';
import usePersonalInfo from './usePersonalInfo';


function PersonalInfo({ user, APISendAction }) {
  const {
    openChangePass,
    handleChange,
    handleBlur,
    handleSubmit,
    errors,
    touched,
    messages,
    values,
    loading,
  } = usePersonalInfo({ APISendAction, user });
  return (
    <div className="personal_info_form">
      <Form onSubmit={handleSubmit}>
        <Form.Item
          validateStatus={errors.firstName && touched.firstName && 'error'}
          help={touched.firstName && errors.firstName}
        >
          <Input
            placeholder={`${messages['local.name']} *`}
            name="firstName"
            onChange={handleChange}
            onBlur={handleBlur}
            defaultValue={`${values.firstName}`}
          />
        </Form.Item>
        <Form.Item
          validateStatus={errors.lastName && touched.lastName && 'error'}
          help={touched.lastName && errors.lastName}
        >
          <Input
            placeholder={`${messages['local.last_name']} *`}
            name="lastName"
            onChange={handleChange}
            onBlur={handleBlur}
            defaultValue={`${values.lastName}`}
          />
        </Form.Item>
        <Form.Item
          validateStatus={errors.email && touched.email && 'error'}
          help={touched.email && errors.email}
        >
          <Input
            placeholder={`${messages['local.email']} *`}
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            defaultValue={`${values.email}`}
          />
        </Form.Item>
        <Form.Item
          validateStatus={errors.phone && touched.phone && 'error'}
          help={touched.phone && errors.phone}
        >
          <Input
            placeholder={`${messages['local.tel']} *`}
            name="phone"
            onChange={handleChange}
            onBlur={handleBlur}
            defaultValue={`${values.phone}`}
          />
        </Form.Item>
        <Button type="link" className="change_pass" onClick={openChangePass}>
          {messages['local.change_password']}
        </Button>
        {
         values.changePassMode && (
         <div>
           <Form.Item
             validateStatus={errors.password && touched.password && 'error'}
             help={touched.password && errors.password}
           >
             <Input
               placeholder={`${messages['local.password']} *`}
               type="password"
               name="password"
               onChange={handleChange}
               onBlur={handleBlur}
               defaultValue={`${values.password}`}
             />
           </Form.Item>
           <Form.Item
             validateStatus={errors.retryPassword && touched.retryPassword && 'error'}
             help={touched.retryPassword && errors.retryPassword}
           >
             <Input
               placeholder={messages['local.repeat_password']}
               type="password"
               name="retryPassword"
               onChange={handleChange}
               onBlur={handleBlur}
               defaultValue={`${values.retryPassword}`}
             />
           </Form.Item>
         </div>
         )
        }
        <Form.Item>
          <Button
            disabled={loading}
            htmlType="submit"
            className="confirm_changes"
          >
            {messages['local.confirm_changes']}
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
PersonalInfo.propTypes = {
  user: PropTypes.object,
  APISendAction: PropTypes.func.isRequired,
};

function mapStateToProps({ user }) {
  return {
    user,
  };
}
export default connect(mapStateToProps, { APISendAction: APISend })(PersonalInfo);
