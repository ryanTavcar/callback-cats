import React,{useState,useEffect} from 'react';
// import TinderCard from 'react-tinder-card';
import '../styles/Card.css';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import CancelOutlinedIcon from '@material-ui/icons/CancelOutlined';
import IconButton from '@material-ui/core/IconButton';
import {Link} from 'react-router-dom';

const BoldParagraph = ({firstWord,theRest}) => {
    return(
        <p><b>{firstWord}</b>{theRest}</p>
    )
}
const Matches = () => {

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
                <div> 
                    {useData.map( ({ _id, name, description, likes, dislikes, image, availability, suburb, location }) => (
                        <div className='container'>
                            <div className = 'cardContainer' key={_id}>
                                <div className="cardImage">
                                    <img src={`/`+ image} alt={name} height='400px' width='100%'/>
                                    {/* height='200px' width='fit-content' */}
                                </div>
                                <div>
                                {console.log(image)}
                                    <h2>{name}</h2>
                                    <p>{description}</p>
                                    <BoldParagraph firstWord = 'Likes:'  theRest ={likes} />
                                    <BoldParagraph firstWord = 'Dislikes:' theRest = {dislikes} />
                                    <h3>If we meet:</h3>
                                    <BoldParagraph firstWord = 'Location:' theRest = {location} />
                                    <BoldParagraph firstWord = 'Suburb:' theRest ={suburb} />
                                    <BoldParagraph firstWord = 'Availability:' theRest = {availability} />
                                </div>
                                <div className='cardButtons'>
                                <IconButton className='crossButton'>
                                    <CancelOutlinedIcon fontSize='large' />
                                </IconButton>
                                {/* <IconButton> */}
                                    <button className='seemore'>Seemore</button>
                                {/* </IconButton> */}
                                <Link to='/pages/confirmation'>
                                    <IconButton className='yesButton'>    
                                        <CheckCircleOutlineIcon fontSize='large'/>
                                    </IconButton>
                                </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
        )
}

export default Matches;