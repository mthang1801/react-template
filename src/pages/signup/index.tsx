import { Col, Row } from 'antd';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import imageLogoDDV from 'src/assets/images/logoDDV.png';
import { notifyError, notifySuccess } from 'src/components/notification';
import { signUpAccount } from 'src/cores/actions/account.actions';
import router from 'src/cores/router';
import getMessage  from 'src/helpers/getMessage';
import { useIsMount } from 'src/hooks/useIsMount';
import { AppState } from 'src/types/types';
import SignUpForm from './components/SignUpForm';
import { FormSignUp } from './signup.type';
function SignUp() {
	const dispatch = useDispatch();
	const isMount = useIsMount();
	const navigate = useNavigate();
	const stateSignUp = useSelector((state: AppState) => state.accountReducer.stateSignUp);
	const onFinishForm = (values: FormSignUp) => {
		dispatch(signUpAccount(values));
	};

	useEffect(() => {
		if (isMount) return;
		const { success, message, error, data } = stateSignUp;
		if (success) {
			if (message) {
				notifySuccess(message);
			}
			navigate(router.SIGN_IN);
		} else {
			notifyError(getMessage(message));
		}
	}, [stateSignUp.isLoading]);

	return (
		<Row align="middle">
			<Col xs={0} sm={0} md={14} xl={14}>
				<img src={imageLogoDDV} style={{ height: '100%', width: 'auto', objectFit: 'contain' }} />
			</Col>
			<Col xs={24} sm={24} md={10} xl={10}>
				<SignUpForm onFinishForm={onFinishForm} />
			</Col>
		</Row>
	);
}

export default SignUp;
