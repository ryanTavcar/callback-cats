import React from 'react'
import Card from '../components/Card'
import '../styles/About.css'

function About() {

    const IrinaDes = "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."
    const RyanDes = "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."
    const ShravaniDes = "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."

    return (
        <div className ='mainContainer'>
            <div className="about-container">
                <h2 className="heading">CallBack Cats MEOOOW</h2>
                <p className="text">"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti 
                    quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt 
                    mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, 
                    cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas 
                    assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe 
                    eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, 
                    ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."
                </p>
                <h2 className="heading">Meet The Developers</h2>
            </div>
            <div className="Developer-cards-container">
                <div className="Developer-card" >
                    <Card name={"Irina"} description={IrinaDes} image={"bob-marly.jpg"}/>
                </div>
                <div className="Developer-card" >
                    <Card name={"Ryan"} description={RyanDes} image={"doge-licking-nose.jpg"}/>
                </div>
                <div className="Developer-card" >
                    <Card name={"Shravani"} description={ShravaniDes} image={"pretty-kitty.jpg"}/>
                </div>
                <div className="Developer-card" >
                    <Card name={"Joey"} description={ShravaniDes} image={"mr.whiskers.jpg"}/>
                </div>
                
            </div>
            {window.location.pathname === '/about' && 
                <button className="findMatches" style={{display: 'none'}}></button>
            }
        </div>
    )
}

export default About
