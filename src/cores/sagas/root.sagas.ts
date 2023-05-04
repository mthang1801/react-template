import { all } from 'redux-saga/effects';
import accountSagas from './account.sagas';
import channelSagas from './channel.sagas';
import globalSagas from './global.sagas';

function* rootSagas() {
	yield all([...globalSagas, ...accountSagas, ...channelSagas]);
}

export default rootSagas;
