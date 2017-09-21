import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import { routerReducer } from 'react-router-redux';
import promiseMiddleware from 'redux-promise';
import reducers from '@/store/reducers';

const logger = createLogger({});

const reducer = combineReducers({
  ...reducers,
  routing: routerReducer,
});
const createStoreWithMiddleware = applyMiddleware(promiseMiddleware, logger)(createStore);

export default function configureStore(initialState) {
  return createStoreWithMiddleware(reducer, initialState);
}
