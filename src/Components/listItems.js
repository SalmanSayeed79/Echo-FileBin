import React from 'react'
import '../Pages/styles/list-items.css'

export default function ListItems({title, sub}) {
    return (
        <div id="list-item">
            <h2>{title}</h2>
            <p>{sub}</p>

        </div>
    )
}
