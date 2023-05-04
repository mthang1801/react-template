import channelTypes, { TCreateChannelPayload } from "../types/channel.types";

export const createChannelStart = (payload : TCreateChannelPayload) => ({
  type : channelTypes.CREATE_CHANNEL_START, 
  payload : {data : payload}
})
export const getChannelListStart = (params?: any) => ({
  type : channelTypes.GET_CHANNEL_LIST_START, 
  payload: {params}
})