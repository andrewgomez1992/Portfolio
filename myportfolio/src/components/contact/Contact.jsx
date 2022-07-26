import './contact.scss'
import React from "react";

export default function Intro() {

    const linkedInURL = 'https://www.linkedin.com/in/andrewgomez1992'
    const instagramURL = 'https://www.instagram.com/_drewgomez_/'
    const githubURL = 'https://github.com/andrewgomez1992'

    return (
        <div className="aboutintro" id="contact">
            <div className="aboutleft">
                <div className="aboutimg">
                    <img src="assets/IMG_1988.jpg" alt="" />
                </div>
            </div>
            <div className='aboutme'>
                {/* <h1>A little more about myself...</h1> */}
                <p>I am a Full Stack Software Engineer who will be graduating from Bloom Institute of Technology in August 2022.
                    I have spent hundreds of hours with JavaScript, React, HTML, CSS, API's, SQL and more which have thrusted me
                    into a bright introduction of a world I once never knew existed.</p>
            </div>
            <div className='socialmedia'>
                <a onClick={() => window.open(linkedInURL, '_blank')} href="#" class="fa fa-linkedin"></a>
                <a onClick={() => window.open(githubURL, '_blank')} href="#" class="fa fa-github"></a>
                <a onClick={() => window.open(instagramURL, '_blank')} href="#" class="fa fa-instagram"></a>
            </div>
        </div >
    )
}