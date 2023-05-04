import { API_GATEWAY } from './config';

const apiV1 = (endpoint: string): string => [API_GATEWAY, `api/v1/${endpoint}`.replace(new RegExp('//', 'g'), '/')].join('/');

const API_LIST = {
	SIGNUP: apiV1('auth/signup'),
	SIGNIN: apiV1('auth/signin'),
	CREATE_CHANNEL: apiV1('channel/'),
	GET_CHANNEL_LIST: apiV1('channel'),
};

export default API_LIST;
