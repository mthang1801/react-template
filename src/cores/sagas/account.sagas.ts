import { call, put, takeLeading } from 'redux-saga/effects';
import { IAction, IRootResponse } from 'src/cores/interfaces/root.interfaces';
import API_LIST from 'src/cores/services/apiList';
import { actionFailure, actionSuccess } from '../actions/root.actions';
import ApiService from '../services/api.service';
import accountTypes from '../types/account.types';

function* signUpAccount(action: IAction) {
	try {
		const { payload } = action;
		const res: IRootResponse = yield call(() => ApiService.post(API_LIST.SIGNUP, payload.data));
		yield put(actionSuccess(accountTypes.SIGNUP_SUCCESS, res.data));
	} catch (error: any) {
		yield put(actionFailure(accountTypes.SIGNUP_FAILURE, error));
	}
}

function* signInAccount(action: IAction) {
	try {
		const { payload } = action;
		const res: IRootResponse = yield call(() => ApiService.post(API_LIST.SIGNIN, payload.data));
		yield put(actionSuccess(accountTypes.SIGNIN_SUCCESS, res.data));
	} catch (error: any) {
		yield put(actionFailure(accountTypes.SIGNIN_FAILURE, error));
	}
}

const accountSagas = [takeLeading(accountTypes.SIGNUP_START, signUpAccount), takeLeading(accountTypes.SIGNIN_START, signInAccount)];
export default accountSagas;
