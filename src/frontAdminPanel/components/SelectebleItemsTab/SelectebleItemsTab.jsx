import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 } from 'uuid';
import { getDualsSelector } from '../../selectors/duals';
import { getDvvsSelector } from '../../selectors/dvvs';
import { getPracticesSelector } from '../../selectors/practices';
import {
  addPractice,
  removePractice,
  updatePractice,
} from '../../store/practices/action';
import { Button } from '../Button';
import { CustomDialog } from '../CustomDialog';
import { EventForm } from '../EventForm';
import { EventItem } from '../EventItem';

const eventTypes = {
  dvv: {
    selector: getDvvsSelector,
    removeMessage: 'Ви впевнени що хочете видалити цей предмет?',
    onAdd: () => {},
    onRemove: () => {},
    onSave: () => {},
  },
  practice: {
    selector: getPracticesSelector,
    removeMessage: 'Ви впевнені що хочете видалити цю практику?',
    onAdd: addPractice,
    onRemove: removePractice,
    onSave: updatePractice,
  },
  dual: {
    selector: getDualsSelector,
    removeMessage: 'Ви впевнени що хочете видалити цей предмет?',
    onAdd: () => {},
    onRemove: () => {},
    onSave: () => {},
  },
};

export const SelectebleItemsTab = ({ type }) => {
  const eventsList = useSelector(eventTypes[type].selector);
  const dispatch = useDispatch();
  const [isOpenDialog, setIsOpenDialog] = useState(false);
  const [editableEvent, setEditableEvent] = useState(null);

  const addEvent = eventTypes[type].onAdd;
  const updateEvent = eventTypes[type].onSave;
  const removeEvent = eventTypes[type].onRemove;

  const onAddItem = () => {
    setIsOpenDialog(true);
  };

  const handleClose = () => {
    setIsOpenDialog(false);
    setEditableEvent(null);
  };

  const onRemove = (id) => {
    const isConfirm = confirm(eventTypes[type].removeMessage);
    if (isConfirm) {
      dispatch(removeEvent(id));
      handleClose();
    }
  };

  const onSave = (data) => {
    setEditableEvent(null);

    if (data.id) {
      dispatch(updateEvent(data));
    } else {
      dispatch(
        addEvent({
          id: v4(),
          ...data,
        })
      );
    }
    handleClose();
  };

  const onEdit = (event) => {
    setEditableEvent(event);
    setIsOpenDialog(true);
  };

  const onRemoveFromDialog = () => {
    editableEvent ? onRemove(editableEvent.id) : handleClose();
  };
  return (
    <div className="pollsTab">
      <Button name="Додати Практику" onClick={onAddItem} />
      {eventsList?.map((event, index) => (
        <EventItem
          key={event.id}
          event={event}
          index={index + 1}
          onRemove={onRemove}
          onEdit={onEdit}
        />
      ))}
      <CustomDialog
        title="Додавання практики"
        onClose={handleClose}
        onRemove={onRemoveFromDialog}
        onSave={onSave}
        isOpen={isOpenDialog}
      >
        <EventForm setFormData={onSave} data={editableEvent} />
      </CustomDialog>
    </div>
  );
};
