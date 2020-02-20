// entity name
export const BOOKS = '[BOOKS]';

// action types
export const FETCH_BOOKS = `${BOOKS} Fetch`;
export const SET_BOOKS = `${BOOKS} Set`;

// action creators
export const fetchBooks = ({query}) => ({
  type: FETCH_BOOKS,
  payload: query,
});

export const setBooks = ({books, normalizeKey}) => ({
  type: SET_BOOKS,
  payload: books,
  meta: { normalizeKey, entity: books }
});

