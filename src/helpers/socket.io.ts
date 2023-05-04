import io from 'socket.io-client';
import { API_GATEWAY } from 'src/cores/services/config';
import storage from 'src/cores/storage';
import { TChannel } from 'src/types/channel.type';

type AuthHeaders = {
	Authorization?: string;
	['x-client-id']?: string;
};

const clientId = storage.CLIENT_ID.get();

export const socket = (namespace : string = "/") => {
  const extraHeaders : any = {}
  if(clientId){
    extraHeaders['x-client-id'] = clientId
  }
  return io(`${API_GATEWAY}${namespace}`, {extraHeaders})
} ;
export default socket;
