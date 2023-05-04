import { Button, Form, Input } from 'antd';
import { Link } from 'react-router-dom';
import SvgLogoDDVx1 from 'src/assets/svg/SvgLogoDDV';
import router from 'src/cores/router';
import { FormSignIn } from '../signin.type';

function SignInForm(props: { onFinishForm: (values: FormSignIn) => void }) {
	const { onFinishForm } = props;
	return (
		<div className="border border-border rounded-2xl p-8 signin">
			<div className="flex justify-center mb-6">
				<SvgLogoDDVx1 />
			</div>
			<Form onFinish={onFinishForm}>
				<Form.Item name="username">
					<Input id="form-username" placeholder="Username" />
				</Form.Item>
				<Form.Item name="password">
					<Input type="password" id="form-password" placeholder="Password" />
				</Form.Item>
				<Button id="form-button-signin" htmlType="submit" className="btn-default w-full bg-red-500 hover:bg-red-800 text-white hover:!text-white border-transparent outline-none border-none">
					Đăng nhập
				</Button>
			</Form>
			<div className="mt-4">
				<p>
					Chưa có tài khoản?{' '}
					<Link className="text-blue-600 hover:text-blue-80" to={router.SIGN_UP}>
						Đăng ký ngay
					</Link>{' '}
				</p>
			</div>
		</div>
	);
}

export default SignInForm;
