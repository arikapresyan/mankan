import React from 'react';
import PropTypes from 'prop-types';


import Col from 'antd/lib/col';
import Form from 'antd/lib/form';
import Checkbox from 'antd/lib/checkbox';
import Button from 'antd/lib/button';
import Icon from 'antd/lib/icon';

import { useIntl } from 'react-intl';
import InputFieldWidthLocalState from '../../../../../common/InputFieldWidthLocalState';

function SkillsFields({
  hasPoints,
  items,
  label,
  onBlur,
  onChangePoints,
  name,
  addMorSkills,
  removeFromSkills,
  placeholder,
  addText,
  fullWidth,
}) {
  const { messages } = useIntl();
  return (
    <>
      {items.map(({ value, points, id }, index) => (
        <div key={id}>
          <Col xs={24} md={!fullWidth ? 12 : 24} style={{ clear: 'both' }}>
            <Form.Item label={label}>
              <InputFieldWidthLocalState
                defaultValue={value}
                onBlur={(event) => onBlur(index, event, name)}
                placeholder={placeholder}
              />
            </Form.Item>
            {/* {!hasPoints && index > 0 ? <button className="removeButton" type="button" onClick={() => removeFromSkills(name, index)}>remove</button> : null} */}
            {!hasPoints && index > 0 ? <Icon className="removeButton" type="delete" onClick={() => removeFromSkills(name, index)} /> : null}
          </Col>
          { hasPoints && (
          <Col xs={24} md={12}>
            <Form.Item label={messages['local.Choose_from_a_5_point']} className="assess">
              <Checkbox.Group value={[points]} onChange={(val) => onChangePoints(index, val, name)}>
                <Checkbox value="1" />
                <Checkbox value="2" />
                <Checkbox value="3" />
                <Checkbox value="4" />
                <Checkbox value="5" />
              </Checkbox.Group>
            </Form.Item>
            {/* {index > 0 ? <button className="removeButton" type="button" onClick={() => removeFromSkills(name, index)}>remove</button> : null} */}
            {index > 0 ? <Icon className="removeButton" type="delete" onClick={() => removeFromSkills(name, index)} /> : null}
          </Col>
          ) }
        </div>
      ))}

      <Col xs={24}>
        <Form.Item>
          <Button type="dashed" onClick={() => addMorSkills(name)}>
            <Icon type="plus" />
            {' '}
            {addText}
          </Button>
        </Form.Item>
      </Col>

    </>
  );
}

SkillsFields.propTypes = {
  hasPoints: PropTypes.bool,
  items: PropTypes.arrayOf(Array),
  label: PropTypes.string,
  name: PropTypes.string,
  onBlur: PropTypes.func,
  onChangePoints: PropTypes.func,
  addMorSkills: PropTypes.func,
  removeFromSkills: PropTypes.func,
  placeholder: PropTypes.string,
  addText: PropTypes.string,
  fullWidth: PropTypes.bool,
};

export default SkillsFields;
