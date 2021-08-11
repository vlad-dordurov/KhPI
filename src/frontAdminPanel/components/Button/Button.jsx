import React from 'react';
import { string, func } from 'prop-types';
import EditIcon from '../../assets/icons/edit.svg';
import CancelIcon from '../../assets/icons/cancel.svg';

import './button.scss';
import classNames from 'classnames';

export const Button = ({ name, className = '', onClick, type }) => {
  const getIcon = () => {
    switch (type) {
      case "edit":
        return <EditIcon />
      case "remove":
        return <CancelIcon />
      case "close":
        return <CancelIcon />
    }
  }

  const classButton = classNames(className, {
    'button': !type,
  });

  return (
    <button className={classButton} onClick={onClick}>
      {type ? getIcon() : name}
    </button>
  );
};

Button.propTypes = {
  name: string,
  className: string,
  onClick: func.isRequired,
  type: string
};
