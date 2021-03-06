import React from 'react'
import '../styles/Card.css';

function Card(props) {

    const matchCard = window.location.pathname;

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
            location: location
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
            <div className="cardContainer">
                <div >
                    <img src={'/' + props.image} alt="card-img" height='300px' width='100%'/>
                </div>
                <div>
                    <h3>{props.name}</h3>
                    <div className="cardText" >
                    <p >{props.description}</p>
                    <p><strong>Likes: </strong>{props.likes}</p>
                    <p><strong>Dislikes: </strong> {props.dislikes}</p>
                    <hr></hr>
                    <p><strong>If we meet</strong></p>
                    <p><strong>Location: </strong> {props.location}</p>
                    <p><strong>Suburbs: </strong> {props.suburbs}</p>
                    <p><strong>Availability: </strong> {props.availability}</p>
                    </div>
                </div>
                {matchCard === '/pages/match' &&
                    <button className="cardButtons" onClick={ () => onMatchButton(props.id, props.name, props.description, props.likes, props.dislikes, props.image, props.availability, props.suburbs, props.location)}>
                        <span className="checkmark">
                            <div className="checkmark_stem"></div>
                            <div className="checkmark_kick"></div>
                        </span>
                    </button>
                }
            </div>
        

    )
}

export default Card
