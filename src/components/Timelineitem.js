import React from 'react'



export default function Timelineitem ( {data, theme}) {
    return (
    <div className={`timeline-item`}>
        <div className="timeline-item-content">
        <label className='timeline__date'> {data.Date}</label>
        <h1 className='timeline__header'> {data.header}</h1>
        <p className='timeline-description'> {data.description} </p>
        <span className='circle'></span>
        </div>
    </div>

    )
}
