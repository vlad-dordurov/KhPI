import axios from 'axios';
import {
  AUTH_USER,
  LOGOUT,
  INCORRECT_USER_DATA,
  CLEANING_INCORRECT_USER_DATA,
} from './actionTypes';

export const authenticationUser = (email, password) => async (dispatch) => {
  try {
    //use this when backend will be ready
    // const userData = await axios.post('auth/signin', {
    //   email,
    //   password,
    // });

    //mock data
    const userData = { token: 'mockData' };

    dispatch({
      type: AUTH_USER,
      payload: {
        ...userData,
      },
    });
  } catch (e) {
    dispatch({
      type: INCORRECT_USER_DATA,
      payload: {
        incorrectData: 'Incorrect Email or password.',
      },
    });
  }
};

export const logout = () => ({
  type: LOGOUT,
});

export const cleaningIncorrectData = () => ({
  type: CLEANING_INCORRECT_USER_DATA,
});
