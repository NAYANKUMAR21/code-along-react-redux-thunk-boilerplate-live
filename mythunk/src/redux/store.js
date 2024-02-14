import { legacy_createStore, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import reducerFn from './reducer';

export const store = legacy_createStore(reducerFn, applyMiddleware(thunk)); //reducer fn
