import {
  UPDATE_DUAL_POLL,
  ADD_DUAL_POLL,
  REMOVE_DUAL_POLL,
} from './actionTypes.js';

const initialState = {
  dualPollList: [],
};

export const dualPollsReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_DUAL_POLL:
      return {
        dualPollList: [payload.poll, ...state.dualPollList],
      };
    case UPDATE_DUAL_POLL:
      const dualPollList = state.dualPollList.map((poll) =>
        poll.id !== payload.poll.id ? poll : payload.poll
      );
      return {
        dualPollList: [...dualPollList],
      };
    case REMOVE_DUAL_POLL:
      return {
        dualPollList: state.dualPollList.filter(({ id }) => id !== payload.id),
      };
    default:
      return state;
  }
};
