import {BOOKS, FETCH_BOOKS, setBooks} from '../actions/books.actions';
import {apiRequest, API_SUCCESS, API_ERROR} from '../actions/api.actions';
import {setLoader} from '../actions/ui.actions';
import {setNotification} from '../actions/notification.actions';

const BOOKS_URL = 'https://www.googleapis.com/books/v1/volumes?q=redux';

export const booksMiddleware = () => (next) => (action) => {
  next(action);

  switch (action.type) {

    case FETCH_BOOKS:
      next(apiRequest({params:null, method:'GET', url:BOOKS_URL, entity:BOOKS}));
      next(setLoader({state:true, entity:BOOKS}));
      break;

    case `${BOOKS} ${API_SUCCESS}`:
      next(setBooks({books: action.payload}));
      next(setLoader({state:false, entity:BOOKS}));
      break;

    case `${BOOKS} ${API_ERROR}`:
      next(setNotification({message:action.payload.message, entity:BOOKS}));
      next(setLoader({state:false, entity:BOOKS}));
      break;

    default:
      throw(`The action type, ${action.type}, does not match any cases`);
  }
};
