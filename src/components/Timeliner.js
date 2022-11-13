import React from 'react'
import timeLineData from "./timelineData.js";
import Timelineitem from './Timelineitem';

export default function Timeliner(theme) {
    return (
        <>
        <h1 className='timeline-header'> Timeline </h1>
        <div className={`timeline-container-${theme.theme}`}>
            {timeLineData.map( (data) => ( 
                <Timelineitem data={data} theme={theme}/>
            ))}
        </div>
        </>

    )
}