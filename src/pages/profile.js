import React from 'react'

const Profile = () => {
    return (
        <div>
            <h1>Profile page</h1>
            <div className="Developer-card" >
                <Card name={"Irina"} description={IrinaDes} image={"bob-marly.jpg"}/>
            </div>
            {window.location.pathname === '/profile' && 
                <button className="findMatches" style={{display: 'none'}}></button>
            }
        </div>
    )
}

export default Profile
