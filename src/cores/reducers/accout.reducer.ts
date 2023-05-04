import { Reducer } from 'redux';
import { IAccountState } from '../interfaces/account.interface';
import { ISyntheticAction } from '../interfaces/root.interfaces';
import accountTypes from '../types/account.types';
import { responseStateFailure, responseStateStart, responseStateSuccess } from './state/responseState';
import { rootState } from './state/root.states';
const initState: IAccountState = {
	stateSignUp: { ...rootState },
	stateSignIn: { ...rootState }
};

const accountReducer: Reducer<IAccountState, ISyntheticAction> = (state: IAccountState = initState, { type, response }: ISyntheticAction) => {
	switch (type) {
		case accountTypes.SIGNUP_START:
			return responseStateStart<IAccountState>(state, 'stateSignUp');
		case accountTypes.SIGNUP_SUCCESS:
			return responseStateSuccess<IAccountState>(state, 'stateSignUp', response);
		case accountTypes.SIGNUP_FAILURE:
			return responseStateFailure<IAccountState>(state, 'stateSignUp', response);
		case accountTypes.SIGNIN_START:
			return responseStateStart<IAccountState>(state, 'stateSignIn');
		case accountTypes.SIGNIN_SUCCESS:
			return responseStateSuccess<IAccountState>(state, 'stateSignIn', response);
		case accountTypes.SIGNIN_FAILURE:
			return responseStateFailure<IAccountState>(state, 'stateSignIn', response);
		default:
			return state;
	}
};

export default accountReducer;
