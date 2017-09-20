import { createStore, applyMiddleware, combineReducers } from 'redux';
import { apiMiddleware } from 'redux-api-middleware';
import { createLogger } from 'redux-logger';
import { routerReducer } from 'react-router-redux';
import reducers from '@/store/reducers';

const logger = createLogger({});

const reducer = combineReducers({
  ...reducers,
  routing: routerReducer,
});
const createStoreWithMiddleware = applyMiddleware(apiMiddleware, logger)(createStore);

export default function configureStore(initialState) {
  return createStoreWithMiddleware(reducer, initialState);
}
