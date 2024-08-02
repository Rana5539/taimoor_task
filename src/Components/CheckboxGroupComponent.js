import React from 'react';
import { Checkbox } from 'antd';

const CheckboxGroupComponent = ({ options, checkedList, onChange, disableAll }) => {
  return (
    <Checkbox.Group
      style={{ flexDirection: 'column', marginLeft: '15px', marginTop: 6 }}
      options={options.map(option => ({
        label: option,
        value: option,
        disabled: disableAll
      }))}
      value={checkedList}
      onChange={onChange}
    />
  );
};

export default CheckboxGroupComponent;
