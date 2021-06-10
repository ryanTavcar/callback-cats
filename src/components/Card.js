import React from 'react'
import '../styles/Card.css';

function Card(props) {
    return (
        <div className="Card"> 
            <div >
                <div >
                    <img src={'/' + props.image} alt="card-img" height='300px' width='100%'/>
                </div>
                {/* <h3>{props.name}</h3>
                <p>{props.description}</p> */}
                <div>
                    <h3>{props.name}</h3>
                    <p>{props.description}</p>
                    <p>Likes: {props.likes}</p>
                    <p>Dislikes: {props.dislikes}</p>
                    <p>Location: {props.location}</p>
                    <p>Suburb: {props.suburbs}</p>
                    <p>Availability: {props.availability}</p>
                </div>
                <button className="matchButton" >Match</button>
            </div>
        </div>
    )
}

export default Card
