import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 } from 'uuid';
import { Button } from '../Button';
import { News } from '../News';
import { getNewsSelector } from '../../selectors/news';
import { addNews } from '../../store/news/action';

import './newsPage.scss';

export const NewsPage = () => {
  const newsList = useSelector(getNewsSelector);
  const dispatch = useDispatch();

  const onAddNews = () => {
    dispatch(
      addNews({
        id: v4(),
        description: '',
        files: [],
      })
    );
  };

  return (
    <div className="newsPage">
      <Button name="Додати новину" onClick={onAddNews} />
      {newsList?.map((news) => (
        <News key={news.id} news={news} />
      ))}
    </div>
  );
};
