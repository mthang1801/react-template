import { SendOutlined } from '@ant-design/icons';
import { Form, FormInstance, Input } from 'antd';

const MessageInput = ({ form, onSendMessage }: { form: FormInstance; onSendMessage: (props: { chat: string }) => void }) => {
	return (
		<div className="home__input-message">
			<Form form={form} onFinish={onSendMessage} className="home__sub__form">
				<Form.Item name="chat">
					<Input className="home__input-message__form-input" placeholder="Type a message" style={{ resize: 'none' }} />
				</Form.Item>
			</Form>
			<div className="home__input-message__send-button">
				<button onClick={() => form.submit()}>
					<SendOutlined />
				</button>
			</div>
		</div>
	);
};

export default MessageInput;
