import type { MenuProps } from 'antd';
import { Layout } from 'antd';
import React from 'react';
import Body from './Body';
import Footer from './Footer';
import Header from './Header';
import LeftSide from './LeftSide';

type MenuItem = Required<MenuProps>['items'][number];

const Main: React.FC = () => {
	return (
		<Layout style={{ minHeight: '100vh' }}>
			<LeftSide />
			<Layout className="site-layout">
				<Header />
				<Body />
			</Layout>
		</Layout>
	);
};

export default Main;
