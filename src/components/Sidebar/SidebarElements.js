import styled from 'styled-components';
// import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';
import {FaTimes} from 'react-icons/fa';

export const SidebarContainer = styled.aside`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: #F4CFCF;
    align-items: center;
    display: grid;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({isOpen}) => (isOpen ? '100%' : '0')};
    top: ${({isOpen}) => (isOpen ? '0' : '-100%')};
`

export const CloseIcon = styled(FaTimes)`
    color: #OOO;
`

export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;

`

export const SidebarWrapper = styled.div`
    color: #000;
`

export const SidebarLink = styled(LinkS)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    text-decoration: none;
    color: #73676A;
    cursor: pointer;

    &:hover {
        color: #9F5D6D;
        transition: 0.2s ease-in-out;
    }
`

export const SidebarMenu = styled.ul`
    display: grid;
    drid-template-columns: 1fr;
    grid-template-rows: repeat(6, 80px);
    text-align: center;

    @media screen and (max-width: 480px){
        grid-template-rows: repeat(6,60px);
    }
`

// export const SidebarRoute = styled(LinkR)`
//     border-radius: 50px;
//     background: #F4CFCF;
//     write-space: nowrap;
//     padding: 16px 64px;
//     color: #ddd;
//     font-size: 16px;
//     outline: none;
//     border: none;
//     cursor: pointer;
//     transition: all 0.2s ease-in-out;
//     text-decoration: none;

//     &:hover{
//         transition: all 0.2s ease-in0out;
//         background:#fff;
//         color: #ddd;
//     }
// `
