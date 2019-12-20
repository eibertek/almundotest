import { applyMiddleware, createStore, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { getReducers } from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootSaga from './sagas';
import { IStore } from './reducers/@types';

const initialStore: IStore = {};

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
    getReducers(),
    initialStore, 
    composeWithDevTools(
        applyMiddleware(sagaMiddleware),
    ));


sagaMiddleware.run(rootSaga);

export const dispatch = store.dispatch;
