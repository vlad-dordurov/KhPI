import React, { useEffect, useState } from 'react';
import classnames from 'classnames';

import { SheduleTable } from '../SheduleTable';
import { CustomCheckBox } from '../CustomCheckBox';
import { DropDown } from '../DropDown';
import { Button } from '../Button';

import './shedule.scss';

//TODO: Create action for getting data and save it to redux
import { mockData } from './mockData';

//mockData
const getShedule = () => mockData;
const getGroup = () => [
  { value: 'І218а' },
  { value: 'І218б' },
  { value: 'І218в' },
  { value: 'І218г' },
  { value: 'І218д' },
];

export const ShedulePage = () => {
  const [isEvenWeek, setIsEvenWeek] = useState(false);
  const [courseList, setCourseList] = useState([
    { value: '1' },
    { value: '2' },
    { value: '3' },
    { value: '4' },
    { value: '5' },
    { value: '6' },
  ]);
  const [groupList, setGroupList] = useState(null);

  const [selectedCourse, setSelectedCourse] = useState(1);
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [data, setData] = useState(mockData);

  useEffect(() => {
    setGroupList(getGroup());
  }, [selectedCourse]);

  useEffect(() => {
    setData(getShedule(isEvenWeek, selectedCourse, selectedGroup));
  }, [isEvenWeek, selectedCourse, selectedGroup]);

  const evenWeekClass = classnames('week-title', {
    'week-title--selected': isEvenWeek,
  });
  const oddWeekClass = classnames('week-title', {
    'week-title--selected': !isEvenWeek,
  });

  const handleCheckBox = ({ target: { checked } }) => {
    setIsEvenWeek(checked);
  };

  const save = () => {
    //We will should update it when backend will be ready
  };

  return (
    <div className="shedule">
      <div className="shedule-control">
        <div>
          <div className="week-control">
            <div className={oddWeekClass}>Непарний тиждень</div>
            <CustomCheckBox onChange={handleCheckBox} isChecked={isEvenWeek} />
            <div className={evenWeekClass}>Парний тиждень</div>
            <div className="course-control">
              <div>Курс</div>
              <DropDown options={courseList} onChange={setSelectedCourse} />
            </div>
            <div className="course-control">
              <div>Група</div>
              {groupList && (
                <DropDown options={groupList} onChange={setSelectedGroup} />
              )}
            </div>
          </div>
        </div>
        <div>
          <Button name="Зберегти" onClick={save} />
        </div>
      </div>
      <SheduleTable data={data} onChange={setData} />
    </div>
  );
};
