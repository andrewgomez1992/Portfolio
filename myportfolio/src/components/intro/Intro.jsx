import './intro.scss'
import React, { useEffect, useRef } from 'react'
import { init } from 'ityped'

export default function Intro() {

    const textRef = useRef();

    useEffect(() => {
        console.log(textRef)
        init(textRef.current, {
            showCursor: true,
            backDelay: 1500,
            backSpeed: 60,
            showCursor: true,
            strings: ["Developer", "Designer", "Content Creator"],
        })
    }, [])

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
                        Freelance <span ref={textRef}></span>
                    </h3>
                </div>
                <a href="#portfolio">
                    <img src="assets/down.png" alt="" />
                </a>
            </div>
        </div>
    )
}
