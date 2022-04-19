import React, { useState } from 'react';
import Button from 'antd/lib/button';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';
import Router from 'next/router';

const ButtonGroup = Button.Group;
const buttons = [
  {
    number: '0-1',
    value: '1',
  },
  {
    number: '1-2',
    value: '2',
  }, {
    number: '2-4',
    value: '3',
  },
  {
    number: '4-6',
    value: '4',
  }, {
    number: '6-8',
    value: '5',
  }, {
    number: '8+',
    value: '6',
  },
];

function ChooseAge({ onClick, selected }) {
  const { messages } = useIntl();

  function setSelectedItem(event) {
    const button = event.target.closest('button');
    if (!button) return;
    const { value } = button;
    if (onClick) {
      onClick(event);
    } else {
      Router.push(`/catalog?age=${value}`, 'catalog');
    }
  }
  return (
    <ButtonGroup onClick={setSelectedItem}>

      {buttons.map(({
        value, number,
      }) => (
        <Button value={value} key={value} className={value === selected ? 'selected' : ''}>
          {number}
          <p>{messages['local.years']}</p>
        </Button>
      ))}
    </ButtonGroup>
  );
}
ChooseAge.propTypes = {
  onClick: PropTypes.func,
  selected: PropTypes.string,
};

export default ChooseAge;
