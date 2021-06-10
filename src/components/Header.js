import React from 'react';
import {Link} from 'react-router-dom';
const Header = () => {
    return (
        <div>
           
            <Link to='/'>  
                Home
            </Link>  
            <Link to='/'>  
                About
            </Link> 
            <Link to='/>'>
                PersonImg
            </Link>
            <h1>this is header page</h1>
            <button>Find match</button>
            
        </div>
    )
}

export default Header;
