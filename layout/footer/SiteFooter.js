import React, { useState, useCallback, useMemo } from 'react';



import Layout from 'antd/lib/layout';
import Row from 'antd/lib/row';
import  Col from 'antd/lib/col';
// import Form from 'antd/lib/form';
// import Button from 'antd/lib/button';
// import Input from 'antd/lib/input';
import Menu from 'antd/lib/menu';
import Icon from 'antd/lib/icon';
import Tooltip from 'antd/lib/tooltip';
import Link from 'next/link';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';
import { useFormik } from 'formik';
import userAPI from '../../API_Paths/userAPI';


import { toggleVisibility } from '../../store/userEventListeners/action';
import { APISend } from '../../store/global-APIS/action';
import useGlobalAPI from '../../hooks/useGlobalAPI';
import { getEmailSchema } from '../../utils/validationSchemas';
import { getFooterContent, getPaymentMethods } from '../../constants/footerConstants';

const InfoIcon = '/images/icons/info.png';
const { Footer } = Layout;

function SiteFooter({ toggleVisibilityAction, APISendAction }) {
  const { messages } = useIntl();
  const [loading, setLoading] = useState(false);

  const validationSchema = useMemo(() => getEmailSchema(messages), [messages]);

  const formik = useFormik({
    initialValues: {
      email: '',
    },
    onSubmit: (values) => {
      setLoading(true);
      APISendAction({
        method: 'post',
        url: userAPI.subscribe,
        data: values,
        successText: messages['locale.thanks_follow'],
        errorText: messages['local.errorText'],
      });
    },
    validationSchema,
  });
  const onSuccess = useCallback(
    () => {
      formik.resetForm();
      setLoading(false);
    },
    [formik.resetForm, setLoading],
  );
  const setLoadingFalse = useCallback(
    () => {
      setLoading(false);
    },
    [setLoading],
  );


  const {
    values,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    errors,
  } = formik;

  useGlobalAPI({
    onCancel: setLoadingFalse,
    onSuccess,
  });
  const setSuggestionVisible = () => {
    toggleVisibilityAction({ name: 'suggestionVisible' });
  };

  const setCallbackVisible = () => {
    toggleVisibilityAction({ name: 'callbackVisible' });
  };


  const footerMenu = getFooterContent(messages, {
    openFidBackModal: setCallbackVisible,
    openSuggestionsModal: setSuggestionVisible,
  });
  const paymentMethods = getPaymentMethods(messages);
  return (
    <Footer>
      <div className="footer_mobile">
        <Menu>
          {footerMenu.map(({
            link, text, handleClick, icon,
          }, index) => (
            <Menu.Item onClick={handleClick} key={`menuMobile${index}`}>
              {
                link ? (
                  <Link href={link}>
                    <a>
                      <img src={icon} alt="" className="menu_icon" />
                      {text}
                      <Icon type="right" />
                    </a>
                  </Link>
                ) : (
                  <>
                    <img src={icon} alt="" className="menu_icon" />
                    {text}
                    <Icon type="right" />
                  </>
                )

              }
            </Menu.Item>
          ))}

        </Menu>
      </div>
      <div className="footer_top">
        <div className="container">
          <Row gutter={30}>
            <Col xs={12} sm={12} md={12} lg={5} xl={5}>
              <div className="footer_info branches">
                <h3>{messages['local.our_addresses']}</h3>
                <ul className="address_list footer_menu">
                  <li>
                    <Link href="/shops">
                      <a>
                        {`${messages['local.ulnetsi']} `}
                      </a>
                    </Link>

                  </li>
                  <li>
                    <Link href="/shops">
                      <a>
                        {`${messages['local.mashtots']} `}
                      </a>
                    </Link>

                  </li>
                  <li>
                    <Link href="/shops">
                      <a>
                        {`${messages['local.abovyans']} `}
                      </a>
                    </Link>

                  </li>
                  <li>
                    <Link href="/shops">
                      <a>
                        {`${messages['local.dalma']} `}
                        {/* {` ${messages['local.kiosk']}`} */}
                      </a>
                    </Link>

                  </li>
                </ul>
              </div>
            </Col>
            <Col xs={12} sm={12} md={12} lg={5} xl={5}>
              <div className="footer_info information">
                <h3>{messages['local.information']}</h3>
                <ul className="footer_menu">

                  {footerMenu.map(({ link, text, handleClick }, index) => (
                    <li key={`footerMenu${index}`}>
                      {
                        link ? (
                          <Link href={link}>
                            <a>{text}</a>
                          </Link>
                        ) : (
                          <span onClick={handleClick}>
                            {text}
                            {' '}
                          </span>
                        )
                      }
                    </li>
                  ))}

                </ul>
              </div>
            </Col>
            <Col xs={12} sm={12} md={12} lg={5} xl={5}>
              <div className="footer_info information">
                <h3>{messages['local.payment-methods']}</h3>
                <ul className="footer_menu">

                  {paymentMethods.map((text, index) => (
                    <li key={`paymentMethods${index}`}>

                      {index + 1 === paymentMethods.length ? (
                        <>
                          <span>
                            <Link href="/bonus-promo-code">
                              <a>
                                {text}
                              </a>
                            </Link>
                          </span>
                          <div className="bonus_quantity">
                            <Tooltip
                              placement="bottom"
                              title={messages['local.can_use_bonus_if']}
                              className="info_tooltip"
                            >
                              <span>
                                <img src={InfoIcon} alt="" />
                              </span>
                            </Tooltip>
                          </div>
                        </>
                      ) : (
                        <span>
                          {text}
                        </span>
                      )}
                    </li>
                  ))}

                </ul>
              </div>
            </Col>
            <Col xs={24} sm={24} md={12} lg={9} xl={9}>
              <div className="footer_info subscribe">
                {/* <h3>{messages['local.sign_up_get_updates']}</h3> */}
                {/* <Form className="subscribe_form" onSubmit={handleSubmit}>
                  <Form.Item
                    validateStatus={errors.email && touched.email && 'error'}
                    help={touched.email && errors.email}
                  >
                    <Input
                      onBlur={handleBlur}
                      onChange={handleChange}
                      name="email"
                      value={values.email}
                      disabled={!!loading}
                      addonAfter={(
                        <Button type="primary" htmlType="submit">
                          {messages['local.register']}
                        </Button>
                      )}
                      placeholder={messages['local.email']}
                    />
                  </Form.Item>
                </Form> */}
                <div className="contact_phone">
                  <a href="tel:+37499530311">+374 99 530 311</a>
                </div>
                <div className="working_days">
                  {messages['local.mon_fri']}
                  {' '}
                  10։00-18։00
                </div>
                <div className="social_networks">
                  <ul className="social_link_list">
                    <li>
                      <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/mankantoys/">
                        <i className="fa fa-facebook" aria-hidden="true" />
                      </a>
                    </li>
                    <li>
                      <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/mankantoys/">
                        <i className="fa fa-instagram" aria-hidden="true" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
      <div className="footer_bottom">
        <div className="container">
          <div className="copyright">
            © Mankan LLC All rights reserved 1992-2020
          </div>
          <div className="created_by">
            <a target="blank" href="https://twelve.company">Twelve development company</a>
          </div>
        </div>
      </div>
    </Footer>
  );
}

SiteFooter.propTypes = {
  toggleVisibilityAction: PropTypes.func,
  APISendAction: PropTypes.func.isRequired,
};

export default connect(null, {
  toggleVisibilityAction: toggleVisibility,
  APISendAction: APISend,
})(SiteFooter);
