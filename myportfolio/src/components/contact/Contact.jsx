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
                <p>If you want to lift yourself up,<br /> lift up someone else.</p>
            </div>
        </div >
    )
}