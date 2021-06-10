import React,{useState,useEffect} from 'react';
// import TinderCard from 'react-tinder-card';
import './Card.css';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import CancelOutlinedIcon from '@material-ui/icons/CancelOutlined';


const Matches = () => {

    const catsArray = [
        {
            id:1,
            name: "Mr.Kittycat",
            likes: 'stroll with owner to park',
            dislikes: 'Mailman',
            description: 'This one loves cuddles and scratch',
            bages: ['sleep', 'music'],
            url:"https://images.unsplash.com/photo-1602268867508-b058cb9c3e99?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2F0cyUyMGltYWdlc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
            location: 'Melbourne'
        },
        {
            id:2,
            name: 'Mr.Bob',
            likes: 'likes walks around park',
            dislikes: 'empty bowl',
            description: 'This one is looking for a match',
            url:"https://images.unsplash.com/photo-1575479737118-51bc2cff060f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2F0cyUyMGltYWdlc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
            location: 'Melbourne'
        },
        {
            id:1,
            name: "Catelene",
            likes: 'playing and lots of food',
            dislikes: 'loud music',
            description: 'Likes gentle soft music',
            url:"https://images.unsplash.com/photo-1610034793880-4f6f82c35d1b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=722&q=80",
            location: 'Melbourne'
        }]
        const [cats, setCats] = useState((catsArray));
            
        // useEffect(() => {
        //       setPeople([...cats, ])
        // },[]);

        return (
                <div> 
                    {cats.map(cat => (
                        <div className = 'cardContainer' key={cat.name}>
                            <div className="cardImage">
                                <img src={cat.url} alt={cat.name} height='200px' width='fit-content'/>
                            </div>
                            <div>
                                <h3>{cat.name}</h3>
                                <p>{cat.description}</p>
                            </div>
                            <div className='cardButtons'>
                                <CancelOutlinedIcon fontSize='large' />
                                <button>Seemore</button>
                                <CheckCircleOutlineIcon fontSize='large'/>
                            </div>
                            
                        </div>
                    ))}
                </div>
        )
}

export default Matches;
