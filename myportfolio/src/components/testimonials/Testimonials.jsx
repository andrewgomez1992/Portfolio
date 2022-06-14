import './testimonials.scss'
import React from 'react'

export default function Testimonials() {



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
            title: "Senior Intelligence Developer @Tinder",
            img: "assets/james1.png",
            icon: "mobilepic.jpeg",
            desc:
                "This is the guy you want working on your project, trust me",
            featured: true,
        },
        {
            id: 3,
            name: "Jonathan Reeves",
            title: "Senior Dev Ops Engineer",
            img: "assets/jon.png",
            icon: "mobilepic.jpeg",
            desc:
                "Time and time again I've been impressed, you found you're guy"
        },
    ]
    return (
        <div className='testimonials' id="testimonials">
            <h1>Testimonials</h1>
            <div className="container">
                {data.map(d => (
                    <div className={d.featured ? "card featured" : "card"}>
                        <div className="top">
                            <img src="assets/curved.png"
                                className='left'
                                alt=""
                            />
                            <img src={d.img} className="user" />
                            <img src={d.icon} className="right" alt="" />
                        </div>
                        <div className="center">
                            {d.desc}
                        </div>
                        <div className="bottom">
                            <h3>{d.name}</h3>
                            <h4>{d.title}</h4>
                        </div>
                    </div>))}
            </div>
        </div>
    )
}
