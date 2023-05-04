import { PlusOutlined } from '@ant-design/icons';
import { Button, Form, Input, Space } from 'antd';
import Modal from 'antd/es/modal/Modal';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createChannelStart, getChannelListStart } from 'src/cores/actions/channel.actions';
import { TCreateChannelPayload } from 'src/cores/types/channel.types';
import getMessage from 'src/helpers/getMessage';
import { AppState } from 'src/types/types';
import { notifyError, notifySuccess } from './notification';
const ModalCreateChannel = (props: { isOpenCREATEChannel: boolean; setIsOpenCreateChannel: React.Dispatch<React.SetStateAction<boolean>> }) => {
	const [form] = Form.useForm();
	const dispatch = useDispatch();
	const createChannelState = useSelector((state: AppState) => state.channelReducer.stateCreateChannel);

	const { isOpenCREATEChannel, setIsOpenCreateChannel } = props;

	function onFinishCreateChannel(values: TCreateChannelPayload) {
		dispatch(createChannelStart(values));
	}

	useEffect(() => {
		const { message, success, data } = createChannelState;
		if (!success) {
			notifyError(getMessage(message));
			return;
		}

		if (message) {
			notifySuccess(message);
		}

		form.resetFields();
		setIsOpenCreateChannel(false);
		dispatch(getChannelListStart());
	}, [createChannelState.isLoading]);

	return (
		<Modal onOk={form.submit} title="Tạo Chanel" open={isOpenCREATEChannel} onCancel={() => setIsOpenCreateChannel(false)}>
			<Form form={form} layout="vertical" onFinish={onFinishCreateChannel}>
				<Form.Item name="name" rules={[{ required: true, message: 'Name Is Not Empty' }]} label="Channel Name" required>
					<Input />
				</Form.Item>
				<Form.Item name="endpoint" label="Endpoint" required>
					<Input />
				</Form.Item>
				<Form.Item name="thumbnail" label="Thumbnail" required>
					<Input />
				</Form.Item>
				<Form.List name="rooms">
					{(fields, { add, remove }) => (
						<>
							{fields.map(({ key, name, ...restField }) => (
								<Space key={key} style={{ display: 'flex', marginBottom: 8 }} align="baseline">
									<Form.Item {...restField} name={[name, 'name']} rules={[{ required: true, message: 'Missing name' }]}>
										<Input placeholder="Room Name" />
									</Form.Item>
									<Form.Item {...restField} name={[name, 'endpoint']} rules={[{ required: true, message: 'Missing endpoint' }]}>
										<Input placeholder="Endpoint" />
									</Form.Item>
									<Form.Item {...restField} name={[name, 'thumbnail']}>
										<Input placeholder="Thumbnail" />
									</Form.Item>
								</Space>
							))}
							<Form.Item>
								<Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
									Add Room
								</Button>
							</Form.Item>
						</>
					)}
				</Form.List>
			</Form>
		</Modal>
	);
};

export default ModalCreateChannel;
