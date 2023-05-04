import { call, put, takeLatest, takeLeading } from 'redux-saga/effects';
import { actionFailure, actionSuccess } from '../actions/root.actions';
import { IAction, IRootResponse } from '../interfaces/root.interfaces';
import ApiService from '../services/api.service';
import API_LIST from '../services/apiList';
import channelTypes from '../types/channel.types';

function* createChannel(action: IAction) {
	try {
		const {
			payload: { data }
		} = action;
		const res: IRootResponse = yield call(() => ApiService.post(API_LIST.CREATE_CHANNEL, data));
		yield put(actionSuccess(channelTypes.CREATE_CHANNEL_SUCCESS, res.data));
	} catch (error: any) {
		yield put(actionFailure(channelTypes.CREATE_CHANNEL_FAILURE, error));
	}
}

function* getChannelList(action: IAction) {
	try {
		const {
			payload: { params }
		} = action;
		const res: IRootResponse = yield call(() => ApiService.get(API_LIST.GET_CHANNEL_LIST, params));
		yield put(actionSuccess(channelTypes.GET_CHANNEL_LIST_SUCCESS, res.data));
	} catch (error: any) {
		yield put(actionFailure(channelTypes.GET_CHANNEL_LIST_FAILURE, error));
	}
}

const channelSagas = [takeLeading(channelTypes.CREATE_CHANNEL_START, createChannel), takeLatest(channelTypes.GET_CHANNEL_LIST_START, getChannelList)];

export default channelSagas;
