import React,{useState,useEffect} from 'react';
// import Matches from './Matches'
// import TinderCard from 'react-tinder-card';
import '../styles/Card.css';
import Card from '../components/Card';

// import {
//     BrowserRouter as Router,
//     Switch,
//     Route,
//     Link
// } from "react-router-dom";

const Match = () => {

    const [useData, setData] = useState([]);

    async function fetchUrl() {
        const response = await fetch("https://callbackcatsapi.herokuapp.com/users/");
        const json = await response.json();
        setData(json);
    }

    useEffect( () => {
        fetchUrl();
    }, []);

    

    return (
        <>
        <h3>Browse through potential dates!</h3>
        <div className="main-container"> 
            {useData.map( ({ _id, name, description, likes, dislikes, image, availability, suburbs, location }) => (
                <div className='container' key={_id}>
                    <Card
                        id={_id} 
                        name={name}
                        description={description}
                        likes={likes}
                        dislikes={dislikes}
                        image={image}
                        availability={availability}
                        location={location}
                        suburbs={suburbs}
                    />
                    </div>
                ))}
            </div>
        </>
    )
}

export default Match
