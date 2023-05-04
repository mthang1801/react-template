import { Reducer } from 'redux';
import { IChannelState } from '../interfaces/channel.interface';
import { ISyntheticAction } from '../interfaces/root.interfaces';
import channelTypes from '../types/channel.types';
import { responseStateFailure, responseStateStart, responseStateSuccess } from './state/responseState';
import { rootState } from './state/root.states';
const initState: IChannelState = {
	stateCreateChannel: { ...rootState },
  stateChannelList : {...rootState}
};

const channelReducer: Reducer<IChannelState, ISyntheticAction> = (state: IChannelState = initState, { type, response }: ISyntheticAction) => {
	switch (type) {
		case channelTypes.CREATE_CHANNEL_START:
			return responseStateStart<IChannelState>(state, 'stateCreateChannel');
		case channelTypes.CREATE_CHANNEL_SUCCESS:
			return responseStateSuccess<IChannelState>(state, 'stateCreateChannel', response);
		case channelTypes.CREATE_CHANNEL_FAILURE:
			return responseStateFailure<IChannelState>(state, 'stateCreateChannel', response);
		case channelTypes.GET_CHANNEL_LIST_START:
			return responseStateStart<IChannelState>(state, "stateChannelList");
		case channelTypes.GET_CHANNEL_LIST_SUCCESS:
			return responseStateSuccess<IChannelState>(state, "stateChannelList", response);
		case channelTypes.GET_CHANNEL_LIST_FAILURE:
			return responseStateFailure<IChannelState>(state, "stateChannelList", response);

		default:
			return state;
	}
};

export default channelReducer;
