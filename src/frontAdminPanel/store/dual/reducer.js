import { UPDATE_DUAL, ADD_DUAL, REMOVE_DUAL } from './actionTypes.js';

const initialState = {
  dualList: [],
};

export const dualsReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_DUAL:
      return {
        dualList: [payload.dual, ...state.dualList],
      };
    case UPDATE_DUAL:
      const dualList = state.dualList.map((dual) =>
        dual.id !== payload.dual.id ? dual : payload.dual
      );
      return {
        dualList: [...dualList],
      };
    case REMOVE_DUAL:
      return {
        dualList: state.dualList.filter(({ id }) => id !== payload.id),
      };
    default:
      return state;
  }
};
