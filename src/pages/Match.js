import React,{useState,useEffect} from 'react';
import Matches from './Matches'
// import TinderCard from 'react-tinder-card';
import '../styles/Card.css';
import Card from '../components/Card';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

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

    function onMatchButton(_id, name, description, likes, dislikes, image, availability, suburbs, location) {
        console.log(_id)
        console.log(name)
        console.log(description)
        console.log(dislikes)
        console.log(image)
        console.log(availability)
        console.log(suburbs)
        console.log(location)

        const payload = {
            _id: _id,
            name: name,
            description: description,
            likes: likes,
            dislikes: dislikes,
            image: image,
            availability: availability,
            suburbs: suburbs,
            location: location,
        };

        fetch("https://callbackcatsapi.herokuapp.com/match/add", {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: "POST",
                body: JSON.stringify( payload )
                })
            .then( (res) => res.json() )
            .then( (data) => console.log(JSON.stringify(data)) )
    }

    return (
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
    )
}

export default Match
