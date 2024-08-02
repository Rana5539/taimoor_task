import React, { useState, useEffect } from 'react';
import { Checkbox } from 'antd';
import CheckboxGroupComponent from './CheckboxGroupComponent';
import ApplyToAllComponent from './ApplyToAllComponent';

const plainOptions = ['Jasinthine bracelet', 'Jasinthe bracelet', 'Inspire bracelet'];
const opt = ['Zero amount item with questions', 'Normal item with collections', 'normal items'];

const MainComponent = () => {
  const [checkedList, setCheckedList] = useState([]);
  const [checkedOptList, setCheckedOptList] = useState([]);
  const [disableAll, setDisableAll] = useState(false);
  const [applyToSpecificItems, setApplyToSpecificItems] = useState(false);

  useEffect(() => {
    const hasCheckedItems = checkedList.length > 0 || checkedOptList.length > 0;
    setApplyToSpecificItems(hasCheckedItems);
  }, [checkedList, checkedOptList]);

  const checkAll = plainOptions.length + opt.length === checkedList.length + checkedOptList.length;
  const indeterminate = (checkedList.length > 0 && checkedList.length < plainOptions.length) || (checkedOptList.length > 0 && checkedOptList.length < opt.length);

  const onChange = (list, setList) => {
    setList(list);
  };

  const onCheckAllChange = (e) => {
    const checked = e.target.checked;
    const newList = checked ? plainOptions : [];
    const newOptList = checked ? opt : [];
    setCheckedList(newList);
    setCheckedOptList(newOptList);
    setDisableAll(checked);
  };

  const onBraceletsChange = (e) => {
    const checked = e.target.checked;
    const newList = checked ? plainOptions : [];
    setCheckedList(newList);
  };

  const onEmptyCheckboxChange = (e) => {
    const checked = e.target.checked;
    const newOptList = checked ? opt : [];
    setCheckedOptList(newOptList);
  };

  return (
    <>
      <ApplyToAllComponent
        checkAll={checkAll}
        indeterminate={indeterminate}
        onCheckAllChange={onCheckAllChange}
        applyToSpecificItems={applyToSpecificItems}
      />
      <div style={{ width: '60%', backgroundColor: 'lightgray', padding: 4 }}>
        <Checkbox indeterminate={indeterminate} onChange={onBraceletsChange} checked={plainOptions.every(item => checkedList.includes(item))}>
          Bracelets
        </Checkbox>
      </div>

      <CheckboxGroupComponent
        options={plainOptions}
        checkedList={checkedList}
        onChange={(list) => onChange(list, setCheckedList)}
        disableAll={disableAll}
      />
      <div style={{ width: '60%', backgroundColor: 'lightgray', padding: 4, marginTop: 6 }}>
        <Checkbox indeterminate={indeterminate} onChange={onEmptyCheckboxChange} checked={opt.every(item => checkedOptList.includes(item))} />
      </div>
      <CheckboxGroupComponent
        options={opt}
        checkedList={checkedOptList}
        onChange={(list) => onChange(list, setCheckedOptList)}
        disableAll={disableAll}
      />
    </>
  );
};

export default MainComponent;
