import React from 'react';
import { func, string, arrayOf, shape } from 'prop-types';

import { TableHeader } from './conponents/TableHeader';
import { TableRow } from './conponents/TableRow';

import './sheduleTable.scss';

export const SheduleTable = ({ data, onChange }) => {
  return (
    <div className="shedule-table">
      <TableHeader />
      {data.map((day) => (
        <TableRow key={day.dayName} data={day} onChange={onChange} />
      ))}
    </div>
  );
};

SheduleTable.propTypes = {
  onChange: func.isRequired,
  data: arrayOf(
    shape({
      dayName: string.isRequired,
      lessons: arrayOf(
        shape({
          time: string.isRequired,
          lessonName: string.isRequired,
          type: string.isRequired,
          teacher: string.isRequired,
          cabinet: string.isRequired,
          building: string.isRequired,
        })
      ),
    })
  ),
};
