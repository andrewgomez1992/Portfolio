import './intro.scss'
import React, { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
// import { init } from 'ityped'

export default function Intro() {

    const textRef = useRef();
    // const navigate = useNavigate()

    // useEffect(() => {
    //     console.log(textRef)
    //     init(textRef.current, {
    //         showCursor: true,
    //         backDelay: 1500,
    //         backSpeed: 60,
    //         showCursor: true,
    //         strings: ["Developer", "Designer", "Content Creator"],
    //     })
    // }, [])

    // const linkedIn = () => {
    //     window.open('linkedIn.com/andrewgomez1992')
    // }

    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/selfie.png" alt="" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi There, I'm</h2>
                    <h1>Drew Gomez</h1>
                    <h3>
                        Junior Web Developer <span ref={textRef}></span>
                    </h3>
                </div>
                <div className='socialmedia'>
                    <a href="#" class="fa fa-linkedin"></a>
                    {/* <a href="#" class="fa fa-github"></a> */}
                    {/* <a href="#" class="fa fa-instagram"></a> */}
                </div>
                <a href="#portfolio">
                    <img class="downarrow" src="assets/down.png" alt="" />
                </a>
            </div>
        </div >
    )
}
