import React from 'react'

const Profile = () => {
    return (
        <div>
<<<<<<< HEAD
            <h1> This is profile page</h1>
=======
            <h1>Profile page</h1>
            <div className="Developer-card" >
                <Card name={"Irina"} description={IrinaDes} image={"bob-marly.jpg"}/>
            </div>
            {window.location.pathname === '/profile' && 
                <button className="findMatches" style={{display: 'none'}}></button>
            }
>>>>>>> c47b481a7d0d70488f092f77a1e3a5a294ec7ca5
        </div>
    )
}

export default Profile
