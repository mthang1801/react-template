import { Col, Row } from 'antd';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import imageLogoDDV from 'src/assets/images/logoDDV.png';
import { notifyError, notifySuccess } from 'src/components/notification';
import { signInAccount } from 'src/cores/actions/account.actions';
import storage from 'src/cores/storage';
import getMessage  from 'src/helpers/getMessage';
import { useIsMount } from 'src/hooks/useIsMount';
import { AppState } from '../../types/types';
import SignInForm from './components/SignInForm';
import { FormSignIn } from './signin.type';
function SignIn() {
	const dispatch = useDispatch();
	const isMount = useIsMount();
	const stateSignInt = useSelector((state: AppState) => state.accountReducer.stateSignIn);

	const onFinishForm = (values: FormSignIn) => {
		dispatch(signInAccount(values));
	};

	useEffect(() => {
		if (isMount) return;
		const { error, isLoading, success, data, message } = stateSignInt;
		if (!success) {
			notifyError(getMessage(message));
			return;
		}

		if (message) {
			notifySuccess(message);
		}
		console.log(data);
		storage.CLIENT_ID.save(data._id);
		storage.TOKEN.save(data.token);
	}, [stateSignInt.isLoading]);

	return (
		<Row align="middle">
			<Col xs={0} sm={0} md={14} xl={14}>
				<img src={imageLogoDDV} style={{ height: '100%', width: 'auto', objectFit: 'contain' }} />
			</Col>
			<Col xs={24} sm={24} md={10} xl={10}>
				<SignInForm onFinishForm={onFinishForm} />
			</Col>
		</Row>
	);
}

export default SignIn;
