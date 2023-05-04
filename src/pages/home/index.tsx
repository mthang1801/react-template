import { Form } from 'antd';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getChannelListStart } from 'src/cores/actions/channel.actions';
import socket from 'src/helpers/socket.io';
import { useIsMount } from 'src/hooks/useIsMount';
import { TChannel } from 'src/types/channel.type';
import { AppState } from 'src/types/types';
import MessageInput from './components/MessageInput';
import MessageView from './components/MessageView';

const socketDefault = socket();

function Home() {
	const [form] = Form.useForm();
	const isMount = useIsMount();
	const dispatch = useDispatch();
	const [msgFromServer, setMsgFromServer] = useState(null);
	const [socketChannelList, setSocketChannelList] = useState<any>([]);
	const stateChannelList = useSelector((state: AppState) => state.channelReducer.stateChannelList);
	const [channels, setChannels] = useState<TChannel[]>([]);
	useEffect(() => {
		dispatch(getChannelListStart());
	}, []);

	// useEffect(() => {
	// 	if (isMount) return;
	// 	socketDefault.connect();

	// 	return () => {
	// 		socketDefault.disconnect();
	// 	};
	// }, []);

	useEffect(() => {
		if (isMount) return;
		const { data } = stateChannelList;

		if (!data || !data.length) return;
		const channels = data as TChannel[];
		setChannels(channels);
		const defaultChannel: TChannel = {
			name: 'Default',
			endpoint: '/',
			thumbnail: '',
			rooms: []
		};
		const nsSockets = [defaultChannel, ...channels].map((channel) => {
			const nsSocket = socket(channel.endpoint);
			nsSocket.connect();
			return nsSocket;
		});
    
		setSocketChannelList(nsSockets);

		return () => {
			[defaultChannel, ...channels].forEach((channel) => {
				socket(channel.endpoint).disconnect();
			});
		};
	}, [stateChannelList.isLoading]);



	const onSendMessage = (props: { chat: string }) => {
		const { chat } = props;
	};
	return (
		<div className="home">
			<MessageView />
			<MessageInput form={form} onSendMessage={onSendMessage} />
		</div>
	);
}

export default Home;
