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

    const flixURL = "https://netflix-react-js-tailwind.web.app/"

    return (
        <div className="portfolio" id="portfolio">
            <h1>My Portfolio</h1>
            <p>Here are some of my latest projects! Mostly showing off the front
                end but I do have my backend page coming soon!
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
                <div onClick={() => window.open(flixURL, '_blank')} className="item">
                    <img src="assets/Flixpic.png" alt="" />
                    <h3>Flix. React, Tailwind, and Firebase.</h3>
                </div>
                <div className="item">
                    <img src="assets/airtravelpic.png" alt="" />
                    <h3>"AirTravel, and updated version of airbnb. Still in the works. HTML and CSS"</h3>
                </div>
                <div className="item">
                    <img src="assets/myadminpic.png" alt="" />
                    <h3>"MyAdmin, a user friendly app to help track all of your business needs. Also still in the works. JSX and SASS"</h3>
                </div>
                <div className="item">
                    <img src="assets/noodlepic.png" alt="" />
                    <h3>"Noodle, a simple google re-creation. Currently debugging the videos page. JSX and Tailwind CSS"</h3>
                </div>
            </div>
        </div>
    )
}
