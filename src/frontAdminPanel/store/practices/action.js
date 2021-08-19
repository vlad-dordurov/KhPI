import {
  UPDATE_PRACTICE,
  ADD_PRACTICE,
  REMOVE_PRACTICE,
} from './actionTypes.js';
import moment from 'moment';

export const addPractice = (practice) => async (dispatch) => {
  try {
    dispatch({
      type: ADD_PRACTICE,
      payload: {
        practice: { ...practice, date: moment().format('L') },
      },
    });
  } catch (e) {}
};

export const updatePractice = (practice) => async (dispatch) => {
  try {
    dispatch({
      type: UPDATE_PRACTICE,
      payload: {
        practice,
      },
    });
  } catch (e) {}
};

export const removePractice = (id) => async (dispatch) => {
  try {
    dispatch({
      type: REMOVE_PRACTICE,
      payload: {
        id,
      },
    });
  } catch (e) {}
};
