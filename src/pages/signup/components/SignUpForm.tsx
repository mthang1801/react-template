import { Button, Form, Input } from 'antd';
import { Link } from 'react-router-dom';
import SvgLogoDDVx1 from 'src/assets/svg/SvgLogoDDV';
import router from 'src/cores/router';
import { FormSignUp } from '../signup.type';

function SignUpForm(props: { onFinishForm: (values: FormSignUp) => void }) {
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
				<Button
					id="form-button-signin"
					htmlType="submit"
					className="w-full bg-purple-600 text-white hover:text-white"
				>
					Đăng ký
				</Button>
			</Form>
			<div className="mt-4">
				<p>
					Đã có tài khoản?{' '}
					<Link
						className="text-blue-600 hover:text-blue-800"
						to={router.SIGN_IN}
					>
						Đăng nhập
					</Link>{' '}
				</p>
			</div>
		</div>
	);
}

export default SignUpForm;
