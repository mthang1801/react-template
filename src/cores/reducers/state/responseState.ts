import { IStateResponse } from 'src/cores/interfaces/root.interfaces';
import { rootState } from './root.states';

export const responseStateStart = <T>(
	state: T,
	field: keyof T
): T => ({
	...state,
	[field]: {
		...rootState,
		isLoading: true
	}
});

export const responseStateSuccess = <T>(
	state: T,
  field: keyof T,
	response: IStateResponse
): T => ({
	...state,
	[field]: {
		...rootState,
		data: response?.data,
		message: response?.message,
		success: response?.success,
		isLoading: false
	}
});

export const responseStateFailure = <T>(
	state: T,
  field: keyof T,
	response: IStateResponse
): T => ({
	...state,
	[field]: {
		...rootState,
		isLoading: false,
		error: true,
    success: false,
		message: response?.message
	}
});
