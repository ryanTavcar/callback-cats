import React from 'react'
import Card from '../components/Card'
import '../styles/About.css'

function Profile() {

    const IrinaDes = "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."

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