import React from 'react'; 
import "./components.css"

export default function Intro( {theme}) {
    return (
    <section className={`Intro__section-${theme}`}>
        <div className='Intro__div'>
            <h1 className='Intro_name'>
                Ahmed Larbi
            </h1>
            <p className='Intro__description'>
                Full Stack Web Developer & Software Engineer
            </p>
            <p className='Intro__details'>
                I'm a full stack web developer and Professional esports player, all my project are built individually. 
                My projects scope streches from solving real-life problems all the way to fun projects. 
                Planning, Designing and Implementing then rinse and repeat, thats my style of coding which proved to be efficient and time saving to me and my career.
            </p>
        </div>
    </section>
    )
}