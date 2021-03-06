import React,{useState,useEffect} from 'react';
// // import TinderCard from 'react-tinder-card';
// import '../styles/Card.css';
// import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
// import CancelOutlinedIcon from '@material-ui/icons/CancelOutlined';
// import IconButton from '@material-ui/core/IconButton';
// import {Link} from 'react-router-dom';
// import React,{useState, useEffect} from 'react';
// import Match from './Match'
// import TinderCard from 'react-tinder-card';
import '../styles/Card.css';
import Card from '../components/Card';

// import {
//     BrowserRouter as Router,
//     Switch,
//     Route,
//     Link
// } from "react-router-dom";

// const BoldParagraph = ({firstWord,theRest}) => {
//     return(
//         <p><b>{firstWord}</b>{theRest}</p>
//     )
// }
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
            <h3>Checkout all your favorite matches here</h3>

            {useData.length === 0 && <h4 style={{textAlign: 'center'}}>No matches</h4>}
            <div className="main-container"> 
            {useData.map( ({ _id, name, description, likes, dislikes, image, availability, suburbs, location }) => (
                <div key={_id}>
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
