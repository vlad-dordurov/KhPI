import React from 'react';
import { func, string, shape, number } from 'prop-types';
import { Button } from '../Button';

import './pollItem.scss';

export const PollItem = ({ poll, index, onRemove, onEdit, onOpenStats }) => {
  return (
    <div className="poll">
      <div className="poll-number">№{index}</div>
      <div className="poll-name">{poll.title}</div>
      <div className="poll-date">{poll.date}</div>
      <div className="poll-control">
        <Button
          name="Статистика"
          onClick={() => onOpenStats(poll)}
          className="poll-stats"
        />
        <Button type="edit" onClick={() => onEdit(poll)} />
        <Button type="remove" onClick={() => onRemove(poll.id)} />
      </div>
    </div>
  );
};

PollItem.propTypes = {
  poll: shape({
    id: string.isRequired,
    title: string.isRequired,
    date: string.isRequired,
  }),
  index: number.isRequired,
  onRemove: func.isRequired,
  onEdit: func.isRequired,
  onOpenStats: func.isRequired,
};
