import './intro.scss'
import React, { useState, useEffect } from "react";

const words = ["Full Stack Developer"]; // SET UP FOR MULTIPLE STRINGS!!

export default function Intro() {

    const [index, setIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [blink, setBlink] = useState(true);
    const [reverse, setReverse] = useState(false);

    const linkedInURL = 'https://www.linkedin.com/in/andrewgomez1992'
    const instagramURL = 'https://www.instagram.com/_drewgomez_/'
    const githubURL = 'https://github.com/andrewgomez1992'

    // typeWriter
    useEffect(() => {
        if (index === words.length - 1 && subIndex === words[index].length) {
            return;
        }

        if (
            subIndex === words[index].length + 1 &&
            index !== words.length - 1 &&
            !reverse
        ) {
            setReverse(true);
            return;
        }

        if (subIndex === 0 && reverse) {
            setReverse(false);
            setIndex((prev) => prev + 1);
            return;
        }

        const timeout = setTimeout(() => {
            setSubIndex((prev) => prev + (reverse ? -1 : 1));
        }, Math.max(reverse ? 75 : subIndex === words[index].length ? 1000 :
            150, parseInt(Math.random() * 250)));

        return () => clearTimeout(timeout);
    }, [subIndex, index, reverse]);

    // blinker
    useEffect(() => {
        const timeout2 = setTimeout(() => {
            setBlink((prev) => !prev);
        }, 700);
        return () => clearTimeout(timeout2);
    }, [blink]);

    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/selfie.png" alt="" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi there, I'm</h2>
                    <h1>Drew Gomez</h1>
                    <h3>
                        {`${words[index].substring(0, subIndex)}${blink ? "|" : ""}`}
                    </h3>
                </div>
                <div className='socialmedia'>
                    <a onClick={() => window.open(linkedInURL, '_blank')} href="#" class="fa fa-linkedin"></a>
                    <a onClick={() => window.open(githubURL, '_blank')} href="#" class="fa fa-github"></a>
                    <a onClick={() => window.open(instagramURL, '_blank')} href="#" class="fa fa-instagram"></a>
                </div>

                <a href="#portfolio">
                    <img class="downarrow" src="assets/down.png" alt="" />
                </a>
            </div>
        </div >
    )
}
