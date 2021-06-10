import React from 'react';
// import logo from '../../../src/logo.svg';
// // import {ReactComponent as logo} from "../../images/logo.svg"
import {FaBars} from 'react-icons/fa';
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLink} from './NavbarElements';
// import {BrowserRouter as Route} from 'react-router-dom';
// import Home from '../../pages/home'
// import Matches from '../../pages/Matches'

const logo1 = require('../../catlogo1.png');

const Navbar = ({ toggle }) => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to="/"><img scr={logo1} alt=""/></NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavMenu>
                            <NavItem>
                                <NavLink to="../index">Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="../../pages/profile">Profile</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="../../pages/Matches">Favourites</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="../../pages/about">About</NavLink>
                            </NavItem>
                        </NavMenu>
                    </NavMenu>
                    
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar
