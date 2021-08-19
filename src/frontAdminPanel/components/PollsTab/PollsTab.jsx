import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 } from 'uuid';
import { getDualPollsSelector } from '../../selectors/dualPolls';
import { getDvvPollsSelector } from '../../selectors/dvvPolls';
import { getPracticePollsSelector } from '../../selectors/practicePolls';
import {
  addDualPoll,
  removeDualPoll,
  updateDualPoll,
} from '../../store/dualPolls/action';
import {
  addDvvPoll,
  removeDvvPoll,
  updateDvvPoll,
} from '../../store/dvvPolls/action';
import {
  addPracticePoll,
  removePracticePoll,
  updatePracticePoll,
} from '../../store/practicePolls/action';
import { Button } from '../Button';
import { CustomDialog } from '../CustomDialog';
import { PollForm } from '../PollForm';
import { PollItem } from '../PollItem';

const eventTypes = {
  dvv: {
    selector: getDvvPollsSelector,
    removeMessage: 'Ви впевнени що хочете видалити цей предмет?',
    onAdd: addDvvPoll,
    onRemove: removeDvvPoll,
    onSave: updateDvvPoll,
  },
  practice: {
    selector: getPracticePollsSelector,
    removeMessage: 'Ви впевнені що хочете видалити цю практику?',
    onAdd: addPracticePoll,
    onRemove: removePracticePoll,
    onSave: updatePracticePoll,
    title: 'Список практик',
  },
  dual: {
    selector: getDualPollsSelector,
    removeMessage: 'Ви впевнени що хочете видалити цей предмет?',
    onAdd: addDualPoll,
    onRemove: removeDualPoll,
    onSave: updateDualPoll,
  },
};

export const PollsTab = ({ type }) => {
  const pollList = useSelector(eventTypes[type].selector);
  const dispatch = useDispatch();
  const [isOpenDialog, setIsOpenDialog] = useState(false);
  const [editablePoll, setEditablePoll] = useState(null);

  const addPoll = eventTypes[type].onAdd;
  const updatePoll = eventTypes[type].onSave;
  const removePoll = eventTypes[type].onRemove;

  const onAddPoll = () => {
    setIsOpenDialog(true);
  };

  const handleClose = () => {
    setIsOpenDialog(false);
    setEditablePoll(null);
  };

  const onRemove = (id) => {
    const isConfirm = confirm('Ви впевнені що хочете видалити це опитування?');
    if (isConfirm) {
      dispatch(removePoll(id));
      handleClose();
    }
  };

  const onSave = (data) => {
    setEditablePoll(null);
    if (data.id) {
      dispatch(updatePoll(data));
    } else {
      dispatch(
        addPoll({
          id: v4(),
          ...data,
        })
      );
    }
    handleClose();
  };

  const onEdit = (notification) => {
    setEditablePoll(notification);
    setIsOpenDialog(true);
  };

  const onOpenStats = () => {
    
  };

  const onRemoveFromDialog = () => {
    editablePoll ? onRemove(editablePoll.id) : handleClose();
  };
  return (
    <div className="pollsTab">
      <Button name="Додати Опитування" onClick={onAddPoll} />
      {pollList?.map((poll, index) => (
        <PollItem
          key={poll.id}
          poll={poll}
          index={index + 1}
          onRemove={onRemove}
          onEdit={onEdit}
          onOpenStats={onOpenStats}
        />
      ))}
      <CustomDialog
        title="Создання Опитування"
        onClose={handleClose}
        onRemove={onRemoveFromDialog}
        onSave={onSave}
        isOpen={isOpenDialog}
      >
        <PollForm setFormData={onSave} data={editablePoll} type={type} />
      </CustomDialog>
    </div>
  );
};
