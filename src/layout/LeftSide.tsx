import { PlusOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Layout, Menu } from 'antd';

import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import ModalCreateChannel from 'src/components/ModalCreateChannel';
import { TChannel } from 'src/types/channel.type';
import { AppState } from 'src/types/types';

const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(label: React.ReactNode, key: React.Key, icon?: React.ReactNode, children?: MenuItem[]): MenuItem {
	return {
		key,
		icon,
		children,
		label
	} as MenuItem;
}

const LeftSide = () => {
	const [collapsed, setCollapsed] = useState(false);
	const [isOpenCREATEChannel, setIsOpenCreateChannel] = useState<boolean>(false);
	const stateChannelList = useSelector((state: AppState) => state.channelReducer.stateChannelList);
  const [channelList, setChannelList] = useState<TChannel[]>([]);
	const onClickMenu = ({ item, key, keyPath, domEvent }: any) => {
		if (key === 'addChannel') {
			setIsOpenCreateChannel(true);
		}
	};

  useEffect(() => {
    const {isLoading, data} = stateChannelList;
    if(data){
      setChannelList(data);
    }
  }, [stateChannelList.isLoading])

	const channels: MenuItem[] = Array.isArray(channelList)
		? channelList
				.map((channel: TChannel) => {
					if (channel.rooms.length) {
						const roomsItems = channel.rooms.map((room) => getItem(room.name, room.endpoint, room.thumbnail));
						return getItem(channel.name, channel.endpoint, channel.thumbnail, roomsItems);
					}
					return null;
				})
				.filter(Boolean)
		: [];

	const items: MenuItem[] = [...channels, getItem('Add Channel', 'addChannel', <PlusOutlined />)];

	return (
		<Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
			<ModalCreateChannel isOpenCREATEChannel={isOpenCREATEChannel} setIsOpenCreateChannel={setIsOpenCreateChannel} />
			<div style={{ height: 32, margin: 16, background: 'rgba(255, 255, 255, 0.2)' }} />
			<Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} onClick={onClickMenu} />
		</Sider>
	);
};

export default LeftSide;
