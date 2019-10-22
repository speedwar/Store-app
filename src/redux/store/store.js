import {createStore, applyMiddleware, compose} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {createLogger} from 'redux-logger';
import rootReducer from './../../redux/reducers';

const loggerMiddleware = createLogger();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

/* eslint-disable */
function promiseMiddleware({dispatch}) {
  function isPromise(val) {
    return val && typeof val.then === 'function';
  }

  return (next) => (action) => {
    return isPromise(action.payload)
      ? action.payload.then(
          (result) => dispatch({...action, payload: result}),
          (error) => dispatch({...action, payload: error, error: true})
        )
      : next(action);
  };
}

export const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(promiseMiddleware, thunkMiddleware, loggerMiddleware)
  )
);
/* eslint-enable */
