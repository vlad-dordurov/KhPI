import React, { useState } from 'react';
import classNames from 'classnames';
import { PollsTab } from '../PollsTab/PollsTab';

import './dualPage.scss';
import { SelectebleItemsTab } from '../SelectebleItemsTab';

export const DualPage = () => {
  const [isPollsTab, setIsPollsTab] = useState(true);

  const onClickPoll = () => {
    setIsPollsTab(true);
  };

  const onClickPractice = () => {
    setIsPollsTab(false);
  };

  const classesPollButton = classNames('practice-button', {
    'practice-buttonActive': isPollsTab,
  });

  const classesPracticeButton = classNames('practice-button', {
    'practice-buttonActive': !isPollsTab,
  });

  return (
    <div className="practice">
      <div className="practice-header">
        <button className={classesPollButton} onClick={onClickPoll}>
          Опитування
        </button>
        <button className={classesPracticeButton} onClick={onClickPractice}>
          Список Дуальних Освіт
        </button>
      </div>
      <div className="practice-content">
        {isPollsTab ? (
          <PollsTab type="dual" />
        ) : (
          <SelectebleItemsTab type="dual" />
        )}
      </div>
    </div>
  );
};
