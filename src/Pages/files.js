import React from 'react'
import {Link} from 'react-router-dom'

export default function Files(match) {
    console.log(match.match.url.split('/')[1])
    return (
        
    <div className="subjectPage">
        <div className="half-wall">
            <Link to='/' style={{textDecoration:"none"}}><h5>Go Home</h5></Link>
            <h1>{match.match.params.id}</h1>
            <div className="text-bar-files">
               <p>{match.match.url.split('/')[1]}</p>
            </div>
        </div>


        <div className="file-container"></div>

    </div>
    )
}
