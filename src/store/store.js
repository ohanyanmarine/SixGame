import {applyMiddleware, createStore} from 'redux';
import rootReducer from './reducers';
import rootSaga from './sagas/index';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;
