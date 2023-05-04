import type { MenuProps } from 'antd';
import { Layout, theme } from 'antd';

const { Header : AntHeader, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

const items1: MenuProps['items'] = ['1', '2', '3'].map((key) => ({
	key,
	label: `nav ${key}`
}));

const Header = () => {
	const {
		token: { colorBgContainer }
	} = theme.useToken();

	return <AntHeader style={{ padding: 0, background: colorBgContainer }} />;
};

export default Header;
