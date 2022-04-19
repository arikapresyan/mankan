import React from 'react';
import PropTypes from 'prop-types';
import ForgotPasswordModal from '../../../../components/modals/forgot-password-modal/ForgotPasswordModal';
import SuggestionModal from '../../../../components/modals/suggestion-modal/SuggestionModal';
import LoginModal from '../../../../components/modals/login-modal/LoginModal';
import CallbackModal from '../../../../components/modals/callback-modal/CallbackModal';
import RegistrationModal from '../../../../components/modals/registration-modal/RegistrationModal';

function HeaderModals({
  handleMoveToRegistration,
  handleOnHideModal,
  forgotVisible,
  suggestionVisible,
  loginVisible,
  handleOnOpenModals,
  handleOnForgotPassword,
  hideLogin,
  setRegistrationVisible,
  callbackVisible,
  registrationVisible,
}) {
  return (
    <>
      {
          forgotVisible && (
            <ForgotPasswordModal
              visible={forgotVisible}
              handleHideModal={() => handleOnHideModal('forgotVisible')}
            />
          )
        }
      {
          suggestionVisible && (
            <SuggestionModal
              visible={suggestionVisible}
              handleHideModal={() => handleOnOpenModals('suggestionVisible')}
            />
          )
        }
      {
          loginVisible && (
            <LoginModal
              visible={loginVisible}
              handleHideModal={hideLogin}
              onForgotPassword={handleOnForgotPassword}
              onMoveToRegistration={() => handleMoveToRegistration(
                setRegistrationVisible,
              )}
            />
          )
        }
      {
          callbackVisible && (
            <CallbackModal
              visible={callbackVisible}
              handleHideModal={() => handleOnOpenModals('callbackVisible')}
            />
          )
        }
      {
          registrationVisible && (
            <RegistrationModal
              visible={registrationVisible}
              handleHideModal={() => handleOnOpenModals('registrationVisible')}
            />
          )
        }
    </>
  );
}

HeaderModals.propTypes = {
  handleMoveToRegistration: PropTypes.func.isRequired,
  handleOnHideModal: PropTypes.func.isRequired,
  forgotVisible: PropTypes.bool.isRequired,
  suggestionVisible: PropTypes.bool.isRequired,
  loginVisible: PropTypes.bool.isRequired,
  handleOnOpenModals: PropTypes.func.isRequired,
  handleOnForgotPassword: PropTypes.func.isRequired,
  hideLogin: PropTypes.func.isRequired,
  setRegistrationVisible: PropTypes.func.isRequired,
  callbackVisible: PropTypes.bool.isRequired,
  registrationVisible: PropTypes.bool.isRequired,
};
export default HeaderModals;
