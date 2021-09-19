import { createStore, applyMiddleware } from 'redux';
//import cakeReducer from './cake/cakeReducer';

import logger from 'redux-logger';
import rootReducer from './rootReducer';

//const store = createStore(cakeReducer);
const store = createStore(rootReducer, applyMiddleware(logger));

export default store;