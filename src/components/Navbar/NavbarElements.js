import { Link as LinkR} from 'react-router-dom';
// import { Link as LinkS} from 'react-scroll';
import styled from 'styled-components';


export const Nav = styled.nav`
    background: ;
    height: 80px;
    justify-content: flex-end;
    background:#F4CFCF
    font-size: 1rem;
    top: 0;
    z-index: 10;

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }

`
export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    // float: right;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24 px;
    // max-width: 1100px;
`
export const NavLogo = styled.div`
    justify-self: flex-start;
    cursor: pointer;
    // font-size: 1.5rem;
    display: flex;
    width: 24px;
    height: 24px;
    align-items: center;
    margin-left: 24px;
    // text-decoration: none;
`
export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 768px){
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #000;
}
`

export const NavMenu = styled.ul`
    display: flex;
    align-items: right;
    list-style: none;
    text-align: flex-end;
    margin-right: 0;

    @media screen and (max-width: 768px) {
        display: none;
}
`
export const NavItem = styled.li`
    height: 180px;
`

export const NavLink = styled(LinkR)`
    color: #000;
    align-items: right;
    text-decoration: none;
    padding: 0 1 rem;
    height: 100%;
    cursor: pointer;
    margin: 20px;
    font-size: 1.5rem;

    margin-top: 20px;   

    &.active{
        border-bottom: 3px solid #59363F;
    }
`
