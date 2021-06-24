import React from 'react';
import { func, string, arrayOf, shape } from 'prop-types';

export const TableRow = ({ data, onChange }) => {
  const { dayName, lessons } = data;

  const updateLessons = (day, time, name, value) =>
    day.lessons.map((lesson) => {
      if (lesson.time === time) {
        lesson[name] = value;
      }
      return lesson;
    });

  const handleUpdateInput = ({ target }, time) => {
    const { name, value } = target;

    onChange((prevData) => {
      return prevData.map((day) => {
        if (day.dayName === dayName) {
          const updatedLessons = updateLessons(day, time, name, value);
          return {
            dayName: day.dayName,
            lessons: updatedLessons,
          };
        }
        return day;
      });
    });
  };

  return (
    <div className="table">
      <div className="table-day">{dayName}</div>
      <div className="table-data">
        {lessons.map(
          ({ time, lessonName, type, teacher, cabinet, building }, i) => (
            <div className="table-row" key={i}>
              <div className="table-item">{time}</div>
              <input
                type="text"
                className="table-item input"
                name="lessonName"
                value={lessonName}
                onChange={(e) => handleUpdateInput(e, time)}
              />
              <input
                type="text"
                className="table-item input"
                name="type"
                value={type}
                onChange={(e) => handleUpdateInput(e, time)}
              />
              <input
                type="text"
                className="table-item input"
                name="teacher"
                value={teacher}
                onChange={(e) => handleUpdateInput(e, time)}
              />
              <input
                type="text"
                className="table-item input"
                name="cabinet"
                value={cabinet}
                onChange={(e) => handleUpdateInput(e, time)}
              />
              <input
                type="text"
                className="table-item input"
                name="building"
                value={building}
                onChange={(e) => handleUpdateInput(e, time)}
              />
            </div>
          )
        )}
      </div>
    </div>
  );
};

TableRow.propTypes = {
  onChange: func.isRequired,
  data: shape({
    dayName: string.isRequired,
    lessons: arrayOf(shape({
      time: string.isRequired,
      lessonName: string.isRequired,
      type: string.isRequired,
      teacher: string.isRequired,
      cabinet: string.isRequired,
      building: string.isRequired,
    })),
  }),
};
