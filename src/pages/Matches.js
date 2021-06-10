// import React,{useState,useEffect} from 'react';
// // import TinderCard from 'react-tinder-card';
// import '../styles/Card.css';
// import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
// import CancelOutlinedIcon from '@material-ui/icons/CancelOutlined';
// import IconButton from '@material-ui/core/IconButton';

// const Matches = () => {

//     const catsArray = [
//         {
//             id:1,
//             name: "Mr.Kittycat",
//             likes: 'stroll with owner to park',
//             dislikes: 'Mailman',
//             description: 'This one loves cuddles and scratch',
//             bages: ['sleep', 'music'],
//             url:"https://images.unsplash.com/photo-1602268867508-b058cb9c3e99?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2F0cyUyMGltYWdlc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
//             location: 'Melbourne'
//         },
//         {
//             id:2,
//             name: 'Mr.Bob',
//             likes: 'likes walks around park',
//             dislikes: 'empty bowl',
//             description: 'This one is looking for a match',
//             url:"https://images.unsplash.com/photo-1575479737118-51bc2cff060f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2F0cyUyMGltYWdlc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
//             location: 'Melbourne'
//         },
//         {
//             id:1,
//             name: "Catelene",
//             likes: 'playing and lots of food',
//             dislikes: 'loud music',
//             description: 'Likes gentle soft music',
//             url:"https://images.unsplash.com/photo-1610034793880-4f6f82c35d1b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=722&q=80",
//             location: 'Melbourne'
//         }]
//         const [cats, setCats] = useState((catsArray));
//         let fav =[]

//         return (
//                 <div> 
//                     {cats.map(cat => (
//                         <div className='container'>
//                             <div className = 'cardContainer' key={cat.name}>
//                                 <div className="cardImage">
//                                     <img src={cat.url} alt={cat.name} height='400px' width='100%'/>
//                                     {/* height='200px' width='fit-content' */}
//                                 </div>
//                                 <div>
//                                     <h3>{cat.name}</h3>
//                                     <p>{cat.description}</p>
//                                 </div>
//                                 <div className='cardButtons'>
//                                 <IconButton className='crossButton'>
//                                     <CancelOutlinedIcon fontSize='large' />
//                                 </IconButton>
//                                 {/* <IconButton> */}
//                                     <button className='seemore'>Seemore</button>
//                                 {/* </IconButton> */}
//                                 <IconButton className='yesButton'>    
//                                     <CheckCircleOutlineIcon fontSize='large'/>
//                                 </IconButton>
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//         )
// }

// export default Matches;

import React,{useState,useEffect} from 'react';
// import TinderCard from 'react-tinder-card';
import '../styles/Card.css';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import CancelOutlinedIcon from '@material-ui/icons/CancelOutlined';
import IconButton from '@material-ui/core/IconButton';

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
                                    <h3>{name}</h3>
                                    <p>{description}</p>
                                    <p>Likes: {likes}</p>
                                    <p>Dislikes: {dislikes}</p>
                                    <p>Location: {location}</p>
                                    <p>Suburb: {suburb}</p>
                                    <p>Availability: {availability}</p>
                                </div>
                                <div className='cardButtons'>
                                <IconButton className='crossButton'>
                                    <CancelOutlinedIcon fontSize='large' />
                                </IconButton>
                                {/* <IconButton> */}
                                    <button className='seemore'>Seemore</button>
                                {/* </IconButton> */}
                                <IconButton className='yesButton'>    
                                    <CheckCircleOutlineIcon fontSize='large'/>
                                </IconButton>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
        )
}

export default Matches;