import React from 'react';
import { Checkbox, Divider } from 'antd';

const ApplyToAllComponent = ({
  checkAll,
  indeterminate,
  onCheckAllChange,
  applyToSpecificItems
}) => {
  return (
    <>
      <Checkbox indeterminate={indeterminate} onChange={onCheckAllChange} checked={checkAll}>
        Apply to all items in collection
      </Checkbox>
      <br />
      <Checkbox checked={applyToSpecificItems}>Apply to specific items</Checkbox>
      <Divider />
    </>
  );
};

export default ApplyToAllComponent;
