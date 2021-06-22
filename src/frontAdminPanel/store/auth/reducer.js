import {
  AUTH_USER,
  LOGOUT,
  INCORRECT_USER_DATA,
  CLEANING_INCORRECT_USER_DATA,
} from './actionTypes.js';

const initialState = {
  isAuthorized: false,
  token: null,
  incorrectData: null,
};

export const authReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case AUTH_USER:
      return {
        ...state,
        isAuthorized: true,
        incorrectData: null,
        ...payload,
      };
    case LOGOUT:
      return {
        ...state,
        isAuthorized: false,
        token: null,
      };
    case INCORRECT_USER_DATA:
      return {
        ...state,
        incorrectData: payload.incorrectData,
      };
    case CLEANING_INCORRECT_USER_DATA:
      return {
        ...state,
        incorrectData: null,
      };
    default:
      return state;
  }
};
