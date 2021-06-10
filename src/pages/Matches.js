import React,{useState, useEffect} from 'react';
import Match from './Match'
// import TinderCard from 'react-tinder-card';
import '../styles/Card.css';
import Card from '../components/Card';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

const Matches = () => {

    const [useData, setData] = useState([]);

    async function fetchUrl() {
        const response = await fetch("https://callbackcatsapi.herokuapp.com/match/");
        const json = await response.json();
        setData(json);
    }

    useEffect( () => {
        fetchUrl();
    }, []);


    return (
        <div>
            <h1>This is match page</h1>

            <div className="main-container"> 
            {useData.map( ({ _id, name, description, likes, dislikes, image, availability, suburbs, location }) => (
                <div className='container' key={_id}>
                    <Card name={name}
                        description={description}
                        likes={likes}
                        dislikes={dislikes}
                        image={image}
                        availability={availability}
                        location={location}
                        suburbs={suburbs}
                    />
                    {/* <div className = 'cardContainer'>
                        <div className="cardImage">
                            <img src={`/`+ image} alt={name} height='400px' width='100%'/>
                        </div>
                        <div>
                            <h3>{name}</h3>
                            <p>{description}</p>
                            <p>Likes: {likes}</p>
                            <p>Dislikes: {dislikes}</p>
                            <p>Location: {location}</p>
                            <p>Suburb: {suburbs}</p>
                            <p>Availability: {availability}</p>
                        </div> 
                    </div> */}
                </div>
            ))}
            </div>
        </div>
    )
}

export default Matches;
