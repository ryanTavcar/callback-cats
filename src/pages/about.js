import React from 'react'
import Card from '../components/Card'
import '../styles/About.css'


function About() {

    const IrinaDes = "Lover of coffee and nice design. And I love Figma. And Cats."
    const IrinaLikes = "Snowy mountains and hot wine"
    const IrinaDislikes = "40C with no aircon"
    const IrLocation = "Leafy Camberwell"
    const IrSuburbs = "Eastern Surburbs"
    const IrAvailability = "Everyday"

    const RyanDes = "Check me out mum, im featured as a developer!"
    const RyanLikes = "Rare steak"
    const RyanDislikes = "Well done steak"
    const RyLocation = "Science Works"
    const RySuburbs = "South Spotswood"
    const RyAvailability = "Everyday"

    const ShravaniDes = ""
    const ShravaniLikes = "spending time with friends & families, dislikes: broccoli, fizzy drin"
    const ShravaniDislikes = ""
    const ShLocation = "Melbourne City"
    const ShSuburbs = ""
    const ShAvailability = ""

    const JoeyDes = "Loves computers and cats. Hoping one day there will be some sort of hybrid."
    const JoeyLikes = "Little kitties, music"
    const JoeyDislikes = "Cauliflower"
    const JoeyLocation = "Packer Park"
    const JoeySuburbs = "Ormond"
    const JoeyAvailability = "When internet is working"


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
                    <Card name={"Irina"} description={IrinaDes} likes={IrinaLikes} dislikes={IrinaDislikes} location={IrLocation} suburbs={IrSuburbs} availability={IrAvailability}image={"bob-marly.jpg"}/>
                </div>
                <div className="Developer-card" >
                    <Card name={"Ryan"} description={RyanDes} likes={RyanLikes} dislikes={RyanDislikes} location={RyLocation} suburbs={RySuburbs} availability={RyAvailability}image={"doge-licking-nose.jpg"}/>
                </div>
                <div className="Developer-card" >
                    <Card name={"Shravani"} description={ShravaniDes} likes={ShravaniLikes} dislikes={ShravaniDislikes} location={ShLocation} suburbs={ShSuburbs} availability={ShAvailability}image={"pretty-kitty.jpg"}/>
                </div>
                <div className="Developer-card" >
                    <Card name={"Joey"} description={JoeyDes} likes={JoeyLikes} dislikes={JoeyDislikes} location={JoeyLocation} suburbs={JoeySuburbs} availability={JoeyAvailability}image={"mr.whiskers.jpg"}/>
                </div>
                
            </div>
            {window.location.pathname === '/about' && 
                <button className="findMatches" style={{display: 'none'}}></button>
            }
        </div>
    )
}

export default About
