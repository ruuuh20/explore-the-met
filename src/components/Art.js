import React from 'react'

const Art = ({title, image, date}) => {
    return (
        <div>
            
            <h1>{title}</h1>
            <p>{date}</p>
            <img className="art-image" src={image} alt=""></img>
        </div>
    )
}

export default Art