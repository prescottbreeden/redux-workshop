// action types
export const SET_NOTIFICATION = 'SET_NOTIFICATION';

// action creators
export const setNotification = ({ notification, entity }) => ({
  type: `${entity} ${SET_NOTIFICATION}`,
  payload: notification,
  meta: {entity},
})
