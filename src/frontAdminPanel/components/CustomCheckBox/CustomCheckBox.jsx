import React from 'react';
import { func } from 'prop-types';

import './customCheckBox.scss';

export const CustomCheckBox = ({ onChange, isChecked }) => {
  return (
    <label className="switch-box box">
      <input type="checkbox" className="switch" onChange={onChange} checked={isChecked}/>
    </label>
  );
};

CustomCheckBox.propTypes = {
  onChange: func.isRequired,
};
