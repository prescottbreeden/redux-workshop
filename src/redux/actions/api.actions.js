// action types
export const API_REQUEST = 'API_REQUEST';
export const API_SUCCESS = 'API_SUCCESS';
export const API_ERROR = 'API_ERROR';

// Action Creators must be:
// 1. pure function - predictable with no side effects
// 2. decoupled from other parts of the system (unaware of any Redux components)
// 3. return simple JS object

export const apiRequest = ({ body, method, url, timeout, entity }) => ({
  type: `${entity} ${API_REQUEST}`,
  payload: body,
  meta: {method, url, timeout, entity}
});

export const apiSuccess = ({ response, entity }) => ({
  type: `${entity} ${API_SUCCESS}`,
  payload: response,
  meta: {entity}
});

export const apiError = ({ error, entity }) => ({
  type: `${entity} ${API_ERROR}`,
  payload: error,
  meta: {entity}
});
