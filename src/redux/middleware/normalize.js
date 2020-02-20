import { dataNormalized } from "../actions/data.actions";

export const normalizeMiddleware = ({dispatch}) => (next) => (action) => {

  // filter both by action type and metadata content
  if (action.type.includes('SET') && action.meta.normalizeKey) {

    // notify about the transformation
    dispatch(dataNormalized({entity: action.meta.entity}));

    // transform the data structure from Array to Object
    const books = action.payload.reduce((acc, item) => {
      acc[item[action.meta.normalizeKey]] = item;
      return acc;
    }, {});

    // fire the books document action
    console.log('normalize action');
    next({...action, payload: books, normalizeKey: null});

  } else {
    next(action);
  }
}
