import React, { useState } from 'react';
import { Button } from '../Button';
import { NotificationItem } from '../NotificationItem';
import { useDispatch, useSelector } from 'react-redux';
import { CustomDialog } from '../CustomDialog';
import { NotificationForm } from '../NotificationForm';
import { getNotificationsSelector } from '../../selectors/notifications';
import {
  addNotification,
  removeNotification,
  updateNotification,
} from '../../store/notifications/action';
import { v4 } from 'uuid';

export const NotificationPage = () => {
  const newsList = useSelector(getNotificationsSelector);
  const dispatch = useDispatch();
  const [isOpenDialog, setIsOpenDialog] = useState(false);
  const [editableNotification, setEditableNotification] = useState(null);

  const onAddNotification = () => {
    setIsOpenDialog(true);
  };

  const handleClose = () => {
    setIsOpenDialog(false);
    setEditableNotification(null);
  };

  const onRemove = (id) => {
    const isConfirm = confirm('Ви впевнені що хочете видалити цю новину?');
    if (isConfirm) {
      dispatch(removeNotification(id));
      handleClose();
    }
  };

  const onSave = (data) => {
    setEditableNotification(null);

    if (data.id) {
      dispatch(updateNotification(data));
    } else {
      dispatch(
        addNotification({
          id: v4(),
          ...data,
        })
      );
    }
    handleClose();
  };

  const onEdit = (notification) => {
    setEditableNotification(notification);
    setIsOpenDialog(true);
  };

  const onRemoveFromDialog = () => {
    editableNotification ? onRemove(editableNotification.id) : handleClose();
  };

  return (
    <div className="newsPage">
      <Button name="Додати новину" onClick={onAddNotification} />
      {newsList?.map((notification, index) => (
        <NotificationItem
          key={notification.id}
          notification={notification}
          index={index + 1}
          onRemove={onRemove}
          onEdit={onEdit}
        />
      ))}
      <CustomDialog
        title="Создання новини"
        onClose={handleClose}
        onRemove={onRemoveFromDialog}
        onSave={onSave}
        isOpen={isOpenDialog}
      >
        <NotificationForm data={editableNotification} />
      </CustomDialog>
    </div>
  );
};
