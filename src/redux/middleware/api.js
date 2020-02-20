import { API_REQUEST, apiSuccess, apiError } from "../actions/api.actions";

export const apiMiddleware = ({dispatch}) => (next) => (action) => {
  next(action);

  if (action.type.includes(API_REQUEST)) {
    const { url, method, entity } = action.meta;

    fetch(url, { method })
      .then(response => response.json())
      .then(data => dispatch(apiSuccess({ response: data.items, entity })))
      .catch(error => dispatch(apiError(error, entity)));
  }
};
