import {compose, createStore, combineReducers, applyMiddleware} from 'redux';
import {DevTools} from '../ui/DevTool';
import {booksReducer} from './reducers/books';
import {uiReducer} from './reducers/ui';
import {notificationsReducer} from './reducers/notification';
import {booksMiddleware} from './middleware/books';
import {apiMiddleware} from './middleware/api';

// shape the state structure
const rootReducer = combineReducers({
  books: booksReducer,
  ui: uiReducer,
  notification: notificationsReducer
});

// create the entity middleware array
const entityMiddleware = [
  booksMiddleware
];

// create the core middleware array
const coreMiddleware = [
  apiMiddleware
];

// compose store enhancers
const enhancer = compose(
  applyMiddleware(...entityMiddleware, ...coreMiddleware),
  DevTools.instrument()
);

export const store = createStore(rootReducer, {}, enhancer);
