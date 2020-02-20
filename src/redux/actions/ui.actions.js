// action types
export const SET_LOADER = '[UI] SET_LOADER';

// action creators
export const setLoader = ({state, entity}) => ({
  type: SET_LOADER,
  payload: state,
  meta: {entity}
});
