import {
  UPDATE_PRACTICE_POLL,
  ADD_PRACTICE_POLL,
  REMOVE_PRACTICE_POLL,
} from './actionTypes.js';

const initialState = {
  practicePollList: [],
};

export const practicePollsReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_PRACTICE_POLL:
      return {
        practicePollList: [payload.poll, ...state.practicePollList],
      };
    case UPDATE_PRACTICE_POLL:
      const practicePollList = state.practicePollList.map((poll) =>
        poll.id !== payload.poll.id ? poll : payload.poll
      );
      return {
        practicePollList: [...practicePollList],
      };
    case REMOVE_PRACTICE_POLL:
      return {
        practicePollList: state.practicePollList.filter(
          ({ id }) => id !== payload.id
        ),
      };
    default:
      return state;
  }
};
