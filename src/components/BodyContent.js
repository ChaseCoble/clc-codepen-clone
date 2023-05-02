import React from "react";
import previewImage from "../assets/preview.png";

export default function BodyContent(){
    return(
        <div className="page-content-wrapper">
            <div className="spacerx"/>
            <div className="page-content">
                <div className="left-column-wrapper">
                    <div className="text-wrapper">
                        <h1>CodePen is a <span style={{fontWeight: '700', fontSize: '1.2em'}}>social development<br/>environment</span> for front-end designers<br/>and developers. &#128075;</h1>
                        <h2>It's the best place to build and deploy a<br/>website, show of your work, build test cases,<br/>and find inspiration.</h2>
                    </div>
                <div className="content-button-wrapper">
                    <div className="signupfree-btn">Sign Up for Free</div>
                    <div className="learnmore-btn">Learn More</div>
                </div>
            </div>
            <div className="right-column-wrapper">
                <div className="right-column-text-wrapper">
                    <span style={{color: 'white', fontWeight: '100'}}>This is </span>
                    <span style={{color: 'rgb(91, 179, 214)'}}>CodePen Projects</span>
                    <span style={{color: 'white', fontWeight: 'bold'}}>!</span>
                </div>
                <div className="right-column-image-wrapper">
                    <img src={previewImage} alt="Coding Preview"/>
                </div>
            </div>
        </div>
    </div>
    )
}