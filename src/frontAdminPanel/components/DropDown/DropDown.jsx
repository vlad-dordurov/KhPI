import React, { useState } from 'react';
import { func, arrayOf, string, shape } from 'prop-types';

import './dropDown.scss';

export const DropDown = ({ options, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(
    options[0].value || null
  );

  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = (value) => () => {
    setSelectedOption(value);
    setIsOpen(false);
    onChange(value);
  };

  return (
    <div className="dropDown-container">
      <div className="dropDown-header" onClick={toggling}>
        {selectedOption}
        <div className="arrow"></div>
      </div>
      {isOpen && (
        <div className="dropDownList-container">
          <ul className="dropDownList">
            {options.map(({ value }) => (
              <li onClick={onOptionClicked(value)} key={Math.random()}>
                {value}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

DropDown.propTypes = {
  onChange: func.isRequired,
  options: arrayOf(shape({
    value: string.isRequired,
  })),
};
