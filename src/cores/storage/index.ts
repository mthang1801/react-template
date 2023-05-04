// import { ILanguage, IThemeName } from "src/services/interfaces/global.interfaces";

import { IThemeName } from "../interfaces/global.interfaces";

export class LocalStorage<T extends string> {
	protected storage: Storage = window.localStorage;
	constructor(protected key: string) {}

	save(payload: string) {
		this.storage.setItem(this.key, payload);
		return this;
	}

	get<T>() {
		return this.storage.getItem(this.key) as T;
	}

	remove() {
		return this.storage.getItem(this.key);
	}
}

export default {
	ACCOUNT: new LocalStorage<string>('ACCOUNT'),
	TOKEN: new LocalStorage<string>('TOKEN'),
  CHANNELS : new LocalStorage<string>("CHANNELS"),
	LANGUAGE: new LocalStorage<string>('LANGUAGE'),
	THEME: new LocalStorage<IThemeName>('THEME'),
	ACCOUNT_LOGIN: new LocalStorage<string>('ACCOUNT_LOGIN'),
	MENU: new LocalStorage<string>('MENU'),
	CLIENT_ID: new LocalStorage<string>('CLIENT_ID')
};
