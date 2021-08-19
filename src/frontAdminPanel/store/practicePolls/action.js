import {
  UPDATE_PRACTICE_POLL,
  ADD_PRACTICE_POLL,
  REMOVE_PRACTICE_POLL,
} from './actionTypes.js';
import moment from 'moment';

export const addPracticePoll = (poll) => async (dispatch) => {
  try {
    dispatch({
      type: ADD_PRACTICE_POLL,
      payload: {
        poll: { ...poll, date: moment().format('L') },
      },
    });
  } catch (e) {}
};

export const updatePracticePoll = (poll) => async (dispatch) => {
  try {
    dispatch({
      type: UPDATE_PRACTICE_POLL,
      payload: {
        poll,
      },
    });
  } catch (e) {}
};

export const removePracticePoll = (id) => async (dispatch) => {
  try {
    dispatch({
      type: REMOVE_PRACTICE_POLL,
      payload: {
        id,
      },
    });
  } catch (e) {}
};
