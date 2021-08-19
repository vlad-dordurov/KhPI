import {
  UPDATE_PRACTICE,
  ADD_PRACTICE,
  REMOVE_PRACTICE,
} from './actionTypes.js';

const initialState = {
  practiceList: [],
};

export const practicesReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_PRACTICE:
      return {
        practiceList: [payload.practice, ...state.practiceList],
      };
    case UPDATE_PRACTICE:
      const practiceList = state.practiceList.map((practice) =>
        practice.id !== payload.practice.id ? practice : payload.practice
      );
      return {
        practiceList: [...practiceList],
      };
    case REMOVE_PRACTICE:
      return {
        practiceList: state.practiceList.filter(({ id }) => id !== payload.id),
      };
    default:
      return state;
  }
};
