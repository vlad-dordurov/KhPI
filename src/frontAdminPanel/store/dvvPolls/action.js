import {
  UPDATE_DVV_POLL,
  ADD_DVV_POLL,
  REMOVE_DVV_POLL,
} from './actionTypes.js';
import moment from 'moment';

export const addDvvPoll = (poll) => async (dispatch) => {
  try {
    dispatch({
      type: ADD_DVV_POLL,
      payload: {
        poll: { ...poll, date: moment().format('L') },
      },
    });
  } catch (e) {}
};

export const updateDvvPoll = (poll) => async (dispatch) => {
  try {
    dispatch({
      type: UPDATE_DVV_POLL,
      payload: {
        poll,
      },
    });
  } catch (e) {}
};

export const removeDvvPoll = (id) => async (dispatch) => {
  try {
    dispatch({
      type: REMOVE_DVV_POLL,
      payload: {
        id,
      },
    });
  } catch (e) {}
};
