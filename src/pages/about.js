import React from 'react'
import Card from '../components/Card'
import '../styles/About.css'


function About() {

    const IrinaDes = "Loved working on this project and especially on wireframes with all my love to cats."
    const RyanDes = "Check me out mum, im featured as a developer!"
    const ShravaniDes = "Likes spending time with friends & families, dislikes: broccoli, fizzy drinks."
    const JoeyDes = "Loves computers and cats. Hoping one day there will be some sort of hybrid."

    return (
        <div className ='mainContainer'>
            <div className="about-container">
                <h2 className="heading">Welcome to the ultimate dating app for cats!</h2>
                <p className="text">"Is your furry feline friend hoping to build some fantastically furry friendships? If so, feel free to look
                no further! Call Back Cats gives you and your fur babies the opportunity to make new friends using our cat match technology!
                We will supply you with the description of other users cats within your local area, and you must decide whether that cat is a
                purr-fect match for your cats personality, or if a meet up could be cat-astrophic! If two cats match, you will then be put into
                contact with the matching cat, and supply a list of parks or play areas between your locations. Next step, cat play date!"
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
                    <Card name={"Joey"} description={JoeyDes} image={"mr.whiskers.jpg"}/>
                </div>
                
            </div>
            {window.location.pathname === '/about' && 
                <button className="findMatches" style={{display: 'none'}}></button>
            }
        </div>
    )
}

export default About
