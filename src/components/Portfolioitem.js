import React from 'react';


export default function PortfolioItem({img, header, tags}) {
    return (

    <div className='portfolio__div'>
            <img src={img} alt="" className='project__img'/>
            <h3 className='project__header'> {header}</h3>
            <p className='tag__area'>
                {tags.map( item => (

                    <span
                    key={item}
                    className="project__tag"
                    >
                        {item}
                    </span>
                ))
                    }
            </p>
    </div>

    )
}