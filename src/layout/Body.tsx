import type { MenuProps } from 'antd';
import { Layout, theme } from 'antd';
import { Outlet } from 'react-router-dom';

const { Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

const Body = () => {
	const {
		token: { colorBgContainer }
	} = theme.useToken();

	return (
		<Content style={{ margin: '16px' }}>
			<div style={{ padding: 0, minHeight: 360, background: colorBgContainer, height: '100%', borderRadius: "8  0  8 0", border: 'none', overflow: 'hidden' }}>
				<Outlet />
			</div>
		</Content>
	);
};

export default Body;
