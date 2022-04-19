import React from 'react';
import { useIntl } from 'react-intl';

function PaymentDeliveryReturnInfo() {
  const { messages } = useIntl();

  return (
    <div className="payment_delivery_info_container">
      <div className="container">
        <div className="payment_delivery_info">
          <h3>{messages['local.payment']}</h3>
          <div className="info_text">
            {messages['local.payment-delivery-return'].payment
              .paragraphs
              .map((text, index) => <p key={`${index}p`}>{text}</p>)}
            <ul>
              {messages['local.payment-delivery-return'].payment
                .listItems
                .map((text, index) => <li key={`${index}pli`}>{text}</li>)}

            </ul>
          </div>
        </div>
        <div className="payment_delivery_info">
          <h3>
            {' '}
            {messages['local.delivery_price']}
          </h3>
          <div className="info_text">
            <div className="info_text">
              {messages['local.payment-delivery-return']
                .delivery
                .paragraphs
                .map((text, index) => <p key={`${index}d`}>{text}</p>)}
              <ul>
                {messages['local.payment-delivery-return']
                  .delivery
                  .listItems
                  .map((text, index) => <li key={`${index}dli`}>{text}</li>)}

              </ul>
            </div>
          </div>
        </div>
        <div className="payment_delivery_info">
          <h3>{messages['local.return']}</h3>
          <div className="info_text">
            <div className="info_text">
              {messages['local.payment-delivery-return']
                .Return
                .paragraphs
                .map((text, index) => <p key={`${index}r`}>{text}</p>)}
              <ul>
                {messages['local.payment-delivery-return']
                  .Return
                  .listItems
                  .map((text, index) => <li key={`${index}rli`}>{text}</li>)}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentDeliveryReturnInfo;
