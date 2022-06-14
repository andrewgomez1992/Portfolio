import React, { useState } from 'react'
import './works.scss'

export default function Works() {
    const [currentSlide, setCurrentSlide] = useState(0)
    const data = [
        {
            id: "1",
            icon: './assets/mobilepic.jpeg',
            title: 'Web Design',
            desc:
                "Here is some dummy text until I figure out what the fuck to put here.",
            img: "./assets/sage2.jpeg"
        },
        {
            id: "2",
            icon: './assets/mobilepic.jpeg',
            title: 'Mobile Application',
            desc:
                "Here is some dummy text until I figure out what the fuck to put here.",
            img: "./assets/sage4.png"
        },
        {
            id: "3",
            icon: './assets/mobilepic.jpeg',
            title: 'Branding',
            desc:
                "Here is some dummy text until I figure out what the fuck to put here.",
            img: "./assets/sage3.png"
        },
    ]

    const handleClick = (way) => {
        way === "left" ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2) :
            setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0)
    }


    return (
        <div className="works" id="works">
            <div className="slider" style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>
                {data.map((d) => (
                    <div className="container">
                        <div className="item">
                            <div className="left">
                                <div className="leftContainer">
                                    <div className="imgContainer">
                                        <img src={d.icon} alt="" />
                                    </div>
                                    <h2>{d.title}</h2>
                                    <p>{d.desc}</p>
                                    <span>Projects</span>
                                </div>
                            </div>
                            <div className="right">
                                <img src="assets/sage1.png" alt="" />
                            </div>
                        </div>
                    </div>))}
            </div>
            <img src="assets/arrow.png" className="arrow left" alt="" onClick={() => handleClick("left")} />
            <img src="assets/arrow.png" className="arrow right" alt="" onClick={() => handleClick()} />
            <h1 class='intheworks'>In the works...</h1>
        </div>
    )
}
