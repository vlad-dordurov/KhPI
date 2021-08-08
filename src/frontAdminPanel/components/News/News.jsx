import React, { useState } from 'react';
import { DropzoneDialog } from 'material-ui-dropzone';

import { Button } from '../Button';
import { File } from '../File';
import { removeNews, updateNews } from '../../store/news/action';
import AddFileIcon from '../../assets/icons/anchor.svg';
import EditIcon from '../../assets/icons/edit.svg';
import CancelIcon from '../../assets/icons/cancel.svg';

import './news.scss';
import { useDispatch } from 'react-redux';
import { shape, string, ArraOf } from 'prop-types';

export const News = ({ news }) => {
  const [isEditabel, setIsEditable] = useState(false);
  const [isOpenDropZone, setIsOpenDropZone] = useState(false);
  const [files, setFiles] = useState(news.files);
  const [description, setDescription] = useState(news.description);
  const dispatch = useDispatch();

  const onClickEditButton = () => {
    setIsEditable(true);
  };

  const onSaveNews = () => {
    setIsEditable(false);
    dispatch(
      updateNews({
        id: news.id,
        description,
        files,
      })
    );
  };

  const onRemoveNews = () => {
    const isConfirm = confirm('Ви впевнені що хочете видалити цю новину?');
    if (isConfirm) {
      dispatch(removeNews(news.id));
    }
  };

  const openDropZone = () => {
    setIsOpenDropZone(true);
  };

  const onCloseDropZone = () => {
    setIsOpenDropZone(false);
  };

  const addFiles = (newFiles) => {
    setFiles((prevData) => [...prevData, ...newFiles]);
    setIsOpenDropZone(false);
  };

  const onUpdateDescription = ({ target }) => {
    setDescription(target.value);
  };

  return (
    <div className="news">
      <div className="news-header">
        {isEditabel && (
          <>
            <span className="news-control">
              <Button name="Save" onClick={onSaveNews} />
            </span>
            <span className="news-control" onClick={openDropZone}>
              <AddFileIcon />
            </span>
          </>
        )}
        {!isEditabel && (
          <span className="news-control" onClick={onClickEditButton}>
            <EditIcon />
          </span>
        )}
        <span className="news-control" onClick={onRemoveNews}>
          <CancelIcon />
        </span>
      </div>
      <div className="news-files">
        {files.map((file, i) => (
          <File data={file} key={i} />
        ))}
        <DropzoneDialog
          open={isOpenDropZone}
          onSave={addFiles}
          showPreviews={true}
          maxFileSize={5000000}
          onClose={onCloseDropZone}
        />
      </div>
      <textarea
        name="description"
        id=""
        cols="30"
        rows="10"
        className="news-description"
        disabled={!isEditabel}
        value={description}
        onChange={onUpdateDescription}
      ></textarea>
    </div>
  );
};

News.propTypes = {
  news: shape({
    id: string.isRequared,
    files: ArraOf().isRequared,
    description: string.isRequared,
  }).isRequared,
};
