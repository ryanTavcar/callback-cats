import React from 'react';
import Match from './Match'
import '../styles/Index.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Button from '../components/Button'

function Home() {

    return (
        <div className="logo-container">
            <div>
                <img className="desktop-logo" src={require('../catlogo.png').default} alt="callback cats logo" ></img>
            </div>
            <h2 className="heading">Purrr-haps We Can Cuddle Later?</h2>
            <Button />
        </div>
    )
}

export default Home
