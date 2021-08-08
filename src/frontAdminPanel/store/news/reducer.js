import { UPDATE_NEWS, ADD_NEWS, REMOVE_NEWS } from './actionTypes.js';

const initialState = {
  newsList: [],
};

export const newsReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_NEWS:
      return {
        newsList: [payload.news, ...state.newsList],
      };
    case UPDATE_NEWS:
      const newsList = state.newsList.map((news) =>
        news.id !== payload.news.id ? news : payload.news
      );
      return {
        newsList: [...newsList],
      };
    case REMOVE_NEWS:
      return {
        newsList: state.newsList.filter(({ id }) => id !== payload.id),
      };
    default:
      return state;
  }
};
