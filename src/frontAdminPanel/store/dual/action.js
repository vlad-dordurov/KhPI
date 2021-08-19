import { UPDATE_DUAL, ADD_DUAL, REMOVE_DUAL } from './actionTypes.js';
import moment from 'moment';

export const addDual = (dual) => async (dispatch) => {
  try {
    dispatch({
      type: ADD_DUAL,
      payload: {
        dual: { ...dual, date: moment().format('L') },
      },
    });
  } catch (e) {}
};

export const updateDual = (dual) => async (dispatch) => {
  try {
    dispatch({
      type: UPDATE_DUAL,
      payload: {
        dual,
      },
    });
  } catch (e) {}
};

export const removeDual = (id) => async (dispatch) => {
  try {
    dispatch({
      type: REMOVE_DUAL,
      payload: {
        id,
      },
    });
  } catch (e) {}
};
