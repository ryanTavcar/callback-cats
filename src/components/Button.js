import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';


export const ButtonClick = styled.div`
    margin-top: 150px;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 13px 17px;

    position: absolute;
    width: 145px;
    height: 48px;
    top: 510px;

    background: #73676A;

    border: 2px solid #F2F2F2;
    box-sizing: border-box;
    border-radius: 10px;

    &:hover {
        background: #59363F;
        transition: 0.2s ease-in-out;
    }

`
export const ButtonText = styled.div`
    position: static;
    width: auto;
    height: 22px;
    left: 17px;
    top: 13px;
    align-items: center;

    font-family: Roboto;
    font-weight: 600;
    font-size: 18px;
    line-height: auto;
    letter-spacing: -0.0009em;
    color: #F2F2F2;
`

function Button() {
    const history = useHistory();
    const navigateTo = () => history.push('../../pages/match');
  
    return (
     <ButtonClick>
            <ButtonText onClick={navigateTo} type="button">
                Find a Match
            </ButtonText>
     </ButtonClick>
    );
  }
export default Button
