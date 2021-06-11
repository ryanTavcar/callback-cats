import React from 'react';
import '../styles/confirmation.css';


const Confirmation = () => {
    return (
        <div>
            <div className="confirm-container">
                <h2 className="heading">IT'S A MEOW MATCH!</h2>
                <div className="gif">
                    <iframe src="https://giphy.com/embed/xTcnTjYKRBUTqum0KI" border-radius="50%" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/doodle-doodles-gifoodles-xTcnTjYKRBUTqum0KI">via GIPHY</a></p>
                </div>
                <p className="text">We have sent you and your dates all the necessary information that is needed that this purr-fect match date will happen. 
                <br></br>
                <br></br>

                Check your email and enjoy your date!
                </p>

                <p className="text">Thank you for using Callback Cats!
                </p>
            </div>
        </div>
    )
}

export default Confirmation