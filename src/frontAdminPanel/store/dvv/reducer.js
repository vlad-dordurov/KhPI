import { UPDATE_DVV, ADD_DVV, REMOVE_DVV } from './actionTypes.js';

const initialState = {
  dvvList: [],
};

export const dvvsReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_DVV:
      return {
        dvvList: [payload.dvv, ...state.dvvList],
      };
    case UPDATE_DVV:
      const dvvList = state.dvvList.map((dvv) =>
        dvv.id !== payload.dvv.id ? dvv : payload.dvv
      );
      return {
        dvvList: [...dvvList],
      };
    case REMOVE_DVV:
      return {
        dvvList: state.dvvList.filter(({ id }) => id !== payload.id),
      };
    default:
      return state;
  }
};
