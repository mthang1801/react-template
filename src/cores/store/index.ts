import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import rootReducers from '../reducers/root.reducers';
import rootSagas from '../sagas/root.sagas';

const sagaMiddleware = createSagaMiddleware();
const middlewares: any[] = [sagaMiddleware];

if (process.env.NODE_ENV !== 'production') {
	middlewares.push(logger);
}

const configureStore = () => {
	const store = createStore(rootReducers, applyMiddleware(...middlewares));
	sagaMiddleware.run(rootSagas);
	return store;
};

export default configureStore;
