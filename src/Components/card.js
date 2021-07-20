import React from 'react'
import '../Pages/styles/card.css'

export default function Card({title, details}) {
    return (
        <div>
            <div className="card-body">
                <h2>{title}</h2>
                <p>{details}</p>
                <h5>Enter</h5>
            </div>
        </div>
    )
}
