import {
  UPDATE_DUAL_POLL,
  ADD_DUAL_POLL,
  REMOVE_DUAL_POLL,
} from './actionTypes.js';
import moment from 'moment';

export const addDualPoll = (poll) => async (dispatch) => {
  try {
    dispatch({
      type: ADD_DUAL_POLL,
      payload: {
        poll: { ...poll, date: moment().format('L') },
      },
    });
  } catch (e) {}
};

export const updateDualPoll = (poll) => async (dispatch) => {
  try {
    dispatch({
      type: UPDATE_DUAL_POLL,
      payload: {
        poll,
      },
    });
  } catch (e) {}
};

export const removeDualPoll = (id) => async (dispatch) => {
  try {
    dispatch({
      type: REMOVE_DUAL_POLL,
      payload: {
        id,
      },
    });
  } catch (e) {}
};
