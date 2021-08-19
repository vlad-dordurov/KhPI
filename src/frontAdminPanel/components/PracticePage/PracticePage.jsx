import React, { useState } from 'react';
import classNames from 'classnames';
import { PollsTab } from '../PollsTab/PollsTab';

import './practicePage.scss';
import { SelectebleItemsTab } from '../SelectebleItemsTab';

export const PracticePage = () => {
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
          Список Практик
        </button>
      </div>
      <div className="practice-content">
        {isPollsTab ? (
          <PollsTab type="practice" />
        ) : (
          <SelectebleItemsTab type="practice" />
        )}
      </div>
    </div>
  );
};
