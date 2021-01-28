/* eslint-disable no-unused-vars */
import React from 'react';
import './Sidebar.css';
import SidebarRow from './SidebarRow/SidebarRow';

import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import {ExpandMoreOutlined} from '@material-ui/icons/ExpandMoreOutlined';

import {useStateValue} from '../../context/StateProvider';


const Sidebar = () => {
    const [{user}, dispatch] = useStateValue();
    return (
        <div className="sidebar">
            <SidebarRow src={user.photoURL} title={user.displayName} />
            
            <Sidebar Icon={LocalHospitalIcon} title='COVID-19 Information Center' />
            <SidebarRow Icon={EmojiFlagsIcon} title='Pages' />
            <SidebarRow Icon={PeopleIcon} title='friends' />
            <SidebarRow Icon={ChatIcon} title='chats' />
            <SidebarRow Icon={StorefrontIcon} title='Marketplace' />
            <SidebarRow Icon={VideoLibraryIcon} title='videos' />
            <SidebarRow Icon={ExpandMoreOutlined} title='expand' />
        </div>
    )
}

export default Sidebar;
