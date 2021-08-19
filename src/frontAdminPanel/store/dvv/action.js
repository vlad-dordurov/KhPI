import { UPDATE_DVV, ADD_DVV, REMOVE_DVV } from './actionTypes.js';
import moment from 'moment';

export const addDvv = (dvv) => async (dispatch) => {
  try {
    dispatch({
      type: ADD_DVV,
      payload: {
        dvv: { ...dvv, date: moment().format('L') },
      },
    });
  } catch (e) {}
};

export const updateDvv = (dvv) => async (dispatch) => {
  try {
    dispatch({
      type: UPDATE_DVV,
      payload: {
        dvv,
      },
    });
  } catch (e) {}
};

export const removeDvv = (id) => async (dispatch) => {
  try {
    dispatch({
      type: REMOVE_DVV,
      payload: {
        id,
      },
    });
  } catch (e) {}
};
