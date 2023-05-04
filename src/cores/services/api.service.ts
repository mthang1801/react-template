import axios, { AxiosResponse } from 'axios';
import storage from 'src/cores/storage';
import { ICatchError } from '../interfaces/root.interfaces';

type TAPIMethod = 'POST' | 'GET' | 'PUT' | 'DELETE';
type TConfigService = {
	headers: any;
	data?: any;
	url: string;
	method: TAPIMethod;
	params?: any;
};

type ApiConfigArgument<T> = {
	method: TAPIMethod;
	url: string;
	payload?: T;
	params?: any;
};

class ApiService<T extends any> {
	private static instance: ApiService<any> | null = null;

	private configService: TConfigService = {
		headers: {},
		data: {},
		url: '',
		method: 'GET'
	};

	static getInstance() {
		if (!this.instance) this.instance = new ApiService();
		return this.instance;
	}

	setHeader() {
		const token = storage.TOKEN.get();
		const clientId = storage.CLIENT_ID.get();

		const headers = {
			Authorization: token || undefined,
			'x-client-id': clientId || undefined
		};

		this.configService.headers = headers;
		return this;
	}

	setUrl(url: string) {
		this.configService.url = url;
		return this;
	}

	setData(data: T) {
		this.configService.data = data;
		return this;
	}

	setParams(params?: any) {
		this.configService.params = params;
		return this;
	}

	setConfigService(props: ApiConfigArgument<T>) {
		const { method, url, params, payload } = props;
		const configChaining = this.setHeader().setUrl(url).setMethod(method);
    
		if (payload) configChaining.setData(payload);
		if (params) configChaining.setParams(params);

		return configChaining.configService;
	}

	setMethod(method: TAPIMethod) {
		this.configService.method = method;
		return this;
	}

	callAPI(props: ApiConfigArgument<T>): Promise<AxiosResponse<any, any>> {
		const { method, url, payload, params } = props;
		return axios(this.setConfigService({ method, url, payload, params }));
	}

	post(url: string, payload: T) {
		return new Promise((resolve, reject) => {
			this.callAPI({ method: 'POST', url, payload })
				.then((res) => resolve(res))
				.catch((err) => reject(this.handleError(err.response)));
		});
	}

	put(url: string, payload: T) {
		return new Promise((resolve, reject) => {
			this.callAPI({ method: 'PUT', url, payload })
				.then((res) => resolve(res))
				.catch((err) => reject(this.handleError(err.response)));
		});
	}

	delete(url: string, payload: T) {
		return new Promise((resolve, reject) => {
			this.callAPI({ method: 'DELETE', url, payload })
				.then((res) => resolve(res))
				.catch((err) => reject(this.handleError(err.response)));
		});
	}

	get(url: string, params?: any) {
		return new Promise((resolve, reject) => {
			this.callAPI({ method: 'GET', url, params })
				.then((res) => resolve(res))
				.catch((err) => reject(this.handleError(err.response)));
		});
	}

	handleError(err: any): ICatchError {
		return {
			message: err?.data?.message,
			statusCode: err?.data?.statusCode || 500,
			data: err?.data?.data || 'Something went wrong'
		};
	}
}

export default ApiService.getInstance();
