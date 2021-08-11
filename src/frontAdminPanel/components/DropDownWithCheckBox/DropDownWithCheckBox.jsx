import React, { useState } from "react";
import { func, string, shape, bool, arrayOf } from 'prop-types';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';

import './dropDownWithCheckBox.scss';

export const DropDownWithCheckBox = ({ title, options, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggling = () => setIsOpen(!isOpen);

  const onClickCheckBox = (value) => {
    const updatedOptions = options.map((option) => {
      if(option.value === value) {
        return {
          value,
          isChecked: !option.isChecked,
        }
      }
      return option
    });
    onChange(updatedOptions);
  }

  return (
    <ClickAwayListener onClickAway={() => setIsOpen(false)}>
    <div className="dropDown-container" >
      <div className="dropDown-header" onClick={toggling}>
        {title}
        <div className="arrow"></div>
      </div>
      {isOpen && (
        <div className="dropDownList-container" >
          <ul className="dropDownList">
            {options.map(({ value, isChecked }, i) => (
              <li key={i} className="dropDownItem">
                <input type="checkbox" onChange={() => onClickCheckBox(value)} checked={isChecked}/>
                <div className="dropDownItem-title">{value}</div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
    </ClickAwayListener>
  );
}

DropDownWithCheckBox.propTypes = {
  title: string.isRequired,
  options: arrayOf(shape({
    value: string,
    isChecked: bool,
  })).isRequired,
  onChange: func.isRequired
}
