import React, {useState} from 'react'
import '../styles/Profile.css';
import Card from '../components/Card'

function Form() {

    const [useValue, setValue] = useState('');
    const [useDescription, setDescription] = useState('');
    const [useLikes, setLikes] = useState('');
    const [useDislikes, setDislikes] = useState('');
    const [useLocation, setLocation] = useState('');
    const [useSuburb, setSuburb] = useState('');
    const [useAvailability, setAvailability] = useState('');

    const [useSaved, setSaved] = useState(false);

    function handleNameChange(event){
        setValue(event.target.value)
    }

    function handleDescriptionChange(event){
        setDescription(event.target.value)
    }

    function handleLikeChange(event){
        setLikes(event.target.value)
    }

    function handleDislikeChange(event){
        setDislikes(event.target.value)
    }

    function handleLocationChange(event){
        setLocation(event.target.value)
    }

    function handleSuburbChange(event){
        setSuburb(event.target.value)
    }

    function handleAvailabiltyChange(event){
        setAvailability(event.target.value)
    }

    // function clearFields() {
    //     setValue('')
    //     setDescription('')
    //     setLikes('')
    //     setDislikes('')
    //     setLocation('')
    //     setSuburb('')
    //     setAvailability('')
    // }


    function handleSubmit(event){
        event.preventDefault();
        console.log(useValue, useDescription, useLikes, useDislikes, useLocation, useSuburb, useAvailability)
        setSaved(true)
        setTimeout( () => {
            setSaved(false)
        },3000)
        
        // clearFields()
    }

    return (
        <div className="profile-container">
            <form className="survey-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label className="form-label">Name</label>
                    <input 
                    type="text"
                    name="name"
                    className="form-control"
                    value={useValue}
                    onChange={handleNameChange}
                    placeholder="Enter name here"
                    required
                    ></input>
                </div>

                <div className="form-group">
                    <p className="form-label">Description</p>
                    <textarea 
                    type="text"
                    name="description"
                    className="form-control"
                    value={useDescription}
                    onChange={handleDescriptionChange}
                    maxLength="240"
                    placeholder="Please enter your description here..."
                    ></textarea> 
                </div>

                <div className="form-group">
                    <label className="form-label">Likes</label>
                    <input 
                    type="text"
                    className="form-control"
                    value={useLikes}
                    onChange={handleLikeChange}
                    placeholder="Enter your likes here..."
                    
                    ></input>
                </div>

                <div className="form-group">
                    <label className="form-label">Dislikes</label>
                    <input 
                    type="text"
                    className="form-control"
                    value={useDislikes}
                    onChange={handleDislikeChange}
                    placeholder="Enter your dislikes here..."
                    
                    ></input>
                </div>

                <div className="form-group">
                    <label className="form-label">Location</label>
                    <input 
                    type="text"
                    className="form-control"
                    value={useLocation}
                    onChange={handleLocationChange}
                    placeholder="Enter location here..."
                    
                    ></input>
                </div>

                <div className="form-group">
                    <label className="form-label">Suburb</label>
                    <input 
                    type="text"
                    className="form-control"
                    value={useSuburb}
                    onChange={handleSuburbChange}
                    placeholder="Enter suburb here..."
                    
                    ></input>
                </div>

                <div className="form-group">
                    <label className="form-label">Availability</label>
                    <input 
                    type="text"
                    className="form-control"
                    value={useAvailability}
                    onChange={handleAvailabiltyChange}
                    placeholder="Enter availability here..."
                    
                    ></input>
                </div>

                <div className="form-group">
                    <button className="submitBtn" type="submit">Submit</button>
                </div>
            
            </form>


            <div className="card-container">
                <div style={{backgroundColor: '#9F5D6D', color: 'white', width: 'auto', borderRadius: '10px', textAlign: 'center'}}>
                    {useSaved && 
                    <h4>Saved Profile!</h4>
                    }
                </div>

                    <Card 
                    name={useValue} 
                    description={useDescription} 
                    likes={useLikes}  
                    dislikes={useDislikes}
                    image={"bob-marly.jpg"}
                    location={useLocation}
                    suburbs={useSuburb}
                    availability={useAvailability}/>
            </div>
        </div>
    )
}

export default Form
