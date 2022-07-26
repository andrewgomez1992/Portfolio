import './contact.scss'
import React from "react";

export default function Intro() {

    return (
        <div className="aboutintro" id="contact">
            <div className="aboutleft">
                <div className="aboutimg">
                    <img src="assets/IMG_1988.jpg" alt="" />
                </div>
            </div>
            <div className='aboutme'>
                {/* <h1>A little more about myself...</h1> */}
                <p>I am a Full Stack Software Engineer who will be graduating from Bloom Institute of Technology in August 2022. I have spent hundreds of hours with JavaScript, React, HTML, CSS, API's, SQL and more which have thrusted me into a bright introduction of a world I once never knew existed.</p>
            </div>
        </div >
    )
}