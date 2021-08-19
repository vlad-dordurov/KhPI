import React from 'react';
import { func, string, shape, number } from 'prop-types';
import { Button } from '../Button';

import './eventItem.scss';

export const EventItem = ({ event, index, onRemove, onEdit }) => {
  return (
    <div className="event">
      <div className="event-number">№{index}</div>
      <div className="event-name">{event.title}</div>
      <div className="event-date">{event.date}</div>
      <div className="event-control">
        <Button type="edit" onClick={() => onEdit(event)} />
        <Button type="remove" onClick={() => onRemove(event.id)} />
      </div>
    </div>
  );
};

EventItem.propTypes = {
  event: shape({
    id: string.isRequired,
    title: string.isRequired,
    date: string.isRequired,
  }),
  index: number.isRequired,
  onRemove: func.isRequired,
  onEdit: func.isRequired,
};
