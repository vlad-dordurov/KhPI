import React, { useState } from 'react';
import { func, string, bool, node } from 'prop-types';
import Dialog from '@material-ui/core/Dialog';

import { Button } from '../Button';
import './customDialog.scss';

export const CustomDialog = ({
  title,
  isOpen,
  onClose,
  onSave,
  onRemove,
  children,
}) => {
  const [formdata, setFormData] = useState(null);
  const handleSave = () => {
    onSave(formdata);
  };

  const childrenWithProps = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, { setFormData });
    }
    return child;
  });

  return (
    <Dialog
      onClose={onClose}
      aria-labelledby="customized-dialog-title"
      open={isOpen}
      maxWidth="xl"
    >
      <div className="dialog">
        <div className="dialog-header">
          <div className="dialog-title">{title}</div>
          <div className="dialog-close">
            <Button type="close" onClick={onClose} />
          </div>
        </div>
        <div className="dialog-content">{childrenWithProps}</div>
        <div className="dialog-footer">
          <Button name="Зберегти" onClick={handleSave} />
          <Button name="Видалити" onClick={onRemove} />
        </div>
      </div>
    </Dialog>
  );
};

CustomDialog.propTypes = {
  title: string.isRequired,
  isOpen: bool.isRequired,
  onClose: func.isRequired,
  onSave: func.isRequired,
  onRemove: func.isRequired,
  children: node.isRequired,
};
