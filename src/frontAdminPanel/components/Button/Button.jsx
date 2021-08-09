import React from 'react';
import { string, func } from 'prop-types';

import './button.scss';

export const Button = ({ name, className = '', onClick }) => {
  return (
    <button className={`button ${className}`} onClick={onClick}>
      {name}
    </button>
  );
};

Button.propTypes = {
  name: string.isRequired,
  className: string,
  onClick: func.isRequired,
};
