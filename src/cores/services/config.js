const env = process.env;

// export const API_URL = CONFIG[env.REACT_APP_ENVIROMENT].url;
export const NAME_SERVER = env.REACT_APP_ENVIROMENT;
export const API_GATEWAY = env.REACT_APP_API_GATEWAY;
export const API_END_POINT = `${env.REACT_APP_API_URL}`;
export const API_URL_FE = `${env.REACT_APP_URL_FE}`;
export const API_CDN = env.REACT_APP_API_CDN;

