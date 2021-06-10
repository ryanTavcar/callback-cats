import React from 'react';
import {SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink} from './SidebarElements'

const Sidebar = ({isOpen, toggle}) => {
    return (
        <>
            <SidebarContainer isOpen={isOpen} onClick={toggle}>
                <Icon onClick = {toggle}>
                    <CloseIcon />
                </Icon>
                <SidebarWrapper>
                    <SidebarMenu>
                        <SidebarLink to="home">Home</SidebarLink>
                        <SidebarLink to="about">About</SidebarLink>
                        <SidebarLink to="profile">Profile</SidebarLink>
                        <SidebarLink to="fav">Fav</SidebarLink>
                        {/* <SidebarRoute to='/'>Profile</SidebarRoute> */}
                    </SidebarMenu>
                </SidebarWrapper>
            </SidebarContainer>
        </>
    )
}

export default Sidebar;