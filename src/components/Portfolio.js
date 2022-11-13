import React from 'react';
import projects from "./projects.js"
import PortfolioItem from './Portfolioitem';

export default function Portfolio({theme}) {
    return (
            <div className={`projects__list-${theme}`}>
                {projects.map(project => (
                    <a className='project__link' href={project.url}>
                    <PortfolioItem
                    key={project.title}
                    img={project.img}
                    header = {project.header}
                    tags={project.tags}
                    />
                    </a>
                ))

                }
            </div>
    )
}