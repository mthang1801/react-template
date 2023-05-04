import { useEffect } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import router from 'src/cores/router';
import storage from './cores/storage';
import Main from './layout/Main';
import Home from './pages/home';
import SignIn from './pages/signin';
import SignUp from './pages/signup';

function App() {
	const navigate = useNavigate();
	const { pathname }: any = useLocation();
	useEffect(() => {
		function checkAuth() {
			const token = storage.TOKEN.get();
			const clientId = storage.CLIENT_ID.get();
			if (!token || !clientId) {
				navigate(router.SIGN_IN);
				return;
			}
			[router.SIGN_IN, router.SIGN_UP].includes(pathname) ? navigate(router.HOME) : navigate(pathname);
		}
		checkAuth();
	}, [pathname]);

	return (
		<div className="App">
			<Routes>
				<Route path={router.SIGN_IN} element={<SignIn />}></Route>
				<Route path={router.SIGN_UP} element={<SignUp />}></Route>
				<Route path="/" element={<Main />}>
					<Route index element={<Home />}></Route>
				</Route>
			</Routes>
		</div>
	);
}

export default App;
