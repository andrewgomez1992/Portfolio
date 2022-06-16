import './testimonials.scss'
import React from 'react'

export default function Testimonials() {

    const jonLinkedInURL = "https://www.linkedin.com/in/jonathan-reeves/"


    const data = [
        {
            id: 1,
            name: "Ari Caluro",
            title: "Teacher",
            img: "assets/arinew.jpeg",
            icon: "mobilepic.jpeg",
            desc:
                "I've never met a person in my life like Drew, he is the type that genuinely cares about everyone."
        },
        {
            id: 2,
            name: "James Reeves",
            title: "Software Engineer @Tinder",
            img: "assets/james1.png",
            icon: "mobilepic.jpeg",
            desc:
                "Nobody has drive like Drew. I fully endorse his coding skills and I know he is going to do amazing in the tech world.",
            featured: true,
        },
        {
            id: 3,
            name: "Jonathan Reeves",
            title: "Senior Software Engineer",
            img: "assets/jon.png",
            icon: "mobilepic.jpeg",
            desc:
                "Time and time again I've been impressed, you found you're guy if you're looking for a developer."
        },
    ]

    const jonsURL = "https://www.linkedin.com/in/jonathan-reeves/"
    const jamesURL = "https://www.linkedin.com/in/james-reeves-a24514b6/"

    return (
        <div className='testimonials' id="testimonials">
            <h1>Testimonials</h1>
            <div className="container">
                {/** "card featured" */}
                <div className="card">
                    <div className="top">
                        <img src="assets/curved.png"
                            className='left'
                            alt=""
                        />
                        <img src="assets/arinew.jpeg" className="user" />
                    </div>
                    <div className="center">
                        "I've never met a person in my life like Drew, he is the type that genuinely cares about everyone."
                    </div>
                    <div className="bottom">
                        <h3>Ari Caluro</h3>
                        <h4>Teacher</h4>
                    </div>
                </div>
                <div className="card">
                    <div className="top">
                        <img src="assets/curved.png"
                            className='left'
                            alt=""
                        />
                        <img onClick={() => window.open(jamesURL, '_blank')} src="assets/james1.png" className="user" />
                    </div>
                    <div className="center">
                        "Nobody has drive like Drew. I fully endorse his coding skills and I know he is going to do amazing in the tech world."
                    </div>
                    <div className="bottom">
                        <h3>James Reeves</h3>
                        <h4>Software Engineer @Tinder</h4>
                    </div>
                </div>
                <div className="card">
                    <div className="top">
                        <img src="assets/curved.png"
                            className='left'
                            alt=""
                        />
                        <img onClick={() => window.open(jonsURL, '_blank')} src="assets/jon.png" className="user" />
                    </div>
                    <div className="center">
                        "Time and time again I've been impressed, you found you're guy if you're looking for a developer."
                    </div>
                    <div className="bottom">
                        <h3>Jonathan Reeves</h3>
                        <h4>Senior Software Engineer</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}
