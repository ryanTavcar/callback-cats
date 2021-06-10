import React from 'react';
// import logo from '../../../src/logo.svg';
// // import {ReactComponent as logo} from "../../images/logo.svg"
import {FaBars} from 'react-icons/fa';
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks} from './NavbarElements';


const Navbar = ({ toggle }) => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to='/'></NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavMenu>
                            <NavItem>
                                <NavLinks>Home</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks>Profile</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks>Fav</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks>About</NavLinks>
                            </NavItem>
                        </NavMenu>
                    </NavMenu>
                    
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar
