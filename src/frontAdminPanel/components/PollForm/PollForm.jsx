import React, { useState, useEffect } from 'react';
import { DropzoneDialog } from 'material-ui-dropzone';
import { func, array, string, shape, bool, arrayOf } from 'prop-types';

import AddFileIcon from '../../assets/icons/anchor.svg';
import './pollForm.scss';
import { File } from '../File';
import { DropDownWithCheckBox } from '../DropDownWithCheckBox';
import { useSelector } from 'react-redux';
import { getDvvsSelector } from '../../selectors/dvvs';
import { getPracticesSelector } from '../../selectors/practices';
import { getDualsSelector } from '../../selectors/duals';
import {
  addPractice,
  removePractice,
  updatePractice,
} from '../../store/practices/action';

const eventTypes = {
  dvv: {
    selector: getDvvsSelector,
    removeMessage: 'Ви впевнени що хочете видалити цей предмет?',
    onAdd: () => {},
    onRemove: () => {},
    onSave: () => {},
  },
  practice: {
    selector: getPracticesSelector,
    removeMessage: 'Ви впевнені що хочете видалити цю практику?',
    onAdd: addPractice,
    onRemove: removePractice,
    onSave: updatePractice,
    title: 'Список практик',
  },
  dual: {
    selector: getDualsSelector,
    removeMessage: 'Ви впевнени що хочете видалити цей предмет?',
    onAdd: () => {},
    onRemove: () => {},
    onSave: () => {},
  },
};

export const PollForm = ({ setFormData, data, type }) => {
  const [isOpenDropZone, setIsOpenDropZone] = useState(false);
  const [files, setFiles] = useState(data ? data.files : []);
  const [title, setTitle] = useState(data ? data.title : '');
  const [description, setDescription] = useState(data ? data.description : '');
  const [cpecialityList, setCpecialityList] = useState(
    data
      ? data.cpecialityList
      : [
          { value: 'Право', isChecked: false },
          { value: 'Біологія', isChecked: false },
          { value: 'Журналістика', isChecked: false },
          { value: 'Освіта', isChecked: false },
        ]
  );
  const [courseList, setCourseList] = useState(
    data
      ? data.courseList
      : [
          { value: '1', isChecked: false },
          { value: '2', isChecked: false },
          { value: '3', isChecked: false },
        ]
  );
  const [groupList, setGroupeList] = useState(
    data
      ? data.groupList
      : [
          { value: 'І218а', isChecked: false },
          { value: 'І218б', isChecked: false },
          { value: 'І218в', isChecked: false },
          { value: 'І218г', isChecked: false },
          { value: 'І218д', isChecked: false },
        ]
  );

  const [eventList, setEventList] = useState(
    useSelector(eventTypes[type].selector)
  );

  const [eventsForDropDown, setEventsForDropDown] = useState(
    data
      ? data.eventList
      : eventList.map(({ title, id }) => ({
          id,
          value: title,
          isChecked: false,
        }))
  );

  useEffect(() => {
    console.log(eventsForDropDown);
    setFormData({
      ...data,
      title,
      description,
      files,
      cpecialityList,
      courseList,
      groupList,
      eventList: eventsForDropDown,
      eventType: type,
    });
  }, [
    description,
    title,
    files,
    cpecialityList,
    courseList,
    groupList,
    eventsForDropDown,
  ]);

  const handleOpenDropZone = () => {
    setIsOpenDropZone(true);
  };

  const onCloseDropZone = () => {
    setIsOpenDropZone(false);
  };

  const addFiles = (newFiles) => {
    setFiles((prevData) => [...prevData, ...newFiles]);
    setIsOpenDropZone(false);
  };

  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleChangeDescription = (e) => {
    setDescription(e.target.value);
  };

  return (
    <div className="pollForm">
      <div className="pollForm-checkboxList">
        <div className="pollForm-checkboxItem">
          <DropDownWithCheckBox
            title="Спеціальність"
            options={cpecialityList}
            onChange={setCpecialityList}
          />
        </div>
        <div className="pollForm-checkboxItem">
          <DropDownWithCheckBox
            title="Курс"
            options={courseList}
            onChange={setCourseList}
          />
        </div>
        <div className="pollForm-checkboxItem">
          <DropDownWithCheckBox
            title="Группа"
            options={groupList}
            onChange={setGroupeList}
          />
        </div>
        <div className="pollForm-checkboxItem">
          <DropDownWithCheckBox
            title={eventTypes[type].title}
            options={eventsForDropDown}
            onChange={setEventsForDropDown}
          />
        </div>
      </div>
      <div className="pollForm-inputs">
        <input
          type="text"
          placeholder="Заголовок"
          onChange={handleChangeTitle}
          value={title}
        />
        <textarea
          type="text"
          placeholder="Опис"
          onChange={handleChangeDescription}
          value={description}
        />
        <span className="news-control" onClick={handleOpenDropZone}>
          <AddFileIcon />
        </span>
      </div>
      <div className="pollForm-fileList">
        {files.map((file, i) => (
          <File data={file} key={i} />
        ))}
      </div>
      <DropzoneDialog
        open={isOpenDropZone}
        onSave={addFiles}
        showPreviews={true}
        maxFileSize={5000000}
        onClose={onCloseDropZone}
      />
    </div>
  );
};

PollForm.propTypes = {
  data: shape({
    files: array,
    title: string,
    description: string,
    cpecialityList: arrayOf(
      shape({
        value: string,
        isChecked: bool,
      })
    ),
    courseList: arrayOf(
      shape({
        value: string,
        isChecked: bool,
      })
    ),
    groupList: arrayOf(
      shape({
        value: string,
        isChecked: bool,
      })
    ),
    id: string,
  }),
  setFormData: func.isRequired,
};
