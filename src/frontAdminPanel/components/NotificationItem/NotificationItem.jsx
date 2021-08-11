import React from "react";
import { func, string, shape, number } from 'prop-types';
import { Button } from "../Button";


import "./notificationItem.scss";

export const NotificationItem = ({ notification, index, onRemove, onEdit}) => {

  return (
    <div className="notification">
      <div className="notification-number">№{index}</div>
      <div className="notification-name">{notification.title}</div>
      <div className="notification-date">{notification.date}</div>
      <div className="notification-control">
        <Button type="edit" onClick={() => onEdit(notification)} />
        <Button type="remove" onClick={() => onRemove(notification.id)} />
      </div>
    </div>
  );
}

NotificationItem.propTypes = {
  notification: shape({
    id: string.isRequired,
    title: string.isRequired,
    date: string.isRequired,
  }),
  index: number.isRequired,
  onRemove: func.isRequired,
  onEdit: func.isRequired,
}