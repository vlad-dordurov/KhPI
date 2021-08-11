import { UPDATE_NOTIFICATION, ADD_NOTIFICATION, REMOVE_NOTIFICATION } from './actionTypes.js';
import moment from 'moment';

export const addNotification = (notification) => async (dispatch) => {
  try {
    dispatch({
      type: ADD_NOTIFICATION,
      payload: {
        notification: { ...notification, date: moment().format('L') },
      },
    });
  } catch (e) {}
};

export const updateNotification = (notification) => async (dispatch) => {
  try {
    dispatch({
      type: UPDATE_NOTIFICATION,
      payload: {
        notification,
      },
    });
  } catch (e) {}
};

export const removeNotification = (id) => async (dispatch) => {
  try {
    dispatch({
      type: REMOVE_NOTIFICATION,
      payload: {
        id,
      },
    });
  } catch (e) {}
};
