import './portfolio.scss'
import React, { useEffect, useState } from 'react'
import PortfolioList from '../portfolioList/PortfolioList'
import {
    featuredPortfolio,
    webPortfolio,
    mobilePortfolio,
    designPortfolio,
    contentPortfolio
} from '../../data'

export default function Portfolio() {

    const [selected, setSelected] = useState("featured");
    const [data, setData] = useState([]);

    const list = [
        {
            id: "featured",
            title: "Featured",
        },
        {
            id: "web",
            title: "Web App",
        },
        {
            id: "mobile",
            title: "Mobile App",
        },
        {
            id: "design",
            title: "Design",
        },
        {
            id: "content",
            title: "Content",
        }
    ]

    useEffect(() => {

        switch (selected) {
            case "featured":
                setData(featuredPortfolio)
                break;
            case "web":
                setData(webPortfolio)
                break;
            case "mobile":
                setData(mobilePortfolio)
                break;
            case "design":
                setData(designPortfolio)
                break;
            case "content":
                setData(contentPortfolio)
                break;
            default:
                setData(featuredPortfolio)
        }

    }, [selected])

    const flixURL = "https://flix-react-js-tailwind.vercel.app/"
    const airTravelURL = "https://airtravel-indol.vercel.app/#top"
    const myAdminURL = "https://myadmin-nine.vercel.app/"
    const noodleURL = "https://noodle-eta.vercel.app/"
    const devSpaceURL = "https://dev-space-nine.vercel.app/"

    return (
        <div className="portfolio" id="portfolio">
            <h1>My Portfolio</h1>
            <p>Some of my latest projects. Mostly showing off the front
                end but I do have my backend page coming soon! I know they are not
                finished but I promise I'm somewhere typing away working on it. Feel
                free to click on the first project and check it out!
            </p>
            <ul>
                {/* {
                    list.map((item) => (
                        <PortfolioList
                            title={item.title}
                            active={selected === item.id}
                            setSelected={setSelected}
                            id={item.id}
                        />
                    ))} */}
            </ul>
            <div className='container'>
                <div onClick={() => window.open(devSpaceURL, '_blank')} className="item">
                    <img src="assets/devSpacepic.png" alt="" />
                    <h3>devSpace. HTML, CSS, JS :).</h3>
                </div>
                <div onClick={() => window.open(flixURL, '_blank')} className="item">
                    <img src="assets/Flixpic.png" alt="" />
                    <h3>Flix. React, Tailwind, and Firebase.</h3>
                </div>
                <div onClick={() => window.open(airTravelURL, '_blank')} className="item">
                    <img src="assets/airtravelpic.png" alt="" />
                    <h3>AirTravel, and updated version of airbnb. Still in the works. HTML and CSS</h3>
                </div>
                <div onClick={() => window.open(myAdminURL, '_blank')} className="item">
                    <img src="assets/myadminpic.png" alt="" />
                    <h3>MyAdmin, a user friendly app to help track all of your business needs. Also still in the works. JSX and SASS</h3>
                </div>
                <div onClick={() => window.open(noodleURL, '_blank')} className="item">
                    <img src="assets/noodlepic.png" alt="" />
                    <h3>Noodle, a simple google re-creation. JSX and Tailwind CSS</h3>
                </div>
            </div>
        </div>
    )
}
