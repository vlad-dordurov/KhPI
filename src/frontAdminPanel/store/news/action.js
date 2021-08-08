import { UPDATE_NEWS, ADD_NEWS, REMOVE_NEWS } from './actionTypes.js';

export const addNews = (news) => async (dispatch) => {
  try {
    dispatch({
      type: ADD_NEWS,
      payload: {
        news,
      },
    });
  } catch (e) {}
};

export const updateNews = (news) => async (dispatch) => {
  try {
    dispatch({
      type: UPDATE_NEWS,
      payload: {
        news,
      },
    });
  } catch (e) {}
};

export const removeNews = (id) => async (dispatch) => {
  try {
    dispatch({
      type: REMOVE_NEWS,
      payload: {
        id,
      },
    });
  } catch (e) {}
};
