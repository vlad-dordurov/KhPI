import React, { useState, useEffect } from 'react';
import { DropzoneDialog } from 'material-ui-dropzone';
import { func, array, string, shape, bool, arrayOf } from 'prop-types';
import { File } from '../File';
import AddFileIcon from '../../assets/icons/anchor.svg';
import './eventForm.scss';

export const EventForm = ({ setFormData, data }) => {
  const [isOpenDropZone, setIsOpenDropZone] = useState(false);
  const [files, setFiles] = useState(data ? data.files : []);
  const [title, setTitle] = useState(data ? data.title : '');
  const [description, setDescription] = useState(data ? data.description : '');

  useEffect(() => {
    setFormData({
      ...data,
      title,
      description,
      files,
    });
  }, [description, title, files]);

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
    <div className="eventForm">
      <div className="eventForm-inputs">
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
      <div className="eventForm-checkboxList">
        <span className="news-control" onClick={handleOpenDropZone}>
          <AddFileIcon />
        </span>
      </div>
      <div className="eventForm-fileList">
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

EventForm.propTypes = {
  data: shape({
    files: array,
    title: string,
    description: string,
    id: string,
  }),
  setFormData: func.isRequired,
};
