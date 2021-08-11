import React, { useState, useEffect } from 'react';
import { DropzoneDialog } from 'material-ui-dropzone';
import { func, array, string, shape, bool, arrayOf } from 'prop-types';

import AddFileIcon from '../../assets/icons/anchor.svg';
import './notificationForm.scss';
import { File } from '../File';
import { DropDownWithCheckBox } from '../DropDownWithCheckBox';

export const NotificationForm = ({ setFormData, data }) => {
  const [isOpenDropZone, setIsOpenDropZone] = useState(false);
  const [files, setFiles] = useState(data ? data.files : []);
  const [title, setTitle] = useState(data ? data.title :'');
  const [description, setDescription] = useState(data ? data.description : '');
  const [cpecialityList, setCpecialityList] = useState(data ? data.cpecialityList : [
    { value: 'Право', isChecked: false },
    { value: 'Біологія', isChecked: false },
    { value: 'Журналістика', isChecked: false },
    { value: 'Освіта', isChecked: false },
  ]);
  const [courseList, setCourseList] = useState(data ? data.courseList : [
    { value: '1', isChecked: false },
    { value: '2', isChecked: false },
    { value: '3', isChecked: false },
  ]);
  const [groupList, setGroupeList] = useState(data ? data.groupList : [
    { value: 'І218а', isChecked: false },
    { value: 'І218б', isChecked: false },
    { value: 'І218в', isChecked: false },
    { value: 'І218г', isChecked: false },
    { value: 'І218д', isChecked: false },
  ]);

  useEffect(() => {
    console.log(data)
    setFormData({
      ...data,
      title,
      description,
      files,
      cpecialityList,
      courseList,
      groupList,
      
    });
  }, [description, title, files, cpecialityList, courseList, groupList]);

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
    <div className="notificationForm">
      <div className="notificationForm-checkboxList">
        <div className="notificationForm-checkboxItem">
          <DropDownWithCheckBox
            title="Спеціальність"
            options={cpecialityList}
            onChange={setCpecialityList}
          />
        </div>
        <div className="notificationForm-checkboxItem">
          <DropDownWithCheckBox
            title="Курс"
            options={courseList}
            onChange={setCourseList}
          />
        </div>
        <div className="notificationForm-checkboxItem">
          <DropDownWithCheckBox
            title="Группа"
            options={groupList}
            onChange={setGroupeList}
          />
        </div>
        <span className="news-control" onClick={handleOpenDropZone}>
          <AddFileIcon />
        </span>
      </div>
      <div className="notificationForm-inputs">
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
      </div>
      <div className="notificationForm-fileList">
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

NotificationForm.propTypes = {
  data: shape({
    files: array,
    title: string,
    description: string,
    cpecialityList: arrayOf(shape({
      value: string,
      isChecked: bool
    })),
    courseList: arrayOf(shape({
      value: string,
      isChecked: bool
    })),
    groupList: arrayOf(shape({
      value: string,
      isChecked: bool
    })),
    id: string,
  }),
  setFormData: func.isRequired,
}