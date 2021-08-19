import {
  UPDATE_DVV_POLL,
  ADD_DVV_POLL,
  REMOVE_DVV_POLL,
} from './actionTypes.js';

const initialState = {
  dvvPollList: [],
};

export const dvvPollsReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_DVV_POLL:
      return {
        dvvPollList: [payload.poll, ...state.dvvPollList],
      };
    case UPDATE_DVV_POLL:
      const dvvPollList = state.dvvPollList.map((poll) =>
        poll.id !== payload.poll.id ? poll : payload.poll
      );
      return {
        dvvPollList: [...dvvPollList],
      };
    case REMOVE_DVV_POLL:
      return {
        dvvPollList: state.dvvPollList.filter(({ id }) => id !== payload.id),
      };
    default:
      return state;
  }
};
