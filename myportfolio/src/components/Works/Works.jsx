import React, { useState } from 'react'
import './works.scss'

export default function Works() {
    const [currentSlide, setCurrentSlide] = useState(0)
    const data = [
        {
            id: "1",
            icon: './assets/mobilepic.jpeg',
            title: 'MyAdmin',
            desc:
                "Here is some dummy text until I figure out what the fuck to put here.",
            img: "./assets/myadminpic.png"
        },
        {
            id: "2",
            icon: './assets/mobilepic.jpeg',
            title: 'Mobile Application',
            desc:
                "Here is some dummy text until I figure out what the fuck to put here.",
            img: "./assets/myadminpic.png"
        },
        {
            id: "3",
            icon: './assets/mobilepic.jpeg',
            title: 'Branding',
            desc:
                "Here is some dummy text until I figure out what the fuck to put here.",
            img: "./assets/myadminpic.png"
        },
    ]

    const handleClick = (way) => {
        way === "left" ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2) :
            setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0)
    }


    return (
        <div className="works" id="works">
            <div className="slider" style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>

                <div className="container">
                    <div className="item">
                        <div className="left">
                            <div className="leftContainer">
                                <div className="imgContainer">
                                    <img src="assets/curved.png" alt="" />
                                </div>
                                <h2>MyAdmin</h2>
                                <p>Currently working on building components</p>
                                {/* <span class="currently">Currently: </span> */}
                                {/* <span>My Admin</span> */}
                            </div>
                        </div>
                        <div className="right">
                            <img src="assets/myadminpic.png" alt="" />
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="item">
                        <div className="left">
                            <div className="leftContainer">
                                <div className="imgContainer">
                                    <img src="assets/myadminpic.png" alt="" />
                                </div>
                                <h2>AirTravel</h2>
                                <p>Currently working on adding login and accounts page</p>
                                {/* <span class="currently">Currently: </span>
                                <span>Adding Login</span> */}
                            </div>
                        </div>
                        <div className="right">
                            <img src="assets/airtravelpic.png" alt="" />
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="item">
                        <div className="left">
                            <div className="leftContainer">
                                <div className="imgContainer">
                                    <img src="assets/myadminpic.png" alt="" />
                                </div>
                                <h2>Noodle</h2>
                                <p>Currently working on debugging videos page</p>
                                {/* <span class="currently">Currently: </span>
                                <span>Debugging</span> */}
                            </div>
                        </div>
                        <div className="right">
                            <img src="assets/noodlepic.png" alt="" />
                        </div>
                    </div>
                </div>

            </div>
            <img src="assets/arrow.png" className="arrow left" alt="" onClick={() => handleClick("left")} />
            <img src="assets/arrow.png" className="arrow right" alt="" onClick={() => handleClick()} />
            <h1 class='intheworks'>In the works...</h1>
        </div>
    )
}
