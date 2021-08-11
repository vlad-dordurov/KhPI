import { UPDATE_NOTIFICATION, ADD_NOTIFICATION, REMOVE_NOTIFICATION } from './actionTypes.js';

const initialState = {
  notificationList: [],
};

export const notificationsReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_NOTIFICATION:
      return {
        notificationList: [payload.notification, ...state.notificationList],
      };
    case UPDATE_NOTIFICATION:
      const notificationList = state.notificationList.map((notification) =>
      notification.id !== payload.notification.id ? notification : payload.notification
      );
      return {
        notificationList: [...notificationList],
      };
    case REMOVE_NOTIFICATION:
      return {
        notificationList: state.notificationList.filter(({ id }) => id !== payload.id),
      };
    default:
      return state;
  }
};
